const qMetas = document.getElementById('qMetas');
const valor = document.getElementById('valor');
const radios = document.getElementsByName('decisao');
let valorSelecionado = null;
let m = 0;
let n = 0;
let grauMeta = 0;

function entrada_dados(event){
    if(qMetas.value === '') {
        event.preventDefault();
        qMetas.classList.remove('bordai');
        qMetas.classList.add('erro');
        qMetas.placeholder = 'Valor invalido';
    } else {
        if(valor.value === ''){
            event.preventDefault();
            valor.classList.remove('bordai');
            valor.classList.add('erro');
            valor.placeholder = 'Valor invalido';
        } else {
    
            radios.forEach(function(radio) {
                if(radio.checked) {
                    valorSelecionado = radio.value;
                }
            });

            valorSelecionado = parseInt(valorSelecionado);
            if(m > 0) {
                valorSelecionado = 0;
            }
            if(valorSelecionado != 1 && valorSelecionado != 0) {
                event.preventDefault();
                let elemento = document.getElementById('opcao');
                elemento.classList.add('erro');
            } else {
                if(valorSelecionado === 1) {
                    m += 1;
                    obs.classList.add('d-none');
                    boxNome.classList.remove('d-none');
                    boxValorMeta.classList.remove('d-none');
                    n += 1;
                    
                    qMetas.classList.remove('erro');    
                    qMetas.classList.add('bordai');

                    valor.classList.remove('erro');
                    valor.classList.add('bordai');

                    let elemento3 = document.getElementById('opcao');
                    elemento3.classList.remove('erro');
                    
                    registraDados(event, nomeMeta, valorMeta, n, valorSelecionado);
                } else {
                    if(document.getElementById('nomeMeta').value === '') {
                        event.preventDefault();
                        let elemento = document.getElementById('nomeMeta');
                        elemento.value = '';
                        elemento.classList.remove('bordai');
                        elemento.classList.add('erro');
                        elemento.placeholder = 'Valor invalido';
                    } else  if(document.getElementById('valorMeta').value === '' || document.getElementById('valorMeta').value < 0) {
                        event.preventDefault();
                        let elemento = document.getElementById('valorMeta');
                        elemento.value = '';
                        elemento.classList.remove('bordai');
                        elemento.classList.add('erro');
                        elemento.placeholder = 'Valor invalido';
                    } else {
                        nomeMeta = document.getElementById('nomeMeta').value;
                        valorMeta = parseFloat(document.getElementById('valorMeta').value);
                        document.getElementById('nomeMeta').value = '';
                        document.getElementById('valorMeta').value = '';
                        
                        n += 1;
                        
                        qMetas.classList.remove('erro');
                        qMetas.classList.add('bordai');

                        valor.classList.remove('erro');
                        valor.classList.add('bordai');

                        let elemento3 = document.getElementById('opcao');
                        elemento3.classList.remove('erro');

                        let elemento4 = document.getElementById('nomeMeta');
                        elemento4.classList.remove('erro');
                        elemento4.placeholder = 'Meta';
                        elemento4.classList.add('bordai');

                        let elemento5 = document.getElementById('valorMeta');
                        elemento5.classList.remove('erro');
                        elemento5.placeholder = '200.00';
                        elemento5.classList.add('bordai');
                        
                        registraDados(event, nomeMeta, valorMeta, n, valorSelecionado);
                    }    
                }
            }
        }
    }
}

function registraDados(event, nomeMeta, valorMeta, n, valorSelecionado) {
    qMetas.setAttribute('readonly', true);
        
    valor.setAttribute('readonly', true);

    event.preventDefault();// Para cortar o evento onclick.
    const div = document.createElement('div');// Criando a tag div
    let mensagem;
    if(valorSelecionado === 1) {
        grauMeta ++;
        mensagem = document.createTextNode(`${grauMeta}º Reserva de emergencia`);
    } else {
        if(n > grauMeta) {
            grauMeta += 1;
        }
        mensagem = document.createTextNode(`${grauMeta}º ${nomeMeta}, Valor: R$${valorMeta}`);
    }
    const bloco = document.querySelector('.bloco');
    bloco.insertAdjacentElement("beforeend", div);
    div.id = 'div' + n;
    div.classList = 'caixa' + n;
    div.classList.add('caixa');
    div.classList.add('col-12');
    div.classList.add('d-flex');
    div.classList.add('justify-content-between');
    div.appendChild(mensagem);

    metas.push(nomeMeta);
    valoresMetas.push(valorMeta);
    
    const span = document.createElement('span');
    const caixa = document.querySelector('.caixa' + n);
    caixa.insertAdjacentElement("beforeend", span);
    span.id = 'botao' + n;
    span.classList = 'botao'; 
    document.getElementById('botao' + n).innerHTML = 'REGISTRADO';

    const botaoP = document.getElementById('botaoP');
    const botaoR = document.getElementById('botaoR');
    if(n == qMetas.value) {
        botaoP.classList.remove('d-none');
        botaoR.classList.add('d-none');
    }
}
