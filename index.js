/*Array de objetos c/destinos a elegir*/
const lugares= [
  {id:1, nombre:"bariloche",precio:50000},
  {id:2,nombre:"cataratas",precio:30000}, 
  {id:3,nombre: "catamarca",precio:70000}
];

/*definimos variales*/

let bariloche =50000;
let cataratas= 45000;
let catamarca=55000;
let costo;
let total;
let descuento= 123;
let numeroDePasajeros;
let nombre;
let numeroDeTarjeta;
let tarjeta;
let pasajeros;

/*Filtrar por precio los destinos disponibles */
let precio= parseInt(prompt("Ingrese un precio para encontrar su destino más conveniente a partir de 70000"))
let filtrados = lugares.filter(item => item.precio<= precio);
  filtrados.forEach (item => {
      let mensaje =`
      id: ${item.id}
      nombre: ${item.nombre}
      precio: ${item.precio}
      `;
      alert(mensaje);
  } )

/* Agregamos elementos HTML con la función getElementById*/

let contenedor = document.getElementById("bienvenidos");
alert("Los destinos disponibles por el momento son: Bariloche, Cataratas y Catamarca - ¡Con tu código promocional hasta 50%  de descuento HotSale!");

let destino = prompt("Ingrese el destino deseado").toLowerCase();
if (destino === "bariloche") {
  contenedor.innerHTML = "<h1>Muhcas gracias por elegir Norte Viajes</h1>";
} else if (destino === "catamarca") {
  contenedor.innerHTML = "<h1>Muhcas gracias por elegir Norte Viajes</h1>";
} else if (destino=== "cataratas"){
  contenedor.innerHTML = "<h1>Muhcas gracias por elegir Norte Viajes</h1>";
}else{
  contenedor.innerHTML = "<h1>Su destino no está diponible</h1>";
} 

if (destino !="bariloche" && destino != "cataratas" && destino != "catamarca"){
          alert("Destino inválido");}
          else if (destino==='bariloche'){
              alert("El precio del destino elegido es de $"+ lugares[0].precio);
              let pasajeros= prompt('Ingrese la cantidad de pasajeros');
              alert ("Confirma que desea añadir en su carrito el viaje seleccionado");
                  nombre = prompt ("Ingrese su nombre y apellido");
                  numeroDeTarjeta = prompt ("Ingrese su numero de tarjeta");
                  tarjeta= parseInt (numeroDeTarjeta);
                  numeroDePasajeros= parseInt (pasajeros);
          }
          else if (destino==='catamarca'){
              alert("El precio del destino elegido es de $"+ lugares[1].precio);
              let pasajeros= prompt('Ingrese la cantidad de pasajeros');
              alert ("Confirma que desea añadir en su carrito el viaje seleccionado");
                  nombre = prompt ("Ingrese su nombre y apellido");
                  numeroDeTarjeta = prompt ("Ingrese su numero de tarjeta");
                  tarjeta= parseInt (numeroDeTarjeta);
                  numeroDePasajeros= parseInt (pasajeros);
          }
          else if (destino ==='cataratas'){
              alert("El precio del destino elegido es de $"+ lugares[2].precio);
              let pasajeros= prompt('Ingrese la cantidad de pasajeros');
              alert ("Confirma que desea añadir en su carrito el viaje seleccionado");
                  nombre = prompt ("Ingrese su nombre y apellido");
                  numeroDeTarjeta = prompt ("Ingrese su numero de tarjeta");
                  tarjeta= parseInt (numeroDeTarjeta);
                  numeroDePasajeros= parseInt (pasajeros);
          }else ("Debe colocar un destino válido para continuar");



/* Definimos función de descuento más impuestos*/
function PrecioNeto(precio) {
  let impuestos = 1.21;
  let descuentos= costo/2;
  return ( precio * impuestos ) - descuentos;
}
/*Definimos función sin descuento más impuestos */
function SinDescuento (precio) {
  let impuestos = 1.21;
  return (precio * impuestos);
}

/*Procesamos la compra con o sin descuento e impuestos*/

if (destino=="bariloche"){
  costo= bariloche * numeroDePasajeros;
  alert ("Hola " + nombre +" su costo de viaje es: $"+ costo);
      let codigoDedescuento= prompt("Ingrese un código de descuento");
      /*Calcular valor final de un producto seleccionado llamando a la función de descuentos. */
      if (codigoDedescuento==descuento){
      total=PrecioNeto(costo);
      alert ("su costo con descuento es: $ "+ total);
      alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes");
      } else alert("Su costo sin descuento es :$"+ SinDescuento(costo));
             alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes"); 
}else if (destino==="cataratas"){
  costo = cataratas*numeroDePasajeros;
  alert ("Hola " + nombre +" su costo de viaje es: $"+ costo)
      let codigoDedescuento= prompt("Ingrese un código de descuento");
      /*Calcular valor final de un producto seleccionado en función de descuentos. */
      if (codigoDedescuento==descuento){
      total=PrecioNeto(costo);
      alert ("su costo con descuento es: $"+ total)
      alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes");
      } else alert("Su costo sin descuento es :$"+ SinDescuento(costo)); 
      alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes"); 
}else if (destino=== "catamarca"){
  costo= catamarca*numeroDePasajeros;
  alert ("Hola "+ nombre +" su costo de viaje es $:"+ costo)
      let codigoDedescuento= prompt("Ingrese un código de descuento");
      /*Calcular valor final de un producto seleccionado en función de descuentos. */
      if (codigoDedescuento==descuento){
      total=PrecioNeto(costo);
      alert ("su costo con descuento es: $"+ total)
      alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes");
      }else alert("Su costo sin descuento es :$"+ SinDescuento(costo)); 
      alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes"); 
}else alert("ningun destino es correcto");







  