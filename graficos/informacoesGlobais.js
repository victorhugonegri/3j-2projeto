const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
 
 async function visualizarDadosGlobais(){
    const res = await fetch(url);
    const secao = document.querySelector('.graficos-container')
    const dados = await res.json();
    const totalPessoasMundo = dados.total_pessoas_mundo
    const totalPessoasConectados = dados.total_pessoas_conectadas
    const tempoMedio = dados.tempo_medio
    console.log(dados);
    console.log(tempoMedio)
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('grafico-texto')
    paragrafo.innerHTML = `você sabia que o mundo tem ${totalPessoasMundo}de habitantes e destes ${totalPessoasConectados} estão conectadas a alguma rede social e ficam em média ${tempoMedio} conectadas.`
    secao.appendChild(paragrafo)
}

visualizarDadosGlobais();