alert("Bienvenidos a pampaTicket!");

class Ticket {
  constructor(id, nombre, info, lugar, precio, stock, img) {
    this.id = id;
    this.nombre = nombre;
    this.info = info;
    this.lugar = lugar;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
  }
}

const ticket1 = new Ticket(1, "Bersuit Vergarabat", "Presentando su gira 2022 se presenta el 4 de Junio a las 16:00 Hs con un show único e irrepetible.", "Club All-Boys", 2900, 300, "img/recital1.jpg");
const ticket2 = new Ticket(2, "DIVIDIDOS", "Vuelve al Club Estudiantes por 5ta vez el próximo 27 de junio con un show NO APTO PARA MENORES DE 7 AÑOS", "Club Estudiante", 5000, 100, "img/recital2.jpg");
const ticket3 = new Ticket(3, "No te va gustar", "No Te Va Gustar se presentan en el Microestadio Municipal el próximo 10 de agosto a las 20hs con bandas soporte.", "Microestadio Municipal",  1500, 400, "img/recital3.jpg");
const ticket4 = new Ticket(4, "Celia Cruz", "Por primera vez en Santa Rosa. A días de arrancar la caravana de 10 Gran Rex agotados y con un recorrido de punta a punta por el país.", "Club Estudiante", 1000, 200, "img/recital6.jpg");

const entradas = [];
entradas.push(ticket1,ticket2,ticket3,ticket4);

let opcionEntrada = Number(
    prompt(
      `1) Bersuit Vergarabat - $2900
      2) DIVIDIDOS - $5000
      3) No te va gustar - $1500
      4) Celia Cruz - $1000

      0) Para finalizar`
    )
);
const ticketComprado = [];

while(opcionEntrada != 0){
  if (opcionEntrada) {
      comprar(opcionEntrada);
  }

  opcionEntrada = Number(prompt(
    `1) Babasonicos - $2900
    2) El Mato - $5000
    3) Tren Loco - $1500
    4) Celia Cruz - $1000

    0) Para finalizar`
  ));

  while(opcionEntrada === 0){
    finalizarCompra()
    alert('Gracias por su compra');
    break;
  }

}

function comprar(opcionEntrada) {
  const selectedTicket = entradas.find(
    (entrada) => entrada.id === opcionEntrada
  );
  alert(`Usted ha seleccionado entradas de ${selectedTicket.nombre}`); //Luego uso selectedTicket para mostrar los datos

  let cantEntradas = Number(prompt(`cantidad de entradas para ${selectedTicket.nombre}`));
  if(cantEntradas > selectedTicket.stock){
    alert(`No hay stock suficientes, solo quedan ${selectedTicket.stock} entradas`);
  }else {
    let id = opcionEntrada - 1;
    entradas[id].stock = entradas[id].stock - cantEntradas;
    ticketComprado.push(new Ticket(selectedTicket.id, selectedTicket.nombre, selectedTicket.precio * cantEntradas, cantEntradas));
  }
}

function finalizarCompra(){
  let cont = 0;
  for(let i = 0; i < ticketComprado.length; i++){
      alert(`Compro entradas de ${ticketComprado[i].nombre}
              Cantidad: ${ticketComprado[i].stock}
              Precio Total: $${ticketComprado[i].precio}`);
      cont += ticketComprado[i].precio;
  }
  alert(`Total a pagar por todas las entradas es de $${cont}`);
  console.log(ticketComprado);
}

/* Ordenar el array de menor precio a mayor */
const ticketOrdenados =  entradas.sort((a, b) => {
  if (a.precio > b.precio) {
      return 1;
  }
  if (a.precio < b.precio) {
      return -1;
  }
  return 0;
})

console.log(ticketOrdenados);