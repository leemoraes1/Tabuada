function gerar() {
    // Obtendo o elemento de entrada do número
    var inputNumero = document.getElementById("num");

    //convertendo para inteiro
    var numero = parseInt(inputNumero.value);

    // Verificando se o valor
    if (Number.isInteger(numero)) {
        var selectTabuada = document.getElementById("tad");
        selectTabuada.innerHTML = ''; // Limpa o conteúdo anterior

        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            var option = document.createElement("option");
            option.text = numero + " x " + i + " = " + resultado;
            selectTabuada.add(option);
        }
    } else {
        // Se não for um número inteiro, exibir uma mensagem de erro
        alert("Por favor, insira um número inteiro!");
    }
}
