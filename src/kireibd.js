const axios = require('axios');

const config = {
  name: "kireibd",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  description: "Send OTP via KireiBD simple",
  usages: "phone",
  cooldowns: 0
};

async function sendOtp(phone) {
  try {
    const res = await axios.post(
      'https://app.kireibd.com/api/v2/send-login-otp',
      { email: phone },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return res.data;
  } catch (err) {
    return { error: err.response ? err.response.data : err.message };
  }
}

module.exports = { config, sendOtp };
