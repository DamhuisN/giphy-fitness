<template>
  <h1>Fit at home inspiration</h1>
  <div class="grid">
       <img v-for="item in giphies.data" :key="item.images.original.url" :src="item.images.original.url" :alt="item.title">
       <div v-if="giphies.isLoading" class="loader">Loading...</div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HomePage',
  data() {
    return {
      offset: 0,
      limit: 20,
      scrollOffset: 700
    }
  },
  /**
  * The created lifecycle hook is called on load of the component. 
  * There we initiate the infinite scroll and fetch the initial set of giphies
  */
  created() {
    this.initInfiniteScroll();
    this.fetchGiphies();
  },
  /**
  * In the computed values we link the giphies state from the store to a member variable of the component
  * Vuex allows you to do this automated using the ...mapState method to handle the mapping for you
  * For this we use the images.original.url, see https://developers.giphy.com/explorer for reference
  */
  computed: {
      ...mapState({
          giphies: state => {
            return  state.giphies;
          },
      })
  },
  methods: {
    /**
    * Fetch a collection of giphies with the passed offset or the configured offset
    * @param {Number} offset
    */
    fetchGiphies(offset) {
      this.offset = offset || this.offset;
      this.$store.dispatch('getGiphies', {subject: 'fitness', offset: this.offset, limit: this.limit});
    },
    /**
    * Handle the infinite scroll logic by adding an event listener. If we get within the threshold of the bottom of the page (the scrollOffset, which is 2 images high)
    * We fetch the next set of giphies, while blocking any further requests with the isLoading property
    */
    initInfiniteScroll() {
      document.addEventListener('scroll', () => {
        const maxScroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        const bottomOfWindow = (maxScroll + window.innerHeight) >= (document.documentElement.offsetHeight - this.scrollOffset);

        if (bottomOfWindow && !this.giphies.isLoading) {
          this.fetchGiphies(this.offset + this.limit);
        }
      });
    }
  }
}
</script>
<style>
h1 {
    font-family: helvetica;
    padding: 32px;
    background: #DDFCC7;
}
.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.grid img {
  height: 350px;
  width: 25%;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load 1.8s infinite ease-in-out;
  animation: load 1.8s infinite ease-in-out;
}
.loader {
  color: #000000;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}

@-webkit-keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

@media(max-width: 1024px) {
  .grid img {
    width: 50%;
  }
}

@media(max-width: 768px) {
  .grid img {
    width: 100%;
  }
}
</style>