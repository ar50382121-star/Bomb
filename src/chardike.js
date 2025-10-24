const axios = require('axios');

const config = {
  name: "chardike",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  description: "Send OTP via Chardike",
  usages: "phone",
  cooldowns: 0
};

async function sendOtp(phone) {
  try {
    const res = await axios.post(
      'https://api.chardike.com/api/otp/send',
      {
        phone: phone,
        otp_type: "login"
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Origin': 'https://chardike.com',
          'X-Requested-With': 'mark.via.gp'
        }
      }
    );
    return res.data;
  } catch (error) {
    return { error: error.response ? error.response.data : error.message };
  }
}

module.exports = { config, sendOtp };
