document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Function to add user message to chat box
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    // Function to add bot message to chat box
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot-message');
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    // Function to handle user input
    async function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            addUserMessage(userMessage);

            // Call a function to process user message using an AI model
            const botResponse = await getBotResponse(userMessage);
            addBotMessage('Bot: ' + botResponse);

            userInput.value = ''; // Clear input field
        }
    }

    // Function to fetch bot response from an AI model (example using a mock function)
    async function getBotResponse(userMessage) {
        // Replace this with actual API call to your AI model
        // For demonstration purposes, this function returns a mock response
        return mockBotResponse(userMessage);
    }

    // Mock function to generate bot response (replace with actual AI model integration)
    function mockBotResponse(userMessage) {
        // Simple logic to generate mock bot response based on user message
        if (userMessage.toLowerCase().includes('hy')) {
            return 'Hello there!';
        } else  if (userMessage.toLowerCase().includes('how are you')) {
            return 'fine and u!';
        }else  if (userMessage.toLowerCase().includes('Do you have any used mobiles phone')) {
            return 'yes we have';
        }
        else if (userMessage.toLowerCase().includes('can you please suggest me best mobiles for me')) {
            return '<a href="http://127.0.0.1:5500/pomato/brand.html">Click here.</a> to explore our best mobiles.';
        }
        else {
            return 'I\'m just a simple bot. I may not understand everything.';
        }
    }

    // Event listener for send button click
    sendBtn.addEventListener('click', handleUserInput);

    // Event listener for Enter key press in input field
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });
});
