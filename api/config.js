// Vercel serverless function — reads broker details from Vercel Environment Variables
// Sensitive data is stored in Vercel Dashboard > Settings > Environment Variables
// This file itself has NO sensitive data — safe to commit to GitHub
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        name:     process.env.BROKER_NAME     || '',
        address:  process.env.BROKER_ADDRESS  || '',
        district: process.env.BROKER_DISTRICT || '',
        pin:      process.env.BROKER_PIN      || '',
        phone1:   process.env.BROKER_PHONE1   || '',
        phone2:   process.env.BROKER_PHONE2   || '',
        email:    process.env.BROKER_EMAIL    || '',
        pan:      process.env.BROKER_PAN      || '',
        account:  process.env.BROKER_ACCOUNT  || '',
        ifsc:     process.env.BROKER_IFSC     || '',
        branch:   process.env.BROKER_BRANCH   || '',
        bank:     process.env.BROKER_BANK     || ''
    });
}
