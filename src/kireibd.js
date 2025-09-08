const axios = require('axios');

const config = {
  name: "kireibd",
  version: "1.0.0",
  credits: "YOUR_NAME",
  permissions: [0],
  description: "Send OTP via KireiBD",
  usages: "phone",
  cooldowns: 0
};

async function getXsrfToken() {
  // 1. প্রথমে main page থেকে XSRF token fetch করা
  const res = await axios.get('https://kireibd.com', {
    headers: {
      'User-Agent': 'YOUR_USER_AGENT_HERE'
    }
  });
  // 2. Cookie/Token extract করা
  const token = extractTokenFromCookie(res.headers['set-cookie']);
  return token;
}

async function sendOtp(phone) {
  const token = await getXsrfToken();
  const res = await axios.post(
    'https://app.kireibd.com/api/v2/send-login-otp',
    { email: phone },
    {
      headers: {
        'User-Agent': 'YOUR_USER_AGENT_HERE',
        'x-xsrf-token': token,
        'Content-Type': 'application/json'
      }
    }
  );
  return res.data;
}

module.exports = { config, sendOtp };
