function executar (event){
    event.preventDefault(); // impede o recerregamento da pagina


    var A = parseInt(document.getElementById("varA").value);
    var B = parseInt(document.getElementById("varB").value);

    [A, B] = [B, A];

    var resultado = document.getElementById("IDresultadoA");
    resultado.innerHTML = "Variável<span style='color: red'> A:</span> " + A;
    var resultado = document.getElementById("IDresultadoB");
    resultado.innerHTML = "Variável<span style='color: red'> B:</span> " + B; 
    
}

function resetar(){

        var IDresultadoA = document.getElementById("IDresultadoA");
        var IDresultadoB = document.getElementById("IDresultadoB");

        IDresultadoA.textContent = "";
        IDresultadoA.innerHTML = "";
        IDresultadoB.textContent = "";
        IDresultadoB.innerHTML = "";
}

