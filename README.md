AI Code Converter

A simple, clean web tool that translates code from one programming language to another using the power of AI.

Built with pure HTML, CSS, and JavaScript, it provides a clean side-by-side interface for pasting your code, selecting your "from" and "to" languages, and instantly getting a translation, keeping it lightweight all the way.

Supported Programming Languages - Python, JavaScript, Go, Java, Ruby, PHP, C++ 

Tech Stack

This project is built with a focus on simplicity and security, using:

Frontend:

HTML5

CSS3

JavaScript

Backend:

Node.js

Express for the server

@google/generative-ai for the Gemini API

cors to handle cross-origin requests

dotenv for secure environment variable management


How to Run It Locally

Getting this up and running on your own machine is simple.

1. Clone the Repository

First, clone this project to your local machine:

git clone [https://github.com/arohi-bajpai/AI-Code-Converter.git](https://github.com/arohi-bajpai/AI-Code-Converter.git)
cd AI Code Converter


2. Set Up the Backend

The backend server is what handles the AI conversion and protects your API key.

# Navigate into the backend folder
cd backend

# Install all the necessary packages
npm install


Provide your Gemini API key.

Create a new file in the backend folder named .env

Open this file and add your Google Gemini API key:

GEMINI_API_KEY=YOUR_SECRET_API_KEY_HERE


3. Run the Backend Server

Start the server from within the backend folder:

node server.js


Your server is now running and listening on http://localhost:3000.

4. Open the Frontend

Now, go to the frontend folder and open the index.html file directly in your browser.

That's it! The application is fully functional and ready to start converting your code.
