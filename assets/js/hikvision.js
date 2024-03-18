// Funções e metodos para Gerar RTSPs
function criarURLRTSP(usuario, senha, ip, porta, canal, substream) {
    let url = `rtsp://${usuario}:${senha}@${ip}:${porta}/Streaming/Channels/${canal}0${substream}`;
    return url;
}

function gerarURLsRTSP() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let ip = document.getElementById('ip').value;
    let porta = document.getElementById('porta').value;
    let canalInicial = parseInt(document.getElementById('canal').value, 10);
    let numCanais = parseInt(document.getElementById('numCanais').value, 10);

    let resultadosRtspDiv = document.getElementById('resultadosRTSP');
    resultadosRtspDiv.innerHTML = '';

    for (let i = 0; i < numCanais; i++) {
        let canal = canalInicial++;
        let urlRTSP = criarURLRTSP(usuario, senha, ip, porta, canal, 1);
        resultadosRtspDiv.innerHTML += `<span>${urlRTSP}</span>`;
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
