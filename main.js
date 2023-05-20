/* primera pre entrega

function saludo(){
    alert("BIENVENIDO A NUESTRA WEB DE COMPRA SMART TV SAMSUNG ONLINE ")
}
saludo()

let nombreUsuario = prompt("INGRESE SU NOMBRE Y APELLIDO")

function nombre(nombre){
    alert("HOLA " + nombreUsuario + " A CONTINUACION INGRESE SU PEDIDO (PARA SALIR ESCRIBA LA PALABRA ESC)")

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

*/


// segunda pre entrega

class Pedido{
    constructor(cliente,direccion,pulgada,cantidad){
        this.cliente = cliente
        this.direccion = direccion
        this.pulgada = pulgada
        this.cantidad= cantidad
        
    }
    
}
const pedidos = []
let continuar = true

function saludo(){
    alert("BIENVENIDO A NUESTRA WEB DE COMPRA SMART TV ONLINE ")
}
saludo()

while(continuar===true){
    const cliente = prompt("INGRESE SU NOMBRE Y APELLIDO")
    const direccion = prompt("INGRESE SU DIRECCION PARA EL ENVIO")
    const pulgada = parseFloat( prompt("INGRESE LAS PULGADAS"))
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
    const cantidad = parseFloat(prompt("CANTIDAD"))
    
    const pedido = new Pedido(cliente,direccion,pulgada,cantidad)
    pedidos.push(pedido)
    alert(cliente + " SU DIRECCION DE ENVIO ES " + direccion + " , LA PULGADA DE SU SMART TV ES  " + pulgada + "' cantidad  " + cantidad)
    continuar=confirm("QUIERE CARGAR MAS PEDIDOS")
}
console.log(pedidos)

continuar=confirm("QUIERE ELIMINAR ALGO DE SU PEDIDO")
while(continuar===true){
    const eliminarPulgadas =parseFloat( prompt("INGRESE LAS PULGADAS"))
    const index = pedidos.findIndex((pedido)=> pedido.pulgada === eliminarPulgadas)
    if(index != -1){
        pedidos.splice(index,1)
        alert("SE ELIMINO SU PEDIDO")
    }
    continuar=confirm("QUIERE ELIMINAR ALGO MAS DE SU PEDIDO")
}