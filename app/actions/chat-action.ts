'use server'

// app/actions/chat-action.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function chatWithAI(message: string): Promise<{ text?: string; error?: string }> {
  if (!message) return { error: 'No message provided' };

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(message);
    const response = await result.response;
    const reply = response.text();

    return { text: reply || 'No response from Gemini.' };
  } catch (error: any) {
    console.error('Gemini error:', error);
    return { error: 'Failed to fetch response from Gemini' };
  }
}
