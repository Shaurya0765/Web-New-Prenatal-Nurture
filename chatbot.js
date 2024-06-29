document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

const predefinedResponses = [
    "It's important to take care of your mental health during pregnancy. Make sure to talk to your doctor about any concerns.",
    "Getting plenty of rest and staying hydrated are key to maintaining good mental health.",
    "Don't hesitate to reach out to friends and family for support.",
    "Taking short walks can help lift your mood.",
    "Consider practicing mindfulness or meditation to reduce stress.",
    "Remember, it's okay to ask for help if you're feeling overwhelmed.",
    "Eating a balanced diet can positively impact your mental well-being.",
    "Engage in activities that you enjoy and that make you feel relaxed.",
    "Keeping a journal of your thoughts and feelings can be therapeutic.",
    "Try to maintain a positive outlook and focus on the joy of expecting your baby.",
    "It's completely normal to have mixed emotions during pregnancy.",
    "Joining a support group for pregnant women can provide comfort and camaraderie.",
    "If you experience persistent sadness or anxiety, consult with your healthcare provider.",
    "Taking time for yourself is important. Self-care is not selfish.",
    "Listening to your favorite music can be a great way to relax.",
    "Avoid comparing your pregnancy journey to others'. Everyone's experience is unique.",
    "Stay informed, but try not to overwhelm yourself with too much information.",
    "Trust your instincts and don't be afraid to voice your concerns.",
    "Pregnancy yoga can be a gentle way to stay active and reduce stress.",
    "Celebrate small milestones and progress throughout your pregnancy."
];

const greetingResponses = [
    "Hello! How can I support you today?",
    "Hi there! How are you feeling?",
    "Hello! What’s on your mind?"
];

const questions = {
    "how are you": "I'm just a bot, but I'm here to help you. How are you feeling?",
    "how are you feeling": "I'm just a bot, but I'm here to help you. How are you feeling?",
    "what is your name": "I'm your Prenatal Health Support chatbot. How can I assist you today?",
    "who are you": "I'm your Prenatal Health Support chatbot. How can I assist you today?",
    "can you help me": "Of course! I'm here to support you. What do you need help with?",
    "thank you": "You're welcome! If you have any other questions or need support, feel free to ask."
};

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim().toLowerCase();
    if (message) {
        appendMessage('user', message);
        chatInput.value = '';
        getBotResponse(message);
    }
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    let botMessage = "";

    if (userMessage in questions) {
        botMessage = questions[userMessage];
    } else if (userMessage.includes("hello") || userMessage.includes("hi")) {
        botMessage = greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
    } else {
        botMessage = predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)];
    }

    appendMessage('bot', botMessage);
}
