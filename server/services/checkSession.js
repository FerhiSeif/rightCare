const axios = require("axios");
const CONSTANTS = require("../constants");

module.exports = class {
  /**
   * @constructor
   * @param token: Token session for user connected
   * @param cookie_type: cookie type to check
   * @param alias: Account alias
   */
  constructor(cookie_type, token, alias) {
    this.cookie_type = cookie_type;
    this.token = token;
    this.alias = alias;
    axios.defaults.baseURL = CONSTANTS.SESSION_SERVICE.BASE_URL;
    axios.defaults.headers["Content-Type"] = "application/json";
  }

  /**
   * Execute request to check user session
   * @function
   */
  execute() {
    let that = this;
    return new Promise(function(resolve, reject) {
      var params = {
        params: {
          sid: that.token,
          app_id: CONSTANTS.APP_ID,
          alias: that.alias
        }
      };
      console.log("request check session params = ", params);
      axios
        .get(CONSTANTS.SESSION_SERVICE.CHECK, params)
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          console.log("error request check session ", error);
          reject(error);
        });
    });
  }
};
