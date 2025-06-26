document.getElementById('resumeForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = "Uploading...";

  try {
    const response = await fetch('http://localhost:5000/api/candidates/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      resultDiv.innerHTML = `
        <h3>Candidate Uploaded</h3>
        <p><strong>Name:</strong> ${data.candidate.name}</p>
        <p><strong>Email:</strong> ${data.candidate.email}</p>
        <p><strong>Score:</strong> ${data.candidate.score.toFixed(2)}</p>
      `;
    } else {
      resultDiv.innerHTML = "Upload failed.";
    }
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = "An error occurred.";
  }
});
