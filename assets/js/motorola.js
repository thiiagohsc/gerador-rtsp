function criarUrlRtsp(usuario, senha, ip, porta, canal) {
    let url = `rtsp://${usuario}:${senha}@${ip}:${porta}/profile${canal}`;
    return url;
}

function gerarURLsRTSP() {
    let usuario = document.querySelector('#usuario').value;
    let senha = document.querySelector('#senha').value;
    let ip = document.querySelector('#ip').value;
    let porta = document.querySelector('#porta').value;
    let canalInicial = parseInt(document.querySelector('#canal').value);
    let numCanais = parseInt(document.querySelector('#numCanais').value);

    let resultadosRtspDiv = document.getElementById('resultadosRTSP');
    resultadosRtspDiv.innerHTML = '';

    for (let i = 0; i < numCanais; i++) {
        let canal = canalInicial + i;
        let urlRTSP = criarUrlRtsp(usuario, senha, ip, porta, canal, 1);
        resultadosRtspDiv.innerHTML += `<span>${urlRTSP}</span><br>`;
    }
}

// Funções e metodos para Gerar Nomes

function criarNomes(organizacao, unidade, equipamento, camera){
    let nomegerado = `${organizacao}-${unidade}-${equipamento}-CAM0${camera}`;
    return nomegerado;
}

function gerarNomes() {
    let organizacao = document.querySelector("#organizacao").value;
    let unidade = document.querySelector("#unidade").value;
    let equipamento = document.querySelector("#equipamento").value;
    let cameraInicial = document.querySelector("#camera").value;
    let numCameras = parseInt(document.querySelector("#numCameras").value);

    let resultadosCamDiv = document.querySelector("#resultadosCAM");
    resultadosCamDiv.innerHTML = "";

    for(let i = 1; i <= numCameras; i++) {
        let camera = cameraInicial++;
        let nomeCamera = criarNomes(organizacao, unidade, equipamento, camera);
        resultadosCamDiv.innerHTML += `<span>${nomeCamera}</span><br>`
    }

}