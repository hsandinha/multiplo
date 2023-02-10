function somatorio() {
  var num1= document.getElementById('numero1').value;

let somatorio = 0;
for (let i = 0; i < num1; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    somatorio +=i;
  }
}
document.getElementById("somatorio").innerHTML = somatorio;
}