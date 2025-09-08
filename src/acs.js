const axios = require("axios");

const config = {
  name: "acs",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  permissions: [0],
  description: "Send OTP via ACS Future School API",
  usage: "acs <phone>",
  cooldowns: 0,
};

async function sendOtp(phone) {
  try {
    const response = await axios.post(
      "https://auth.acsfutureschool.com/api/v1/otp/send",
      {
        phone: phone, // ✅ raw এ যেভাবে ছিল সেভাবেই পাঠানো
      },
      {
        headers: {
          Host: "auth.acsfutureschool.com",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://www.acsfutureschool.com",
          Referer: "https://www.acsfutureschool.com/",
          "X-Requested-With": "mark.via.gp",
        },
      }
    );

    return {
      success: true,
      message: response.data.message || "OTP sent successfully",
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
