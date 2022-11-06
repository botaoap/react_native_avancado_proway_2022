import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button text="0" />
      <Button text="1" color='blue'/>
      <Button text="2" color='purple'/>
      <Button text="3" color='grey'/>
      <Button text="4" color='grey' size='small'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
