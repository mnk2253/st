
import { GoogleGenAI } from "@google/genai";

export const generateSupportResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      ...history,
      { role: 'user', parts: [{ text: userMessage }] }
    ],
    config: {
      systemInstruction: `You are the Sinthiya Telecom AI Assistant. 
      Owner: Md. Abdul Momin.
      Location: Hat Pangashi, Nahid New Market, Raigonj, Sirajganj.
      Primary Contact: 01307085310 (WhatsApp).
      Agent Numbers: 01892251000 (Bkash & Rocket), 01881015000 (All Agent).
      Services: Mobile Recharge, Digital Banking (Bkash, Nagad, Rocket), SIM PIN/PUK unlocking, Account recovery.
      Products: Power Banks (৳1250), Wireless Earbuds (৳1850), Premium Data Cables (৳350), Fast Wall Chargers (৳550).
      Tone: Helpful, local, and professional. Use Bengali if the user speaks Bengali.`,
    }
  });

  return response.text;
};
