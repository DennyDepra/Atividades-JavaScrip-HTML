function executar (event){
    event.preventDefault(); // impede o recerregamento da pagina

    
    var valortotal = parseInt(document.getElementById("valortotal").value);


    if(valortotal >= 100){
        var desconto = (valortotal * 10) / 100;

        var valorDesconto = valortotal - desconto;
        
        var resultado = document.getElementById("total");
        resultado.innerHTML = `O valor total é: <span style='color: red'> ${valortotal}</span>.`;

        var resultado = document.getElementById("totaldesconto");
        resultado.innerHTML = `Desconto é: <span style='color: red'> ${desconto}</span>.`;

        var resultado = document.getElementById("valorDesconto");
        resultado.innerHTML = `O valor com desconto é: <span style='color: red'> ${valorDesconto}</span>.`;
    }else{
        var resultado = document.getElementById("total");
        resultado.innerHTML = `O valor total é: <span style='color: red'> ${valortotal}</span>.`;

        var gasteMais = document.getElementById("gaste+");
        gasteMais.innerHTML = `Gaste mais <span style='color: red'>${100 - valortotal}</span> reais para ganhar desconto.`;
    }


    
}

function resetar(){

        var total = document.getElementById("total");
        var gasteMais = document.getElementById("gaste+");
        
        var valordesconto = document.getElementById("totaldesconto");
        total.textContent = "";
        total.innerHTML = "";
        gasteMais.textContent = "";
        gasteMais.innerHTML = "";
        total.textContent = "";
        total.innerHTML = "";
        valordesconto.textContent = "";
        valordesconto.innerHTML = "";
}

