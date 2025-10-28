const PALABRAS = require("../data/palabras.json");

export function getCategorias(){
    const claves = Object.keys(PALABRAS);
    return claves
}

export function generarPalabraAleatoria(){
    const numeroCategoria = Math.floor(Math.random() * getCategorias.length)

    const categoria = getCategorias()[numeroCategoria]

    const numeroPalabra = Math.floor(Math.random() * PALABRAS[categoria].length);

    const palabra = (PALABRAS[categoria][numeroPalabra]);

    const objeto = {categoria,palabra}

    return objeto;
}

export function generarDisplayInicial(palabra:string){
    
    let display = "";

    for(let i =0; i<palabra.length; i++){
        display+="-";
    }
    
    
    return display;

}

export function realizarIntento(display,palabra,letra){
    
    
    let cambio = false;
    const nuevoDisplay = [];

    for(let i = 0; i<display.length; i++){
        nuevoDisplay.push(display.charAt(i))
    }
    
    for(let i = 0;i<=palabra.length;i++){
        
        if(palabra.charAt(i)===letra){
            nuevoDisplay[i]=letra;
            cambio=true;
        }
    }
    display=""
    for(let i = 0; i<palabra.length;i++){
        display+=nuevoDisplay[i]
    }
    
    return {cambio,display}
}
