const axios = require('axios');

const config = {
    name: "chokrojan",
    version: "1.4.0",
    credits: "LIKHON AHMED",
    description: "Send OTP via Chokrojan mobile login API (Raw headers & body)",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
        const url = "https://chokrojan.com/api/v1/passenger/login/mobile"

        const headers = {
            'Host': 'chokrojan.com',
            'Connection': 'keep-alive',
            'Content-Length': '31',
            'sec-ch-ua-platform': '"Android"',
            'Authorization': 'Bearer null',
            'sec-ch-ua': '"Not;A=Brand";v="99", "Android WebView";v="139", "Chromium";v="139"',
            'sec-ch-ua-mobile': '?1',
            'user-platform': '3',
            'Access-Control-Allow-Origin': '*',
            'company-id': '1',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'domain-name': 'chokrojan.com',
            'Content-Type': 'application/json;charset=UTF-8',
            'Origin': 'https://chokrojan.com',
            'X-Requested-With': 'mark.via.gp',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://chokrojan.com/login',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cookie': '_fbp=fb.1.1757161330722.89258153770461187'
        };

        const body = { mobile_number: phoneNumber };

        const response = await axios.post(url, body, { headers });
        return response.data;

    } catch (error) {
        console.error('Chokrojan API Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
