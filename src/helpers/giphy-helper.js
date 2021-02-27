import axios from 'axios';
import CONSTANTS from '@/constants';

// The base giphy API
const baseUrl = 'https://api.giphy.com';

/**
 * Fetch a paginated selection of giphies from the giphy API with a subject, offset and limit
 * Parameters use fallback values to improve stability
 * @param {String} subject - The subject to get giphies about
 * @param {String} offset - The offset of paginated giphies
 * @param {String} limit - The limit of giphies to get
 */
export const fetchGiphies = (subject = '', offset = 0, limit = 20) => {
    return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrl}/v1/gifs/search?api_key=${CONSTANTS.GIPHY_API_KEY}&q=${subject}&limit=${limit}&offset=${offset}&rating=g&lang=en`)
          .then(result => {
            resolve({data: result.data});
          })
          .catch(error => {
            reject(error);
          });
      });
}

export default {
    fetchGiphies
};