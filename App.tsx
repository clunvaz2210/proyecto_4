import { Alert, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Marcador from './components/Marcador'
import { Horca } from './components/Horca';
import { generarPalabraAleatoria, generarDisplayInicial, realizarIntento } from './helpers/Funciones';
import Teclado from './components/Teclado';

export default function App() {

  const [vidas, setVidas] = useState<number>(0);
  const [display, setDisplay] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [palabra, setPalabra] = useState<string>("");
  const [letrasUsadas, setLetrasUsadas] = useState<string>("");
  const [victorias, setVictorias] = useState<number>(0);
  const [derrotas, setDerrotas] = useState<number>(0);

  function inicializarPartida() {
    const palabra = generarPalabraAleatoria();
    setVidas(6);
    setCategoria(palabra.categoria);
    setPalabra(palabra.palabra);
    setDisplay(generarDisplayInicial(palabra.palabra));
    setLetrasUsadas("");
  }
  useEffect(inicializarPartida, []);

  function victoria(){
    setVictorias(victorias+1);
    Alert.alert(
      "Has ganado",
      "",
      [
        {
          text: "Nueva Partida",
          onPress: () => inicializarPartida(),
        }
      ],
      { cancelable: false }
    )
    
  }
  function derrota(){
    setDerrotas(derrotas+1);
    Alert.alert(
      "Has perdido",
      "La palabra era "+palabra,
      [
        {
          text: "Nueva Partida",
          onPress: () => inicializarPartida(),
        }
      ],
      { cancelable: false }
    )
  }

  function pulsarLetra(letra){
    setLetrasUsadas(letrasUsadas+letra);
    const intento = realizarIntento(display,palabra,letra);
    if(intento.cambio){
      setDisplay(intento.display);
      if(intento.display==palabra){
        victoria();
      }
    }else{
      setVidas(vidas-1);
      if(vidas==1){
        derrota()
      }
    }
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.textoCategoria}>{categoria}</Text>
      <Horca vidas={vidas}/>
      <Teclado pulsarLetra={pulsarLetra} letrasUsadas={letrasUsadas}/>
      <Text style={styles.textoDisplay}>{display}</Text>
      <Marcador victorias={victorias} derrotas={derrotas}/>
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

