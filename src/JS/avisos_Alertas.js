const obs = document.getElementById('obs');
const boxNome = document.getElementById('boxNome');
const boxValorMeta= document.getElementById('boxValorMeta')
function alerta2() {
    obs.classList.remove('d-none');
    boxNome.classList.add('d-none');
    boxValorMeta.classList.add('d-none');
}

function removerAlerta() {
    obs.classList.add('d-none');
    boxNome.classList.remove('d-none');
    boxValorMeta.classList.remove('d-none');
}
