/*BIENVENIDA A LA PAGINA DE ICLUB----------------------------------------*/
/*
let nombre =prompt("Ingrese su nombre")
alert("Hola " + nombre + "! Bienvendio/a al mundo Iclub.")
console.log(nombre)

/*CUADRO DE REGISTRO*/
/*
let nombreDeUsuario = prompt ("Ingrese su nombre de usuario")
if (nombreDeUsuario == " ") {
    alert("No ingresaste el nombre de usuario")
} 
else {
    alert("Nombre de usuario "+ nombreDeUsuario)
}
*/
/*CONDICIONAL -------------------------------------------------------------

let edad =prompt("Ingrese su edad")<
if (edad >= 18) {
alert("Gracias por registrarte")
} else if (edad < 18) {
    alert("Para registrarse necesita ser mayor de edad")
} else { 
    alert("Dato incorrecto")
}


let celulares = "Elija el celular que quiere comprar:  \n1 - Iphone 12 Pro Max\n2 - Iphone 12\n3 - Iphone 13 Pro Max\n4 - Iphone 13\n5 - Iphone 14 Pro Max\n6 - Iphone 14\n0 - Exit"
opcionMenu = Number(prompt(celulares))
if(opcionMenu == 1){
    alert("Disponibles en amarillo, rojo y negro. Su precio es de USD 750")
}else if(opcionMenu == 2){
    alert("Disponibles en color blanco, rojo y negro. Su precio es de USD 800")
}
else if(opcionMenu == 3){
    alert("Disponibles en color blanco y negro. Su precio es de USD 850")
}
else if(opcionMenu == 4){
    alert("Disponibles en color negro. Su precio es de USD 900")
}
else if(opcionMenu == 5){
    alert("Disponibles en color azul marino y negro. Su precio es de USD 950")
}
else if(opcionMenu == 6){
    alert("Disponibles en color blanco. Su precio es de USD 1000")
}
else if(opcionMenu == 0){
    alert("¡Gracias por visitarnos, que tengas un excelente día!")
}


/*CICLO -------------------------------------------------------------------*/

/*
let userEnBd = "luli@gmail.com"
let passEnBD = "luli123"
let intentos = 3

let user
let password
    
for(i = 0; i < intentos ; i++){
    user = prompt("Ingrese su nombre usuario: ")
    password = prompt("Ingrese su contraseña: ")
    if(user == userEnBd && password == passEnBD ){
        break
    }
} 
if(user == userEnBd && password == passEnBD){
    alert("Bienvenido! Gracias por registrarse")
} else {
    alert("Usuario y/o contraseña incorrectos")
}

/* FUNCIONES---------------------------------------------------------------*/



/*
let celulares = "Elija el celular que quiere comprar:  \n1 - Iphone 12 Pro Max\n2 - Iphone 12\n3 - Iphone 13 Pro Max\n4 - Iphone 13\n5 - Iphone 14 Pro Max\n6 - Iphone 14\n0 - Exit"
opcionMenu = Number(prompt(celulares))
if(opcionMenu == 1){
    alert("Disponibles en amarillo, rojo y negro. Su precio es de USD 750")
}else if(opcionMenu == 2){
    alert("Disponibles en color blanco, rojo y negro. Su precio es de USD 800")
}
else if(opcionMenu == 3){
    alert("Disponibles en color blanco y negro. Su precio es de USD 850")
}
else if(opcionMenu == 4){
    alert("Disponibles en color negro. Su precio es de USD 900")
}
else if(opcionMenu == 5){
    alert("Disponibles en color azul marino y negro. Su precio es de USD 950")
}
else if(opcionMenu == 6){
    alert("Disponibles en color blanco. Su precio es de USD 1000")
}
else if(opcionMenu == 0){
    alert("¡Gracias por visitarnos, que tengas un excelente día!")
}



let medioPago = Number(prompt("¿Como desea abonar?:  \n1 - efectivo\n2 - tarjeta"))
carrito(opcionMenu, medioPago)    
    
    function carrito(celular, mPago){
        let precio = 0
         if(celular == "1"){
            precio = 750
        } else if(celular == "2"){
            precio = 800
        }else if(celular == "3"){
            precio = 850
        }else if(celular == "4"){
            precio = 900
        }else if(celular == "5"){
            precio = 950
        }else if(celular == "6"){
            precio = 1000
        }        
        let descuento = 0
        if(mPago == "1"){
            descuento = 0.10
        } else if(mPago == "2"){
            descuento = 0
        }
        
        alert("Total a pagar: USD "+ String(precio - (precio * descuento)) )        
    }
    */

    //SEGUNDA PRE ENTREGA -------------------------------------------------------------------------------------------------------------------------------------------------------------

    /*let celulares = ["Iphone 11", "Iphone 12", "Iphone 13", "Iphone 14"]
alert("Tenemos en stock " + celulares.length + " "+"modelos de Iphones")
alert("Los modelos disponibles son " + celulares.join(", ") + " Para mas consultar comunicate a nuestro wpp")*/


/*Para consultar stock
let celulares = ["Iphone 11", "Iphone 12", "Iphone 13", "Ihpone 14"]
let iphone = prompt("Ingrese celular para consultar stock")
if (celulares.indexOf(iphone) != -1) {
    alert(" Tenemos lo que busca en stock")
} else {
    alert("No tenemos lo que busca en stock")
} */

const products = [
    {id:1, iphone:"Iphone", modelo: "13 Pro Max blue", precio: 150.00, anio: 2022},
    {id:2, iphone:"Iphone", modelo: "13 Pro Max gold", precio: 150.000, anio: 2022},
    {id:3, iphone:"Iphone",modelo: "13 Max gold green", precio: 150.000, anio: 2022},
    {id:4, iphone:"Iphone", modelo: "12 black", precio: 100.000, anio: 2020},
    {id:5, funda:"Funda blanca", precio: 150.000},
    {id:6, funda:"Funda aqua", precio: 150.000},
    {id:7, funda:"Funda rosa", precio: 150.000},
    {id:8, funda:"Funda Pride", precio: 150.000},
    {id:9, accesorios:"Cargador 20w", precio: 5.000},
    {id:10, accesorios:"Airpods", precio: 3.000},
    {id:11, accesorios:"Come cable para cargador Toy Story", precio: 1.000},
    {id:12, accesorios:"Come cable para cargador perrito", precio: 1.000},
]
console.log(products)

//Ordenar por precios
let preciosProducts = [150.000, 100.000, 5.000, 3.000, 1.000];
preciosProducts.sort(function(a, b) {
  return a - b;
});
console.log(preciosProducts);

//Filtrar por modelos mas nuevos

let ultimoModelo = products.filter(products => products.anio >= 2022);
console.log(ultimoModelo)

//Filtrar por categoria

let categoriaCelular = products.filter(products => products.iphone == "Iphone")
console.log(categoriaCelular)
let categoriaAccesorios = products.filter(products => products.iphone !== "Iphone")
console.log(categoriaAccesorios)

/*
class producto {
    static contadorProductos = 0

    constructor(nombre, precio){
        this._idProducto = ++products.contadorProductos
        this._nombre = nombre
        this._precio= precio
    }
    get _idProducto(){
        return this._idProducts
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre= nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio= precio
    }
    
    toString(){
        return  "idProducto: ${this._idProducto}, nombre:  ${this._nombre}, precio:  ${this._precio} ";
    }
}

class orden {
    static contadorOrdenes = 0

    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get inOrden(){
        return this._inOrden
    }
    agregarProducto(producto){
        if (this._productos.length < orden.MAX_PRODUCTOS){
        this._productos.push (producto)
        this._productos (this._contadorProductosAgregados++) = producto
        } else {
            console.log("No se pueden agregar mas productos")        }
    }
    calcularTotal(){
        let totalVenta = 0
        for (let producto of this._productos){
            totalVenta += producto.precio;//totalVenta = totalVenta + producto.precio
        }
        return totalVenta
    }
    mostrarOrden(){
        let productosOrden = " ";
        for (let producto of this._productos){
            productosOrden += producto.toString() + " "
        }
        console.log( " Orden " $(this._idOrden) "Total" $(this.calcularTotal() "Productos: " $(productosOrden)));
    }
}

let producto1 = new producto ("Iphone 12", 100.000)
let producto2 = new producto ("Iphone 13", 150.000)
*/
