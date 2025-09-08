const axios = require("axios");

const config = {
    name: "walton",
    version: "1.0.0",
    credits: "BLACK",
    description: "Send OTP via Walton Plaza API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
        // phone number কে international format এ convert
        let formatted = phoneNumber.replace(/\D/g, "");
        if (formatted.startsWith("0")) {
            formatted = "880" + formatted.substring(1);
        } else if (!formatted.startsWith("880")) {
            formatted = "880" + formatted;
        }

        const url = "https://waltonplaza.com.bd/api/auth/otp/create";

        const headers = {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
            "Origin": "https://waltonplaza.com.bd",
            "Referer": "https://waltonplaza.com.bd/auth/phone-login",
            "Accept": "*/*",
            "X-Requested-With": "mark.via.gp"
        };

        const data = {
            mobile: "+" + formatted
        };

        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error("Walton API Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
