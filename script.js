// script.js (Versão com Ordem Aleatória e Repetição de Perguntas Erradas)

// Seletores de elementos HTML
const questionTextElement = document.getElementById('question');
const answersContainerElement = document.getElementById('answers-container');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const resultContainer = document.getElementById('result-container');
const scoreSpan = document.getElementById('score');
const totalQuestionsSpan = document.getElementById('total-questions');
const questionContainer = document.getElementById('question-container');

// Variáveis de controle do quiz
let currentQuestionIndex = 0;
let score = 0;
let questionsToAsk = []; // Array para as perguntas da rodada atual (todas ou apenas as erradas)
let wrongQuestions = []; // Array para armazenar as perguntas erradas na rodada atual

// --- FUNÇÕES PRINCIPAIS DO QUIZ ---

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    wrongQuestions = []; // Zera as perguntas erradas ao iniciar um novo quiz

    // Começa com todas as perguntas originais
    questionsToAsk = [...questions]; // 'questions' é o array do seu question.js
    shuffleArray(questionsToAsk); // Embaralha as perguntas para uma ordem aleatória a cada início de quiz
    
    nextButton.classList.add('hide');
    restartButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide'); // Garante que a área da pergunta esteja visível
    
    loadQuestion(); // Carrega a primeira pergunta
}

function loadQuestion() {
    resetState(); // Limpa as classes de feedback e reativa os botões

    if (currentQuestionIndex < questionsToAsk.length) {
        // Ainda há perguntas na rodada atual (seja a primeira ou a de repetição)
        const currentQuestion = questionsToAsk[currentQuestionIndex];
        questionTextElement.textContent = currentQuestion.question;

        // Preenche os botões de resposta
        // NOTA: Seus botões no HTML têm IDs fixos (a, b, c, d).
        // A lógica abaixo preenche o texto dos botões na ordem A, B, C, D
        // Se você quiser que a ORDEM das RESPOSTAS também seja aleatória nos botões,
        // precisaríamos de uma modificação mais complexa no HTML e na lógica dos botões.
        // Por enquanto, as respostas 'A', 'B', 'C', 'D' correspondem aos seus IDs.
        currentQuestion.answers.forEach(answer => {
            let button = document.getElementById(answer.id);
            if (button) {
                button.textContent = `${answer.id.toUpperCase()}. ${answer.text}`;
                button.dataset.correct = answer.correct;
                button.classList.remove('hide', 'correct', 'wrong', 'disabled');
                button.addEventListener('click', selectAnswer);
            }
        });
    } else {
        // Todas as perguntas da 'questionsToAsk' foram respondidas.
        // Verifica se é a primeira rodada e se há perguntas erradas para repetir.
        // A condição `questionsToAsk.length === questions.length` é uma forma de saber se é a primeira rodada completa
        // ou se `wrongQuestions` foi preenchido na primeira rodada e estamos prestes a iniciar a repetição.
        // A lógica mais robusta para primeira rodada é comparar o conteúdo do array original,
        // mas o número de perguntas total é um bom indicador simplificado.

        // Se há perguntas erradas e ainda não estamos na rodada de repetição das erradas (primeira rodada)
        if (wrongQuestions.length > 0 && questionsToAsk.length === questions.length) { 
            // Prepara a rodada de repetição das perguntas erradas
            questionsToAsk = [...wrongQuestions]; // O novo conjunto de perguntas são as que foram erradas
            wrongQuestions = []; // Zera para coletar novos erros na rodada de repetição
            currentQuestionIndex = 0; // Reinicia o contador de perguntas
            
            // Opcional: Mensagem para o usuário
            // alert(`Você errou ${questionsToAsk.length} perguntas. Vamos repeti-las para fixar!`);
            
            shuffleArray(questionsToAsk); // Embaralha as perguntas erradas também para nova ordem
            loadQuestion(); // Carrega a primeira pergunta da nova rodada
        } else {
            // Se não há perguntas erradas OU se já passamos pela rodada de repetição
            showResult(); // Exibe o resultado final do quiz
        }
    }
}

function resetState() {
    nextButton.classList.add('hide'); // Esconde o botão "Próxima"
    // Remove classes de feedback e reativa os botões de resposta
    Array.from(answersContainerElement.children).forEach(button => {
        button.classList.remove('correct', 'wrong', 'disabled');
        button.removeEventListener('click', selectAnswer); // Remove para evitar múltiplos listeners
        button.addEventListener('click', selectAnswer); // Adiciona novamente para a próxima pergunta
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    const currentQuestion = questionsToAsk[currentQuestionIndex]; // A pergunta atual que está sendo respondida

    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        wrongQuestions.push(currentQuestion); // Adiciona a pergunta ao array de erradas
        // Opcional: Mostrar a resposta correta se o usuário errou
        Array.from(answersContainerElement.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct'); // Destaca a resposta correta
            }
        });
    }

    // Desativar todos os botões após uma seleção
    Array.from(answersContainerElement.children).forEach(button => {
        button.classList.add('disabled'); // Desabilita visualmente
        button.removeEventListener('click', selectAnswer); // Remove o listener para evitar múltiplos cliques
    });

    nextButton.classList.remove('hide'); // Mostra o botão "Próxima Pergunta"
}

// Função para mostrar o resultado final
function showResult() {
    questionContainer.classList.add('hide'); // Esconde a área de perguntas/respostas
    resultContainer.classList.remove('hide'); // Mostra a área de resultados
    scoreSpan.textContent = score;
    totalQuestionsSpan.textContent = questions.length; // Exibe o total de perguntas originais
    restartButton.classList.remove('hide'); // Mostra o botão Reiniciar

    // Mensagem adicional baseada no desempenho
    if (score === questions.length) {
        // Se a pontuação total for igual ao número total de perguntas originais
        // significa que o usuário acertou todas as perguntas.
        alert("Parabéns! Você é um expert! Acertou todas as perguntas!");
    } else if (wrongQuestions.length === 0 && currentQuestionIndex === questionsToAsk.length && questionsToAsk.length < questions.length) {
        // Este caso significa que o usuário acertou todas as perguntas na rodada de repetição.
        alert(`Ótimo! Você revisou e acertou todas as perguntas que tinha errado na primeira vez! Sua pontuação final: ${score}/${questions.length}`);
    } else {
        alert(`Quiz finalizado. Sua pontuação: ${score} de ${questions.length}. Clique em Reiniciar para tentar novamente.`);
    }
}

// --- Funções Auxiliares ---
// Função para embaralhar um array usando o algoritmo Fisher-Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca elementos de posição
    }
    return array;
}

// --- Event Listeners ---
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

restartButton.addEventListener('click', startQuiz); // Reinicia o quiz chamando startQuiz

// Iniciar o quiz quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', startQuiz);