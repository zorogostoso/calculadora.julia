document.addEventListener('DOMContentLoaded', (event) => {
    const resultado = document.getElementById('resultado');
    let expression = '';
    
    // Função para atualizar o visor
    function updateDisplay(value) {
    resultado.textContent = value;
    }
    
    // Função para adicionar valores ao visor
    function appendToExpression(value) {
    expression += value;
    updateDisplay(expression);
    }
    
    // Função para calcular o resultado
    function calculateResult() {
    try {
    // Substitui 'X' por '*' e avalia a expressão
    const sanitizedExpression = expression.replace(/X/g, '*');
    const result = eval(sanitizedExpression);
    updateDisplay(result);
    expression = result;
    } catch (e) {
    updateDisplay('Error');
    }
    }
    
    // Função para limpar o visor
    function clearDisplay() {
    expression = '';
    updateDisplay('');
    }
    
    // Função para apagar o último caractere
    function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
    }
    
    // Adiciona eventos de clique aos botões
    document.querySelectorAll('.botao').forEach(button => {
    button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
    clearDisplay();
    } else if (value === '<') {
    backspace();
    } else if (value === '=') {
    calculateResult();
    } else {
    appendToExpression(value);
    }
    });
    });
    });
    