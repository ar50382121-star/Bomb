const axios = require("axios");

const config = {
  name: "shikho",
  version: "1.0.0",
  credits: " LIKHON AHMED",  
  description: "Send OTP via Shikho API",
  usage: "shikho <phone>",
  cooldowns: 0,
};

async function sendOtp(phone) {
  try {
    const response = await axios.post(
      "https://api.shikho.com/auth/v2/send/sms",
      {
        phone: phone.startsWith("880") ? phone : `880${phone.replace(/^0/, "")}`, // ✅ format অনুযায়ী 880 দিয়ে শুরু
        type: "student",
        auth_type: "signup",
        vendor: "shikho",
      },
      {
        headers: {
          Host: "api.shikho.com",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://shikho.com",
          Referer: "https://shikho.com/",
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
