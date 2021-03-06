/* Importation */
import uuid1 from 'uuid/v1';

/* eslint-disable no-nested-ternary */
export const APP_ENV = 'DEV'; // DEV, PROD, LOCAL
export const DEBUG = true;
export const TIMEOUT_HTTP_REQUEST = 3000;
export const TIMEOUT_SOCKET_RESPONSE = 5000;

export const PROTOCOL = 'https';
// 10.10.14.116:715 , betarcapi.right-com.com
export const RC_API_BASE_DOMAIN_PROD = 'betarcapi.right-com.com';
export const RC_API_BASE_DOMAIN_DEV = 'betarcapi.right-com.com';
export const RC_API_BASE_DOMAIN_LOCAL = '10.10.14.116:715';
export const RC_API_SERVICE_PATH = '/api/v1';
// 10.10.14.116:714 , betarcapi-socket.right-com.com
export const RC_SOCKET_BASE_DOMAIN_PROD = 'betarcapi-socket.right-com.com';
export const RC_SOCKET_BASE_DOMAIN_DEV = 'betarcapi-socket.right-com.com';
export const RC_SOCKET_BASE_DOMAIN_LOCAL = '10.10.14.116:714';
export const RC_SOCKET_SERVICE_PATH = '/myrc';

export const API = {
  BASE_URL: APP_ENV === 'DEV' ? `${PROTOCOL}://${RC_API_BASE_DOMAIN_DEV}${RC_API_SERVICE_PATH}`
    : APP_ENV === 'PROD' ? `${PROTOCOL}://${RC_API_BASE_DOMAIN_PROD}${RC_API_SERVICE_PATH}`
      : APP_ENV === 'LOCAL' ? `${PROTOCOL}://${RC_API_BASE_DOMAIN_LOCAL}${RC_API_SERVICE_PATH}`
        : '',
  // SIGNIN: '/signin',
  // CHECK_SESSION: '/decoder',
};

export const SOCKET = {
  BASE_URL: APP_ENV === 'DEV' ? `${PROTOCOL}://${RC_SOCKET_BASE_DOMAIN_DEV}${RC_SOCKET_SERVICE_PATH}`
    : APP_ENV === 'PROD' ? `${PROTOCOL}://${RC_SOCKET_BASE_DOMAIN_PROD}${RC_SOCKET_SERVICE_PATH}`
      : APP_ENV === 'LOCAL' ? `${PROTOCOL}://${RC_SOCKET_BASE_DOMAIN_LOCAL}${RC_SOCKET_SERVICE_PATH}`
        : '',
};

export const NAVIGATION = {
  HOME: '/',
  LOGIN: '/login',
  ONBOARDING: '/onboard',
  DASHBOARD: '/dashboard',

  APP: '/app',
  APP_DASHBOARD: '/app/dashboard',
  APP_ONBOARDING: '/app/onboard',

  NOT_FOUND: '/404',
  FORBIDDEN: '/403',
  INTERNAL_ERROR: '/500',
};

export const CONSTANTS_LANG = {
  LOCAL_STORAGE_LANG_KEY: 'RC_LANG_KEY',
  LANGUAGES: [
    {
      key: 'en',
      name: 'english',
    },
    {
      key: 'fr',
      name: 'french',
    },
  ],
};

export const REGEX_EMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[A-Z]{2,4}$/i;
export const REGEX_TEXT = /^\s*[a-zA-Z0-9._,\s]+\s*$/i;
export const REGEX_NUMBER = /^[0-9]{1,10}$/i;
export const REGEX_DATE = /^\d{1,2}\/\d{1,2}\/\d{4}$/i;

export const SIO_TICKET_SETTINGS = `ticket_setting_${uuid1()}`;
export const SIO_CREATE_CUSTOMER_TICKET_SETTINGS = `create_customer_ticket_setting_${uuid1()}`;
export const SIO_UPDATE_SWITCH_TICKET_SETTINGS = `update_switch_ticket_setting_${uuid1()}`;
export const SIO_CREATE_TICKET = `create_ticket_${uuid1()}`;
