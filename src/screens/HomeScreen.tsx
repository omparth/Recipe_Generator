import React, { useCallback, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  RefreshControl,
} from 'react-native';
import { IngredientInput } from '../components/IngredientInput';
import { RecipeCard } from '../components/RecipeCard';
import { LoadingState } from '../components/LoadingState';
import { ErrorMessage } from '../components/ErrorMessage';
import { generateRecipe } from '../services/gemini';
import { validateIngredientInput } from '../utils/parseRecipe';
import { Recipe } from '../types/recipe';

export const HomeScreen: React.FC = () => {
  const [ingredients, setIngredients] = useState('chicken, broccoli, soy sauce, rice');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const handleGenerateRecipe = useCallback(async () => {
  
    setError('');
    setLoading(true);

    try {
      const validatedIngredients = validateIngredientInput(ingredients);
      const ingredientString = validatedIngredients.join(', ');
      const generatedRecipe = await generateRecipe(ingredientString);
      setRecipe(generatedRecipe);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate recipe';
      setError(errorMessage);
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  }, [ingredients]);

  const handleClear = useCallback(() => {
    setIngredients('');
    setRecipe(null);
    setError('');
  }, []);

  const handleGenerateAnother = useCallback(() => {
    handleGenerateRecipe();
  }, [handleGenerateRecipe]);

  const handleCopyRecipe = useCallback(() => {
    if (!recipe) return;

    const recipeText = `Recipe: ${recipe.title}\n\nIngredients:\n${recipe.ingredients
      .map((ing) => `• ${ing}`)
      .join('\n')}\n\nInstructions:\n${recipe.instructions.map((inst, idx) => `${idx + 1}. ${inst}`).join('\n')}`;

    Alert.alert('Recipe Copied', 'Recipe text has been prepared for sharing');
  }, [recipe]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRecipe(null);
    setError('');
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <View style={styles.header}>
            <Text style={styles.title}>🍳 Smart Ingredient</Text>
            <Text style={styles.titleSecond}>Recipe Generator</Text>
            <Text style={styles.subtitle}>Enter ingredients and generate a recipe using AI</Text>
          </View>

          <View style={styles.inputSection}>
            <IngredientInput value={ingredients} onChangeText={setIngredients} editable={!loading} />
          </View>

          <ErrorMessage message={error} visible={!!error} />

          <LoadingState visible={loading} />

          <RecipeCard recipe={recipe} />

          <View style={styles.buttonSection}>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton, loading && styles.buttonDisabled]}
              onPress={handleGenerateRecipe}
              disabled={loading || !ingredients.trim()}
            >
              <Text style={styles.primaryButtonText}>Generate Recipe</Text>
            </TouchableOpacity>

            {recipe && (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.secondaryButton]}
                  onPress={handleGenerateAnother}
                  disabled={loading}
                >
                  <Text style={styles.secondaryButtonText}>Generate Another</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.secondaryButton]}
                  onPress={handleCopyRecipe}
                  disabled={loading}
                >
                  <Text style={styles.secondaryButtonText}>📋 Copy Recipe</Text>
                </TouchableOpacity>
              </>
            )}

            <TouchableOpacity
              style={[styles.button, styles.clearButton]}
              onPress={handleClear}
              disabled={loading}
            >
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  flex: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  titleSecond: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0891b2',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  inputSection: {
    marginBottom: 16,
  },
  buttonSection: {
    gap: 12,
    marginTop: 8,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#0891b2',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#e0f2fe',
    borderWidth: 1,
    borderColor: '#0891b2',
  },
  secondaryButtonText: {
    color: '#0891b2',
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  clearButtonText: {
    color: '#6b7280',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
