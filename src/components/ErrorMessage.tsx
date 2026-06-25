import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ErrorMessageProps {
  message: string;
  visible: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, visible }) => {
  if (!visible || !message) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>⚠️</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fef2f2',
    borderColor: '#fca5a5',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 12,
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  emoji: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    color: '#dc2626',
    fontWeight: '500',
    flex: 1,
    flexWrap: 'wrap',
  },
});
