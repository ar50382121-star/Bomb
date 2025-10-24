const axios = require("axios");

const config = {
  name: "garibook",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  description: "Send OTP via Garibook API",
  usage: "<PHONE> <COUNT>",
  cooldowns: 0,
};

async function sendOtp(phone) {
  try {
    const response = await axios.post(
      "https://api.garibookadmin.com/api/v3/user/login",
      {
        mobile: phone,
        recaptcha_token: "garibookcaptcha",
        channel: "web",
      },
      {
        headers: {
          Host: "api.garibookadmin.com",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "https://garibook.com",
          Referer: "https://garibook.com/",
        },
      }
    );

    return {
      success: true,
      message: response.data.message || "OTP sent",
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
