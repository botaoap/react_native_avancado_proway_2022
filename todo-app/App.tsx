import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/themes';
import { TodoProvider } from './src/context/TodoContext';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { AppRoutes } from './src/routes/AppRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar />
          <AuthProvider>
            <TodoProvider>
              <AppRoutes />
            </TodoProvider>
          </AuthProvider>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}
