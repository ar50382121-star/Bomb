const axios = require('axios');

const config = {
  name: "btcl",
  version: "1.0.0",
  credits: "YOUR_NAME",
  permissions: [0],
  description: "Send OTP via BTCL",
  usages: "phone",
  cooldowns: 0
};

async function sendOtp(phone) {
  const url = 'https://bdia.btcl.com.bd/client/client/registrationMobVerification-2.jsp?moduleID=1';
  const data = `actionType=otpSend&mobileNo=${phone}`;

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://bdia.btcl.com.bd',
    'X-Requested-With': 'mark.via.gp'
  };

  try {
    const res = await axios.post(url, data, { headers });
    return res.data;
  } catch (err) {
    return { error: err.message, details: err.response?.data || null };
  }
}

module.exports = { config, sendOtp };
