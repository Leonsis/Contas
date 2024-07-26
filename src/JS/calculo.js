const valorMetas = [];
function calc() {
    const qMetas = parseInt(document.getElementById('qMetas').value);
    const valorTotal = parseFloat(document.getElementById('valor').value);
    const somaPrioridades = grau.reduce((acc, curr) => acc + curr, 0);
    radios.forEach(function(radio) {
        if(radio.checked) {
            valorSelecionado = radio.value;
        }
    });
    valorSelecionado = parseInt(valorSelecionado);
    if(valorSelecionado === 1 && qMetas === 1) {
        valorMetas.push(valorTotal);
    } else {
        for (let i = 0; i < qMetas; i++) {
            const proporcao = grau[i] / somaPrioridades;
            const valorMeta = proporcao * valorTotal;
            valorMetas.push(valorMeta.toFixed(2));
        }
        valorMetas.sort((a, b) => b - a);
    }
    console.log(grau);
    console.log(valorMetas);
}