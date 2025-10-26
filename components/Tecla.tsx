import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export function Tecla(letra,pulsarLetra,usada){

    const [estilo,setEstilo] = useState(styles.Contenedor); 
    const [actividadTecla,setActividadTecla] = useState(false);

    function ejecutarIntento (){
        pulsarLetra(letra)
        setEstilo(styles.Contenedor2)
        setActividadTecla(true)
    }

  return (
    <View>
      <Pressable style={estilo} disabled={actividadTecla} onPress={ejecutarIntento}>
        <Text style={styles.Texto}>{letra}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    Contenedor:{
        width: 40,
        height:40,
        borderWidth: 1,
        padding: 5,
        borderRadius: 6,
        borderColor: "#ccc",
        backgroundColor: "#fff"
    },
    Contenedor2:{
        width: 40,
        height:40,
        borderWidth: 1,
        padding: 5,
        borderRadius: 6,
        borderColor: "#999",
        backgroundColor: "#d3d3d3",
    },
    Texto:{
        alignSelf:"center",
        fontSize: 22,
        color: "#333",
        fontWeight: 600,
    }
})