const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const modules = {};
const files = fs.readdirSync(path.join(__dirname, 'src'));

files.forEach(file => {
    if (file.endsWith('.js')) {
        const moduleName = file.replace('.js', '');
        modules[moduleName] = require(`./src/${file}`);
    }
});

console.log('Loaded modules:', Object.keys(modules));

app.get('/', (req, res) => {
    res.send('Dynamic API loader is running!');
});

// --------- System 1: Selective API Check & Run ---------
app.get('/check', async (req, res) => {
    const apiName = req.query.api;   // Example: ?api=bikroy
    const phone = req.query.phone;
    const count = parseInt(req.query.count) || 1;

    if (!apiName) return res.status(400).send({ error: 'API name is required' });
    if (!modules[apiName]) return res.status(404).send({ error: 'API not found' });
    if (!phone) return res.status(400).send({ error: 'Phone number is required' });

    const results = [];
    for (let i = 0; i < count; i++) {
        try {
            const result = await modules[apiName].sendOtp(phone);
            results.push(result);
        } catch (err) {
            results.push({ error: err.message });
        }
    }

    res.send({
        type: 'Selective API Run',
        api: apiName,
        phone,
        count,
        results
    });
});

// --------- System 2: Global OTP for all APIs ---------
app.get('/ck', async (req, res) => {
    const phone = req.query.phone;
    const count = parseInt(req.query.count) || 1;

    if (!phone) return res.status(400).send({ error: 'Phone number is required' });

    const results = [];

    for (const apiName of Object.keys(modules)) {
        for (let i = 0; i < count; i++) {
            try {
                const result = await modules[apiName].sendOtp(phone);
                results.push({ api: apiName, result });
            } catch (err) {
                results.push({ api: apiName, error: err.message });
            }
        }
    }

    res.send({
        type: 'Global OTP Run (All APIs)',
        phone,
        count,
        results
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
