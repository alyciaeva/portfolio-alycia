/* =========================
   EFEITO DE DIGITAÇÃO
========================= */

// Elemento que receberá o texto animado
const textoDigitando = document.getElementById("textoDigitando");

// Frases que serão exibidas
const frases = [
    "Estudante de Análise e Desenvolvimento de Sistemas",
    "Construindo uma base em Desenvolvimento Full Stack",
    "HTML • CSS • JavaScript • Java • Python • MySQL"
];

let indiceFrase = 0;
let indiceLetra = 0;
let apagando = false;

// Função responsável pelo efeito de digitação
function escreverTexto() {

    // Se o elemento não existir, encerra a função
    if (!textoDigitando) {
        return;
    }

    const fraseAtual = frases[indiceFrase];

    if (!apagando) {

        textoDigitando.textContent =
            fraseAtual.substring(0, indiceLetra + 1);

        indiceLetra++;

        if (indiceLetra === fraseAtual.length) {

            apagando = true;

            setTimeout(escreverTexto, 2000);

            return;
        }

    } else {

        textoDigitando.textContent =
            fraseAtual.substring(0, indiceLetra - 1);

        indiceLetra--;

        if (indiceLetra === 0) {

            apagando = false;

            indiceFrase++;

            if (indiceFrase >= frases.length) {

                indiceFrase = 0;
            }
        }
    }

    setTimeout(
        escreverTexto,
        apagando ? 40 : 80
    );
}

// Inicia a animação
escreverTexto();



/* =========================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================= */

// Seleciona todas as seções do site
const secoes = document.querySelectorAll("section");

// Cria o observador das animações
const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");
            }

        });

    },

    {
        threshold: 0.15
    }

);

// Adiciona a classe escondido e observa cada seção
secoes.forEach((secao) => {

    secao.classList.add("escondido");

    observador.observe(secao);

});



/* =========================
   FORMULÁRIO DE CONTATO
========================= */

// Seleciona o formulário
const formulario = document.querySelector(".formulario");

// Adiciona a validação e a simulação do envio
if (formulario) {

    formulario.addEventListener(

        "submit",

        function (evento) {

            evento.preventDefault();

            const nome =
                formulario.querySelector(
                    'input[type="text"]'
                ).value.trim();

            const email =
                formulario.querySelector(
                    'input[type="email"]'
                ).value.trim();

            const mensagem =
                formulario.querySelector(
                    "textarea"
                ).value.trim();


            // Verifica se todos os campos foram preenchidos
            if (
                nome === "" ||
                email === "" ||
                mensagem === ""
            ) {

                alert(
                    "Preencha todos os campos do formulário."
                );

                return;
            }


            // Validação simples do e-mail
            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                alert(
                    "Digite um e-mail válido."
                );

                return;
            }


            // Simulação do envio
            alert(
                "Mensagem enviada com sucesso!"
            );

            // Limpa os campos do formulário
            formulario.reset();

        }

    );

}