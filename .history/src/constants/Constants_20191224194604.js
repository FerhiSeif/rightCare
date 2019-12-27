/* eslint-disable no-nested-ternary */
export const APP_ENV = 'LOCAL'; // DEV, PROD, LOCAL
export const DEBUG = true;
export const TIMEOUT_HTTP_REQUEST = 3000;
export const TIMEOUT_SOCKET_RESPONSE = 5000;

export const PROTOCOL = 'http';
export const RC_API_BASE_DOMAIN_PROD = 'betarsapi.rightcom.co';
export const RC_API_BASE_DOMAIN_DEV = '10.10.14.116:715';
export const RC_API_BASE_DOMAIN_LOCAL = 'localhost:4001';
export const RC_API_SERVICE_PATH_PROD = '/api/v1';
export const RC_API_SERVICE_PATH_DEV = '/api/v1';
export const RC_API_SERVICE_PATH_LOCAL = '/api/v1';
export const RC_SOCKET_BASE_DOMAIN_PROD = 'betarsapi-socket.rightcom.co';
export const RC_SOCKET_BASE_DOMAIN_DEV = '10.10.14.116:714';
export const RC_SOCKET_BASE_DOMAIN_LOCAL = 'localhost:4001';
export const RC_SOCKET_SERVICE_PATH_PROD = '/myrc';
export const RC_SOCKET_SERVICE_PATH_DEV = '/myrc';
export const RC_SOCKET_SERVICE_PATH_LOCAL = '/myrc';

export const NAVIGATION = {
  HOME: '/',
  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  APP: '/app',
  DASHBOARD: '/app/dashboard',
  APP_ONBOARDING: '/app/onboarding',
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

export const API = {
  BASE_URL: APP_ENV === 'DEV' ? `${PROTOCOL}://${RC_API_BASE_DOMAIN_DEV}${RC_API_SERVICE_PATH_DEV}`
    : APP_ENV === 'PROD' ? `${PROTOCOL}://${RC_API_BASE_DOMAIN_PROD}${RC_API_SERVICE_PATH_PROD}`
    : APP_ENV === 'LOCAL' ? `${PROTOCOL}://${RC_API_BASE_DOMAIN_LOCAL}${RC_API_SERVICE_PATH_LOCAL}`
    : '',
  SIGNIN: '/signin',
  CHECK_SESSION: '/decoder',
};

export const SOCKET = {
  BASE_URL: APP_ENV === 'DEV' ? `${RC_SOCKET_BASE_DOMAIN_DEV}${RC_SOCKET_SERVICE_PATH_DEV}`
    : APP_ENV === 'PROD' ? `${RC_SOCKET_BASE_DOMAIN_PROD}${RC_SOCKET_SERVICE_PATH_PROD}`
    : APP_ENV === 'LOCAL' ? `${RC_SOCKET_BASE_DOMAIN_LOCAL}${RC_SOCKET_SERVICE_PATH_LOCAL}`
    : '',
};
