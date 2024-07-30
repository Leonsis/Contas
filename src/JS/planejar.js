let valorMeta;
let metas = [];
let valoresMetas = [];
let a = 0
let grau = [];

function planejar(event) {
    event.preventDefault();
    if(a === 0) {
        let planejamentos = document.getElementById('planejamentos');
        planejamentos.classList.remove('d-none');
        let dados = document.getElementById('dados');
        dados.classList.add('d-none');

        document.getElementById('qMetasSaida').innerHTML = document.getElementById('qMetas').value;
        document.getElementById('valorMes').innerHTML = document.getElementById('valor').value;
        
        radios.forEach(function(radio) {
            if(radio.checked) {
                valorSelecionado = radio.value;
            }
        });
        valorSelecionado = parseInt(valorSelecionado);

        let opcao;
        
        if(valorSelecionado === 1) {
            opcao = 'Sim';
        } else {
            opcao = 'Não';
        }

        document.getElementById('reservaE').innerHTML = opcao;
        let qMetas = document.getElementById('qMetas').value;
        
        for(let b = 1; b <= qMetas; b++) {
            grau.push(b);
        }
        calc(valoresMetas);
        for(let a = 0; a < qMetas; a++) {
            const nav = document.createElement('nav');
            nav.classList.add('col-12');
            const dadosMetas = document.querySelector('.dadosMetas');
            dadosMetas.insertAdjacentElement('beforeend', nav);
            let mensagem;
            if(valorSelecionado === 1) {
                mensagem = document.createTextNode(`${grau[a]}º Reserva de emergencia | Valor a contribuir por mês: R$${valorMetas[0]}`);
                valorSelecionado = 0;
            } else {
                mensagem = document.createTextNode(`${grau[a]}º ${metas[a]}, Valor: R$${valoresMetas[a].toFixed(2)} | Valor a contribuir por mês: R$${valorMetas[a]} | Você irá atingir esta meta em ${meses[a]} meses.`);
            }
            nav.appendChild(mensagem);
        }
        a++;
    }   
}
