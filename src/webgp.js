const axios = require("axios");

const config = {
    name: "webgp",
    version: "1.0.1",
    credits: "LIKHON AHMED",
    description: "Send OTP via Grameenphone Web Login API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
       
        let formatted = phoneNumber.replace(/\D/g, "");
        if (formatted.startsWith("880")) {
            formatted = "0" + formatted.substring(3);
        } else if (formatted.startsWith("+880")) {
            formatted = "0" + formatted.substring(4);
        }

        const url = "https://weblogin.grameenphone.com/backend/api/v1/otp";

        
        const headers = {
            "Host": "weblogin.grameenphone.com",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "sec-ch-ua-platform": "\"Android\"",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Android WebView\";v=\"139\", \"Chromium\";v=\"139\"",
            "sec-ch-ua-mobile": "?1",
            "Origin": "https://weblogin.grameenphone.com",
            "X-Requested-With": "mark.via.gp",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://weblogin.grameenphone.com/",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9",
            "Cookie": "_fbp=fb.1.1756621451648.929282445802798413"
        };

        
        const data = {
            msisdn: formatted
        };

        const response = await axios.post(url, data, { headers });
        return response.data;

    } catch (error) {
        console.error("WebGrameen API Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
