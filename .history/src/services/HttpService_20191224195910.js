import { API } from '../constants/Constants';

const axios = require('axios');

// const BASE_URL = 'http://10.10.14.116:715/api/v1/ticketsettings?sio_channel=';
const GET_TICKET_SETTING = '/ticketsettings?sio_channel=';

const HttpService = {
  getListPopularSurvey(paramTicketSetting) {
    return axios.get(API.BASE_URL + GET_TICKET_SETTING + paramTicketSetting);
  },
};
export default HttpService;
