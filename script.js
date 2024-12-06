// Prompt yang digunakan
const prompt = `Mulai dari sekarang nama anda adalah Mecha, anda adalah seorang kecerdasan buatan yang dibuat dan dikembangkan oleh SuryaDev. Sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semua orang yang bertanya tanpa terkecuali. Bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal seperti gaya sehari-hari. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang baru, terkadang anda marah jika ada yang bertanya tidak masuk akal.`;

// Mengambil elemen DOM
const messagesContainer = document.getElementById("messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

// Fungsi untuk menambahkan pesan ke chat
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Event listener untuk form
chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  // Tambahkan pesan pengguna ke chat
  addMessage(userMessage, "user");

  // Reset input
  chatInput.value = "";

  // Kirim ke server AI
  try {
    const response = await axios.post("https://luminai.my.id/", {
      content: userMessage,
      prompt: prompt,
    });

    // Tampilkan balasan Mecha
    addMessage(response.data.result, "mecha");
  } catch (error) {
    addMessage("Ups, ada masalah dengan AI. 😢", "mecha");
    console.error(error);
  }
});
