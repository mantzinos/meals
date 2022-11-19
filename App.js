import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return <CategoriesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
