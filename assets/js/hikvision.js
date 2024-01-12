function criarURLRTSP(usuario, senha, ip, porta, canal, substream) {
    var url = `rtsp://${usuario}:${senha}@${ip}:${porta}/Streaming/Channels/${canal}0${substream}`;
    return url;
}

function gerarURLsRTSP() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var ip = document.getElementById('ip').value;
    var porta = document.getElementById('porta').value;
    var canalInicial = parseInt(document.getElementById('canal').value, 10);
    var numCanais = parseInt(document.getElementById('numCanais').value, 10);

    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    for (var i = 0; i < numCanais; i++) {
        var canal = canalInicial + i;
        var urlRTSP = criarURLRTSP(usuario, senha, ip, porta, canal, 1);
        resultadosDiv.innerHTML += `<p>${urlRTSP}</p>`;
    }
}