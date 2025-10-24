document.addEventListener('DOMContentLoaded', () => {

        const fromLangSelect = document.getElementById('from-lang');
        const toLangSelect = document.getElementById('to-lang');
        const inputCode = document.getElementById('input-code');
        const outputCode = document.getElementById('output-code');
        const convertBtn = document.getElementById('convert-btn');


        convertBtn.addEventListener('click', async () => {

            const fromLang = fromLangSelect.value;
            const toLang = toLangSelect.value;
            const code = inputCode.value;


            if (!code.trim()) {
                outputCode.value = "Please enter some code to convert.";
                return;
            }


            convertBtn.disabled = true;
            convertBtn.textContent = "Converting...";
            outputCode.value = "Converting, please wait...";

            try {

                const response = await fetch('http://localhost:3000/convert', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        code: code,
                        fromLang: fromLang,
                        toLang: toLang
                    }),
                });


                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }


                const data = await response.json();


                outputCode.value = data.convertedCode;

            } catch (error) {

                console.error('Error:', error);
                outputCode.value = "An error occurred. Please check the console and try again.";
            } finally {

                convertBtn.disabled = false;
                convertBtn.textContent = "Convert";
            }
        });
    });