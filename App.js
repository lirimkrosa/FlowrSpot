import React from 'react';
import {Navigation} from 'navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Ubuntu: require('./src/assets/fonts/Ubuntu-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Navigation/>
  );
}


