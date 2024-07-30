const obs = document.getElementById('obs');
const boxNome = document.getElementById('boxNome');
const boxValorMeta= document.getElementById('boxValorMeta')
function alerta2() {
    obs.classList.remove('d-none');
    boxNome.classList.add('d-none');
    boxValorMeta.classList.add('d-none');
}

const aviso = document.getElementById('aviso')
function alerta() {
    aviso.classList.remove(
'd-none');
}

function remuveAlerta() {
    aviso.classList.add('d-none');
}