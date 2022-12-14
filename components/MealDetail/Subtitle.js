import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: 'white',
    borderBottomWidth: 2
  }
});
