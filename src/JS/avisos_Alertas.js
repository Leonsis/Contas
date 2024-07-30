function alerta2() {
    alert('A Reserva de Emergência agora será sua primeira meta. Por favor, registre a Reserva de Emergência antes de registrar outras metas.');
}

const aviso = document.getElementById('aviso')
function alerta() {
    aviso.classList.remove(
'd-none');
}

function remuveAlerta() {
    aviso.classList.add('d-none');
}