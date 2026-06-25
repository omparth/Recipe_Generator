import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface LoadingStateProps {
  visible: boolean;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0891b2" />
      <Text style={styles.text}>Generating recipe...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: '#f0f9fa',
    borderRadius: 12,
    marginVertical: 16,
  },
  text: {
    fontSize: 16,
    color: '#0891b2',
    fontWeight: '600',
  },
});
