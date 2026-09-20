const btnCrea = document.getElementById("btnCrea");
const pswGen = document.getElementById("pswGen");

const maiuscole = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minuscole = "abcdefghijklmnopqrstuvwxyz";
const numeri = "0123456789";
const simboli = "!£$%&?@#§";
const lunghezza = 8;

let tuttiCar = maiuscole + minuscole + numeri + simboli;

btnCrea.addEventListener("click", () => {
  let pswIniz = "";

  while (lunghezza > pswIniz.length) {
    pswIniz += tuttiCar[Math.floor(Math.random() * tuttiCar.length)];
  }
  pswGen.value = pswIniz;
});
