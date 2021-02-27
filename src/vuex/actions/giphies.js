import {fetchGiphies} from '@/helpers/giphy-helper';

export const GIPHIES_REQUEST = 'GIPHIES_REQUEST';
export const GIPHIES_SUCCESS = 'GIPHIES_SUCCESS';
export const GIPHIES_FAILURE = 'GIPHIES_FAILURE';

/**
 * getGiphiesRequest fills the state with the giphy request to indicate we are fetching giphies
 * @param {Object} state - The vuex state that we will manipulate
 */
export const getGiphiesRequest = state => {
  const data = {
    type: GIPHIES_REQUEST
  };
  state.commit('getGiphies', data);
};

/**
 * GetGiphiesucces fills the state with the giphy payload when successful
 * @param {Object} state - The vuex state that we will manipulate
 * @param {error} payload - The payload to place in the state
 */
export const getGiphiesSuccess = (state, payload) => {
  const data = {
    type: GIPHIES_SUCCESS,
    payload: payload.data
  };
  state.commit('getGiphies', data);
};

/**
 * getGiphiesFailure sets a failure object to the vuex state if the call fails for any reason
 * @param {Object} state - The vuex state that we will manipulate
 * @param {error} error - The error to place in the state
 */
export const getGiphiesFailure = (state, error) => {
  const data = {
    type: GIPHIES_FAILURE,
    error
  };
  state.commit('getGiphies', data);
};

/**
 * Fetch Giphies with a subject, offset and limit, parameters destructured, using the giphyhelper
 * @param {Object} state - The vuex state that we will manipulate
 * @param {Object} parameters - The parameters object with the params for the giphies
 * @param {String} parameters.subject - The subject to get giphies about
 * @param {String} parameters.offset - The offset of paginated giphies
 * @param {String} parameters.limit - The limit of giphies to get
 */
export const getGiphies = (state, {subject, offset, limit}) => {
  state.dispatch('getGiphiesRequest');

  return fetchGiphies(subject, offset, limit)
      .then(result => {
        state.dispatch('getGiphiesSuccess', {data: result.data});
      })
      .catch(error => {
        state.dispatch('getGiphiesFailure', error);
      });
};