// Use Socket io - import
import io from 'socket.io-client';
// import { useContext } from 'react';
// import { SharedDataContext } from '../components/app/UseContext';

// import constants
import { API, SOCKET, SIO_TICKET_SETTINGS } from '../constants/Constants';

const axios = require('axios');

const socket = io(SOCKET.BASE_URL);

const GET_TICKET_SETTING = '/ticketsettings?sio_channel=';
const CREATE_CUTOMERFILED_TICKET_SETTING = '/ticketsettings/add-customer-info';
const UPDATE_SWITCH_TICKET_SETTING = '/ticketsettings';
// const ACTIVE_TICKET_SETTING = '/ticketsettings';
const CREATE_TICKET = '/ticket';

// const { sharedData, setSharedData } = useContext(SharedDataContext);

export const SocketService = {
  socketConnect() {
    // Use Socket io - connect Socket
    socket.on('connect', () => {
      console.log('Connected socket');
    });
  },
  socketDisconnect() {
    socket.on('disconnect', () => {
      console.log('Disconnected socket');
    });
  },

};

/* ** ** */

export const TicketSettingsHttpService = {
  getDatasTicketSettings() {
    return axios.get(API.BASE_URL + GET_TICKET_SETTING + SIO_TICKET_SETTINGS);
  },

  createCustomerFiledTicketSettings(params) {
    const queryQarams = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return axios.post(API.BASE_URL + CREATE_CUTOMERFILED_TICKET_SETTING, params, queryQarams);
  },

  updateSwitchTicketSettings(params) {
    const queryQarams = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return axios.post(API.BASE_URL + UPDATE_SWITCH_TICKET_SETTING, params, queryQarams);
  },
};

export const CreateTicketHttpService = {
  createTicket(params) {
    const queryQarams = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return axios.post(API.BASE_URL + CREATE_TICKET, params, queryQarams);
  },
};
