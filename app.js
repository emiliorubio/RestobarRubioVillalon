
// Objetos
class Producto{
    constructor (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
}
// OBJ Comida
const Comida1 = new Producto("Hamburguesa con papas", 7500);
const Comida2 = new Producto("Nuggets con papas" , 5000);
const Comida3 = new Producto("Pizza", 8000);


// OBJ Alcohol
const Aperitivo1 = new Producto("Whisky", 6500);
const Aperitivo2 = new Producto("Mojito Cubano" , 3500);
const Aperitivo3 = new Producto("Michelada" , 3000);


// OBJ Jugos
const Jugo1 = new Producto("Jugo De Naranja" , 2000);
const Jugo2 = new Producto("Jugo De Piña", 2000);
const Jugo3 = new Producto("Jugo De Frutilla", 2000);


// variantes y arrays
const carrito = [];

// Entrada
let seg =prompt("Bienvenido al Restobar! \n Deseas ordenar?");

while(seg != "no"){
let busqueda =Number(prompt("Que deseas ordenar? Elija una opcion \n 1:Comida \n 2:Aperitivo \n 3:Jugos" ));

if (busqueda ==  1){
    Comida()
}else if(busqueda ==  2){
    Aperitivo()
}else if(busqueda ==  3){
    Jugos()
}else alert("tu opcion no es correcta");


// pusheo de objetos en array
function Comida() {
    let opc = Number(prompt("Comida: \n 1.Hamburguesa con papas \n 2.Nuggets con papas \n 3.Pizza"))
    switch (opc) {
        case 1:
            carrito.push(Comida1)
        break;
        case 2:
            carrito.push(Comida2)
        break;
        case 3:
            carrito.push(Comida3)
        break;
    
        default: "tu opcion es incorrecta , vuelve a intentarlo"
            break;
    }
}

function Aperitivo() {
    let opc = Number(prompt("Aperitivo: \n 1.whisky\n 2.Mojito Cubano \n 3.Michelada"))
    switch (opc) {
        case 1:
            carrito.push(Aperitivo1)
        break;
        case 2:
            carrito.push(Aperitivo2)
        break;
        case 3:
            carrito.push(Aperitivo3)
        break;
    
        default: "tu opcion es incorrecta , vuelve a intentarlo"
            break;
    }
    
}

function Jugos() {
    
    let opc = Number(prompt("Jugos: \n 1.Jugo De Naranja \n 2.Jugo De Piña \n 3.Jugo De Frutilla"))
    switch (opc) {
        case 1:
            carrito.push(Jugo1)
        break;
        case 2:
            carrito.push(Jugo2)
        break;
        case 3:
            carrito.push(Jugo3)
        break;
    
        default:alert("Tu opcion es incorrecta")
            break;}
    
}
seg =prompt("Desea seguir comprando?")
}



// muestra de carrito
alert(carrito.forEach((Producto)=>{
        alert(`Tu producto es ${Producto.nombre} y el precio es ${Producto.precio}`)
})
);

let resultado = carrito.reduce((acc,Producto)=>{
    return acc + Producto.precio;
},0);

alert("Precio TOTAL:$" + resultado);

alert("Gracias por tu compra! \n espera en tu mesa")