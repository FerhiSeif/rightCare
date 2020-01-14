// all helpers for the server

const CONSTANTS = require("../constants");

module.exports.buildUserSession = data => {
  return {
    status: data.status,
    user: {
      firstname: data.data.firstname,
      lastname: data.data.lastname,
      phone: data.data.phone,
      sexe: data.data.sexe,
      language: module.exports.retrieveLanguage(data.data.language)["code"],
      lang_dir: module.exports.retrieveLanguage(data.data.language)["dir"],
      fullname: data.data.firstname + " " + data.data.lastname,
      email: data.data.email,
      userid: data.data.user_id,
      publickey: data.data.publickey,
      alias: data.data.alias,
      subdomain: data.data.subdomain,
      company: data.data.company,
      is_admin: data.data.is_admin,
      session_id: data.data.session_id,
      full_rights: data.data.full_rights,
      rights_codes: data.data.rights_codes
    }
  };
};

module.exports.retrieveLanguage = function(lang) {
  if (lang) {
    const supportedlanguages = CONSTANTS.LANGUAGES.SUPPORTED;
    const tab_search = supportedlanguages.filter(function(l, index) {
      return l["code"].toLowerCase() === lang.toLowerCase();
    });
    if (tab_search.length > 0) {
      return tab_search[0];
    }
  }
  return CONSTANTS.LANGUAGES.DEFAULT;
};
