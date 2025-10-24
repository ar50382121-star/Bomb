const axios = require('axios');

const config = {
    name: "bikroy",
    version: "1.0.0",
    credits: "LIKHON AHMED",
    description: "Send OTP via Bikroy API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
        const url = `https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=${phoneNumber}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
