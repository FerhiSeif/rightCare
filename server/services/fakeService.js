// all fake service will be defined here

module.exports.fakeCheckSession = function() {
  const userData = {
    status: 200,
    data: {
      address: "",
      alias: "MB1O5HSOK97W",
      city: "",
      company: "RightCom Technologies",
      country: "BJ",
      email: "demo@right-com.com",
      firstlogin: 1,
      firstname: "RightCom",
      full_rights: [],
      image: null,
      is_admin: true,
      is_owner: false,
      language: "fr",
      lastname: "Technologies",
      phone: "(+229) 66 28 68 95",
      publickey: "POKB19302SOK97W",
      rights_codes: [],
      session_id: "SdYRKYXaOR2P1oJUz2bTRIp8KEyzvJEJtUZJSoPx5SOCb",
      sexe: "M",
      status: 1,
      subdomain: "rightcom",
      timezone: "GMT + 1",
      user_apps: ["admin", "rightplayer", "rightq", "capture", "rightflow","rightcare"],
      user_id: "504737b0-ff19-11e8-9f81-a3a55915c277"
    }
  };
  return userData;
};
