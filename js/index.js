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
    `1) Bersuit Vergarabat - $2900
    2) DIVIDIDOS - $5000
    3) No te va gustar - $1500
    4) Celia Cruz - $1000

    0) Para finalizar`
  ));

  while(opcionEntrada === 0){
    finalizarCompra()
    alert('Gracias por su compra');
    break;
  }

}

let html = '';
for (let i = 0; i < ticketComprado.length; i++) {
  html += `<div class="card my-2">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${ticketComprado[i].img}" class="img-fluid rounded-start" alt="foto recital">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-center">${ticketComprado[i].nombre}</h5>
                        <div class="linea"></div>
                        <p class="card-text">${ticketComprado[i].info}</p>
                        <div class="lugar row w-100 m-auto  d-flex justify-content-center col text-center">
                            <div class="ubicacion  mb-2 m-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                <p class="card-text">${ticketComprado[i].lugar}</p>
                            </div>
                            <div class="col text-center">
                                <button type="button" class="btn btn-warning btn-lg m-4" data-bs-toggle="modal" data-bs-target="#comprar">Mas Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>`;
}

document.getElementById("cardJs").innerHTML = html;

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
    ticketComprado.push(new Ticket(selectedTicket.id, selectedTicket.nombre, selectedTicket.info, selectedTicket.lugar, selectedTicket.precio * cantEntradas, cantEntradas, selectedTicket.img));
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