// Use Socket io - import
import io from 'socket.io-client';
// import { useContext } from 'react';
// import { SharedDataContext } from '../components/app/UseContext';

// import constants
import { API, SOCKET, SIO_TICKET_SETTINGS } from '../constants/Constants';

const axios = require('axios');

const socket = io(SOCKET.BASE_URL);

// const BASE_URL = 'http://10.10.14.116:715/api/v1/ticketsettings?sio_channel=';
const GET_TICKET_SETTING = '/ticketsettings?sio_channel=';

// const { sharedData, setSharedData } = useContext(SharedDataContext);

export const SocketService = {
  socketConnect() {
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

};
