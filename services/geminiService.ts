
import { GoogleGenAI } from "@google/genai";
import { FILES } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  private context: string;
  private apiKey: string;

  constructor() {
    // Get API key from environment or process
    this.apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
    
    if (!this.apiKey) {
      console.warn('⚠️ Gemini API key not found. Chat functionality will be limited.');
    }
    
    this.ai = new GoogleGenAI({ apiKey: this.apiKey });
    this.context = FILES.map(f => `File: ${f.name}\nContent:\n${f.content}`).join('\n\n');
  }

  async chat(userMessage: string, history: { role: 'user' | 'assistant', text: string }[]) {
    // Check if API key is configured
    if (!this.apiKey) {
      return "⚠️ Gemini API key is not configured. Please add your GEMINI_API_KEY to the .env.local file and restart the development server. Get your API key from: https://aistudio.google.com/";
    }
    
    const ai = new GoogleGenAI({ apiKey: this.apiKey });
    
    const contents = history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents as any,
        config: {
          systemInstruction: `You are Atharva's portfolio AI assistant, styled like GitHub Copilot. 
          Use the following file contents to answer questions about Atharva's skills, experience, and projects. 
          Keep answers professional, helpful, and concise.
          
          PORTFOLIO DATA:
          ${this.context}`,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error: any) {
      console.error("Gemini Error:", error);
      
      // Provide helpful error messages
      if (error?.message?.includes('API key')) {
        return "❌ Invalid API key. Please check your GEMINI_API_KEY in .env.local";
      }
      if (error?.message?.includes('quota')) {
        return "❌ API quota exceeded. Please check your Gemini API usage limits.";
      }
      if (error?.message?.includes('network')) {
        return "❌ Network error. Please check your internet connection and try again.";
      }
      
      return `❌ Error: ${error?.message || 'There was an error connecting to the AI service. Please try again.'}`;
    }
  }
}
