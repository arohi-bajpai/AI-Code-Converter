// Import necessary libraries
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();
const port = 3000;

// --- Middleware ---
// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
// Enable Express to parse JSON request bodies
app.use(express.json());

// --- Gemini API Setup ---
// Get the API key from the environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Use the gemini-2.5-flash model
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

// --- API Endpoint ---
// Define a POST endpoint at '/convert'
app.post('/convert', async (req, res) => {
    try {
        // Get data from the frontend request
        const { code, fromLang, toLang } = req.body;

        // This is the "prompt" we send to the AI.
        // It's engineered to ask for *only* the code back.
        const prompt = `
            Translate the following code from ${fromLang} to ${toLang}.
            IMPORTANT: Only provide the raw code for the translation. 
            Do not include any explanations, introductions, or markdown formatting (like \`\`\`${toLang.toLowerCase()}\`).

            Original ${fromLang} Code:
            ${code}
        `;

        // Call the Gemini API
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const convertedCode = response.text();

        // Send the converted code back to the frontend
        res.json({ convertedCode: convertedCode });

    } catch (error) {
        console.error('Error during conversion:', error);
        res.status(500).json({ error: 'Failed to convert code.' });
    }
});

// --- Start the Server ---
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
