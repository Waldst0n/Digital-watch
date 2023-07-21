const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");

function pegaHora() {
  const data = new Date();

  let horaAtual = data.getHours();
  let minutoAtual = data.getMinutes();
  let segundoAtual = data.getSeconds();

  if (segundoAtual < 10) {
    segundoAtual = `0${segundoAtual}`;
  }
  if (minutoAtual < 10) {
    minutoAtual = `0${minutoAtual}`;
  }

  if (horaAtual < 10) {
    horaAtual = `0${horaAtual}`;
  }

  //console.log(`${horaAtual}:${minutoAtual}:${segundoAtual}`);
  mostraHoras(horaAtual, minutoAtual, segundoAtual);
}

setInterval(pegaHora, 1000);

function mostraHoras(hour, minute, second) {
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
}
