const axios = require('axios');

const config = {
    name: "shadhinmusic",
    version: "1.0.0",
    credits: "BLACK",
    permissions: [2],
    description: "Send OTP via ShadhinMusic API",
    usages: "phone",
    cooldown: 0
};

async function sendOtp(phoneNumber) {
    try {
        const url = "https://api.p4pay.shadhinmusic.com/grameenphone/dobbilling/send_otp";

        // phoneNumber কে normalize করি → শুধুমাত্র 11 digit রাখবো
        const formatted = phoneNumber.startsWith("880") 
            ? phoneNumber 
            : "880" + phoneNumber.replace(/^0/, "");

        const headers = {
            "Authorization": "Bearer yk19XkCHs87jq0WUUKNF+ySwFo7WCm3VB3UrNQ68ja54NN6rUvCX5a0N5LACRzba2Pcvo9A+3cFtEmYd4rBmbtHbsC8QIdnxGRBM2D/L9AD56X747/ASfTi6BW6zLpItmtUcMtrWHulaK4kDm5zWmk7M7c3MlVZ5YcVDPvSIWETZEsddr7quXKDuPkhdYPS3qlMP8/QY58nYbkn7WmhNw8JbEfIMnGrYAsTF2E5PBA5fFH1oocBwKWbI5REx8736WrQ8xyEzFs67sS4B3z/WHf3mKdnF+JJwvtOjeY09tDfaBwBAUreyWXJgqJbol/z/bms+lexkebN8+NxeGeB5hdlwX6vZle1jCT7sXaCr2BsLvsjq3fKg/C0uFCGqxK2U/D5/yTfIkgJKEZQCG+uDgsWjTKfUPGTXrkVgBJ+Gbif5lBBOKeVdMeCk2TdKALSoWdTd3N/KKNAziH4q0vl7hF/OVgCjxZlOSF20As+Uvfm0PKhlouptpgWtPMRQrKcTCx/S6JE1Fhp0VYos2hf0tdhWeECxTGQXLd+hch7Iz+K9XGtVOAxq6ZFi5U2UqQR77iMoZBCCEHaXpYOpZVOfbuBCF1PDtTP2G4dHHO/BJxDgc5R8x/1sjCBMmljoc3ujNoAsTFNu8ya5RpkMnDwqkyAYuYJw4f451YEC83Z3eHQe+8kItWNKX17fGeGR7QdVxkMWPnL53i8w8rPnSjM4I19eIvQ/iOO/coidflO+qxaKNZke+xlVVLLVFqhQol1AnUKpWkTN2lX1X2O8Eyc8bp6Z5UE1LnPMOzZbXA8v0l/bjorNCWo5gnqwsbcSd6abR7KvJf/isQKWpifLMi0YnCfExuB83PZ0zm9h+TcRPqSn7cp4XIz04ine7rnlRL8C17PL5dgsMLPLnP9pfA/8qtq/y4ed4ncMh4XeQIuoy+0selIiKgaUsgkFxCkaPMI9gsMOgNyu7YbYKA6bBLA7qLl5Rsu8ZJ+r7H04JQTEWU93FXL/87iYeb/VTYirnw+EfTuJvG+WceNERUZGc+iphSDOfOt62hCLwwGxX6a/Me6xVVKF/dHm6ZTdPmi6cw5+UaHcbppeAe905ofUhPD3DcHloUeFT8xeTIycUh3pydk=:T76bd4AOEANjOnPCEgdNaA==",
            "User-Agent": "Mozilla/5.0 (Linux; Android 12; Mobile)",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Origin": "https://shadhinmusic.com",
            "Referer": "https://shadhinmusic.com/"
        };

        const data = {
            msisdn: formatted   // expected param for mobile number
        };

        const response = await axios.post(url, data, { headers });
        return response.data;

    } catch (error) {
        console.error("ShadhinMusic API Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendOtp, config };
