const inputs = document.querySelector(".palavra"),
    dicaTag = document.querySelector(".dica span"),
    guessLeft = document.querySelector(".chutes span"),
    erros = document.querySelector(".erro span"),
    resetarBotao = document.querySelector(".resetar"),
    botaoDica = document.querySelector(".mostrarDica"),
    elementoDica = document.querySelector(".dica"),
    typeInput = document.querySelector(".type-input");

let palavra, letrasIncorretas = [], letrasCorretas = [], chutesMaximos;

function startNewGame() {
    alert("Novo Jogo Iniciado! Adivinhe a Nova Palavra :)");
    elementoDica.style.display = "none";
    elementoDica.style.opacity = "0";

    const randomWord = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    palavra = randomWord.palavra;
    chutesMaximos = palavra.length >= 5 ? 8 : 6;
    letrasIncorretas = [];
    letrasCorretas = [];
    dicaTag.innerText = randomWord.dica;
    guessLeft.innerText = chutesMaximos;
    erros.innerText = letrasIncorretas;

    inputs.innerHTML = "";
    for (let i = 0; i < palavra.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        inputs.appendChild(input);
    }
}

function handleInput(e) {
    const key = e.target.value.toLowerCase();
    if (key.match(/^[a-z]+$/i) && !letrasIncorretas.includes(key) && !letrasCorretas.includes(key)) {
        if (palavra.includes(key)) {
            for (let i = 0; i < palavra.length; i++) {
                if (palavra[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key;
                    letrasCorretas.push(key);
                }
            }
        } else {
            chutesMaximos--;
            letrasIncorretas.push(key);
            erros.innerText = letrasIncorretas;
        }
    }

    guessLeft.innerText = chutesMaximos;
    if (letrasCorretas.length === palavra.length) {
        alert(`Parabéns! Você Adivinhou a Palavra ${palavra.toUpperCase()}`);
        startNewGame();
    } else if (chutesMaximos < 1) {
        alert("Fim de Jogo! Você não tem mais tentativas!");
        for (let i = 0; i < palavra.length; i++) {
            inputs.querySelectorAll("input")[i].value = palavra[i];
        }
    }

    typeInput.value = "";
}

function mostrarDicaElement() {
    elementoDica.style.display = "block";
    elementoDica.style.opacity = "1";
}

resetarBotao.addEventListener("click", startNewGame);
botaoDica.addEventListener("click", mostrarDicaElement);
typeInput.addEventListener("input", handleInput);
inputs.addEventListener("click", () => typeInput.focus());
document.addEventListener("keydown", () => typeInput.focus());

startNewGame();
