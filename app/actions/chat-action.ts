'use server'

// app/actions/chat-action.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function chatWithAI(message: string): Promise<{ text?: string; error?: string }> {
  if (!message) return { error: 'No message provided' };

  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash',
      systemInstruction: "You are a smart virtual assistant trained on the content of our website — a marketing site for a fictional software resale startup called SoftSell. Your job is to help visitors by answering their questions clearly and helpfully, based on the website's purpose, structure, and typical user behavior",
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const reply = response.text();

    return { text: reply || 'No response from Gemini.' };
  } catch (error: any) {
    console.error('Gemini error:', error);
    return { error: 'Failed to fetch response from Gemini' };
  }
}
