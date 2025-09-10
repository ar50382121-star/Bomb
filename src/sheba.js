import axios from "axios";

const config = {
  name: "sheba",
  version: "1.0.0",
  description: "Send OTP via Sheba.xyz",
  author: "YOUR_NAME",
  api_url: "https://accountkit.sheba.xyz/api/shoot-otp",
  app_id: "8329815A6D1AE6DD",
  api_token: "8DFMIZEzaSWAppC1WVe47rVEM8ihblOn1SaZYToyMTe3Dn7fE1Y03VCNt9kd",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json;charset=UTF-8",
    Origin: "https://www.sheba.xyz",
    Referer: "https://www.sheba.xyz/",
    "X-Requested-With": "mark.via.gp",
    "Custom-Headers": JSON.stringify({ "portal-name": "Customer Web" }),
  },
};

async function sendOtp(phone) {
  try {
    const body = {
      mobile: phone.startsWith("+88") ? phone : `+88${phone}`,
      app_id: config.app_id,
      api_token: config.api_token,
    };

    const res = await axios.post(config.api_url, body, {
      headers: config.headers,
    });
    return res.data;
  } catch (err) {
    return {
      success: false,
      error: err.response?.data || err.message,
    };
  }
}

export default { config, sendOtp };
