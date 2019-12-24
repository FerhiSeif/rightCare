// Use Socket io - import
import io from 'socket.io-client';

// import constants
import { API, SOCKET, SIO_TICKET_SETTINGS } from '../constants/Constants';

const axios = require('axios');

const socket = io(SOCKET.BASE_URL);

// const BASE_URL = 'http://10.10.14.116:715/api/v1/ticketsettings?sio_channel=';
const GET_TICKET_SETTING = '/ticketsettings?sio_channel=';

export const SocketService = {
  socketConnect() {
    // Use Socket io - connect Socket
    socket.on('connect', (response) => {
      console.log('Connected socket');
      return response;

      // this.setState({ socketConnected: true });
    });
  },
  socketDisconnect() {
    socket.on('disconnect', (response) => {
      console.log('Disconnected socket');
      return response;

      // this.setState({ socketConnected: false });
    });
  },

};

/* ** ** */

export const TicketSettingsHttpService = {
  getDatasTicketSettings() {
    return axios.get(API.BASE_URL + GET_TICKET_SETTING + SIO_TICKET_SETTINGS);
  },

  initSocketTicketSettings() {
    // socket.on(SIO_TICKET_SETTINGS, (response) => this.onSocketGetTicketSettings(response));

    socket.on(SIO_TICKET_SETTINGS, (response) => response);
    // this.onSocketConnected('ticket-setting');
  },

  // eslint-disable-next-line consistent-return
  onSocketGetTicketSettings(response) {
    if (response && response.status === 200) {
      console.log('onSocketGetTicketSettings : ', response);
      return response;
    }
  },

  onSocketConnected(params) {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.socketConnected) {
      this.setState({ socketConnected: true });
      if (params === 'ticket-setting') {
        this.saveAsDraftNow();
      } else {
        this.fetchPublishLink();
      }
    }
  },

};
