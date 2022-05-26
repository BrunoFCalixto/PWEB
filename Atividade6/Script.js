function CalcMedia(){
    var notas = [
            prompt("Nota 1:"),
            prompt("Nota 2:"),
            prompt("Nota 3:") ];

    var notaTotal = 0;
    var nNota = 0;

    for (var i = 0; i < notas.length; i++)
    {
        var nota = parseFloat(notas[i]);

        if (!isNaN(nota)){
            
            nNota++;
            if (nota < 0 || nota > 10){
                alert("Não é possível adicionar a nota " + nNota + ", digite um número entre 0 e 10");
                return;
            }
            
            notaTotal += nota;
        }
                
    }

    alert("Nota total : " + (notaTotal/notas.length).toFixed(2));
}


function CalcOperacao(){
    var numeros = [
        prompt("Números 1:"),
        prompt("Números 2:")
    ];

    var numeroFloat = [0,0]

    for (var i = 0; i < numeros.length; i++)
    {
        var numero = parseFloat(numeros[i]);

        if (isNaN(numero)){
            alert("Número " + i+1 + " inválido.");
            return;
        }

        numeroFloat[i] = numero;
    }

    alert(
        "A soma dos dois é: " + (numeroFloat[1] + numeroFloat[0]) + "\n" +
        "A subtração do primeiro pelo segundo é: " + (numeroFloat[0] - numeroFloat[1]) + "\n" +
        "O produto dos dois: " + (numeroFloat[1] * numeroFloat[0]) + "\n" +
        "A divisão do primeiro pelo segundo: " + (numeroFloat[0] / numeroFloat[1]) + "\n" +
        "O resto da divisão do primeiro pelo segundo: " + (numeroFloat[0] % numeroFloat[1])
    );
}