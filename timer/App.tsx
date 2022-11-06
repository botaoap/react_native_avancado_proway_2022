import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { TimerProvider } from './src/contexts/TimerContext';
import { TimerDefinition } from './src/screens/TimerDefinitionScreen';
import { TimerScreen } from './src/screens/TimerScreen';

export default function App() {
  return (
    <TimerProvider>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        {/* <TimerDefinition /> */}
        <TimerScreen/>
      </SafeAreaView>
    </TimerProvider>
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