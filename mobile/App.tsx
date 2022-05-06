import "react-native-gesture-handler";
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { theme } from './src/theme';

import { useFonts, Inter_400Regular,  Inter_500Medium} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {Widget} from "./src/components/Widget";



export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,  
    Inter_500Medium
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      backgroundColor: theme.colors.background,
      
    }}>
      <StatusBar 
        style="light"
        backgroundColor='transparent'
        translucent={true}
      />

      
      <Widget />
    </View>
  );
}
