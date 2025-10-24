const axios = require('axios');
const qs = require('qs');

const config = {
  name: "btcl",
  version: "1.0.0",
  credits: "LIKHON AHMED",
  description: "Send OTP via BTCL",
  usages: "phone",
  cooldowns: 0
};

async function sendOtp(phone) {
  try {
    const url = 'https://bdia.btcl.com.bd/client/client/registrationMobVerification-2.jsp';
    const query = { moduleID: 1 };
    
    const data = qs.stringify({
      actionType: 'otpSend',
      mobileNo: phone
    });

    const headers = {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': 'https://bdia.btcl.com.bd',
      'Referer': 'https://bdia.btcl.com.bd/client/client/registrationMobVerification-1.jsp?moduleID=1',
      'X-Requested-With': 'mark.via.gp',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Dest': 'document',
      'Cache-Control': 'max-age=0',
      'Cookie': 'JSESSIONID=A31A19CACAFE4409ACC2C8D9CFE7DEA4'
    };

    const response = await axios.post(url, data, {
      headers,
      params: query
    });

    return response.data;
  } catch (error) {
    return {
      error: error.message,
      details: error.response ? error.response.data : null
    };
  }
}

module.exports = { config, sendOtp };
