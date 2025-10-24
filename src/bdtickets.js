const axios = require("axios");

const config = {
  name: "bdtickets",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  description: "Send OTP via BDTickets API",
  usage: "bdtickets <phone>",
  cooldowns: 0,
};

async function sendOtp(phone) {
  try {
    const response = await axios.post(
      "https://api.bdtickets.com:20100/v1/auth",
      {
        createUserCheck: true,
        phoneNumber: phone.startsWith("+880") ? phone : `+88${phone}`, // ✅ raw অনুযায়ী +880 format
        applicationChannel: "WEB_APP",
      },
      {
        headers: {
          Host: "api.bdtickets.com:20100",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://bdtickets.com",
          Referer: "https://bdtickets.com/",
          "X-Requested-With": "mark.via.gp",
        },
      }
    );

    return {
      success: true,
      message: response.data.message || "OTP sent successfully",
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response ? error.response.data : error.message,
    };
  }
}

module.exports = {
  ...config,
  sendOtp,
};
