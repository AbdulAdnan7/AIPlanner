const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getResponseFromGemini(prompt) {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await res.json();

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
  } catch (err) {
    console.error('Gemini Error:', err);
    return 'Error getting AI response.';
  }
}
