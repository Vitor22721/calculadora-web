// Função para adicionar números e operadores ao visor
function adicionar(valor) {
    document.getElementById('visor').value += valor;
}

// Função para calcular a expressão no visor
function calcular() {
    try {
        let expressao = document.getElementById('visor').value;
        let resultado = Function('"use strict"; return (' + expressao + ')')();
        document.getElementById('visor').value = resultado;
    } catch {
        document.getElementById('visor').value = 'Erro';
    }
}

// Função para limpar o visor
function limpar() {
    document.getElementById('visor').value = '';
}
