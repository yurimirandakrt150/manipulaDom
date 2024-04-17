
let elementoH1 = document.querySelector("h1")
let elementoLista1 = document.getElementById("lista1")
let elementoLista2 = document.getElementById("lista2")
let elementoLista3 = document.getElementById("lista3")
let elementoOl = document.querySelector("ol")
elementoOl.innerHTML = `
<ol "lista">
<li "lista1">Preto</li>
<li "lista2">Rosa</li>
<li "lista3">Roxo</li>

</ol>
<a href="https://prozeducacao.com.br">CLIQUE AQUI PARA ACESSAR O SITE DO PROZ</a>


`
elementoLista1.innerText = "BRANCO"
elementoLista2.innerText = "VERMELHO"
elementoLista3.innerText = "AZUL"
elementoH1.innerText = "Titulo feito atraves do Dom"
