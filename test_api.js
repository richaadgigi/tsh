const fs = require('fs');

// Hacky env loader
const envContent = fs.readFileSync('.env.local', 'utf-8');
const lines = envContent.split('\n');
lines.forEach(line => {
    if (line.trim() && !line.startsWith('#')) {
        const parts = line.split('=');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const val = parts.slice(1).join('=').trim().replace(/^["'](.*)["']$/, '$1'); // Remove surrounding quotes
            process.env[key] = val;
        }
    }
});

async function testApi() {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TSH_ACCESS_TOKEN;

    console.log("URL:", url);
    console.log("Token starts with:", token?.substring(0, 5) + "...");

    try {
        const response = await fetch(`${url}/copy-traders`, {
            headers: {
                'Content-Type': 'application/json',
                'tsh-access-token': token
            }
        });

        console.log("Status Code:", response.status);

        const data = await response.json();
        console.log("Response Type:", typeof data);
        console.log("Keys in response:", Object.keys(data));

        if (Array.isArray(data)) {
            console.log("Direct Array. Length:", data.length);
        } else if (data.data && Array.isArray(data.data)) {
            console.log("Nested Array. Length:", data.data.length);
        } else {
            console.log("Raw Response Preview:", JSON.stringify(data).substring(0, 500));
        }

    } catch (e) {
        console.error("Fetch Error:", e.message);
    }
}

testApi();
