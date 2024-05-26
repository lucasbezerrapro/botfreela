document.addEventListener('DOMContentLoaded', () => {
    addMessage('bot', 'Bem-vindo! Como posso ajudar?');
    addMessage('bot', 'Aqui estão algumas opções que você pode tentar:');
    addMessage('bot', '- Diga "olá"');
    addMessage('bot', '- Pergunte "como você está?"');
    addMessage('bot', '- Pergunte "qual o seu nome?"');
});

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText !== '') {
        addMessage('user', messageText);
        userInput.value = '';
        setTimeout(() => {
            addMessage('bot', getBotResponse(messageText));
        }, 1000);
    }
}

function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const responses = {
        'olá': 'Olá! Como posso ajudar?',
        'como você está?': 'Estou apenas um programa, mas estou funcionando corretamente! kkkkkkkkk',
        'qual o seu nome?': 'Eu sou um chatbot ;)'
    };
    return responses[userMessage.toLowerCase()] || 'Desculpe, não entendi. Pode repetir?';
}
