
# AI Code Converter

A simple, clean web tool that translates code between programming languages.

It provides a lightweight, intuitive side-by-side interface for pasting your code, selecting your "from" and "to" languages, and instantly getting a translation.



## Features

* **Clean Interface:** A simple, side-by-side view for input and output.
* **Lightweight:** Built with pure HTML, CSS, and JavaScript. No heavy frameworks.
* **Secure:** Uses a Node.js backend to protect your secret API key.
* **Error Handling:** Provides clear feedback if a conversion isn't possible.



## Languages Supported

* Python
* JavaScript
* Go
* Java
* Ruby
* PHP
* C++



## Tech Stack

### **Frontend**

* HTML5
* CSS3
* JavaScript

### **Backend**

* Node.js
* Express (for the server)
* `@google/generative-ai` (for the Gemini API)
* `cors` (to handle cross-origin requests)
* `dotenv` (for secure environment variable management)



## How to Run It Locally


### **1. Clone the Repository**

```bash
git clone https://github.com/arohi-bajpai/AI-Code-Converter.git
cd AI-Code-Converter
```

### **2. Set Up the Backend**


```bash
cd backend
npm install
```

### **3. Provide Your Gemini API Key**

Create a new file in the `backend` folder named `.env`

Add your Google Gemini API key to it:

```bash
GEMINI_API_KEY=YOUR_SECRET_API_KEY_HERE
```

### **4. Run the Backend Server**

Within the backend folder, run:

```bash
node server.js
```

Your server will now be running at **[http://localhost:3000](http://localhost:3000)**

### **5. Open the Frontend**

Navigate to the `frontend` folder and open the `index.html` file directly in your browser / live server.

Your AI Code Converter should be running smoothly.
