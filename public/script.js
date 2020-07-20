      function limpar() {
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
      }
      function imc() {
        //Solicita ao usuário o valor de peso e altura
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        //somar  peso e altura
        let resultado =
          parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        //imprimir no console o resultado
        console.log(resultado);
        document.getElementById("resultado").innerHTML =
          "Seu IMC é de: " + resultado;
      }