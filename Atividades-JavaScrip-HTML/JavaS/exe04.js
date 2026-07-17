function executar (event){
    event.preventDefault(); // impede o recerregamento da pagina


    var anos = parseInt(document.getElementById("anos").value);
    var meses = parseInt(document.getElementById("meses").value);
    var dias = parseInt(document.getElementById("dias").value);

    meses = (anos * 12);
    dias = (anos * 365);

    var resultado = document.getElementById("meses");
    resultado.innerHTML = `O número de meses é: <span style='color: red'> ${meses} </span> meses.`;
    var resultado = document.getElementById("dias");
    resultado.innerHTML = `O número de dias é: <span style='color: red'> ${dias} </span> dias.`;
    
}

function resetar(){

        var meses = document.getElementById("meses");
        var dias = document.getElementById("dias");
        meses.textContent = "";
        meses.innerHTML = "";
        dias.textContent = "";
        dias.innerHTML = "";
}

