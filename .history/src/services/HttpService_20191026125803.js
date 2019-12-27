import { API } from '../constants/Constants'

const axios = require('axios');

const HttpService = {

    getListPopularSurvey: function (params) {
        return axios.get(API.BASE_URL + API.GET_LIST_POPULAR_SURVEY, {params: params});
    },

    setNewSurveyAsDraft: function (id, params) {
        if (id) {
          return axios.post(API.BASE_URL + API.SAVE_SURVEY_AS_DRAFT+ '?id=' +id, params);
        } else {
          return axios.post(API.BASE_URL + API.SAVE_SURVEY_AS_DRAFT, params);
        }
    },

    getPublishLink: function (id, params) {
      const query_params = {
        headers: {
            'Content-Type': 'application/json',
          },
      }
      return axios.put(API.BASE_URL + API.GET_SURVEY_PUBLISH_LINK + '/' + id+ '?sio_channel='+params, query_params);
    },

    createSurvey: function (params) {
      const query_params = {
        headers: {
            'Content-Type': 'application/json',
          },
      }
      return axios.post(API.BASE_URL + API.CREATE_SURVEY, params, query_params);
    }
}
export default HttpService;
