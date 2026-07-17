function executar (event){
    event.preventDefault(); // impede o recerregamento da pagina


    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);

    var area = (base * altura) / 2;

    var resultado = document.getElementById("area");
    resultado.innerHTML = "A área do triângulo é: " + area;
}

function resetar(){

        var resultado = document.getElementById("area");
        resultado.textContent = "";
        resultado.innerHTML = "";
}

