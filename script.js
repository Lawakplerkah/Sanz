// Script.js

// Play/Stop Lagu
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const audio = new Audio('https://www.bensound.com/bensound-music/bensound-dreams.mp3');

playBtn.addEventListener('click', () => {
    audio.play();
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        const sibling = item.nextElementSibling;
        sibling.style.display = sibling.style.display === 'block' ? 'none' : 'block';
    });
});

// Chat AI Simulation
const chatButton = document.getElementById('chat-button');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

chatButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Add user message
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'user-message';
        userMsgDiv.textContent = userMessage;
        chatMessages.appendChild(userMsgDiv);

        // Add AI reply
        setTimeout(() => {
            const aiMsgDiv = document.createElement('div');
            aiMsgDiv.className = 'ai-message';
            aiMsgDiv.textContent = 'Terima kasih atas pesan Anda. Kami akan segera membantu Anda!';
            chatMessages.appendChild(aiMsgDiv);

            // Scroll to the bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
    chatInput.value = '';
});
