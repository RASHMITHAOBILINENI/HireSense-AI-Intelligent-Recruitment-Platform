const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

async function sendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;
  chatbox.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
  userInput.value = '';
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are an intelligent interview bot. Ask and respond to job candidates as if you were conducting a technical and behavioral interview." },
          { role: "user", content: userText }
        ]
      })
    });
    const data = await response.json();
    const reply = data.choices[0].message.content;
    chatbox.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  } catch (err) {
    chatbox.innerHTML += `<div><strong>Error:</strong> ${err.message}</div>`;
  }
}

window.onload = () => {
  chatbox.innerHTML = `<div><strong>Bot:</strong> Hi! I’m your AI interview assistant. Ask me anything or answer my questions!</div>`;
};
