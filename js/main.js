let nombre= prompt("ingresa tu nombre")
let apellido= prompt("ingresa tu apellido")
let nombrecompleto= (nombre+ " "+ apellido)

let confirmar= confirm("¿Confirmas que eres apto para realizar compras a traves de este sitio web?");

alert("Usted esta ingresando a nuestra web")

let componente1= "placa madre"
let componente2= "gabiente"
let componente3= "grafica"
let componente4= "memoria"
let componente5= "ram"
let componente6= "procesador"
let componente7= "cooler"
let componente8= "fuente"

function saludar() {
     console.log("Bienvenido a nuestra tienda online de componentes,"+ " "+nombrecompleto);
}
saludar();

const componente = ["placa madre", "procesador", "memoria", "ram"]
componente.push("grafica", "cooler", "fuente", "gabinete" )
componente.sort();
console.log(componente);

function sumar() {
   let componente1= 150000
   let componente2= 30000
   let componente3= 270000
   let componente4= 20000
   let componente5= 50000
   let componente6= 350000
   let componente7= 70000
   let componente8= 80000

   let costo = componente1 + componente2 + componente3 + componente4 + componente5 +componente6+componente7+componente8
   return costo
}
let preciofinal = sumar()
console.log("el precio total del PC es de "+preciofinal)

var descuento = 25000

function discount (preciofinal, descuento){
    let final = preciofinal - descuento
    console.log("el precio final con la rebaja es de "+final)
}
discount(preciofinal, descuento);



