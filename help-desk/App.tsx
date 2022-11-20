import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { AuthRoutes } from './src/routes/AuthRoutes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <Text >loading...</Text>
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
        <ThemeProvider theme={theme}>
          <StatusBar style="dark" translucent backgroundColor="transparent" />
          <Routes />
        </ThemeProvider>
    </GestureHandlerRootView>
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
