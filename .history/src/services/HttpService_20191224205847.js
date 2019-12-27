const axios = require('axios');

// Use Socket io - import
import io from 'socket.io-client';
const socket = io(SOCKET.BASE_URL);

// import constants
import { API } from '../constants/Constants';
import { SOCKET, SIO_TICKET_SETTINGS } from '../../constants/Constants';

// const BASE_URL = 'http://10.10.14.116:715/api/v1/ticketsettings?sio_channel=';
const GET_TICKET_SETTING = '/ticketsettings?sio_channel=';

const SocketService = {
  socketConnect() {
    // Use Socket io - connect Socket
    socket.on('connect', () => {
      console.log('Connected socket');
      // this.setState({ socketConnected: true });
    });
  },

  socketConnect() {
    socket.on('disconnect', () => {
      console.log('Disconnected socket');
      // this.setState({ socketConnected: false });
    });
  }
  
}
export default SocketService;

/* ** ** */

const TicketSettingsHttpService = {
  getDatasTicketSettings() {
    return axios.get(API.BASE_URL + GET_TICKET_SETTING + SIO_TICKET_SETTINGS);
  },

  initSocketTicketSetting = () => {
		socket.on(SIO_TICKET_SETTINGS, (response) => {
      return this.onSocketGetTicketSettings(response);
    });
		// this.onSocketConnected('ticket-setting');
  },
  
  onSocketGetTicketSettings(response) {
		if (response && response.status === 200) {
      console.log(response);
    };
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
export default TicketSettingsHttpService;
