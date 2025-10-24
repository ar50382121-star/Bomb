const axios = require('axios');

const config = {
    name: "health",
    version: "1.0.0",
    credits: "LIKHON AHMED",
    description: "Send OTP via Medeasy health API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
        const url = `https://api.medeasy.health/api/send-otp/+880${phoneNumber.slice(-10)}/`;

        const headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 12; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36',
            'Accept': 'application/json, text/plain, */*'
        };

        const response = await axios.get(url, { headers });
        return response.data;

    } catch (error) {
        console.error('Medeasy API Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
