import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type MarcadorProps={
    victorias:number,
    derrotas:number
}

export default function Marcador({victorias, derrotas}: MarcadorProps) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Victorias:{victorias}</Text>
      <Text style={styles.texto}>Derrotas:{derrotas}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    texto:{
        fontSize:18
    }
})