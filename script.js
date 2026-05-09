function verificarSenha() {
    const senha = document.getElementById('passInput').value;
    const barra = document.getElementById('barra-forca');
    const conselho = document.getElementById('conselho');

    const regras = {
        comprimento: senha.length >= 8,
        maiuscula: /[A-Z]/.test(senha),
        numero: /[0-9]/.test(senha),
        simbolo: /[^A-Za-z0-9]/.test(senha)
    };

    atualizarRequisito('req-comprimento', regras.comprimento);
    atualizarRequisito('req-maiuscula', regras.maiuscula);
    atualizarRequisito('req-numero', regras.numero);
    atualizarRequisito('req-simbolo', regras.simbolo);

    const pontos = Object.values(regras).filter(Boolean).length;

    if (senha.length === 0) {
        barra.style.width = "0%";
        conselho.innerText = "Comece a digitar...";
        conselho.style.color = "#5f6368";
    } else if (pontos <= 1) {
        barra.style.width = "25%";
        barra.style.background = "#ea4335"; // Vermelho
        conselho.innerText = "Senha muito fraca! Alguém vai adivinhar fácil.";
        conselho.style.color = "#ea4335";
    } else if (pontos === 2) {
        barra.style.width = "50%";
        barra.style.background = "#fbbc05"; // Amarelo
        conselho.innerText = "Melhorando, mas ainda é arriscado.";
        conselho.style.color = "#fbbc05";
    } else if (pontos === 3) {
        barra.style.width = "75%";
        barra.style.background = "#4285f4"; // Azul
        conselho.innerText = "Senha forte! Bom trabalho.";
        conselho.style.color = "#4285f4";
    } else if (pontos === 4) {
        barra.style.width = "100%";
        barra.style.background = "#34a853"; // Verde
        conselho.innerText = "Excelente! Essa senha é um cofre.";
        conselho.style.color = "#34a853";
    }
}

function atualizarRequisito(id, atingido) {
    const el = document.getElementById(id);
    if (atingido) {
        el.innerHTML = "✅ " + el.innerText.substring(2);
        el.classList.add('check-ok');
    } else {
        el.innerHTML = "❌ " + el.innerText.substring(2);
        el.classList.remove('check-ok');
    }
}