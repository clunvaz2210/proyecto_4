import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tecla } from './Tecla'

export default function Teclado({ pulsarLetra, letrasUsadas }) {
   const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                  "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return (
    <View style={styles.contenedor}>
      {letras.map((letra) => (
        <Tecla
          key={letra}
          letra={letra}
          pulsarLetra={() => pulsarLetra(letra)}
          usada={false}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    contenedor:{
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"flex-start",
        paddingHorizontal:20,
        textAlign:"center"
    }
})