import axios from "axios";

const APIKEY = "r2qcxgswnxb39z6qg3nmkru5";
const SearchURL = "https://api.walmartlabs.com/v1/search?apiKey=";
const TrendingURL = "https://api.walmartlabs.com/v1/trends?apiKey=";

const ProxyURL = "https://cors-anywhere.herokuapp.com/";


// Export an object that has methods for API calls
export default {
  searchWalmart: function(query) {
    return axios.get(`${ProxyURL + SearchURL + APIKEY}&query=${query}`);
  },

  trendingWalmart: function() {
    return axios.get(`${ProxyURL + TrendingURL + APIKEY}`)
  }
};
