import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface IngredientInputProps {
  value: string;
  onChangeText: (text: string) => void;
  editable: boolean;
}

export const IngredientInput: React.FC<IngredientInputProps> = ({
  value,
  onChangeText,
  editable,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients separated by commas"
        placeholderTextColor="#a1a1aa"
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        multiline
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e4e4e7',
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: '#18181b',
    backgroundColor: '#ffffff',
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
