//src/utils/parseRecipe.tsx
import { Recipe } from '../types/recipe';

export const parseRecipeResponse = (response: string): Recipe => {
  try {
    // Remove markdown code fences if present
    let cleanedResponse = response.trim();
    
    if (cleanedResponse.startsWith('```json')) {
      cleanedResponse = cleanedResponse.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleanedResponse.startsWith('```')) {
      cleanedResponse = cleanedResponse.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    // Parse the JSON
    const parsed = JSON.parse(cleanedResponse);

    // Validate the structure
    if (!parsed.title || typeof parsed.title !== 'string') {
      throw new Error('Invalid recipe: missing or invalid title');
    }

    if (!Array.isArray(parsed.ingredients)) {
      throw new Error('Invalid recipe: ingredients must be an array');
    }

    if (!Array.isArray(parsed.instructions)) {
      throw new Error('Invalid recipe: instructions must be an array');
    }

    // Ensure all ingredients and instructions are strings
    const ingredients = parsed.ingredients.map((item: unknown) => String(item));
    const instructions = parsed.instructions.map((item: unknown) => String(item));

    return {
      title: parsed.title,
      ingredients,
      instructions,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to parse recipe response';
    throw new Error(`Recipe parsing error: ${errorMessage}`);
  }
};

export const validateIngredientInput = (input: string): string[] => {
  if (!input.trim()) {
    throw new Error('Please enter at least one ingredient');
  }

  const ingredients = input
    .split(',')
    .map((ingredient) => ingredient.trim())
    .filter((ingredient) => ingredient.length > 0);

  if (ingredients.length === 0) {
    throw new Error('Please enter at least one ingredient');
  }

  return ingredients;
};
