function gerarCodigo() {
    console.log("clicou no botao")
}

let endereco = "https://api.groq.com/openai/v1/chat/completions"

let prompt = 'Você é um programador. Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito. Regras de resposta: Responda SOMENTE com HTML e CSS puros. Não use crases, mardown ou explicacoes, não use tags <IMG>. Indentidade visual (capriche e surpreenda): invente uma paleta de cores unica que combine com a essencia do site. escolha uma google font marcante via @import. use emojis grander no lugar de imagens. use css moderno: gradientes, sombras, animacoes sutis, layout generoso, tipografia. Estrutura da pagina: Header com o nome do negocio e menu. Hero impactante com título, subtitulo e botao CTA. Secao de diferenciais com emojis. Depoimento de cliente. Footer com contato. Todo o conteudo em portugues, criativo e especifico para o negocio'

async function gerarCodigo() {

    let textarea = document.querySelector(".texto-pagina ").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": textarea
                },
                {
                    "role": "system",
                    "content": prompt
                }
            ],
        })

    })


    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    let espacoCodigo = document.querySelector(".bloco-codigo")
    let espacoSite = document.querySelector('.bloco-site')

    espacoCodigo.textContent = resultado
    espacoSite.srcdoc = resultado

    console.log(dados)
}


