// Define all controllers for the server

const CheckSession = require("./services/checkSession");
const CONSTANTS = require("./constants");

module.exports.authMiddleware = function(req, res, next) {
  // NOTE: Middleware responsible to check use session and return user data if found
  if (!CONSTANTS.FAKE_CHECK_SESSION) {
    console.log("run ==> authMiddleware");
    let hostname = req.hostname;
    let hostname_part = hostname.split(".");
    let accountAlias=
      CONSTANTS.USE_CLIENT_ALIAS === true
        ? hostname_part[0]
        : CONSTANTS.DEV_ALIAS;

    if (req.cookies && req.cookies[CONSTANTS.SESSION_SERVICE.KEY]) {
      console.log("cookie " + req.cookies[CONSTANTS.SESSION_SERVICE.KEY]);
      new CheckSession(
        CONSTANTS.SESSION_SERVICE.KEY,
        req.cookies[CONSTANTS.SESSION_SERVICE.KEY],
        accountAlias
      )
        .execute()
        .then(function(response_check_apisid) {
          if (
            response_check_apisid &&
            response_check_apisid.status === 200 &&
            response_check_apisid.data
          ) {
            // session is ok
            // pass authentication
            next();
          } else if (
            response_check_apisid &&
            response_check_apisid.status === 403
          ) {
            res.render("error404");
          } else if (
            response_check_apisid &&
            response_check_apisid.status === 401
          ) {
            res.render("error404");
          } else if (
            response_check_apisid &&
            response_check_apisid.status === 500
          ) {
            res.render("error500");
          } else {
            console.log("cannot get session");
            redirectToAccountSession(req, res, accountAlias);
          }
        })
        .catch(function(errc) {
          console.log("Error checking session");
          console.log(errc);
          res.render("error500");
        });
    } else {
      console.log("No cookie found");
      redirectToAccountSession(req, res, accountAlias);
    }
  } else {
    console.log("FAKE_CHECK_SESSION");
    next();
  }
};

const redirectToAccountSession = function(req, res, alias) {
  const currentUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const redirectUrl = `${CONSTANTS.ACCOUNT_SERVICE.PROTOCOL}${alias}.${CONSTANTS.ACCOUNT_SERVICE.BASE_URL}${CONSTANTS.ACCOUNT_SERVICE.LOGIN}?${CONSTANTS.ACCOUNT_SERVICE.CONTINUE}=${currentUrl}`;
  console.log("redirecting to", redirectUrl);
  res.redirect(redirectUrl);
};
