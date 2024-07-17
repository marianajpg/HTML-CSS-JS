let contagem = 1;

function add_operando() {
  let numeros = document.getElementById("numeros");
  contagem += 1;

  let novoOperandoDiv = document.createElement('div');
  novoOperandoDiv.innerHTML = `
    <p>${contagem}º operando <input type="number" name="operando" id="operando${contagem} " ></p>
  `;
  numeros.appendChild(novoOperandoDiv);

}

function calcular() {
  let operador = document.getElementById("operador").value;
  let resultado = 0;
  let inputs = document.querySelectorAll("input[type='number']");
  let operandos = [];
  let alerta = document.getElementById("alerta");
  

  for (let i = 0; i < inputs.length; i++){
    if (inputs[i].id!="operando1" || inputs.length>1){
      if (inputs[i].value === "" || inputs[i].value === null){
        let divPai = inputs[i].closest('div'); 
        if (divPai) {
          divPai.remove();
        }
        contagem--;
        alerta.innerHTML= "Operando foi removido por falta de preenchimento";
      }
    }
  }

  inputs.forEach(input => {
    operandos.push(Number(input.value));
  })
  
  if (operador === "soma") {
    for (let i = 0; i < operandos.length; i++){
      resultado += operandos[i];
    }
  }
  if (operador === "subtracao"){
    resultado = operandos[0];
    for (let i = 0; i < operandos.length; i++) {
      resultado -= operandos[i];
    }
  }
  if (operador === "multiplicacao") {
    resultado=1;
    operandos.forEach(valor => {
      resultado *= valor;
    });
  }

  if (operador === "divisao"){
    resultado = operandos[0];
    for (let i = 1; i < operandos.length; i++) {
      resultado /= operandos[i];
    }
  }

   document.getElementById("resultado").innerHTML = `Resultado é: ${resultado}`;

}

function limpar(){
  let operando = document.querySelectorAll("input[name='operando']");
  let operador = document.getElementById("operador");
  let resultado = document.getElementById("resultado");
  let alerta = document.getElementById("alerta");
  let inputs = document.querySelectorAll("input[type='number']");

  for (let i = 0; i < inputs.length; i++){
    if (inputs[i].id!="operando1" || inputs.length>1){
      let divPai = inputs[i].closest('div'); 
      if (divPai) {
        divPai.remove();
      }
      contagem--;
    }
  }

  operando.forEach(input => {
    input.value = "";
  })
  operador.value = "";
  alerta.innerHTML= "";
  resultado.innerHTML = "Calculando...";
}