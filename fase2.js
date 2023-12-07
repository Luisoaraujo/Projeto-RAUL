let pergunta1 = false;
let pergunta2 = false;
let pergunta3 = false;
let pergunta4 = false;
let pergunta5 = false;

const iniciarDivs = document.querySelectorAll(".botao");
iniciarDivs.forEach((iniciarDiv, index) => {
  const resultadoCustom = document.querySelector(
    ".resultado-custom" + (index + 1)
  );
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = true;
  recognition.lang = "pt-BR";

  iniciarDiv.addEventListener("click", () => {
    recognition.start();
    iniciarDiv.style.pointerEvents = "none";

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript.toLowerCase();
        resultadoCustom.innerText = "Você disse: " + transcript;

        if (transcript.includes("cachorro") && index === 0) {
          resultadoCustom.innerText += "\n\nVocê acertou";
          pergunta1 = true;
        } else if (transcript.includes("comida") && index === 1) {
          resultadoCustom.innerText += "\n\nVocê acertou";
          pergunta2 = true;
        } else if (transcript.includes("médico") && index === 2) {
          resultadoCustom.innerText += "\n\nVocê acertou";
          pergunta3 = true;
        } else if (transcript.includes("óculos") && index === 3) {
          resultadoCustom.innerText += "\n\nVocê acertou";
          pergunta4 = true;
        } else if (transcript.includes("ônibus") && index === 4) {
          resultadoCustom.innerText += "\n\nVocê acertou";
          pergunta5 = true;
        } else {
          resultadoCustom.innerText += "\n\nTente novamente!";
        }
        if (pergunta1 && pergunta2 && pergunta3 && pergunta4 && pergunta5) {
          const secaoBotoes = document.getElementById("secaoBotoes");
          secaoBotoes.style.display = "flex";
        }
        recognition.stop();
        iniciarDiv.style.pointerEvents = "auto";
        break;
      }
    };
  });
});

// BOTOES QUE APARECEM COM A FASE COMPLETA
document.getElementById("proximaFase").addEventListener("click", function () {
  // Redireciona para fase 3
  window.location.href = "fase3.html";
});
document.getElementById("menu").addEventListener("click", function () {
  // menu
  window.location.href = "menu.html";
});

//AUDIO

const divOuvir1 = document.getElementById("divOuvir1");
const meuAudio1 = document.getElementById("meuAudio1");
const divOuvir2 = document.getElementById("divOuvir2");
const meuAudio2 = document.getElementById("meuAudio2");
const divOuvir3 = document.getElementById("divOuvir3");
const meuAudio3 = document.getElementById("meuAudio3");
const divOuvir4 = document.getElementById("divOuvir4");
const meuAudio4 = document.getElementById("meuAudio4");
const divOuvir5 = document.getElementById("divOuvir5");
const meuAudio5 = document.getElementById("meuAudio5");

divOuvir1.addEventListener("click", function () {
  if (meuAudio1.paused) {
    meuAudio1.play();
  } else {
    meuAudio1.pause();
  }
});

divOuvir2.addEventListener("click", function () {
  if (meuAudio2.paused) {
    meuAudio2.play();
  } else {
    meuAudio2.pause();
  }
});

divOuvir3.addEventListener("click", function () {
  if (meuAudio3.paused) {
    meuAudio3.play();
  } else {
    meuAudio3.pause();
  }
});

divOuvir4.addEventListener("click", function () {
  if (meuAudio4.paused) {
    meuAudio4.play();
  } else {
    meuAudio4.pause();
  }
});

divOuvir5.addEventListener("click", function () {
  if (meuAudio5.paused) {
    meuAudio5.play();
  } else {
    meuAudio5.pause();
  }
});
