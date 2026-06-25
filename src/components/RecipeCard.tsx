import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe | null;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  if (!recipe) {
    return null;
  }

  return (
    
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.title}>{recipe.title}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          {recipe.instructions.map((instruction, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.stepNumber}>{index + 1}.</Text>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    gap: 20,
    borderWidth: 1,
    borderColor: '#e4e4e7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  listItem: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#0891b2',
    fontWeight: 'bold',
  },
  listText: {
    fontSize: 14,
    color: '#4b5563',
    flex: 1,
    flexWrap: 'wrap',
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0891b2',
    minWidth: 24,
  },
  instructionText: {
    fontSize: 14,
    color: '#4b5563',
    flex: 1,
    flexWrap: 'wrap',
    lineHeight: 20,
  },
});
