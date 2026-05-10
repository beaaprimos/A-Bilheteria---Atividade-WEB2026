const inputNome = document.getElementById('nome');
const botao = document.getElementById('btnadicionar');
const listaUl = document.getElementById('lista'); // Cuidado com a letra maiúscula aqui
const spanContador = document.getElementById('contador');

let convidados = [];

function adicionarConvidado() {
    let nome = inputNome.value.trim(); // .trim() remove espaços vazios acidentais
    nome = nome.toUpperCase();

    // 1. Verificações de interrupção
    if (nome === 'SAIR') {
        alert("Sistema encerrado!");
        botao.disabled = true; // Desabilita o botão como um "break" do sistema
        return;
    }

    if (convidados.length >= 50) {
        alert('Lotação esgotada! Temos 50 inscritos.');
        return;
    }

    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }

    // 2. Adicionar ao Array
    convidados.push(nome);
    inputNome.value = ""; // Limpa o campo para o próximo nome
    inputNome.focus();    // Deixa o cursor pronto para digitar de novo

    // 3. Atualizar a Interface (TUDO ISSO DENTRO DA FUNÇÃO)
    listaUl.innerHTML = ''; // Limpa a lista visual antes de reconstruir
    
    let i = 0;
    while (i < convidados.length) {
        let novoItem = document.createElement('li');
        novoItem.textContent = convidados[i];
        listaUl.appendChild(novoItem);
        i++;
    }

    // 4. Atualiza o contador na tela
    spanContador.textContent = convidados.length;
}

// Conectar o botão à função
botao.onclick = adicionarConvidado;
