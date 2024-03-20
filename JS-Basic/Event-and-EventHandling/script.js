// Select the button and input element
const clickButton = document.getElementById('clickButton');
const textInput = document.getElementById('textInput');
const outputDiv = document.getElementById('output');

// Event listener for button click
clickButton.addEventListener('click', function() {
    outputDiv.textContent = 'Button clicked!';
});

// Event listener for keypress in text input
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const inputValue = textInput.value;
        outputDiv.textContent = `You typed: ${inputValue}`;
        textInput.value = ''; // Clear the input field
    }
});
