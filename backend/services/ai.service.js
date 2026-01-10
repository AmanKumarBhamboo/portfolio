import { PROFILE_CONTEXT } from "../constants/profileContext.js";

export const getAIResponse = async (message) => {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "mistralai/mistral-7b-instruct:free",
            messages: [
                {
                    role: "system",
                    content: PROFILE_CONTEXT,
                },
                {
                    role: "user",
                    content: message,
                },
            ],
            temperature: 0.3, // IMPORTANT: reduces hallucination
        }),
    });

    const data = await response.json();

    if (!data.choices) {
        throw new Error(data.error?.message || "AI response failed");
    }

    return data.choices[0].message.content;
};
