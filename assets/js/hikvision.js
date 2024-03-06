function criarURLRTSP(usuario, senha, ip, porta, stream, canal) {
    let url = `rtsp://${usuario}:${senha}@${ip}:${porta}/Streaming/Channels/${canal}0${stream}`;
    return url;
}

function gerarURLsRTSP() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let ip = document.getElementById('ip').value;
    let porta = document.getElementById('porta').value;
    let stream = document.getElementById('stream').value;
    let canalInicial = parseInt(document.getElementById('canal').value, 10);
    let numCanais = parseInt(document.getElementById('numCanais').value, 10);

    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    for (let i = 0; i < numCanais; i++) {
        let canal = canalInicial + i;
        let urlRTSP = criarURLRTSP(usuario, senha, ip, porta, stream, canal);
        resultadosDiv.innerHTML += `<span>${urlRTSP}</span><br>`;
    }
}