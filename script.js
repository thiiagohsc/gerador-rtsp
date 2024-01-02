function criarURLRTSP(usuario, senha, ip, canal, substream) {
    let url = `rtsp://${usuario}:${senha}@${ip}:1554/cam/realmonitor?channel=${canal}&subtype=${substream}`;
    return url;
}

function gerarURLRTSP() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let ip = document.getElementById('ip').value;
    let canal = document.getElementById('canal').value;
    let substream = document.getElementById('substream').value;

    let urlRTSP = criarURLRTSP(usuario, senha, ip, canal, substream);
    document.getElementById('resultado').textContent = urlRTSP;
}