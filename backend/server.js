
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
require('dotenv').config(); 

// Initialize Express
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

// API Endpoint
app.post('/convert', async (req, res) => {
    try {
        const { code, fromLang, toLang } = req.body;

        const prompt = `
            Translate the following code from ${fromLang} to ${toLang}.
            IMPORTANT: Only provide the raw code for the translation. 
            Do not include any explanations, introductions, or markdown formatting (like \`\`\`${toLang.toLowerCase()}\`).

            Original ${fromLang} Code:
            ${code}
        `;

        // API Call
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const convertedCode = response.text();

        // Return Translated Code
        res.json({ convertedCode: convertedCode });

    } catch (error) {
        console.error('Error during conversion:', error);
        res.status(500).json({ error: 'Failed to convert code.' });
    }
});

// Start Server 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
