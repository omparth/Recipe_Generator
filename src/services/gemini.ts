//src/services/gemini.tsx
import { Recipe } from '../types/recipe';
import {
  GEMINI_SYSTEM_PROMPT,
  RECIPE_PROMPT_TEMPLATE,
} from '../constants/prompts';
import { parseRecipeResponse } from '../utils/parseRecipe';
console.log("gemini.ts loaded");

const OPENROUTER_API_URL=
'https://openrouter.ai/api/v1/chat/completions';
// In Expo, use EXPO_PUBLIC_ prefix to make variables available in the client

declare const __DEV__: boolean;

export const generateRecipe = async (ingredients: string): Promise<Recipe> => {
  // @ts-ignore - EXPO_PUBLIC variables are injected by Expo at build time
  const apiKey = process.env.EXPO_PUBLIC_OPENROUTER_API_KEY;
    console.log("API KEY FOUND:", !!apiKey);
    console.log("FULL KEY:", apiKey);
    console.log("API KEY START:", apiKey?.substring(0, 15));
console.log("INGREDIENTS:", ingredients);
    if (!apiKey) {
      throw new Error('OpenRouter API key is not configured. Please set EXPO_PUBLIC_OPENROUTER_API_KEY in your environment variables.');  }

  try {
    const prompt = RECIPE_PROMPT_TEMPLATE(ingredients);

    console.log("Calling OpenRouter API...");
    // const controller = new AbortController();

    // setTimeout(() => {
    //   controller.abort();
    // }, 10000);
    
    const response = await fetch(
      OPENROUTER_API_URL ,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost",
          "X-Title": "Smart Recipe Generator",
        },        body: JSON.stringify({
          model: 'openai/gpt-oss-20b:free',
          messages: [
            {
            role:"system",
            content:GEMINI_SYSTEM_PROMPT,
            },
            {
            role:"user",
            content:prompt,
            },
            ],        }),
      }
    );
    console.log("Response Status:", response.status);


    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenRouter API error: ${errorData.error?.message || 'Unknown error'}`);    }

    const data = await response.json();
    
    console.log("openrouter Response:");
console.log(JSON.stringify(data, null, 2));

    // Extract the text response from Gemini
    const textContent =
    data.choices?.[0]?.message?.content;
    if (!textContent) {
      throw new Error('No content received from Gemini API');
    }

    // Parse and validate the recipe
    const recipe = parseRecipeResponse(textContent);

    return recipe;
  } catch (error) {
    console.error("OPENROUTER ERROR:", error);  
    if (error instanceof Error) {
      throw error;
    }
  
    throw new Error('An unexpected error occurred while generating the recipe');
  }
};
