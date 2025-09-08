const axios = require('axios');

const config = {
    name: "mimis",
    version: "1.0.0",
    credits: "LIKHON AHMED",
    permissions: [0],
    description: "Send call request via MIMSMS API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
       
        const url = `https://billing.mimsms.com/index.php?m=smsmanager&action=request&request_type=call&guest=1&phonenumber=${encodeURIComponent('+880' + phoneNumber.slice(-10))}&country=bd&countrycode=880&icphone=${encodeURIComponent('+880 ' + phoneNumber.slice(-10))}`;

       
        const headers = {
            'sec-ch-ua': '"Not;A=Brand";v="99", "Android WebView";v="139", "Chromium";v="139"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'dnt': '1',
            'x-requested-with': 'mark.via.gp',
            'sec-fetch-site': 'none',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document'
        };

        const response = await axios.get(url, { headers });
        return response.data;

    } catch (error) {
        console.error('MIMSMS API Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
