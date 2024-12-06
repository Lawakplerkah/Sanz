// Reference to DOM elements
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

// Initial Prompt
const prompt = `Kamu adalah Mecha, asisten AI yang ramah, lucu, dan suka membantu. Jawablah dengan gaya santai dan singkat.`;

// Add a message to the chat area
function addMessage(content, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = content;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
}

// Fetch AI Response
async function fetchAIResponse(userInput) {
  try {
    const response = await axios.post("https://luminai.my.id/", {
      content: userInput,
      prompt: prompt,
    });
    return response.data.result || "Hmm, ada error nih waktu jawab. 😅";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Hmm, aku lagi error. Coba lagi ya. 😢";
  }
}

// Handle Form Submission
chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userInput = chatInput.value.trim();
  if (!userInput) return;

  // Add user's message
  addMessage(userInput, "user");

  // Clear input
  chatInput.value = "";

  // Fetch AI response
  const aiResponse = await fetchAIResponse(userInput);
  addMessage(aiResponse, "mecha");
});
