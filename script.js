// script.js (Versão com Ordem Aleatória e Repetição de Perguntas Erradas)

// Seletores de elementos HTML
const questionTextElement = document.getElementById('question'); // ID corrigido para 'question' conforme index.html
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

    // --- MODIFICAÇÃO AQUI: Lógica para balancear as respostas corretas ---
    questionsToAsk = balanceAndShuffleQuestions(questions); // Usa a nova função para balancear
    // --- FIM DA MODIFICAÇÃO ---
    
    nextButton.classList.add('hide');
    restartButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide'); // Garante que a área da pergunta esteja visível
    
    loadQuestion(); // Carrega a primeira pergunta
}

function loadQuestion() {
    resetState(); // Limpa as classes de feedback e reativa os botões

    if (currentQuestionIndex < questionsToAsk.length) {
        const currentQuestion = questionsToAsk[currentQuestionIndex];
        
        // CORREÇÃO: Acessa 'pergunta' em vez de 'question'
        questionTextElement.textContent = currentQuestion.pergunta;

        // CORREÇÃO: Itera sobre as alternativas do objeto 'alternativas'
        const alternativeKeys = Object.keys(currentQuestion.alternativas); // Pega as chaves (A, B, C, D)
        
        alternativeKeys.forEach(key => {
            let button = document.getElementById(key.toLowerCase()); // Pega o botão com ID 'a', 'b', 'c' ou 'd'
            if (button) {
                // Preenche o texto do botão
                button.textContent = `${key}. ${currentQuestion.alternativas[key]}`;
                
                // Define se a alternativa é a correta usando dataset.correct
                // CORREÇÃO: Compara a chave da alternativa com a resposta_correta
                button.dataset.correct = (key === currentQuestion.resposta_correta).toString();
                
                button.classList.remove('hide', 'correct', 'wrong', 'disabled');
                button.addEventListener('click', selectAnswer);
            }
        });
    } else {
        if (wrongQuestions.length > 0 && questionsToAsk.length === questions.length) { 
            questionsToAsk = balanceAndShuffleQuestions(wrongQuestions); // Balanceia e embaralha as erradas também
            wrongQuestions = [];
            currentQuestionIndex = 0;
            
            shuffleArray(questionsToAsk);
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function resetState() {
    nextButton.classList.add('hide');
    Array.from(answersContainerElement.children).forEach(button => {
        button.classList.remove('correct', 'wrong', 'disabled');
        // Remove todos os listeners existentes antes de adicionar um novo para evitar duplicação
        button.removeEventListener('click', selectAnswer); 
        button.addEventListener('click', selectAnswer); 
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    // Verifica se o dataset.correct do botão é 'true' (string)
    const isCorrect = selectedButton.dataset.correct === 'true'; 
    const currentQuestion = questionsToAsk[currentQuestionIndex];

    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        wrongQuestions.push(currentQuestion);
        
        // CORREÇÃO: Destaca a resposta correta APÓS o usuário errar
        const correctAlternativeKey = currentQuestion.resposta_correta;
        const correctButton = document.getElementById(correctAlternativeKey.toLowerCase());
        if (correctButton) {
            correctButton.classList.add('correct'); // Destaca a resposta correta
        }
    }

    // Desativar todos os botões após uma seleção
    Array.from(answersContainerElement.children).forEach(button => {
        button.classList.add('disabled');
        button.removeEventListener('click', selectAnswer); // Remove para que não seja clicável novamente
    });

    nextButton.classList.remove('hide');
}

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreSpan.textContent = score;
    totalQuestionsSpan.textContent = questions.length;
    restartButton.classList.remove('hide');

    if (score === questions.length) {
        alert("Parabéns! Você é um expert! Acertou todas as perguntas!");
    } else if (wrongQuestions.length === 0 && currentQuestionIndex === questionsToAsk.length && questionsToAsk.length < questions.length) {
        alert(`Ótimo! Você revisou e acertou todas as perguntas que tinha errado na primeira vez! Sua pontuação final: ${score}/${questions.length}`);
    } else {
        alert(`Quiz finalizado. Sua pontuação: ${score} de ${questions.length}. Clique em Reiniciar para tentar novamente.`);
    }
}

// --- Funções Auxiliares ---

// Função para balancear e embaralhar as perguntas
function balanceAndShuffleQuestions(allQuestions) {
    // Agrupa as perguntas por resposta correta
    const categorizedQuestions = { A: [], B: [], C: [], D: [] };
    allQuestions.forEach(q => {
        if (categorizedQuestions[q.resposta_correta]) {
            categorizedQuestions[q.resposta_correta].push(q);
        }
    });

    // Embaralha cada categoria individualmente para manter a aleatoriedade interna
    Object.keys(categorizedQuestions).forEach(key => {
        shuffleArray(categorizedQuestions[key]);
    });

    const balancedList = [];
    let currentIndex = { A: 0, B: 0, C: 0, D: 0 };
    let totalAdded = 0;
    const totalQuestions = allQuestions.length;

    // Loop para adicionar perguntas de cada categoria de forma intercalada
    while (totalAdded < totalQuestions) {
        // Itera pelas categorias (A, B, C, D) para tentar adicionar uma de cada vez
        for (const key of ['A', 'B', 'C', 'D']) {
            if (currentIndex[key] < categorizedQuestions[key].length) {
                balancedList.push(categorizedQuestions[key][currentIndex[key]]);
                currentIndex[key]++;
                totalAdded++;
                if (totalAdded === totalQuestions) break; // Sai do loop se todas as perguntas foram adicionadas
            }
        }
    }
    
    // Um embaralhamento final para adicionar mais aleatoriedade sem destruir o balanceamento grosseiro
    // que já foi feito. Isso evita que A-B-C-D seja um padrão muito óbvio.
    shuffleArray(balancedList); 
    
    return balancedList;
}

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