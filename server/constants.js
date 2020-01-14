const ENV_PROD = false; // Whatever we are on production environment or not
const PROTOCOL = "https"; // Account protocol
const USE_CLIENT_ALIAS = false; // if true, use client domain name ex: [orange].rightflow.rightcomtech.com
const IS_LOCAL_DEV = true; // if true, that means we are on localhost environment
const DECODER_PROTOCOL = "http"; // Protocol for decoder (external service)  who is responsible to check user connected session
const FAKE_CHECK_SESSION = false; // Whatever we are use fake session or not

module.exports = {
  PORTS: {
    PROD: 9000, // app deploy port in production
    DEV: 9000  // app deploy port in development
  },
  USE_CLIENT_ALIAS,
  FAKE_CHECK_SESSION,
  IS_LOCAL_DEV,
  ENV_PROD,
  PROTOCOL,
  DEV_ALIAS: "rightcom",
  APP_ID: "rightcare",
  RFLOW_DOMAIN_NAME:
    ENV_PROD === true ? "rightcare.rightcom.co" : "rightcare.rightcomtech.com",
  LOGIN_BASE_URL:
    ENV_PROD === true
      ? "account.rightcom.co/login"
      : "account.rightcomtech.com/login",
  URL:
    ENV_PROD === true ? "rightcare.rightcom.co" : "rightcare.rightcomtech.com",
  APP_URLS: {
    REMIND_COMPANY_ACCOUNT:
      ENV_PROD === true
        ? `${PROTOCOL}://account.rightcom.co/serviceLogin/remindcompany`
        : `${PROTOCOL}://account.rightcomtech.com/serviceLogin/remindcompany`
  },
  ACCOUNT_SERVICE: {
    PROTOCOL: `${PROTOCOL}://`,
    BASE_URL:
      ENV_PROD === true ? "account.rightcom.co" : "account.rightcomtech.com",
    LOGIN: "/login",
    LOGOUT: "/logout",
    CONTINUE: "continue"
  },
  SESSION_SERVICE: {
    BASE_URL:
      ENV_PROD === true
        ? `${DECODER_PROTOCOL}://xp_account_client_api:305/api`
        : IS_LOCAL_DEV === true
        ? `${DECODER_PROTOCOL}://10.10.14.116:513/api`
        : `${DECODER_PROTOCOL}://xp_account_client_api:305/api`,
    CHECK: "/decoder",
    KEY: "APISID"
  },
  LANGUAGES: {
    SUPPORTED: [
      {
        name: "Français",
        code: "fr",
        dir: "ltr",
        flag: ""
      },
      {
        name: "English",
        code: "en",
        dir: "ltr",
        flag: ""
      },
      {
        name: "Arab",
        code: "ar",
        dir: "rtl",
        flag: ""
      }
    ],
    DEFAULT: {
      name: "English",
      code: "en",
      dir: "ltr",
      flag: ""
    }
  }
};
