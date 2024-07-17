function calcular() {
  let operando1 = document.getElementById("operando1").value;
  let operador2= document.getElementById("operando2").value;
  let operador = document.getElementById("operador").value;
  let resultado = document.getElementById("resultado");


  let op1= Number(operando1);
  let op2= Number(operador2);

  if(operando1 == "" || operando2 == ""){
    window.alert("Por favor, preencha todos os campos");
  }

  resultado.innerHTML="O resultado é: ";
  if(operador == "soma")
    resultado.innerHTML += op1 + op2;
  if(operador == "subtracao")
    resultado.innerHTML+=op1-op2;
  if(operador == "multiplicacao")
    resultado.innerHTML+=op1*op2;
  if(operador == "divisao")
    resultado.innerHTML+=op1/op2;
  if(operador == "potencia")
    resultado.innerHTML+=op1**op2;

}

function limpar(){
  let operando1 = document.getElementById("operando1");
  let operando2 = document.getElementById("operando2");
  let operador = document.getElementById("operador");
  let resultado = document.getElementById("resultado");

  operando1.value = "";
  operando2.value = "";
  operador.value = "";
  resultado.innerHTML = "Calculando...";
}