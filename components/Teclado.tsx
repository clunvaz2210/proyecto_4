import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tecla } from './Tecla'

interface TecladoProps {
  pulsarLetra: (letra: string) => void;
  letrasUsadas: string;
}

export default function Teclado({ pulsarLetra, letrasUsadas }: TecladoProps) {
   const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                  "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  return (
    <View style={styles.contenedor}>
      {letras.map((letra) => (
        <Tecla
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
        flex:1,
        flexWrap:"wrap",
        alignItems:"flex-start",
        paddingHorizontal:20,
        textAlign:"center"
    }
})