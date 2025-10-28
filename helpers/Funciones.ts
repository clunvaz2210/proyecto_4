const PALABRAS = require("../data/palabras.json");

export function getCategorias(){
    const claves = Object.keys(PALABRAS);
    return claves
}

export function generarPalabraAleatoria(){
    const numeroCategoria = Math.floor(Math.random() * getCategorias.length)

    const categoria = getCategorias()[numeroCategoria]

    const numeroPalabra = Math.floor(Math.random() * PALABRAS[categoria].length);

    const palabra = PALABRAS[categoria][numeroPalabra];

    const objeto = {categoria,palabra}

    return objeto;
}

export function generarDisplayInicial(palabra:string){
    
    let display = "";

    for(let i =0; i<=palabra.length; i++){
        display+="-";
    }
    
    return display;

}

export function realizarIntento(display:string,palabra:string,letra:string){
    
    let cambio = false;
    display = "";

    for(let i = 0;i<=palabra.length;i++){
        
        if(palabra.charAt(i)===letra){
            display+=letra;
            cambio=true;
        }else{
            display+="-"
        }
    }
    return {cambio,display}
}
