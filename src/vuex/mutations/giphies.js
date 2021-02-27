import {GIPHIES_REQUEST, GIPHIES_SUCCESS, GIPHIES_FAILURE} from '../../vuex/actions/giphies';

/**
 * This is the mutator object for the getGiphies state, indicating how the vuex data store will be mutated based on passed data
 * If the request is successful we concat the data instead of replacing it so we can show infinite giphies
 * @param {Object} state - The vuex state that we will manipulate
 * @param {Object} context - The passed data from the vuex action
 */
export const getGiphiesMutation = (state, context) => {
  if (!state) {
    state = {
      isLoading: false
    };
  }

  // Because we use pagination, we use the existing data or an empty array that we will concat in
  const existingData = state.giphies.data || [];

  switch (context.type) {
    case GIPHIES_REQUEST:
      state.giphies = {
        ...state.giphies,
        isLoading: true
      };
      break;
    case GIPHIES_SUCCESS:
      state.giphies = {
        ...state.giphies,
        data: existingData.concat(context.payload.data),
        isLoading: false
      };
      break;
    case GIPHIES_FAILURE:
      state.giphies = {
        ...state.giphies,
        isLoading: false,
        error: context.error.code
      };
      break;
    default:
      break;
  }
};
