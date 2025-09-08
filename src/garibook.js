// src/garibook.js
const axios = require("axios");

const config = {
  name: "garibook",
  description: "Send OTP via Garibook API",
  usage: "<phone>",
  cooldown: 0,
  type: "api",
  run: async function (phone) {
    try {
      const url = "https://api.garibookadmin.com/api/v3/user/login";

      const headers = {
        "Host": "api.garibookadmin.com",
        "Connection": "keep-alive",
        "sec-ch-ua-platform": "\"Android\"",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
        accept: "application/json",
        "sec-ch-ua":
          "\"Not;A=Brand\";v=\"99\", \"Android WebView\";v=\"139\", \"Chromium\";v=\"139\"",
        "content-type": "application/json",
        "sec-ch-ua-mobile": "?1",
        Origin: "https://garibook.com",
        "X-Requested-With": "mark.via.gp",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://garibook.com/",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-US,en;q=0.9",
      };

      const body = {
        mobile: phone,
        recaptcha_token: "garibookcaptcha",
        channel: "web",
      };

      const response = await axios.post(url, body, { headers });
      return response.data;
    } catch (error) {
      return {
        error: error.response ? error.response.data : error.message,
      };
    }
  },
};

module.exports = config;
