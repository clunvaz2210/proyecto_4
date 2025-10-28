import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'

export function Horca({vidas}) {

  const horca = [
    require("../assets/ahorcado_0.png"),
    require("../assets/ahorcado_1.png"),
    require("../assets/ahorcado_2.png"),
    require("../assets/ahorcado_3.png"),
    require("../assets/ahorcado_4.png"),
    require("../assets/ahorcado_5.png"),
    require("../assets/ahorcado_6.png"),
  ]
  const [imagenActual,setImagenActual] = useState(horca[vidas]);

  function cambiarImagen(){
    setImagenActual(vidas+1)
  }

  useEffect(() =>{cambiarImagen()},[vidas])
  
  return (
    <View>
      <Image
      source={imagenActual}
      contentFit='fill'
      style={styles.imagen}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imagen:{
    width:"70%",
    aspectRatio:1,
  }
})