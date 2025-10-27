import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Horca } from './components/Horca';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Tecla } from './components/Tecla';


export default function App() {
  
  function escribir(xd){
    
    console.log(""+xd)
  }
  const letra = "V"

  return (
    <SafeAreaView >
      <Tecla
      letra={letra}
      pulsarLetra={() => {escribir(letra)}}
      usada={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
