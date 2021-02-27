import {createStore} from "vuex"

import {getGiphiesMutation} from './vuex/mutations/giphies';
import {getGiphies, getGiphiesRequest, getGiphiesSuccess, getGiphiesFailure} from './vuex/actions/giphies';

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
    getGiphiesSuccess,
    getGiphiesFailure
  }
})

export default store