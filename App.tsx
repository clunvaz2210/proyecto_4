import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Marcador from './components/Marcador'

export default function App() {
  return (
    <View>
      <Marcador victorias={3} derrotas={2}/>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between",
    padding:20,
    backgroundColor:"#f0f4f8"  
  },
  textoCategoria:{
    textAlign:"center",
    fontSize:28,
    color:"#555",
    backgroundColor:"#e0e7ef",
    paddingVertical:8,
    paddingHorizontal:16,
    borderRadius:16,
    fontWeight:500,
    borderColor:"#b0c4d8",
    borderWidth:1.5
  },
  textoDisplay:{
    textAlign:"center",
    fontSize:42,
    color:"#1A1A1A",
    letterSpacing:10,
    fontWeight:"bold",
    paddingVertical:14,
    paddingHorizontal:14,
    borderRadius:12,
    borderWidth:2,
    borderColor:"#d0d7de"
  }
})
