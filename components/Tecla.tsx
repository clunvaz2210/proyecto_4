import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export function Tecla({letra,pulsarLetra,usada}){

    

  return (
    <View>
      <Pressable 
      style={usada ? styles.contenedorUsada : styles.contenedor} 
      disabled={usada} 
      onPress={pulsarLetra}
    >
      <Text style={styles.texto}>{letra.toUpperCase()}</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        width: 40,
        height:40,
        borderWidth: 1,
        padding: 5,
        borderRadius: 6,
        borderColor: "#ccc",
        backgroundColor: "#fff"
    },
    contenedorUsada:{
        width: 40,
        height:40,
        borderWidth: 1,
        padding: 5,
        borderRadius: 6,
        borderColor: "#999",
        backgroundColor: "#d3d3d3",
    },
    texto:{
        alignSelf:"center",
        fontSize: 22,
        color: "#333",
        fontWeight: 600,
    }
})