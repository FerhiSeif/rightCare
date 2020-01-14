// Define and handle all routes related to api
const express = require("express");
const router = express.Router();
const CONSTANTS = require("../constants");
const fakeService = require("./fakeService");
const helpers = require("./helpers");
const CheckSession = require("./checkSession");

// route to check current session
router.get("/api/decoder", (req, res, next) => {
  console.log("run ==> decoder");
  if (!CONSTANTS.FAKE_CHECK_SESSION) {
    let hostname = req.hostname;
    let hostname_part = hostname.split(".");
    let accountAlias =
      CONSTANTS.USE_CLIENT_ALIAS === true
        ? hostname_part[0]
        : CONSTANTS.DEV_ALIAS;
    if (req.cookies && req.cookies[CONSTANTS.SESSION_SERVICE.KEY]) {
      console.log("decode " + req.cookies[CONSTANTS.SESSION_SERVICE.KEY]);
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
            console.log("response_check_apisid = ", response_check_apisid);
            res
              .status(200)
              .send(helpers.buildUserSession(response_check_apisid));
          } else if (
            response_check_apisid &&
            (response_check_apisid.status === 403 ||
              response_check_apisid.status === 401)
          ) {
            res.status(200).send({
              status: response_check_apisid.status,
              data: null,
              message: "Session not found"
            });
          } else {
            res.status(200).send({
              status: 500,
              data: null,
              message: "Internal server error"
            });
          }
        })
        .catch(function(errc) {
          res.status(200).send({
            status: 500,
            data: null,
            message: "Internal server error"
          });
        });
    } else {
      console.log("No cookie found");
      res.status(200).send({
        status: 404,
        data: null,
        message: "No session found"
      });
    }
  } else {
    console.log("Decoder FAKE_CHECK_SESSION");
    const data = fakeService.fakeCheckSession();
    res.status(200).send(helpers.buildUserSession(data));
  }
});

module.exports = router;
