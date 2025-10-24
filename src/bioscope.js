const axios = require('axios');

const config = {
  name: "bioscope",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  description: "Send OTP via Bioscope",
  usages: "phone",
  cooldowns: 0
};

async function sendOtp(phone) {
  try {
    const res = await axios.post(
      'https://api-dynamic.bioscopelive.com/v2/auth/login?country=BD&platform=web&language=en',
      { number: phone },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'mark.via.gp'
        }
      }
    );
    return res.data;
  } catch (err) {
    return { error: err.response ? err.response.data : err.message };
  }
}

module.exports = { config, sendOtp };
