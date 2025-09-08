const axios = require('axios');
const qs = require('qs');

const config = {
  name: "bulksmsbd",
  version: "1.0.0",
  credits: "YOUR_NAME",
  permissions: [2],
  description: "Send OTP via BulkSMSBD",
  usages: "phone",
  cooldowns: 0
};

async function sendOtp(phone) {
  try {
    const url = 'https://bulksmsbd.com/number-verification-otp.php';

    const data = qs.stringify({
      number: phone,
      'g-recaptcha-response': '0cAFcWeA4tQWkHivcPQnHxiNdbqR4GG5Z9AAdJ-cn1DiloXNPO5zTgnn65H3PEudrEuzsZ8L6JCqpcI0r_iRGpwzqalWPDgLjih-tyd1-xqF8KDfKr0okgiemq6uTPTNH9RcRB46aJoT9HaRYv0W-wRFEe3v8zoHnUMIIGZP_UGuyseCelehrF3u3Vj4Hj3R46TBSVAn7kIbmYYfKwF6z6pNM9oCdfyL3zzkFHcR9wFxG2KnnLfrBadMZXrT1RmKxCubI_2JP0VNE9aVty2R8UWBBUIZ3nf_3xELxHsDIzLJQFIOpXyl6CXal3Fy3Nyev-5EMtu-0oha8pSpTJSmCYHlQCGbnQ8VMM0QTE5PCkzw9SZ9PMJWtrgHEbhSsw5fPJvKLkzrpCqXe1T-MwIuZ-d7bWk2qmXXxFa4iswwKjTDWNuhwoKPyDkgihA8OfDWjfK5p1QuQKkCNbzmVB4aW31eqmjMA_0V0cUzeXMKSzBJxir4PQHjj-R7krrR9-mChQWGTLgSuisFuLZ3oB2ZJ0OaiMaxX11HJyKaF6TQfhWJMNbtE209wpqPXL9Sr40xQKf6zYxTpIM3Emc-eJ9ZTSkunJf8z1Q63IiP9BMwgz63De7AQvU6unw1f0K5HPrV92zy3IdMF591ozY8LKahqDFJkERxS2nCk4bajbjlwdjB5tTDUvHufuYKgBY0Tj8Eu_DGgDdyuLct-fUh635HB1a8z1pLP3kXAXPuNfHtNiB0722UFNn4PY1yEQdd3oW1YFZZ8XZNX_yB6UP6MtQbFXa0PXxd6C9ezszRuecvTF2chS2kettJJ5v4UNC3Wz4iw3lSmZE44t5g1O'
    });

    const headers = {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2010J19CG Build/SKQ1.211202.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.7258.158 Mobile Safari/537.36',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': 'https://bulksmsbd.com',
      'Referer': 'https://bulksmsbd.com/number-verification-otp.php',
      'X-Requested-With': 'mark.via.gp',
      'Cache-Control': 'max-age=0',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-User': '?1',
      'Sec-Fetch-Dest': 'document',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cookie': 'twk_idm_key=Xqv9F3vJ1lq7bY_SxQo1v; PHPSESSID=2483018a4234f6ca5bb9b8045ec40243; TawkConnectionTime=0'
    };

    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    return {
      error: error.message,
      details: error.response ? error.response.data : null
    };
  }
}

module.exports = { config, sendOtp };
