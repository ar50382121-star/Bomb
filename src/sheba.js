const axios = require("axios");

const config = {
  name: "sheba",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  permissions: [0],
  description: "Send OTP via Sheba API",
  usage: "sheba <phone>",
  cooldowns: 0,
};

async function sendOtp(phone) {
  try {
    const response = await axios.post(
      "https://accountkit.sheba.xyz/api/shoot-otp",
      {
        mobile: `+88${phone}`,
        app_id: "8329815A6D1AE6DD",
        api_token:
          "oUEp8TBlWfhgaBlzDAjy64NOJXGkHZIOHWAhP8BTlAtINzTWNTD28X0k4NA7",
      },
      {
        headers: {
          Host: "accountkit.sheba.xyz",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=UTF-8",
          "custom-headers": '{"portal-name":"Customer Web"}',
          Origin: "https://www.sheba.xyz",
          Referer: "https://www.sheba.xyz/",
          "X-Requested-With": "mark.via.gp",
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
