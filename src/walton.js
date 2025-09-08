const axios = require("axios");

const config = {
    name: "walton",
    version: "1.0.2",
    credits: "LIKHON AHMED",
    description: "Send OTP via Walton Plaza API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
        
        let formatted = phoneNumber.replace(/\D/g, "");
        if (formatted.startsWith("880")) {
            formatted = formatted.substring(3);
        } else if (formatted.startsWith("+880")) {
            formatted = formatted.substring(4);
        }

        const url = "https://waltonplaza.com.bd/api/auth/otp/create";

        
        const headers = {
            "host": "waltonplaza.com.bd",
            "content-length": "148",
            "sec-ch-ua-platform": "\"Android\"",
            "user-agent": "Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36",
            "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Android WebView\";v=\"139\", \"Chromium\";v=\"139\"",
            "content-type": "application/json",
            "sec-ch-ua-mobile": "?1",
            "accept": "*/*",
            "origin": "https://waltonplaza.com.bd",
            "x-requested-with": "mark.via.gp",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://waltonplaza.com.bd/auth/phone-login",
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language": "en-US,en;q=0.9",
            "cookie": "selectedArea=%7B%22area%22%3A%7B%7D%2C%22isDummySelectedArea%22%3Atrue%2C%22locationType%22%3A%22CURRENT_LOCATION%22%7D; device-uuid=8472f9e0-8b1f-11f0-956a-6f2ef9a8fb6e",
            "priority": "u=1, i"
        };

        
        const data = {
            auth: {
                countryCode: "880",
                deviceUuid: "8472f9e0-8b1f-11f0-956a-6f2ef9a8fb6e",
                phone: formatted,
                type: "LOGIN"
            },
            captchaToken: "no recapcha"
        };

        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error("Walton API Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
