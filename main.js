
function saludo(){
    alert("BIENVENIDO A NUESTRA WEB DE COMPRA SMART TV  ONLINE ")
}
saludo()

let nombreUsuario = prompt("INGRESE SU NOMBRE Y APELLIDO")

function nombre(nombre){
    alert("HOLA " + nombreUsuario + " A CONTINUACION INGRESE QUE MARCA DECEA COMPRAR")
}
nombre()

let nombreProducto = prompt("ESCRIBA EL NOMBRE DE LA MARCA DE SU SMART TV: SAMSUM O LG (PARA SALIR ESCRIBA LA PALABRA ESC)")

while(nombreProducto != "esc"){
    let cantidadProducto = parseFloat(prompt("CANTIDAD"))
    let pulgada = parseFloat(prompt("PULGADA= 32', 55', 65', 75'"))
    
    if (pulgada<=32){
     alert("el valor de smart tv 32' es de : $120000")
    }else if (pulgada<=55){
        alert("el valor de smart tv 55' es de : $180000")
    }else if (pulgada<=65){
        alert("el valor de smart tv 65' es de : $200000")
    }else if (pulgada<=75){
        alert("el valor de smart tv 75' es de : $250000")
    }else if (pulgada<=78){
        alert("ese producto no existe")
    }
    console.log("el usuario " + nombreUsuario + " quiere comprar el producto smart TV: " + nombreProducto + " , cantidad: " + cantidadProducto + " pulgadas " + pulgada)
    alert(nombreUsuario + " SU PEDIDO ES un smart tv " + nombreProducto + " , de " + pulgada + "' cantidad  " + cantidadProducto)
    nombreProducto = prompt("ESCRIBA EL NOMBRE DE LA MARCA DE SU SMART TV (PARA SALIR ESCRIBA LA PALABRA ESC)")
}
