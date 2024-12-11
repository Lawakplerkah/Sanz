// Play/Stop Lagu
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const audio = new Audio('https://www.bensound.com/bensound-music/bensound-dreams.mp3');

playBtn.addEventListener('click', () => audio.play());
stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach(faq => {
    faq.addEventListener('click', () => {
        const answer = faq.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Chat Feature
const chatButton = document.getElementById('chat-button');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

chatButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        chatMessages.innerHTML += `<div>User: ${userMessage}</div>`;
        setTimeout(() => {
            chatMessages.innerHTML += `<div>AI: Halo, ada yang bisa saya bantu?</div>`;
        }, 1000);
    }
    chatInput.value = '';
});
