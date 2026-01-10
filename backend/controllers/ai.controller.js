import { getAIResponse } from "../services/ai.service.js";

export const askAI = async (req, res) => {
    console.log("➡️ AI endpoint hit");
    console.log("Body:", req.body);

    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const reply = await getAIResponse(message);
        res.json({ reply });
    } catch (error) {
        console.error("❌ REAL AI ERROR:");
        console.error(error);
        res.status(500).json({ error: error.message || "AI error" });
    }
};
