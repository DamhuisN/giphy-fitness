import {createStore} from "vuex"

import {getGiphiesMutation} from './vuex/mutations/giphies';
import {getGiphies, getGiphiesRequest, getGiphiesSucces, getGiphiesFailure} from './vuex/actions/giphies';

const store = createStore({
  state: {
    name: "Vue",
    giphies: []
  },
  mutations: {
    getGiphies: getGiphiesMutation,
  },
  actions: {
    getGiphies,
    getGiphiesRequest,
    getGiphiesSucces,
    getGiphiesFailure
  }
})

export default store