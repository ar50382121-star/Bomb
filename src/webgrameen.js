const axios = require("axios");
const qs = require("qs");

const config = {
    name: "webgrameen",
    version: "1.0.0",
    credits: "BLACK",
    description: "Send OTP via Grameenphone WebLogin API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
        // format phone number
        let formatted = phoneNumber.replace(/\D/g, "");
        if (formatted.startsWith("880")) {
            formatted = formatted.substring(3);
        } else if (formatted.startsWith("+880")) {
            formatted = formatted.substring(4);
        }

        const url = "https://webloginda.grameenphone.com/backend/api/v1/otp";

        // Raw headers
        const headers = {
            "Host": "webloginda.grameenphone.com",
            "Connection": "keep-alive",
            "Content-Length": "18",
            "sec-ch-ua-platform": "\"Android\"",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Android WebView\";v=\"139\", \"Chromium\";v=\"139\"",
            "Content-Type": "application/x-www-form-urlencoded",
            "sec-ch-ua-mobile": "?1",
            "Origin": "https://www.grameenphone.com",
            "X-Requested-With": "mark.via.gp",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://www.grameenphone.com/",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9"
        };

        // Body must be x-www-form-urlencoded
        const data = qs.stringify({
            msisdn: "0" + formatted // তাদের ফরম্যাটে 017xxxxxxx দিতে হবে
        });

        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error("WebGrameen API Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
