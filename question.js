const questions = [
    {
        question: "Qual é a essência do design de interação que um protótipo ajuda a realizar?",
        answers: [
            { text: "Codificação e desenvolvimento final", correct: false, id: "a" },
            { text: "Marketing e lançamento do produto", correct: false, id: "b" },
            { text: "Avaliação e feedback", correct: true, id: "c" },
            { text: "Geração de lucro imediato", correct: false, id: "d" }
        ]
    },
    {
        question: "Por que os stakeholders (partes interessadas) se beneficiam da prototipagem?",
        answers: [
            { text: "Porque economizam dinheiro com a produção em massa", correct: false, id: "a" },
            { text: "Podem ver, manipular e interagir mais facilmente do que através de um documento ou desenho", correct: true, id: "b" },
            { text: "Permite que eles ignorem o processo de design", correct: false, id: "c" },
            { text: "Reduz a necessidade de comunicação", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual é uma das razões principais para prototipar, relacionada à comunicação da equipe?",
        answers: [
            { text: "Aumentar a burocracia do projeto", correct: false, id: "a" },
            { text: "Permitir que os membros da equipe de desenvolvimento se comuniquem mais eficientemente", correct: true, id: "b" },
            { text: "Diminuir a troca de ideias", correct: false, id: "c" },
            { text: "Eliminar a necessidade de reuniões", correct: false, id: "d" }
        ]
    },
    {
        question: "Um storyboard, no contexto de prototipagem em design de interação, é similar a que tipo de representação?",
        answers: [
            { text: "Um modelo 3D complexo", correct: false, id: "a" },
            { text: "Uma planilha financeira", correct: false, id: "b" },
            { text: "Uma história em quadrinhos", correct: true, id: "c" },
            { text: "Um manual técnico", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual é o principal propósito de um 'rascunho de tela' como protótipo em design de interação?",
        answers: [
            { text: "Ser a versão final do software", correct: false, id: "a" },
            { text: "Representar uma série de telas de forma rápida para visualização", correct: true, id: "b" },
            { text: "Gerar código automaticamente", correct: false, id: "c" },
            { text: "Documentar requisitos legais", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o processo de prototipagem encoraja em relação às ideias?",
        answers: [
            { text: "Escondê-las da equipe", correct: false, id: "a" },
            { text: "Ignorá-las completamente", correct: false, id: "b" },
            { text: "Explicitar e testar as ideias", correct: true, id: "c" },
            { text: "Implementá-las sem validação", correct: false, id: "d" }
        ]
    },
    {
        question: "Um protótipo em 'baixa fidelidade' é caracterizado por:",
        answers: [
            { text: "Ser um produto final com todas as funcionalidades", correct: false, id: "a" },
            { text: "Ser rápido e barato de produzir, mas com pouca interatividade", correct: true, id: "b" },
            { text: "Exigir codificação complexa", correct: false, id: "c" },
            { text: "Ser visualmente idêntico ao produto final", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o propósito de um 'Quadro Kanban'?",
        answers: [
            { text: "Esconder o progresso das tarefas", correct: false, id: "a" },
            { text: "Visualizar o fluxo de trabalho, identificar gargalos e gerenciar tarefas de forma transparente para toda a equipe", correct: true, id: "b" },
            { text: "Apenas para listar tarefas finalizadas", correct: false, id: "c" },
            { text: "Um documento para registrar dados financeiros", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Limitar o WIP' (Work In Progress) no Kanban?",
        answers: [
            { text: "Aumentar o número de tarefas em andamento", correct: false, id: "a" },
            { text: "Restringir o número de itens de trabalho que podem estar em progresso ao mesmo tempo, para focar na conclusão e otimizar o fluxo", correct: true, id: "b" },
            { text: "Diminuir a produtividade da equipe", correct: false, id: "c" },
            { text: "Ignorar as tarefas não iniciadas", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Scrum' e 'Kanban'?",
        answers: [
            { text: "Scrum é um framework com rituais e papéis definidos; Kanban é um método de visualização e otimização de fluxo de trabalho", correct: true, id: "a" },
            { text: "Scrum foca em fluxo contínuo e Kanban em sprints", correct: false, id: "b" },
            { text: "Scrum não tem limites de WIP, Kanban tem", correct: false, id: "c" },
            { text: "São sinônimos e podem ser usados da mesma forma", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é o 'Lean Canvas'?",
        answers: [
            { text: "Um modelo de negócios focado em empresas grandes e tradicionais", correct: false, id: "a" },
            { text: "Uma ferramenta de planejamento estratégico para startups, focada em hipóteses e validação rápida", correct: true, id: "b" },
            { text: "Um tipo de pintura artística para empreendedores", correct: false, id: "c" },
            { text: "Uma metodologia para desenvolver produtos em massa", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o propósito principal do 'MVP' (Produto Mínimo Viável)?",
        answers: [
            { text: "Lançar um produto completo e finalizado rapidamente", correct: false, id: "a" },
            { text: "Coletar o máximo de aprendizado validado sobre clientes com o mínimo de esforço", correct: true, id: "b" },
            { text: "Gerar o maior lucro possível no primeiro mês", correct: false, id: "c" },
            { text: "Ignorar o feedback dos usuários iniciais", correct: false, id: "d" }
        ]
    },
    {
        question: "O que caracteriza uma 'Inovação Disruptiva'?",
        answers: [
            { text: "Melhorar gradualmente produtos existentes para clientes de alto valor", correct: false, id: "a" },
            { text: "Introduzir um produto ou serviço mais simples e acessível que cria um novo mercado ou reformula um existente, muitas vezes começando em nichos negligenciados", correct: true, id: "b" },
            { text: "Aumentar os preços dos produtos para maximizar o lucro", correct: false, id: "c" },
            { text: "Copiando tecnologias existentes de concorrentes", correct: false, id: "d" }
        ]
    },
    {
        question: "Quem popularizou o conceito de 'Inovação Disruptiva'?",
        answers: [
            { text: "Steve Jobs", correct: false, id: "a" },
            { text: "Bill Gates", correct: false, id: "b" },
            { text: "Clayton Christensen", correct: true, id: "c" },
            { text: "Elon Musk", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual é um dos blocos principais do Lean Canvas que descreve quem você está ajudando?",
        answers: [
            { text: "Vantagem Injusta", correct: false, id: "a" },
            { text: "Métricas-Chave", correct: false, id: "b" },
            { text: "Segmentos de Clientes", correct: true, id: "c" },
            { text: "Canais", correct: false, id: "d" }
        ]
    },
    {
        question: "No Lean Canvas, o que o bloco 'Problema' deve detalhar?",
        answers: [
            { text: "Apenas os problemas da própria startup", correct: false, id: "a" },
            { text: "Os 3 principais problemas que os clientes potenciais enfrentam", correct: true, id: "b" },
            { text: "Os problemas de todos os concorrentes", correct: false, id: "c" },
            { text: "As soluções que a startup já tem", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Prototipo Esboço/Rascunho' (Sketch) representa em um processo de design?",
        answers: [
            { text: "Uma versão final do produto", correct: false, id: "a" },
            { text: "Uma representação visual rápida e de baixa fidelidade de uma ideia", correct: true, id: "b" },
            { text: "Um documento legal de patente", correct: false, id: "c" },
            { text: "Um cronograma detalhado de desenvolvimento", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a principal vantagem de um protótipo de 'Wireframe'?",
        answers: [
            { text: "Ter uma estética visual perfeita", correct: false, id: "a" },
            { text: "Focar na estrutura e fluxo da informação, sem distrações visuais", correct: true, id: "b" },
            { text: "Ser totalmente funcional e interativo", correct: false, id: "c" },
            { text: "Substituir a necessidade de código", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'Mockup' no contexto de prototipagem?",
        answers: [
            { text: "Um protótipo com funcionalidades completas", correct: false, id: "a" },
            { text: "Uma representação estática de alta fidelidade que mostra como o produto vai parecer", correct: true, id: "b" },
            { text: "Um modelo matemático para análise de dados", correct: false, id: "c" },
            { text: "Apenas um rascunho em papel", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um protótipo em 'alta fidelidade'?",
        answers: [
            { text: "Ser rápido e barato para testar conceitos iniciais", correct: false, id: "a" },
            { text: "Simular a experiência do usuário de forma muito próxima ao produto final", correct: true, id: "b" },
            { text: "Apenas servir como documentação legal", correct: false, id: "c" },
            { text: "Ser descartado após a primeira rodada de feedback", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'SWOT Analysis' ajuda a identificar em um projeto ou negócio?",
        answers: [
            { text: "Apenas os custos de produção", correct: false, id: "a" },
            { text: "Forças, Fraquezas, Oportunidades e Ameaças", correct: true, id: "b" },
            { text: "As próximas 5 etapas de marketing", correct: false, id: "c" },
            { text: "A lista de tarefas concluídas", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual pilar do Empreendedorismo Sustentável se refere ao impacto nas pessoas e comunidades?",
        answers: [
            { text: "Pilar Econômico", correct: false, id: "a" },
            { text: "Pilar Ambiental", correct: false, id: "b" },
            { text: "Pilar Social", correct: true, id: "c" },
            { text: "Pilar Tecnológico", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'modelo mental' no contexto de um negócio ou projeto?",
        answers: [
            { text: "Apenas o plano de marketing de uma empresa", correct: false, id: "a" },
            { text: "A forma como uma equipe ou indivíduo compreende e interage com a realidade de um projeto", correct: true, id: "b" },
            { text: "Um protótipo físico de um produto", correct: false, id: "c" },
            { text: "Uma lista de contatos de clientes", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o risco de uma equipe trabalhar com 'modelos mentais diferentes' em um projeto?",
        answers: [
            { text: "Aumentar a eficiência da equipe", correct: false, id: "a" },
            { text: "Levar a conflitos, retrabalho e falta de alinhamento", correct: true, id: "b" },
            { text: "Agilizar a entrega do produto final", correct: false, id: "c" },
            { text: "Melhorar a comunicação interna", correct: false, id: "d" }
        ]
    },
    {
        question: "No contexto de design e prototipagem, o que o termo 'Fidelidade' se refere?",
        answers: [
            { text: "À lealdade do cliente ao produto", correct: false, id: "a" },
            { text: "Ao nível de detalhe e realismo de um protótipo em relação ao produto final", correct: true, id: "b" },
            { text: "À velocidade de desenvolvimento do protótipo", correct: false, id: "c" },
            { text: "Ao custo de produção do protótipo", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a principal vantagem de protótipos de baixa fidelidade?",
        answers: [
            { text: "Serem visualmente idênticos ao produto final", correct: false, id: "a" },
            { text: "Permitirem testes rápidos e baratos de conceitos iniciais sem exigir muito tempo ou recursos", correct: true, id: "b" },
            { text: "Terem todas as funcionalidades do produto final", correct: false, id: "c" },
            { text: "Apenas serem utilizados por designers experientes", correct: false, id: "d" }
        ]
    },
    {
        question: "Para que serve um protótipo de 'Fluxo de Usuário' (User Flow)?",
        answers: [
            { text: "Para definir a cor da interface", correct: false, id: "a" },
            { text: "Para mapear os passos que um usuário percorre para completar uma tarefa no sistema", correct: true, id: "b" },
            { text: "Para calcular o custo do projeto", correct: false, id: "d" },
            { text: "Para criar um logotipo da marca", correct: false, id: "c" }
        ]
    },
    {
        question: "No processo de design thinking, qual etapa a prototipagem geralmente precede?",
        answers: [
            { text: "Definição do problema", correct: false, id: "a" },
            { text: "Ideação", correct: false, id: "b" },
            { text: "Testes e iteração com usuários", correct: true, id: "c" },
            { text: "Lançamento do produto final", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância do feedback dos usuários na fase de prototipagem?",
        answers: [
            { text: "É irrelevante, pois o produto já está pronto", correct: false, id: "a" },
            { text: "Permite validar ideias, identificar problemas e refinar o design antes do desenvolvimento completo", correct: true, id: "b" },
            { text: "Apenas aumenta o tempo de desenvolvimento", correct: false, id: "c" },
            { text: "Serve para justificar o orçamento do projeto", correct: false, id: "d" }
        ]
    },
    {
        question: "Um 'Teste A/B' é uma técnica de validação que consiste em:",
        answers: [
            { text: "Testar apenas uma versão de um produto", correct: false, id: "a" },
            { text: "Comparar duas versões (A e B) de um elemento ou funcionalidade para ver qual performa melhor com usuários reais", correct: true, id: "b" },
            { text: "Avaliar a opinião de especialistas em um único design", correct: false, id: "c" },
            { text: "Lançar o produto no mercado sem qualquer teste", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'Pivot' no contexto de uma startup enxuta?",
        answers: [
            { text: "Um pequeno ajuste em uma funcionalidade existente", correct: false, id: "a" },
            { text: "Uma mudança fundamental na estratégia da startup, baseada em aprendizado validado", correct: true, id: "b" },
            { text: "O lançamento da versão final do produto", correct: false, id: "c" },
            { text: "Um novo investimento de capital", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o principal benefício do 'ciclo construir-medir-aprender' da Startup Enxuta?",
        answers: [
            { text: "Garantir o lançamento rápido de um produto perfeito", correct: false, id: "a" },
            { text: "Minimizar o desperdício e maximizar o aprendizado sobre o mercado e os clientes", correct: true, id: "b" },
            { text: "Eliminar a necessidade de feedback do cliente", correct: false, id: "c" },
            { text: "Focar apenas na construção de funcionalidades sem validação", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual é o objetivo da 'Contabilidade para Inovação' (Innovation Accounting)?",
        answers: [
            { text: "Medir apenas o lucro financeiro da startup", correct: false, id: "a" },
            { text: "Medir o progresso de uma startup de forma mais eficaz do que a contabilidade tradicional, focando no aprendizado validado", correct: true, id: "b" },
            { text: "Controlar os gastos diários da equipe", correct: false, id: "c" },
            { text: "Substituir completamente a contabilidade financeira", correct: false, id: "d" }
        ]
    },
    {
        question: "Um 'motor de crescimento' em uma startup se refere a:",
        answers: [
            { text: "O capital inicial da empresa", correct: false, id: "a" },
            { text: "O mecanismo que impulsiona o crescimento sustentável da base de clientes", correct: true, id: "b" },
            { text: "O software de gerenciamento de projetos", correct: false, id: "c" },
            { text: "A equipe de vendas", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de 'Métricas Acionáveis' para uma startup?",
        answers: [
            { text: "São apenas números bonitos para relatórios", correct: false, id: "a" },
            { text: "São métricas que permitem tomar decisões informadas e agir para melhorar o produto ou o negócio", correct: true, id: "b" },
            { text: "São métricas que ninguém consegue entender", correct: false, id: "c" },
            { text: "Servem apenas para impressionar investidores", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'fail fast' (falhar rápido) implica em uma startup?",
        answers: [
            { text: "Evitar qualquer tipo de falha", correct: false, id: "a" },
            { text: "Aprender rapidamente com os erros e mudar de direção antes de gastar muitos recursos", correct: true, id: "b" },
            { text: "Ignorar os resultados negativos", correct: false, id: "c" },
            { text: "Repetir os mesmos erros várias vezes", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Inovação Sustentável' e 'Inovação Disruptiva'?",
        answers: [
            { text: "Inovação sustentável cria novos mercados, disruptiva melhora produtos existentes", correct: false, id: "a" },
            { text: "Inovação sustentável aprimora produtos e serviços existentes para clientes de alto valor; disruptiva introduz algo mais simples ou acessível, criando ou reformulando mercados", correct: true, id: "b" },
            { text: "Ambas são a mesma coisa, apenas com nomes diferentes", correct: false, id: "c" },
            { text: "Inovação disruptiva é sempre mais cara", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Validação de Problema' no processo de startup?",
        answers: [
            { text: "Criar uma solução antes de entender o problema", correct: false, id: "a" },
            { text: "Confirmar se o problema que você pretende resolver realmente existe e é significativo para os clientes", correct: true, id: "b" },
            { text: "Vender o produto sem antes testar a ideia", correct: false, id: "c" },
            { text: "Apenas discutir o problema internamente", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'feedback do cliente' no ciclo de vida de uma startup?",
        answers: [
            { text: "Apenas servir para marketing", correct: false, id: "a" },
            { text: "É crucial para guiar o desenvolvimento do produto e validar hipóteses", correct: true, id: "b" },
            { text: "Pode ser ignorado se for negativo", correct: false, id: "c" },
            { text: "É útil apenas após o lançamento final", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'empreendedorismo' na sua essência, segundo os conceitos modernos?",
        answers: [
            { text: "Apenas abrir uma empresa e vender produtos", correct: false, id: "a" },
            { text: "A capacidade de identificar oportunidades, criar soluções inovadoras e transformá-las em negócios viáveis, assumindo riscos calculados", correct: true, id: "b" },
            { text: "Ser um gerente em uma grande corporação", correct: false, id: "c" },
            { text: "Seguir estritamente regras pré-estabelecidas", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual é um dos mitos sobre o empreendedor que a maioria dos materiais desmistifica?",
        answers: [
            { text: "Que empreendedores precisam de muito dinheiro para começar", correct: false, id: "a" },
            { text: "Que empreendedores nascem prontos e possuem um dom inato, sem necessidade de aprendizado", correct: true, id: "b" },
            { text: "Que empreendedores nunca falham", correct: false, id: "d" },
            { text: "Que empreendedores trabalham menos que outras pessoas", correct: false, id: "c" }
        ]
    },
    {
        question: "O que a 'mentalidade de crescimento' (growth mindset) implica para um empreendedor?",
        answers: [
            { text: "Acreditar que suas habilidades são fixas e não podem ser melhoradas", correct: false, id: "a" },
            { text: "Acreditar que habilidades e inteligência podem ser desenvolvidas através de dedicação e trabalho duro", correct: true, id: "b" },
            { text: "Evitar desafios para não falhar", correct: false, id: "c" },
            { text: "Focar apenas em resultados financeiros imediatos", correct: false, id: "d" }
        ]
    },
    {
        question: "Por que a 'experimentação contínua' é crucial para startups?",
        answers: [
            { text: "Para evitar qualquer tipo de mudança", correct: false, id: "a" },
            { text: "Para testar hipóteses, aprender rapidamente sobre o mercado e adaptar o produto ou modelo de negócio", correct: true, id: "b" },
            { text: "Para gastar o orçamento mais rápido", correct: false, id: "c" },
            { text: "Para copiar o que os concorrentes já estão fazendo", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Iteração' no desenvolvimento de produtos e startups?",
        answers: [
            { text: "Lançar o produto final sem testes", correct: false, id: "a" },
            { text: "Um processo de repetir e refinar um produto ou processo com base em feedback e aprendizado", correct: true, id: "b" },
            { text: "Trabalhar em segredo sem interação externa", correct: false, id: "c" },
            { text: "Concluir um projeto sem revisões", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel da 'empatia' no Design Thinking e no desenvolvimento de produtos?",
        answers: [
            { text: "É um conceito irrelevante para negócios", correct: false, id: "a" },
            { text: "Entender profundamente as necessidades, dores e desejos dos usuários para criar soluções mais eficazes", correct: true, id: "b" },
            { text: "Focar apenas nos lucros da empresa", correct: false, id: "c" },
            { text: "Copiar soluções de outras empresas", correct: false, id: "d" }
        ]
    },
    {
        question: "No Lean Canvas, qual o objetivo do bloco 'Solução'?",
        answers: [
            { text: "Listar os problemas dos concorrentes", correct: false, id: "a" },
            { text: "Descrever como a startup resolverá os 3 principais problemas identificados para o cliente", correct: true, id: "b" },
            { text: "Apresentar a estratégia de marketing", correct: false, id: "c" },
            { text: "Definir o preço do produto", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o bloco 'Métricas-Chave' no Lean Canvas deve indicar?",
        answers: [
            { text: "Qualquer dado aleatório", correct: false, id: "a" },
            { text: "Os números que indicarão o progresso e o sucesso do negócio, focando no que é acionável", correct: true, id: "b" },
            { text: "Apenas o número de vendas diárias", correct: false, id: "c" },
            { text: "O número de funcionários da empresa", correct: false, id: "d" }
        ]
    },
    {
        question: "Para que serve o bloco 'Proposta de Valor Única' no Lean Canvas?",
        answers: [
            { text: "Para listar todas as funcionalidades do produto", correct: false, id: "a" },
            { text: "Para comunicar de forma clara por que o produto é diferente e por que o cliente deveria se importar", correct: true, id: "b" },
            { text: "Para definir o nome da empresa", correct: false, id: "c" },
            { text: "Para calcular os custos de produção", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o bloco 'Canais' no Lean Canvas descreve?",
        answers: [
            { text: "Apenas canais de TV", correct: false, id: "a" },
            { text: "Como o produto ou serviço chegará até os clientes (venda, distribuição, comunicação)", correct: true, id: "b" },
            { text: "As redes sociais dos fundadores", correct: false, id: "c" },
            { text: "Os fornecedores da matéria-prima", correct: false, id: "d" }
        ]
    },
    {
        question: "No Lean Canvas, o bloco 'Estrutura de Custos' deve listar:",
        answers: [
            { text: "Os lucros esperados", correct: false, id: "a" },
            { text: "Os principais custos envolvidos na operação do negócio", correct: true, id: "b" },
            { text: "Os salários dos concorrentes", correct: false, id: "c" },
            { text: "O número de clientes", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é o 'Fluxo de Receita' no Lean Canvas?",
        answers: [
            { text: "O dinheiro que a empresa gasta", correct: false, id: "a" },
            { text: "As diferentes formas pelas quais a empresa gera dinheiro a partir do valor que entrega", correct: true, id: "b" },
            { text: "O tempo que leva para o produto ser entregue", correct: false, id: "c" },
            { text: "Apenas o capital inicial do investimento", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o significado de 'Vantagem Injusta' no Lean Canvas?",
        answers: [
            { text: "Ser algo fácil de copiar pelos concorrentes", correct: false, id: "a" },
            { text: "Algo que não pode ser facilmente copiado ou comprado pelos concorrentes, dando uma vantagem competitiva única", correct: true, id: "b" },
            { text: "Um erro no planejamento do negócio", correct: false, id: "c" },
            { text: "Um recurso temporário para o negócio", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é uma 'hipótese' no contexto de uma startup enxuta?",
        answers: [
            { text: "Um fato comprovado sobre o mercado", correct: false, id: "a" },
            { text: "Uma suposição sobre o problema do cliente, a solução, ou o modelo de negócio que precisa ser validada com experimentos", correct: true, id: "b" },
            { text: "Uma garantia de sucesso do produto", correct: false, id: "c" },
            { text: "Um plano de marketing definitivo", correct: false, id: "d" }
        ]
    },
    {
        question: "Por que é importante validar as hipóteses rapidamente em uma startup?",
        answers: [
            { text: "Para gastar mais dinheiro e tempo", correct: false, id: "a" },
            { text: "Para evitar construir algo que ninguém quer ou precisa, minimizando desperdício de recursos", correct: true, id: "b" },
            { text: "Para atrasar o lançamento do produto", correct: false, id: "c" },
            { text: "Para seguir o que a concorrência está fazendo", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo principal da etapa de 'Descoberta do Cliente'?",
        answers: [
            { text: "Vender o produto o mais rápido possível", correct: false, id: "a" },
            { text: "Entender profundamente o problema do cliente e se ele realmente existe", correct: true, id: "b" },
            { text: "Criar uma campanha de marketing", correct: false, id: "c" },
            { text: "Definir a cor do logotipo", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Entrevistas de Problema' (Problem Interviews)?",
        answers: [
            { text: "Entrevistar pessoas sobre seus hobbies", correct: false, id: "a" },
            { text: "Conversar com potenciais clientes para entender se eles têm o problema que a startup quer resolver", correct: true, id: "b" },
            { text: "Entrevistar apenas os fundadores da startup", correct: false, id: "c" },
            { text: "Entrevistas para contratação de funcionários", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre um 'cliente inicial' (early adopter) e um 'cliente convencional'?",
        answers: [
            { text: "Clientes iniciais são mais resistentes a mudanças", correct: false, id: "a" },
            { text: "Clientes iniciais são mais tolerantes a imperfeições e dispostos a experimentar novas soluções para resolver um problema agudo", correct: true, id: "b" },
            { text: "Clientes convencionais compram produtos em fase beta", correct: false, id: "c" },
            { text: "Não há diferença significativa", correct: false, id: "d" }
        ]
    },
    {
        question: "No contexto de validação, o que é um 'Teste de Landing Page'?",
        answers: [
            { text: "Um teste de velocidade do site", correct: false, id: "a" },
            { text: "Criar uma página web simples para apresentar a proposta de valor e medir o interesse dos visitantes sem ter o produto pronto", correct: true, id: "b" },
            { text: "Um teste de usabilidade para um produto já existente", correct: false, id: "c" },
            { text: "Uma pesquisa de mercado tradicional", correct: false, id: "d" }
        ]
    },
    {
        question: "Por que 'métricas de vaidade' (vanity metrics) são perigosas para startups?",
        answers: [
            { text: "Porque são as únicas métricas que importam", correct: false, id: "a" },
            { text: "Porque parecem boas, mas não oferecem insights acionáveis para tomadas de decisão reais sobre o crescimento do negócio", correct: true, id: "b" },
            { text: "Porque indicam o lucro imediato", correct: false, id: "c" },
            { text: "Porque são fáceis de coletar", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'inovação incremental' geralmente busca?",
        answers: [
            { text: "Criar um mercado totalmente novo", correct: false, id: "a" },
            { text: "Melhorar produtos, processos ou serviços existentes de forma gradual e contínua", correct: true, id: "b" },
            { text: "Interromper indústrias inteiras", correct: false, id: "c" },
            { text: "Ignorar o feedback do cliente", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel de um 'modelo de negócio' para uma startup?",
        answers: [
            { text: "Ser apenas um documento para investidores", correct: false, id: "a" },
            { text: "Descrever como a empresa cria, entrega e captura valor", correct: true, id: "b" },
            { text: "Substituir a necessidade de um produto", correct: false, id: "c" },
            { text: "Ser uma lista de tarefas diárias", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'design thinking'?",
        answers: [
            { text: "Um estilo de design de interiores", correct: false, id: "a" },
            { text: "Uma abordagem centrada no ser humano para a resolução de problemas e inovação, focando na compreensão das necessidades dos usuários", correct: true, id: "b" },
            { text: "Um método para criar logotipos", correct: false, id: "c" },
            { text: "Uma técnica de programação de software", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a primeira etapa do processo de Design Thinking?",
        answers: [
            { text: "Prototipar", correct: false, id: "a" },
            { text: "Testar", correct: false, id: "b" },
            { text: "Empatizar", correct: true, id: "c" },
            { text: "Idear", correct: false, id: "d" }
        ]
    },
    {
        question: "Em Design Thinking, o que significa 'Definir'?",
        answers: [
            { text: "Criar uma lista de soluções aleatórias", correct: false, id: "a" },
            { text: "Formular um problema claro e acionável com base nas percepções da fase de empatia", correct: true, id: "b" },
            { text: "Lançar o produto no mercado", correct: false, id: "c" },
            { text: "Desenvolver o código-fonte", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o propósito da etapa de 'Ideação' no Design Thinking?",
        answers: [
            { text: "Escolher a primeira ideia que surge", correct: false, id: "a" },
            { text: "Gerar a maior quantidade possível de ideias e soluções para o problema definido, sem julgamento inicial", correct: true, id: "b" },
            { text: "Testar protótipos com usuários", correct: false, id: "c" },
            { text: "Analisar dados financeiros", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'mentalidade lean' busca otimizar?",
        answers: [
            { text: "Apenas o lucro", correct: false, id: "a" },
            { text: "Eliminação de desperdícios e maximização do valor para o cliente", correct: true, id: "b" },
            { text: "Aumento da burocracia", correct: false, id: "c" },
            { text: "Produção em massa sem feedback", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'disciplina' para o empreendedor?",
        answers: [
            { text: "É irrelevante, pois a criatividade é o mais importante", correct: false, id: "a" },
            { text: "Fundamental para manter o foco, cumprir metas e gerenciar o tempo de forma eficaz", correct: true, id: "b" },
            { text: "Impede a inovação", correct: false, id: "c" },
            { text: "É uma característica inata e não pode ser desenvolvida", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'bootstrapping' significa para uma startup?",
        answers: [
            { text: "Levantar grandes investimentos externos desde o início", correct: false, id: "a" },
            { text: "Financiar a empresa com recursos próprios ou receitas geradas, sem depender de investimento externo no início", correct: true, id: "b" },
            { text: "Comprar equipamentos caros sem necessidade", correct: false, id: "c" },
            { text: "Contratar muitos funcionários rapidamente", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'networking' para empreendedores?",
        answers: [
            { text: "É uma perda de tempo", correct: false, id: "a" },
            { text: "Essencial para construir relacionamentos, encontrar mentores, parceiros e oportunidades de negócio", correct: true, id: "b" },
            { text: "Serve apenas para socializar", correct: false, id: "c" },
            { text: "Dificulta o acesso a informações", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'escalabilidade' em uma startup?",
        answers: [
            { text: "A capacidade de diminuir a produção rapidamente", correct: false, id: "a" },
            { text: "A capacidade de crescer e atender a um número crescente de clientes sem aumentar proporcionalmente os custos ou recursos", correct: true, id: "b" },
            { text: "Apenas o tamanho físico da empresa", correct: false, id: "c" },
            { text: "A necessidade de contratar mais pessoal a cada novo cliente", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de um 'pitch' eficaz para uma startup?",
        answers: [
            { text: "É um ritual sem importância", correct: false, id: "a" },
            { text: "É fundamental para apresentar a ideia e o negócio de forma concisa e persuasiva a investidores, parceiros ou clientes", correct: true, id: "b" },
            { text: "Serve apenas para debates internos", correct: false, id: "c" },
            { text: "É uma técnica de vendas ultrapassada", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Produto-Mercado Fit'?",
        answers: [
            { text: "Ter um produto que ninguém quer", correct: false, id: "a" },
            { text: "Quando o produto satisfaz uma forte demanda do mercado, resultando em crescimento e retenção de usuários", correct: true, id: "b" },
            { text: "Quando o produto é lançado sem feedback", correct: false, id: "c" },
            { text: "Apenas ter um produto bonito", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Minimum Viable Product (MVP)'?",
        answers: [
            { text: "Lançar a versão final do produto para o mercado", correct: false, id: "a" },
            { text: "Coletar o máximo de aprendizado validado sobre os clientes com o mínimo de esforço e tempo de desenvolvimento", correct: true, id: "b" },
            { text: "Gerar o maior lucro possível no primeiro mês", correct: false, id: "c" },
            { text: "Ignorar o feedback dos usuários iniciais", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'mercado-alvo' (target market) representa?",
        answers: [
            { text: "Todos os consumidores do mundo", correct: false, id: "a" },
            { text: "O grupo específico de consumidores ou empresas que uma empresa visa atender com seus produtos ou serviços", correct: true, id: "b" },
            { text: "Apenas os concorrentes da empresa", correct: false, id: "c" },
            { text: "Os fornecedores de matéria-prima", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'pesquisa de mercado' para uma startup?",
        answers: [
            { text: "É um gasto desnecessário", correct: false, id: "a" },
            { text: "Ajuda a entender as necessidades dos clientes, a concorrência e as tendências do setor, validando o modelo de negócio", correct: true, id: "b" },
            { text: "Apenas para coletar dados demográficos", correct: false, id: "c" },
            { text: "Para copiar ideias de outras empresas", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'customer validation'?",
        answers: [
            { text: "Apenas a venda inicial de um produto", correct: false, id: "a" },
            { text: "O processo de testar as hipóteses do seu produto e modelo de negócio com clientes reais para validar se há demanda", correct: true, id: "b" },
            { text: "Criar funcionalidades sem perguntar aos usuários", correct: false, id: "c" },
            { text: "Conseguir muitos seguidores nas redes sociais", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o benefício de ter um 'time multidisciplinar' em uma startup?",
        answers: [
            { text: "Aumentar a rivalidade interna", correct: false, id: "a" },
            { text: "Reunir diferentes perspectivas e habilidades, promovendo a inovação e a resolução de problemas de forma mais completa", correct: true, id: "b" },
            { text: "Limitar a criatividade", correct: false, id: "c" },
            { text: "Apenas para ter mais pessoas no escritório", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'cultura de experimentação' promove em uma organização?",
        answers: [
            { text: "O medo de tentar coisas novas", correct: false, id: "a" },
            { text: "A disposição para testar ideias, aprender com os resultados (positivos ou negativos) e iterar rapidamente", correct: true, id: "b" },
            { text: "Apenas o cumprimento de regras rígidas", correct: false, id: "c" },
            { text: "A procrastinação na tomada de decisões", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a principal função de um 'mentor' para um empreendedor?",
        answers: [
            { text: "Fazer o trabalho pela startup", correct: false, id: "a" },
            { text: "Oferecer orientação, conselhos e compartilhar experiências para ajudar o empreendedor a navegar desafios", correct: true, id: "b" },
            { text: "Apenas criticar as ideias", correct: false, id: "c" },
            { text: "Fornecer todo o investimento necessário", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'modelo de negócios freemium'?",
        answers: [
            { text: "Oferecer um produto pago sem funcionalidades gratuitas", correct: false, id: "a" },
            { text: "Oferecer uma versão básica do produto gratuitamente e cobrar por recursos premium ou avançados", correct: true, id: "b" },
            { text: "Vender produtos apenas para amigos", correct: false, id: "c" },
            { text: "Basear o negócio apenas em publicidade", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o conceito de 'proposta de valor'?",
        answers: [
            { text: "A lista de preços dos produtos", correct: false, id: "a" },
            { text: "O valor único que um produto ou serviço oferece aos clientes para resolver seus problemas ou atender às suas necessidades", correct: true, id: "b" },
            { text: "A descrição da tecnologia utilizada", correct: false, id: "c" },
            { text: "O número de seguidores nas redes sociais", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'early adopter' (adotante inicial)?",
        answers: [
            { text: "Alguém que compra o produto apenas quando ele está perfeito", correct: false, id: "a" },
            { text: "Cliente que adota um novo produto ou tecnologia antes da maioria, mesmo com imperfeições, pela busca por soluções para suas dores", correct: true, id: "b" },
            { text: "Um concorrente que copia o produto", correct: false, id: "c" },
            { text: "Um investidor que não corre riscos", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'resiliência' para um empreendedor?",
        answers: [
            { text: "É uma característica desnecessária", correct: false, id: "a" },
            { text: "Fundamental para superar desafios, fracassos e adversidades inerentes ao caminho empreendedor", correct: true, id: "b" },
            { text: "Garante que o empreendedor nunca cometa erros", correct: false, id: "c" },
            { text: "Apenas para evitar o trabalho duro", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'pivotar' significa em termos práticos para uma startup?",
        answers: [
            { text: "Manter a estratégia original a todo custo", correct: false, id: "a" },
            { text: "Mudar a direção da empresa com base em aprendizados e feedbacks, como alterar o produto, o mercado-alvo ou o modelo de negócio", correct: true, id: "b" },
            { text: "Contratar mais funcionários", correct: false, id: "c" },
            { text: "Focar em um único cliente", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o conceito de 'validação de mercado'?",
        answers: [
            { text: "Apenas lançar o produto sem pesquisa", correct: false, id: "a" },
            { text: "Confirmar que existe um mercado grande o suficiente para o seu produto/serviço e que os clientes estão dispostos a pagar por ele", correct: true, id: "b" },
            { text: "Ignorar a concorrência", correct: false, id: "c" },
            { text: "Focar apenas na produção em massa", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'unicórnio' no universo das startups?",
        answers: [
            { text: "Uma startup que faliu", correct: false, id: "a" },
            { text: "Uma startup de capital fechado avaliada em US$ 1 bilhão ou mais", correct: true, id: "b" },
            { text: "Uma startup com um único fundador", correct: false, id: "c" },
            { text: "Uma startup que ainda não recebeu investimento", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'agilidade' no desenvolvimento de produtos para startups?",
        answers: [
            { text: "É desnecessária em projetos longos", correct: false, id: "a" },
            { text: "Permite que a equipe se adapte rapidamente a mudanças, aprenda com feedback e entregue valor de forma incremental", correct: true, id: "b" },
            { text: "Aumenta a rigidez dos processos", correct: false, id: "c" },
            { text: "Foca apenas na documentação extensiva", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Business Model Canvas' (BMC) difere do Lean Canvas?",
        answers: [
            { text: "São idênticos, apenas com nomes diferentes", correct: false, id: "a" },
            { text: "O BMC é mais abrangente, focando em negócios estabelecidos, enquanto o Lean Canvas é mais enxuto e focado em startups e hipóteses", correct: true, id: "b" },
            { text: "O BMC foca em problemas e o Lean Canvas em soluções", correct: false, id: "c" },
            { text: "O Lean Canvas é para grandes empresas, o BMC para startups", correct: false, id: "d" }
        ]
    },
    {
        question: "No contexto de design e UX, o que significa 'Iteração'?",
        answers: [
            { text: "Um erro no código", correct: false, id: "a" },
            { text: "O processo de refinar um design ou produto através de múltiplos ciclos de criação, teste e feedback", correct: true, id: "b" },
            { text: "A fase final de lançamento", correct: false, id: "c" },
            { text: "Uma nova contratação na equipe", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o benefício de 'testes de usabilidade' com protótipos?",
        answers: [
            { text: "Apenas encontrar bugs de programação", correct: false, id: "a" },
            { text: "Identificar problemas de interação e pontos de fricção para o usuário antes do desenvolvimento completo", correct: true, id: "b" },
            { text: "Aumentar o custo do projeto", correct: false, id: "c" },
            { text: "Garantir que o produto nunca precisará de atualizações", correct: false, id: "d" }
        ]
    },
    {
        question: "Em que fase do Design Thinking se encaixa a 'construção de personas'?",
        answers: [
            { text: "Prototipagem", correct: false, id: "a" },
            { text: "Testar", correct: false, id: "b" },
            { text: "Empatizar/Definir", correct: true, id: "c" },
            { text: "Ideação", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Brainstorming' e em que fase do Design Thinking é mais utilizado?",
        answers: [
            { text: "Uma técnica de análise financeira, na fase de Prototipagem", correct: false, id: "a" },
            { text: "Uma técnica para gerar muitas ideias rapidamente, utilizada principalmente na fase de Ideação", correct: true, id: "b" },
            { text: "Um método de teste de software, na fase de Testar", correct: false, id: "c" },
            { text: "Uma entrevista com clientes, na fase de Empatizar", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de 'Storytelling' para empreendedores e startups?",
        answers: [
            { text: "É apenas para entretenimento", correct: false, id: "a" },
            { text: "Ajuda a conectar-se emocionalmente com o público, comunicar a visão e o propósito da startup de forma memorável", correct: true, id: "b" },
            { text: "Substitui a necessidade de um plano de negócios", correct: false, id: "c" },
            { text: "Serve apenas para relatórios internos", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Burn Rate' em uma startup?",
        answers: [
            { text: "A velocidade de crescimento de clientes", correct: false, id: "a" },
            { text: "A taxa na qual uma startup está gastando seu capital antes de gerar lucro, ou seja, o caixa que a empresa 'queima' por mês", correct: true, id: "b" },
            { text: "O número de produtos vendidos por dia", correct: false, id: "c" },
            { text: "A capacidade de produção da empresa", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de uma 'incubadora' ou 'aceleradora' de startups?",
        answers: [
            { text: "Apenas fornecer espaço físico para trabalhar", correct: false, id: "a" },
            { text: "Oferecer suporte, mentoria, recursos e, muitas vezes, investimento para auxiliar o crescimento de startups em estágio inicial", correct: true, id: "b" },
            { text: "Competir diretamente com as startups", correct: false, id: "c" },
            { text: "Controlar totalmente as operações da startup", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'tração' representa para uma startup?",
        answers: [
            { text: "O número de funcionários", correct: false, id: "a" },
            { text: "Evidências mensuráveis de que o produto ou modelo de negócio está ganhando força no mercado, como crescimento de usuários ou receita", correct: true, id: "b" },
            { text: "Apenas a quantidade de dinheiro levantada", correct: false, id: "c" },
            { text: "O número de concorrentes diretos", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'pivotagem de cliente' (customer segment pivot) implica?",
        answers: [
            { text: "Mudar o produto, mas não o cliente", correct: false, id: "a" },
            { text: "Manter o produto, mas mudar o segmento de clientes-alvo que se deseja atender", correct: true, id: "b" },
            { text: "Mudar apenas a cor do logotipo", correct: false, id: "c" },
            { text: "Ignorar o feedback de todos os clientes", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o significado de 'mercado endereçável total' (TAM - Total Addressable Market)?",
        answers: [
            { text: "O número de concorrentes em um setor", correct: false, id: "a" },
            { text: "A receita máxima que um produto ou serviço pode gerar se conseguir 100% da sua base de clientes ideal", correct: true, id: "b" },
            { text: "O custo total de marketing de uma startup", correct: false, id: "c" },
            { text: "O número de funcionários necessários para operar o negócio", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Concierge' envolve na validação de um MVP?",
        answers: [
            { text: "Automatizar todas as funcionalidades do produto", correct: false, id: "a" },
            { text: "Prestar o serviço manualmente ao invés de usar tecnologia, para aprender e validar o problema e a solução com os clientes", correct: true, id: "b" },
            { text: "Contratar um grande número de funcionários", correct: false, id: "c" },
            { text: "Lançar o produto sem qualquer interação com o cliente", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'velocidade' para uma startup?",
        answers: [
            { text: "É secundária, a perfeição é mais importante", correct: false, id: "a" },
            { text: "Permite testar hipóteses, aprender e iterar rapidamente, ganhando vantagem competitiva e reduzindo riscos", correct: true, id: "b" },
            { text: "Apenas para fazer mais entregas", correct: false, id: "c" },
            { text: "Aumentar os custos de desenvolvimento", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Lean Startup' como metodologia?",
        answers: [
            { text: "Um método para cortar custos de produção apenas", correct: false, id: "a" },
            { text: "Uma abordagem científica para criar e gerenciar startups, enfatizando experimentação, aprendizado validado e iteração rápida", correct: true, id: "b" },
            { text: "Um tipo de academia para empreendedores", correct: false, id: "c" },
            { text: "Uma metodologia de contabilidade financeira", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a definição de 'Ethos Empresarial'?",
        answers: [
            { text: "O lucro líquido da empresa em um ano", correct: false, id: "a" },
            { text: "O conjunto de valores, crenças e princípios que guiam o comportamento e a cultura de uma organização", correct: true, id: "b" },
            { text: "A estratégia de marketing digital", correct: false, id: "c" },
            { text: "O número de produtos vendidos no mês", correct: false, id: "d" }
        ]
    },
    {
        question: "Por que a 'ética' é fundamental para a sustentabilidade de um negócio?",
        answers: [
            { text: "Porque é um requisito legal opcional", correct: false, id: "a" },
            { text: "Fortalece a imagem da marca, constrói confiança com stakeholders e atrai clientes conscientes, garantindo longevidade", correct: true, id: "b" },
            { text: "Apenas para evitar multas", correct: false, id: "c" },
            { text: "Não tem relação com a sustentabilidade a longo prazo", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Compliance' no ambiente corporativo?",
        answers: [
            { text: "Apenas o cumprimento de metas de vendas", correct: false, id: "a" },
            { text: "Estar em conformidade com leis, regulamentos internos e externos, e padrões éticos, evitando riscos legais e reputacionais", correct: true, id: "b" },
            { text: "Aumentar os custos desnecessariamente", correct: false, id: "c" },
            { text: "Ignorar as regras e regulamentos", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o impacto de 'decisões éticas' nas operações de uma empresa?",
        answers: [
            { text: "Não afetam a reputação", correct: false, id: "a" },
            { text: "Constroem a confiança dos clientes, parceiros e funcionários, impactando positivamente a reputação e o valor da marca", correct: true, id: "b" },
            { text: "Levam sempre a perdas financeiras", correct: false, id: "c" },
            { text: "Restringem a inovação", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'empreendedorismo social'?",
        answers: [
            { text: "Criar negócios apenas para maximizar o lucro", correct: false, id: "a" },
            { text: "Desenvolver negócios que buscam resolver problemas sociais e ambientais, gerando impacto positivo além do lucro financeiro", correct: true, id: "b" },
            { text: "Empreender sem qualquer planejamento", correct: false, id: "c" },
            { text: "Focar exclusivamente na tecnologia", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a principal característica de uma 'economia circular' em relação a um modelo linear?",
        answers: [
            { text: "Focar na produção e descarte rápido", correct: false, id: "a" },
            { text: "Minimizar o desperdício e a poluição através do reuso, reciclagem e regeneração de materiais e produtos", correct: true, id: "b" },
            { text: "Aumentar o consumo de recursos naturais", correct: false, id: "c" },
            { text: "Promover o uso único de produtos", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'pegada de carbono' de uma empresa mede?",
        answers: [
            { text: "A quantidade de produtos produzidos", correct: false, id: "a" },
            { text: "A quantidade total de gases de efeito estufa emitidos direta ou indiretamente por suas atividades", correct: true, id: "b" },
            { text: "O número de funcionários em um escritório", correct: false, id: "c" },
            { text: "A área física da empresa", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o significado de 'Triple Bottom Line' na gestão de negócios sustentáveis?",
        answers: [
            { text: "Focar apenas em resultados financeiros", correct: false, id: "a" },
            { text: "Medir o desempenho da empresa não apenas pelo lucro, mas também pelo impacto social e ambiental ('Pessoas, Planeta, Lucro')", correct: true, id: "b" },
            { text: "Ignorar os aspectos financeiros", correct: false, id: "c" },
            { text: "Preocupar-se apenas com a produção", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Design Sprint' representa no desenvolvimento de produtos?",
        answers: [
            { text: "Um longo ciclo de desenvolvimento de software", correct: false, id: "a" },
            { text: "Um processo de 5 dias para responder a grandes questões de negócios através de design, prototipagem e testes rápidos com clientes", correct: true, id: "b" },
            { text: "Uma competição de velocidade entre designers", correct: false, id: "c" },
            { text: "Um método para evitar o feedback do cliente", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'Business Case' em um projeto de startup?",
        answers: [
            { text: "Descrever apenas a ideia do produto", correct: false, id: "a" },
            { text: "Justificar a viabilidade e os benefícios de um projeto ou investimento, analisando custos, riscos e retornos potenciais", correct: true, id: "b" },
            { text: "Apenas documentar erros passados", correct: false, id: "c" },
            { text: "Criar um pitch de vendas", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'benchmarking' no contexto de negócios e startups?",
        answers: [
            { text: "A criação de um novo produto sem pesquisa", correct: false, id: "a" },
            { text: "O processo de comparar o desempenho de uma empresa, produto ou processo com os melhores da classe ou concorrentes para identificar oportunidades de melhoria", correct: true, id: "b" },
            { text: "Um tipo de avaliação de funcionários", correct: false, id: "c" },
            { text: "A definição de preços aleatórios", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'plano de negócios' tradicional em comparação com o Lean Canvas?",
        answers: [
            { text: "O plano de negócios é mais focado em hipóteses, o Lean Canvas em detalhes operacionais", correct: false, id: "a" },
            { text: "O plano de negócios é um documento mais extenso e detalhado, ideal para validações mais avançadas ou captação de investimento tradicional, enquanto o Lean Canvas é um resumo enxuto para validação inicial", correct: true, id: "b" },
            { text: "São sinônimos", correct: false, id: "c" },
            { text: "O Lean Canvas é para grandes empresas, o plano de negócios para startups", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'validação de solução'?",
        answers: [
            { text: "Assumir que a solução está correta sem testar", correct: false, id: "a" },
            { text: "Testar e comprovar que a solução desenvolvida realmente resolve o problema dos clientes de forma eficaz e é desejada por eles", correct: true, id: "b" },
            { text: "Apenas apresentar a solução a potenciais investidores", correct: false, id: "c" },
            { text: "Desenvolver a solução sem interação com o cliente", correct: false, id: "d" }
        ]
    },
    {
        question: "Em prototipagem, o que o termo 'Clicável' (Clickable Prototype) implica?",
        answers: [
            { text: "Que o protótipo é feito de papel", correct: false, id: "a" },
            { text: "Que ele simula a interação do usuário com botões e links, permitindo navegar entre telas, mas sem funcionalidade completa", correct: true, id: "b" },
            { text: "Que ele é apenas uma imagem estática", correct: false, id: "c" },
            { text: "Que ele já está pronto para o lançamento", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o benefício de 'testes remotos' de protótipos?",
        answers: [
            { text: "Exigem que todos os participantes estejam no mesmo local", correct: false, id: "a" },
            { text: "Permitem coletar feedback de usuários geograficamente dispersos, aumentando a diversidade e a quantidade de dados", correct: true, id: "b" },
            { text: "São menos eficientes que os testes presenciais", correct: false, id: "c" },
            { text: "São adequados apenas para produtos físicos", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Gamificação' no contexto de produtos e serviços?",
        answers: [
            { text: "Transformar um produto em um jogo de videogame", correct: false, id: "a" },
            { text: "Aplicar elementos e mecânicas de jogos (pontos, recompensas, desafios) em contextos não-jogo para engajar e motivar usuários", correct: true, id: "b" },
            { text: "Ignorar a experiência do usuário", correct: false, id: "c" },
            { text: "Um tipo de publicidade agressiva", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o propósito de 'User Personas' no Design Thinking?",
        answers: [
            { text: "Representar todos os funcionários da empresa", correct: false, id: "a" },
            { text: "Criar representações semificcionais de seus usuários ideais, baseadas em dados e pesquisas, para entender melhor suas necessidades", correct: true, id: "b" },
            { text: "Apenas para decorar o escritório", correct: false, id: "c" },
            { text: "Servir como lista de contatos", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Proposta de Valor' deve comunicar ao cliente?",
        answers: [
            { text: "Apenas o preço do produto", correct: false, id: "a" },
            { text: "Como o produto ou serviço vai resolver um problema específico ou gerar um ganho importante para ele", correct: true, id: "b" },
            { text: "As qualificações da equipe de desenvolvimento", correct: false, id: "c" },
            { text: "A história da empresa", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância do 'Time-to-Market' para uma startup?",
        answers: [
            { text: "É irrelevante, o importante é a perfeição absoluta", correct: false, id: "a" },
            { text: "A rapidez com que um produto é lançado no mercado, sendo crucial para ganhar vantagem competitiva e validar hipóteses", correct: true, id: "b" },
            { text: "Refere-se ao tempo de vida útil do produto", correct: false, id: "c" },
            { text: "É o tempo que leva para o produto ser transportado", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Product Roadmap'?",
        answers: [
            { text: "Um documento que lista os erros do passado", correct: false, id: "a" },
            { text: "Um plano de alto nível que descreve a visão do produto, suas funcionalidades-chave e como ele evoluirá ao longo do tempo", correct: true, id: "b" },
            { text: "Uma lista de todos os recursos necessários para o projeto", correct: false, id: "c" },
            { text: "Um documento de marketing para o lançamento", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'diretor de produto' (Product Manager) em uma startup?",
        answers: [
            { text: "Apenas codificar o software", correct: false, id: "a" },
            { text: "Liderar a estratégia, o desenvolvimento e o lançamento de um produto, atuando como ponte entre equipes e clientes", correct: true, id: "b" },
            { text: "Gerenciar as finanças da empresa", correct: false, id: "c" },
            { text: "Realizar todas as vendas", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Iteração' no contexto ágil de desenvolvimento?",
        answers: [
            { text: "O final do projeto", correct: false, id: "a" },
            { text: "Um ciclo de desenvolvimento de curta duração que entrega uma versão funcional do produto, permitindo feedback e adaptação", correct: true, id: "b" },
            { text: "A documentação completa de um produto", correct: false, id: "c" },
            { text: "Apenas um processo de depuração de erros", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de 'testes de conceito' para novas ideias?",
        answers: [
            { text: "Validar a produção em massa", correct: false, id: "a" },
            { text: "Avaliar a aceitação e o potencial de mercado de uma nova ideia ou produto antes de investir muito no desenvolvimento", correct: true, id: "b" },
            { text: "Apenas gerar relatórios internos", correct: false, id: "c" },
            { text: "Ignorar a opinião dos clientes", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'mercado de nicho' envolve?",
        answers: [
            { text: "Atender a todos os consumidores possíveis", correct: false, id: "a" },
            { text: "Focar em um segmento específico e bem definido de consumidores com necessidades muito particulares", correct: true, id: "b" },
            { text: "Vender produtos muito caros", correct: false, id: "c" },
            { text: "Ignorar a concorrência", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'brainstorming reverso'?",
        answers: [
            { text: "Gerar apenas ideias positivas", correct: false, id: "a" },
            { text: "Identificar maneiras de *causar* um problema ou piorar uma situação para, então, encontrar soluções para evitar esses cenários", correct: true, id: "b" },
            { text: "Evitar a criatividade", correct: false, id: "c" },
            { text: "Apenas criticar ideias existentes", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Métricas Piratas' (AARRR Funnel)?",
        answers: [
            { text: "Uma metodologia de vendas ilegais", correct: false, id: "a" },
            { text: "Um framework de métricas focado nas fases do ciclo de vida do cliente: Aquisição, Ativação, Retenção, Receita e Recomendação", correct: true, id: "b" },
            { text: "Um tipo de design de jogos", correct: false, id: "c" },
            { text: "Métricas que medem apenas o lucro", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o propósito de um 'Pitch Deck'?",
        answers: [
            { text: "Ser um manual técnico detalhado do produto", correct: false, id: "a" },
            { text: "Uma apresentação visual concisa para investidores ou parceiros, destacando o problema, a solução, o mercado e o time", correct: true, id: "b" },
            { text: "Um documento legal de registro da empresa", correct: false, id: "c" },
            { text: "Um relatório de vendas mensais", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Experience (UX)'?",
        answers: [
            { text: "Apenas o design visual de um produto", correct: false, id: "a" },
            { text: "A totalidade das experiências de uma pessoa ao interagir com um produto, serviço ou empresa", correct: true, id: "b" },
            { text: "O custo de produção de um produto", correct: false, id: "c" },
            { text: "A velocidade da internet em um dispositivo", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'simplicidade' na concepção de um MVP?",
        answers: [
            { text: "Para dificultar o entendimento do usuário", correct: false, id: "a" },
            { text: "Para permitir um lançamento rápido, focar nas funcionalidades essenciais e coletar feedback cedo e de forma eficiente", correct: true, id: "b" },
            { text: "Para aumentar os custos de desenvolvimento", correct: false, id: "c" },
            { text: "Para ignorar as necessidades dos clientes", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Customer Journey Map'?",
        answers: [
            { text: "Um mapa físico da localização da empresa", correct: false, id: "a" },
            { text: "Uma representação visual da jornada de um cliente ao interagir com um produto ou serviço, desde o primeiro contato até a pós-compra", correct: true, id: "b" },
            { text: "Um gráfico de vendas históricas", correct: false, id: "c" },
            { text: "Um organograma da equipe de marketing", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'plano de validação' em uma startup?",
        answers: [
            { text: "Apenas documentar a ideia do produto", correct: false, id: "a" },
            { text: "Estruturar os experimentos e as métricas para testar as hipóteses mais críticas do negócio antes de investir em larga escala", correct: true, id: "b" },
            { text: "Criar uma apresentação para a equipe", correct: false, id: "c" },
            { text: "Desenvolver o produto sem feedback", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Bootcamp' no contexto de formação para startups?",
        answers: [
            { text: "Um tipo de software de gestão", correct: false, id: "a" },
            { text: "Um programa intensivo e imersivo que oferece treinamento prático em habilidades específicas para empreendedores e desenvolvedores", correct: true, id: "b" },
            { text: "Uma ferramenta de análise de dados", correct: false, id: "c" },
            { text: "Um evento de networking social", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função de um 'Growth Hacker' em uma startup?",
        answers: [
            { text: "Apenas cuidar da contabilidade", correct: false, id: "a" },
            { text: "Aplicar experimentos e estratégias de marketing e produto para impulsionar o crescimento rápido e escalável da base de usuários", correct: true, id: "b" },
            { text: "Ser responsável apenas pelo desenvolvimento de software", correct: false, id: "c" },
            { text: "Ignorar as métricas de crescimento", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste do Semáforo' (Traffic Light Test) pode indicar em um protótipo?",
        answers: [
            { text: "Apenas a velocidade de carregamento", correct: false, id: "a" },
            { text: "Se uma funcionalidade ou fluxo é 'verde' (funciona bem), 'amarelo' (precisa de ajustes) ou 'vermelho' (não funciona, precisa de revisão)", correct: true, id: "b" },
            { text: "As cores ideais para o design", correct: false, id: "c" },
            { text: "O nível de satisfação do funcionário", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a relevância do 'feedback negativo' para uma startup?",
        answers: [
            { text: "Deve ser ignorado para manter a motivação", correct: false, id: "a" },
            { text: "É uma fonte valiosa de aprendizado para identificar falhas no produto ou serviço e oportunidades de melhoria", correct: true, id: "b" },
            { text: "Significa que o produto deve ser abandonado", correct: false, id: "c" },
            { text: "Apenas serve para desmotivar a equipe", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Iteração de Produto'?",
        answers: [
            { text: "O lançamento final e sem mudanças de um produto", correct: false, id: "a" },
            { text: "O processo de aprimorar um produto em ciclos contínuos, com base em feedback e dados, adicionando ou modificando funcionalidades", correct: true, id: "b" },
            { text: "Apenas o desenvolvimento de uma nova versão do zero", correct: false, id: "c" },
            { text: "Um erro no planejamento do projeto", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'teste de fumaça' (smoke test) para um MVP?",
        answers: [
            { text: "Verificar a qualidade da fumaça emitida por um produto", correct: false, id: "a" },
            { text: "Um teste inicial para verificar se o produto funciona minimamente e se há algum interesse real dos usuários", correct: true, id: "b" },
            { text: "Testar a resistência do produto ao fogo", correct: false, id: "c" },
            { text: "Um teste para identificar odores em um protótipo", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Early Adopter' no contexto de novos produtos?",
        answers: [
            { text: "O último a adotar uma nova tecnologia", correct: false, id: "a" },
            { text: "Indivíduos ou empresas que utilizam um novo produto ou tecnologia antes da maioria, atuando como validadores iniciais", correct: true, id: "b" },
            { text: "Alguém que nunca usa produtos novos", correct: false, id: "c" },
            { text: "Um cético em relação a inovações", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel da 'empatia' no processo de design centrado no usuário?",
        answers: [
            { text: "Aumentar a distância entre o designer e o usuário", correct: false, id: "a" },
            { text: "Compreender as emoções, necessidades e comportamentos dos usuários para criar soluções mais relevantes e eficazes", correct: true, id: "b" },
            { text: "Focar apenas na estética do produto", correct: false, id: "c" },
            { text: "Ignorar as limitações dos usuários", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Crowdfunding' como forma de financiamento para startups?",
        answers: [
            { text: "Um empréstimo bancário tradicional", correct: false, id: "a" },
            { text: "Captação de recursos de um grande número de pessoas, geralmente através de plataformas online, em troca de recompensas ou participação", correct: true, id: "b" },
            { text: "Financiamento exclusivo por um único investidor", correct: false, id: "c" },
            { text: "Apenas a venda de produtos em lojas físicas", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Startup' e 'Pequena Empresa'?",
        answers: [
            { text: "São sinônimos, referem-se à mesma coisa", correct: false, id: "a" },
            { text: "Startup busca crescimento rápido e escalável com base em inovação; pequena empresa opera em escala local e com modelo de negócio comprovado", correct: true, id: "b" },
            { text: "Pequena empresa sempre busca inovação disruptiva", correct: false, id: "c" },
            { text: "Startup não precisa de lucro, pequena empresa sim", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Lean Manufacturing'?",
        answers: [
            { text: "Um método de produção em massa sem controle de qualidade", correct: false, id: "a" },
            { text: "Uma filosofia de produção focada na eliminação de desperdícios para maximizar o valor para o cliente, originada da Toyota", correct: true, id: "b" },
            { text: "Um tipo de contabilidade financeira para indústrias", correct: false, id: "c" },
            { text: "Um software de design de produtos", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'inovação' para a sobrevivência de uma empresa no longo prazo?",
        answers: [
            { text: "É opcional, pode-se manter os métodos antigos", correct: false, id: "a" },
            { text: "Essencial para se adaptar às mudanças do mercado, manter a competitividade e criar novas oportunidades de crescimento", correct: true, id: "b" },
            { text: "Aumenta apenas os custos", correct: false, id: "c" },
            { text: "Não tem relação com a longevidade da empresa", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Research' (Pesquisa com Usuários)?",
        answers: [
            { text: "Pesquisar apenas sobre a concorrência", correct: false, id: "a" },
            { text: "O estudo das necessidades, comportamentos e motivações dos usuários para informar o design de produtos e serviços", correct: true, id: "b" },
            { text: "Criar funcionalidades sem perguntar aos usuários", correct: false, id: "c" },
            { text: "Apenas coletar dados demográficos", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'protótipo de papel'?",
        answers: [
            { text: "Ser o produto final impresso", correct: false, id: "a" },
            { text: "Um protótipo de baixíssima fidelidade, rápido de criar e ideal para testar ideias iniciais de layout e fluxo", correct: true, id: "b" },
            { text: "Um documento de segurança do produto", correct: false, id: "c" },
            { text: "Um rascunho de contrato", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Guerrilha' implica em termos de feedback do usuário?",
        answers: [
            { text: "Testes longos e formais em laboratório", correct: false, id: "a" },
            { text: "Testes rápidos e informais com um pequeno número de usuários em ambientes cotidianos para obter feedback imediato", correct: true, id: "b" },
            { text: "Testes que envolvem grandes grupos de foco", correct: false, id: "c" },
            { text: "Testes sem qualquer interação com usuários", correct: false, id: "d" }
        ]
    },
    {
        question: "No contexto de UI/UX, o que é 'Usabilidade'?",
        answers: [
            { text: "A estética visual de um produto", correct: false, id: "a" },
            { text: "A facilidade com que os usuários podem usar um produto para atingir seus objetivos de forma eficaz, eficiente e satisfatória", correct: true, id: "b" },
            { text: "O número de funcionalidades disponíveis", correct: false, id: "c" },
            { text: "A velocidade de carregamento de uma página", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel da 'persuasão' na comunicação de uma startup?",
        answers: [
            { text: "Enganar o cliente", correct: false, id: "a" },
            { text: "Convencer clientes, investidores e parceiros do valor e potencial da sua ideia ou produto", correct: true, id: "b" },
            { text: "Apenas para discussões internas", correct: false, id: "c" },
            { text: "Evitar a comunicação clara", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Conceito' visa validar?",
        answers: [
            { text: "A viabilidade técnica do produto final", correct: false, id: "a" },
            { text: "O interesse e a aceitação inicial de uma ideia ou conceito por parte do público-alvo", correct: true, id: "b" },
            { text: "A performance de uma equipe de vendas", correct: false, id: "c" },
            { text: "A lucratividade do negócio", correct: false, id: "d" }
        ]
    },
    {
        question: "No desenvolvimento ágil, o que significa 'Backlog do Produto'?",
        answers: [
            { text: "Uma lista de tarefas já concluídas", correct: false, id: "a" },
            { text: "Uma lista priorizada de funcionalidades, melhorias e correções que precisam ser desenvolvidas para o produto", correct: true, id: "b" },
            { text: "Um registro de erros de programação", correct: false, id: "c" },
            { text: "Um documento de marketing", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de 'testes iterativos' para o sucesso de um produto?",
        answers: [
            { text: "São realizados apenas uma vez, no final do projeto", correct: false, id: "a" },
            { text: "Permitem coletar feedback contínuo, fazer ajustes e melhorias ao longo do desenvolvimento, garantindo um produto mais alinhado às necessidades do usuário", correct: true, id: "b" },
            { text: "Atrasam o lançamento do produto", correct: false, id: "c" },
            { text: "São irrelevantes se a ideia inicial for perfeita", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Lean Production'?",
        answers: [
            { text: "Produção em massa com foco no estoque", correct: false, id: "a" },
            { text: "Um sistema de produção que visa minimizar desperdícios (tempo, recursos, esforço) e maximizar a eficiência e o valor para o cliente", correct: true, id: "b" },
            { text: "Um método de contabilidade de custos", correct: false, id: "c" },
            { text: "Apenas um software de gerenciamento", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Startup' e 'PME' (Pequena e Média Empresa)?",
        answers: [
            { text: "PME busca rápido crescimento e escalabilidade", correct: false, id: "a" },
            { text: "Startup é um negócio repetível e escalável, geralmente em busca de um modelo de negócio novo; PME tem modelo comprovado e crescimento mais orgânico", correct: true, id: "b" },
            { text: "Startup opera em mercados tradicionais, PME em novos", correct: false, id: "c" },
            { text: "Startup não gera lucro, PME sim", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'mercado de massa' implica?",
        answers: [
            { text: "Focar em um nicho muito pequeno", correct: false, id: "a" },
            { text: "Produzir e vender produtos ou serviços para um grande número de consumidores, sem segmentação específica", correct: true, id: "b" },
            { text: "Apenas vender para empresas", correct: false, id: "c" },
            { text: "Depender de um único cliente grande", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel de uma 'Análise de Concorrência' para uma startup?",
        answers: [
            { text: "Copiar exatamente o que os concorrentes fazem", correct: false, id: "a" },
            { text: "Identificar os pontos fortes e fracos dos concorrentes, oportunidades e ameaças, e diferenciar sua própria oferta no mercado", correct: true, id: "b" },
            { text: "Ignorar a existência de outras empresas", correct: false, id: "c" },
            { text: "Apenas para saber quem são os líderes do mercado", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Minimum Lovable Product (MLP)'?",
        answers: [
            { text: "Um produto que é apenas funcional", correct: false, id: "a" },
            { text: "A menor versão de um produto que os usuários não apenas utilizam, mas amam, por sua experiência e valor", correct: true, id: "b" },
            { text: "Um produto que não precisa de feedback", correct: false, id: "c" },
            { text: "Um protótipo de baixa fidelidade", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'Mockup Interativo'?",
        answers: [
            { text: "Ser a versão final do software", correct: false, id: "a" },
            { text: "Simular a interação do usuário com a interface de forma mais realista que um mockup estático, mas sem funcionalidade real", correct: true, id: "b" },
            { text: "Apenas para decorar a apresentação", correct: false, id: "c" },
            { text: "Gerar código automaticamente", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Product-Led Growth'?",
        answers: [
            { text: "Uma estratégia de vendas tradicional", correct: false, id: "a" },
            { text: "Uma estratégia de crescimento onde a aquisição, ativação e retenção de clientes são impulsionadas pelo próprio produto", correct: true, id: "b" },
            { text: "Focar apenas em publicidade paga", correct: false, id: "c" },
            { text: "Depender de uma grande equipe de vendas", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'visão de longo prazo' para um empreendedor?",
        answers: [
            { text: "É desnecessária, deve-se focar apenas no presente", correct: false, id: "a" },
            { text: "Oferece um guia e motivação para superar desafios, mantendo o foco nos objetivos estratégicos e no impacto desejado", correct: true, id: "b" },
            { text: "Limita a flexibilidade e a adaptação", correct: false, id: "c" },
            { text: "Impede a inovação e o crescimento rápido", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'Value Proposition Canvas' auxilia?",
        answers: [
            { text: "Apenas na precificação de produtos", correct: false, id: "a" },
            { text: "A alinhar a proposta de valor de um produto ou serviço com as necessidades, dores e ganhos dos clientes", correct: true, id: "b" },
            { text: "A criar um novo modelo de negócios do zero", correct: false, id: "c" },
            { text: "A analisar a concorrência", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'storytelling' no pitch de uma startup?",
        answers: [
            { text: "Apenas para preencher o tempo", correct: false, id: "a" },
            { text: "Tornar a apresentação mais envolvente e memorável, ajudando a transmitir a visão e a conectar-se emocionalmente com a audiência", correct: true, id: "b" },
            { text: "Esconder informações importantes", correct: false, id: "c" },
            { text: "Substituir os dados e as métricas", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Growth Hacking'?",
        answers: [
            { text: "Um conjunto de táticas de marketing tradicionais", correct: false, id: "a" },
            { text: "Um processo de experimentação rápida para encontrar os canais mais eficientes para o crescimento de uma empresa", correct: true, id: "b" },
            { text: "Apenas a análise de dados financeiros", correct: false, id: "c" },
            { text: "O desenvolvimento de novas tecnologias", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'cultura organizacional' para o sucesso de uma startup?",
        answers: [
            { text: "É irrelevante se a equipe for talentosa", correct: false, id: "a" },
            { text: "Define os valores, comportamentos e ambiente de trabalho, impactando a motivação, colaboração e a retenção de talentos", correct: true, id: "b" },
            { text: "Serve apenas para a decoração do escritório", correct: false, id: "c" },
            { text: "Aumenta a burocracia interna", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Design de Serviço' se propõe a fazer?",
        answers: [
            { text: "Apenas criar interfaces digitais", correct: false, id: "a" },
            { text: "Planejar e organizar pessoas, infraestrutura, comunicação e materiais para melhorar a qualidade da interação entre provedor e cliente", correct: true, id: "b" },
            { text: "Desenvolver apenas produtos físicos", correct: false, id: "c" },
            { text: "Focar exclusivamente na publicidade", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o conceito de 'empreendedorismo corporativo' (intraempreendedorismo)?",
        answers: [
            { text: "Criar uma nova empresa do zero, fora de uma corporação", correct: false, id: "a" },
            { text: "Desenvolver iniciativas empreendedoras e inovadoras dentro de uma organização já existente, com o apoio da empresa", correct: true, id: "b" },
            { text: "Apenas gerenciar equipes grandes", correct: false, id: "c" },
            { text: "Ser um funcionário passivo e sem iniciativa", correct: false, id: "d" }
        ]
    },
    {
        question: "Para que serve um 'teste de fumaça' (smoke test) em um MVP?",
        answers: [
            { text: "Para checar a qualidade do material usado", correct: false, id: "a" },
            { text: "Para validar a demanda inicial e a viabilidade básica do produto antes de investir mais no desenvolvimento", correct: true, id: "b" },
            { text: "Para testar a segurança contra incêndios", correct: false, id: "c" },
            { text: "Para avaliar o design visual final", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Guerrilha' visa alcançar na validação?",
        answers: [
            { text: "Resultados estatisticamente significativos de grandes amostras", correct: false, id: "a" },
            { text: "Feedback rápido e informal de potenciais usuários em ambientes não controlados para validar hipóteses rapidamente", correct: true, id: "b" },
            { text: "Testar a capacidade do servidor sob carga máxima", correct: false, id: "c" },
            { text: "Medir a durabilidade física do protótipo", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'adaptação' para uma startup no mercado dinâmico?",
        answers: [
            { text: "É uma fraqueza que deve ser evitada", correct: false, id: "a" },
            { text: "Crucial para responder a mudanças no mercado, feedback de clientes e desafios inesperados, garantindo a sobrevivência e crescimento", correct: true, id: "b" },
            { text: "Atrasar o desenvolvimento do produto", correct: false, id: "c" },
            { text: "Manter a estratégia inicial a todo custo", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Customer Relationship Management (CRM)' representa para uma startup?",
        answers: [
            { text: "Um software de design gráfico", correct: false, id: "a" },
            { text: "Estratégias e tecnologias para gerenciar e analisar interações com clientes e dados ao longo do ciclo de vida do cliente", correct: true, id: "b" },
            { text: "Um método de produção industrial", correct: false, id: "c" },
            { text: "Apenas um sistema de contabilidade", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'plano de marketing' em uma startup?",
        answers: [
            { text: "Apenas definir o orçamento", correct: false, id: "a" },
            { text: "Descrever como a empresa vai atrair, engajar e reter clientes, comunicando o valor do produto/serviço", correct: true, id: "b" },
            { text: "Controlar o desenvolvimento tecnológico", correct: false, id: "c" },
            { text: "Gerenciar a equipe de vendas", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'Chasm' (Abismo) de Geoffrey Moore descreve?",
        answers: [
            { text: "O fosso entre o sucesso e o fracasso de um produto", correct: false, id: "a" },
            { text: "A lacuna entre a adoção de um produto pelos 'early adopters' e o mercado principal ('early majority')", correct: true, id: "b" },
            { text: "Um problema de segurança em software", correct: false, id: "c" },
            { text: "O ponto de não retorno em um investimento", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância do 'Produto Mínimo Viável (MVP)' para a aprendizagem validada?",
        answers: [
            { text: "Ele minimiza a necessidade de aprendizado", correct: false, id: "a" },
            { text: "Permite testar as hipóteses mais críticas com o menor esforço e obter feedback real para guiar as próximas etapas", correct: true, id: "b" },
            { text: "Ele já é o produto final, não precisa de mais aprendizado", correct: false, id: "c" },
            { text: "Apenas serve para arrecadar dinheiro rapidamente", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'inovação aberta' (open innovation) propõe?",
        answers: [
            { text: "Que a inovação deve ser feita apenas internamente", correct: false, id: "a" },
            { text: "Colaborar com parceiros externos (clientes, universidades, startups) para gerar e implementar ideias, acelerando o processo de inovação", correct: true, id: "b" },
            { text: "Aumentar o sigilo sobre novos projetos", correct: false, id: "c" },
            { text: "Copiar soluções sem adaptação", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel de um 'conselho consultivo' para uma startup?",
        answers: [
            { text: "Tomar todas as decisões operacionais da empresa", correct: false, id: "a" },
            { text: "Oferecer orientação estratégica, expertise e networking, sem envolvimento na gestão diária, auxiliando no crescimento e na tomada de decisões importantes", correct: true, id: "b" },
            { text: "Apenas fiscalizar as finanças da empresa", correct: false, id: "c" },
            { text: "Substituir a equipe de fundadores", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'pivotagem de valor' (value proposition pivot) implica?",
        answers: [
            { text: "Mudar apenas o preço do produto", correct: false, id: "a" },
            { text: "Manter o segmento de clientes e a tecnologia, mas mudar a proposta de valor para atender a uma necessidade diferente dos clientes", correct: true, id: "b" },
            { text: "Mudar a equipe de vendas", correct: false, id: "c" },
            { text: "Ignorar a demanda do mercado", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a principal diferença entre 'capital semente' e 'capital de risco'?",
        answers: [
            { text: "Capital semente é para empresas grandes, capital de risco para startups", correct: false, id: "a" },
            { text: "Capital semente é investimento inicial para validação da ideia; capital de risco é para startups com tração e potencial de crescimento acelerado", correct: true, id: "b" },
            { text: "Capital semente é empréstimo, capital de risco é doação", correct: false, id: "c" },
            { text: "Não há diferença, são sinônimos", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Design Centrado no Usuário' (User-Centered Design)?",
        answers: [
            { text: "Focar apenas na estética visual", correct: false, id: "a" },
            { text: "Uma abordagem de design que coloca as necessidades, desejos e limitações dos usuários no centro de todo o processo de desenvolvimento", correct: true, id: "b" },
            { text: "Um método de design que ignora o feedback do usuário", correct: false, id: "c" },
            { text: "Apenas para projetar interfaces de software", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o propósito do 'Mapa de Empatia'?",
        answers: [
            { text: "Apenas organizar tarefas da equipe", correct: false, id: "a" },
            { text: "Visualizar e compreender as dores, ganhos, tarefas, o que o usuário pensa, sente, vê e ouve para construir empatia", correct: true, id: "b" },
            { text: "Criar um mapa geográfico da empresa", correct: false, id: "c" },
            { text: "Documentar os requisitos técnicos do produto", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Growth Marketing' foca em?",
        answers: [
            { text: "Apenas em campanhas publicitárias pagas", correct: false, id: "a" },
            { text: "Estratégias de marketing que visam o crescimento rápido e sustentável, utilizando análise de dados e experimentação contínua", correct: true, id: "b" },
            { text: "Somente no branding da marca", correct: false, id: "c" },
            { text: "Ignorar as métricas de performance", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Prototipagem Rápida' no ciclo de desenvolvimento?",
        answers: [
            { text: "Aumenta o tempo de desenvolvimento", correct: false, id: "a" },
            { text: "Permite testar e validar ideias rapidamente, obter feedback cedo e reduzir riscos antes de grandes investimentos", correct: true, id: "b" },
            { text: "Exige alto custo inicial", correct: false, id: "c" },
            { text: "É uma fase opcional do processo", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Interface (UI)'?",
        answers: [
            { text: "A lógica de programação por trás de um sistema", correct: false, id: "a" },
            { text: "A parte de um produto com a qual o usuário interage visualmente, incluindo botões, layouts, tipografia e cores", correct: true, id: "b" },
            { text: "O banco de dados de um aplicativo", correct: false, id: "c" },
            { text: "O manual de instruções de um software", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Story Mapping' no desenvolvimento de produtos?",
        answers: [
            { text: "Criar um mapa físico da sede da empresa", correct: false, id: "a" },
            { text: "Organizar e priorizar as funcionalidades do produto de uma perspectiva do usuário, contando a 'história' do uso do produto", correct: true, id: "b" },
            { text: "Apenas para documentar requisitos técnicos", correct: false, id: "c" },
            { text: "Gerar relatórios financeiros", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Produto Mínimo Viável (MVP)' de acordo com os princípios da Startup Enxuta?",
        answers: [
            { text: "A versão final e completa do produto pronta para o mercado.", correct: false, id: "a" },
            { text: "A versão de um novo produto que permite à equipe coletar o máximo de aprendizado validado sobre clientes com o mínimo de esforço.", correct: true, id: "b" },
            { text: "Um protótipo que simula todas as funcionalidades possíveis do produto.", correct: false, id: "c" },
            { text: "O produto mais barato que uma empresa pode produzir.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Canvas de Modelo de Negócio' (Business Model Canvas)?",
        answers: [
            { text: "Detalhamento profundo das operações financeiras anuais.", correct: false, id: "a" },
            { text: "Ferramenta visual para descrever, analisar e projetar modelos de negócios de forma estratégica, abrangendo segmentos de clientes, propostas de valor, canais, etc.", correct: true, id: "b" },
            { text: "Um documento legal para registro de patentes.", correct: false, id: "c" },
            { text: "Um plano de marketing de curto prazo.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Iterar' no contexto de desenvolvimento de produtos e serviços?",
        answers: [
            { text: "Completar um ciclo de desenvolvimento sem nenhuma mudança.", correct: false, id: "a" },
            { text: "Repetir um processo de criação, teste e refinamento, usando o aprendizado de cada ciclo para melhorar a próxima versão.", correct: true, id: "b" },
            { text: "Ignorar o feedback dos usuários após o lançamento inicial.", correct: false, id: "c" },
            { text: "Realizar todas as etapas de um projeto de uma só vez.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de 'testes A/B' para otimização de produtos ou marketing?",
        answers: [
            { text: "Apenas para confirmar decisões já tomadas.", correct: false, id: "a" },
            { text: "Permitem comparar duas versões de um item (ex: página web, botão) para ver qual performa melhor e tomar decisões baseadas em dados reais.", correct: true, id: "b" },
            { text: "São utilizados somente para testar bugs de software.", correct: false, id: "c" },
            { text: "Não fornecem dados acionáveis.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'pivotar' em uma startup?",
        answers: [
            { text: "Ato de vender a empresa para um grande conglomerado.", correct: false, id: "a" },
            { text: "Uma mudança fundamental na estratégia do negócio, com base em aprendizados e validação, para encontrar um modelo mais sustentável.", correct: true, id: "b" },
            { text: "Um pequeno ajuste na interface do usuário.", correct: false, id: "c" },
            { text: "Contratar novos funcionários para uma área diferente.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'ciclo Construir-Medir-Aprender' visa fazer?",
        answers: [
            { text: "Garantir que um produto seja lançado com todas as funcionalidades planejadas.", correct: false, id: "a" },
            { text: "Minimizar o tempo e o custo de desenvolvimento, maximizando o aprendizado e a validação de hipóteses com clientes reais.", correct: true, id: "b" },
            { text: "Eliminar a necessidade de feedback do cliente.", correct: false, id: "c" },
            { text: "Criar um plano de negócios detalhado antes de qualquer ação.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a principal função do 'Lean Canvas' em comparação com um plano de negócios tradicional?",
        answers: [
            { text: "Ser um documento financeiro mais extenso.", correct: false, id: "a" },
            { text: "Focar em hipóteses para validar rapidamente um modelo de negócio em um formato enxuto de uma página.", correct: true, id: "b" },
            { text: "Detalhamento operacional de todas as áreas da empresa.", correct: false, id: "c" },
            { text: "Substituir a necessidade de qualquer validação de mercado.", correct: false, id: "d" }
        ]
    },
    {
        question: "No Lean Canvas, o que representa o bloco 'Problema'?",
        answers: [
            { text: "As dificuldades da equipe de desenvolvimento.", correct: false, id: "a" },
            { text: "Os principais problemas que os segmentos de clientes-alvo estão enfrentando e que a startup pretende resolver.", correct: true, id: "b" },
            { text: "A solução proposta pela startup.", correct: false, id: "c" },
            { text: "Os custos operacionais do negócio.", correct: false, id: "d" }
        ]
    },
    {
        question: "Para que serve o bloco 'Solução' no Lean Canvas?",
        answers: [
            { text: "Listar todas as funcionalidades imagináveis do produto.", correct: false, id: "a" },
            { text: "Descrever como a startup resolverá os problemas principais dos clientes de forma concisa e efetiva.", correct: true, id: "b" },
            { text: "Detalhamento técnico da arquitetura do sistema.", correct: false, id: "c" },
            { text: "Apenas uma breve introdução do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Unique Value Proposition' (Proposta de Valor Única) busca comunicar?",
        answers: [
            { text: "O preço mais baixo do mercado.", correct: false, id: "a" },
            { text: "A principal razão pela qual o cliente deve escolher o seu produto em vez dos concorrentes, destacando benefícios e diferenciais.", correct: true, id: "b" },
            { text: "A lista de tecnologias usadas no produto.", correct: false, id: "c" },
            { text: "As credenciais dos fundadores da startup.", correct: false, id: "d" }
        ]
    },
    {
        question: "No contexto do Lean Canvas, o que são 'Canais'?",
        answers: [
            { text: "Canais de televisão ou rádio.", correct: false, id: "a" },
            { text: "Os meios pelos quais a startup irá alcançar seus clientes e entregar sua proposta de valor (ex: vendas, marketing, distribuição).", correct: true, id: "b" },
            { text: "As conexões de rede internas da empresa.", correct: false, id: "c" },
            { text: "As redes sociais pessoais dos funcionários.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que as 'Métricas-Chave' (Key Metrics) representam no Lean Canvas?",
        answers: [
            { text: "Qualquer tipo de dado coletado pela empresa.", correct: false, id: "a" },
            { text: "Os indicadores mais importantes para medir o progresso e o sucesso do negócio, focando no que é acionável e relevante.", correct: true, id: "b" },
            { text: "Os dados de contato de todos os clientes.", correct: false, id: "c" },
            { text: "As estatísticas de acesso ao site da concorrência.", correct: false, id: "d" }
        ]
    },
    {
        question: "No Lean Canvas, o bloco 'Estrutura de Custos' se refere a:",
        answers: [
            { text: "Apenas os custos com salários.", correct: false, id: "a" },
            { text: "As despesas mais significativas necessárias para operar o modelo de negócio.", correct: true, id: "b" },
            { text: "O preço de venda do produto.", correct: false, id: "c" },
            { text: "O lucro esperado da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o foco do bloco 'Fluxo de Receita' no Lean Canvas?",
        answers: [
            { text: "Como a empresa gastará o dinheiro.", correct: false, id: "a" },
            { text: "As diferentes maneiras pelas quais a empresa irá gerar dinheiro a partir de suas propostas de valor (ex: vendas, assinaturas, licenças).", correct: true, id: "b" },
            { text: "Apenas o capital inicial investido.", correct: false, id: "c" },
            { text: "Os descontos oferecidos aos clientes.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que caracteriza uma 'Vantagem Injusta' no Lean Canvas?",
        answers: [
            { text: "Algo que qualquer concorrente pode replicar facilmente.", correct: false, id: "a" },
            { text: "Um diferencial competitivo que não pode ser facilmente copiado ou comprado, dando à startup uma posição única no mercado.", correct: true, id: "b" },
            { text: "Uma falha no planejamento estratégico.", correct: false, id: "c" },
            { text: "Um benefício de curto prazo para o cliente.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que são 'Hipóteses' no contexto de uma startup enxuta?",
        answers: [
            { text: "Fatos comprovados e inquestionáveis sobre o mercado.", correct: false, id: "a" },
            { text: "Suposições sobre o problema do cliente, a solução ou o modelo de negócio que precisam ser validadas através de experimentos.", correct: true, id: "b" },
            { text: "Garantias de sucesso do produto.", correct: false, id: "c" },
            { text: "Resultados finais de uma pesquisa de mercado.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Validação' no método Lean Startup?",
        answers: [
            { text: "Atrasar o desenvolvimento do produto.", correct: false, id: "a" },
            { text: "Confirmar se as hipóteses da startup são verdadeiras através de experimentos com clientes reais, reduzindo riscos e desperdício.", correct: true, id: "b" },
            { text: "Ignorar o feedback dos clientes.", correct: false, id: "c" },
            { text: "Focar apenas na intuição dos fundadores.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Aprendizado Validado' (Validated Learning)?",
        answers: [
            { text: "Aprendizado que não tem base em dados.", correct: false, id: "a" },
            { text: "Conhecimento adquirido através da execução de experimentos e medição de resultados, permitindo tomar decisões baseadas em evidências.", correct: true, id: "b" },
            { text: "Informações coletadas de forma aleatória.", correct: false, id: "c" },
            { text: "Apenas feedback positivo dos clientes.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o conceito de 'Metas Acionáveis' (Actionable Metrics)?",
        answers: [
            { text: "Métricas que são difíceis de interpretar.", correct: false, id: "a" },
            { text: "Indicadores que fornecem insights claros e que podem ser usados para tomar decisões e guiar ações específicas de melhoria.", correct: true, id: "b" },
            { text: "Métricas que apenas mostram o que aconteceu, sem indicar porquê.", correct: false, id: "c" },
            { text: "Métricas que não influenciam o desenvolvimento do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Pivot de Zoom-in' implica em uma startup?",
        answers: [
            { text: "Expandir o escopo do produto para atender a mais clientes.", correct: false, id: "a" },
            { text: "Focar em uma única funcionalidade do produto original, que se mostrou mais valiosa, e transformá-la no produto principal.", correct: true, id: "b" },
            { text: "Mudar completamente o nicho de mercado.", correct: false, id: "c" },
            { text: "Descontinuar o produto por completo.", correct: false, id: "d" }
        ]
    },
    {
        question: "No Lean Startup, o que é um 'Pivot de Plataforma'?",
        answers: [
            { text: "Mudar a cor da interface do usuário.", correct: false, id: "a" },
            { text: "Transformar um produto de aplicação única em uma plataforma que pode hospedar múltiplos produtos ou serviços.", correct: true, id: "b" },
            { text: "Alterar a linguagem de programação utilizada.", correct: false, id: "c" },
            { text: "Mudar o nome da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Conselheiro de Negócios' para um empreendedor?",
        answers: [
            { text: "Tomar todas as decisões pela startup.", correct: false, id: "a" },
            { text: "Oferecer expertise, experiência e uma perspectiva externa para ajudar o empreendedor a tomar decisões estratégicas e superar desafios.", correct: true, id: "b" },
            { text: "Apenas fornecer capital inicial.", correct: false, id: "c" },
            { text: "Gerenciar as operações diárias da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Stakeholder' significa no contexto de um projeto ou negócio?",
        answers: [
            { text: "Apenas os funcionários da empresa.", correct: false, id: "a" },
            { text: "Qualquer indivíduo, grupo ou organização que é afetado ou pode afetar as ações, decisões, políticas ou objetivos de um projeto ou empresa.", correct: true, id: "b" },
            { text: "Apenas os concorrentes diretos.", correct: false, id: "c" },
            { text: "Os clientes que já compraram o produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Comunicação Clara' para uma equipe de startup?",
        answers: [
            { text: "Aumenta a burocracia e a lentidão.", correct: false, id: "a" },
            { text: "Essencial para alinhar expectativas, evitar mal-entendidos, promover a colaboração e garantir que todos estejam na mesma página.", correct: true, id: "b" },
            { text: "Não tem impacto na produtividade.", correct: false, id: "c" },
            { text: "É relevante apenas na comunicação externa.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'Mercado Existente' descreve?",
        answers: [
            { text: "Um mercado que ainda não foi explorado por nenhuma empresa.", correct: false, id: "a" },
            { text: "Um mercado onde já existem concorrentes e clientes com necessidades reconhecidas, mas que ainda pode ser inovado.", correct: true, id: "b" },
            { text: "Um mercado que já está saturado e sem oportunidades.", correct: false, id: "c" },
            { text: "Um mercado que a startup não tem interesse em atuar.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Problema e Solução' no Lean Canvas?",
        answers: [
            { text: "São a mesma coisa, apenas escritos de forma diferente.", correct: false, id: "a" },
            { text: "Problema descreve a dor do cliente, e Solução descreve como o produto alivia essa dor.", correct: true, id: "b" },
            { text: "Solução é o problema que a startup enfrenta.", correct: false, id: "c" },
            { text: "Problema é o preço do produto, Solução é o lucro.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Entrevista de Solução' busca validar?",
        answers: [
            { text: "Se o cliente tem o problema correto.", correct: false, id: "a" },
            { text: "Se a solução proposta pela startup realmente atende às necessidades dos clientes e se eles a acham atraente.", correct: true, id: "b" },
            { text: "Se a equipe de vendas é eficaz.", correct: false, id: "c" },
            { text: "Se o investidor vai aprovar o financiamento.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel da 'proatividade' para um empreendedor?",
        answers: [
            { text: "Esperar que as coisas aconteçam antes de agir.", correct: false, id: "a" },
            { text: "Tomar a iniciativa, antecipar problemas e buscar soluções ativamente, em vez de reagir apenas quando necessário.", correct: true, id: "b" },
            { text: "Delegar todas as tarefas e não se envolver.", correct: false, id: "c" },
            { text: "Evitar riscos a todo custo.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'Mercado Novo' (New Market) no contexto de inovação?",
        answers: [
            { text: "Um mercado com muitos concorrentes estabelecidos.", correct: false, id: "a" },
            { text: "Um mercado criado pela inovação, onde não havia clientes ou soluções pré-existentes para um problema recém-identificado.", correct: true, id: "b" },
            { text: "Um mercado onde as empresas tradicionais operam.", correct: false, id: "d" },
            { text: "Um mercado saturado de produtos.", correct: false, id: "c" }
        ]
    },
    {
        question: "Qual a importância da 'persistência' no caminho empreendedor?",
        answers: [
            { text: "É desnecessária se houver talento.", correct: false, id: "a" },
            { text: "Crucial para continuar em frente apesar dos obstáculos, fracassos e rejeições que são comuns ao construir um negócio.", correct: true, id: "b" },
            { text: "Significa não mudar de ideia nunca.", correct: false, id: "c" },
            { text: "Garante que não haverá nenhum desafio.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Funil de AARRR' mede na jornada do cliente?",
        answers: [
            { text: "Apenas a aquisição de novos clientes.", correct: false, id: "a" },
            { text: "As etapas de Aquisição, Ativação, Retenção, Receita e Recomendação, fornecendo uma visão completa do ciclo de vida do cliente.", correct: true, id: "b" },
            { text: "O desempenho dos concorrentes.", correct: false, id: "c" },
            { text: "O número de produtos em estoque.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel da 'visão' de um empreendedor?",
        answers: [
            { text: "Ser um detalhamento técnico do produto.", correct: false, id: "a" },
            { text: "Aspirar a um futuro desejado, inspirando a equipe e definindo a direção estratégica de longo prazo para a startup.", correct: true, id: "b" },
            { text: "Apenas descrever os problemas atuais.", correct: false, id: "c" },
            { text: "Controlar os gastos diários.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Gestão de Riscos' significa para uma startup?",
        answers: [
            { text: "Eliminar todos os riscos do negócio.", correct: false, id: "a" },
            { text: "Identificar, analisar e mitigar os riscos potenciais que podem afetar o sucesso da startup, como riscos financeiros, de mercado ou operacionais.", correct: true, id: "b" },
            { text: "Assumir todos os riscos sem planejamento.", correct: false, id: "c" },
            { text: "Focar apenas nos riscos de segurança da informação.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Flow' (Fluxo do Usuário) em design de interação?",
        answers: [
            { text: "A organização física do escritório.", correct: false, id: "a" },
            { text: "A sequência de passos que um usuário realiza para completar uma tarefa ou atingir um objetivo ao interagir com um sistema ou produto.", correct: true, id: "b" },
            { text: "Um tipo de gráfico financeiro.", correct: false, id: "c" },
            { text: "A jornada de um produto da fábrica ao consumidor.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de um 'pitch de vendas' eficaz?",
        answers: [
            { text: "Apenas descrever o produto sem emoção.", correct: false, id: "a" },
            { text: "Convencer o cliente sobre o valor e os benefícios do produto, levando-o à compra.", correct: true, id: "b" },
            { text: "É uma conversa informal sem objetivo.", correct: false, id: "c" },
            { text: "Serve apenas para impressionar colegas.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Product Discovery' busca alcançar?",
        answers: [
            { text: "Lançar o produto sem entender as necessidades do cliente.", correct: false, id: "a" },
            { text: "Descobrir o que os clientes realmente precisam e o que vale a pena construir, através de pesquisa e experimentação.", correct: true, id: "b" },
            { text: "Apenas documentar a ideia inicial do produto.", correct: false, id: "c" },
            { text: "Gerenciar os custos de produção.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o benefício de 'protótipos funcionais' (Functional Prototypes)?",
        answers: [
            { text: "São os mais baratos e rápidos de fazer.", correct: false, id: "a" },
            { text: "Permitem testar funcionalidades específicas e a interação real do usuário com o sistema, mesmo que com recursos limitados.", correct: true, id: "b" },
            { text: "Focam apenas na estética visual.", correct: false, id: "c" },
            { text: "Não precisam de feedback do usuário.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Crowdsourcing'?",
        answers: [
            { text: "Contratar uma única pessoa para um trabalho.", correct: false, id: "a" },
            { text: "Obter ideias, serviços ou conteúdo de um grande grupo de pessoas, geralmente online, em vez de fontes tradicionais (internas ou fornecedores).", correct: true, id: "b" },
            { text: "Um tipo de software de gestão de projetos.", correct: false, id: "c" },
            { text: "Apenas a venda de produtos em grande escala.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Plano de Continuidade de Negócios'?",
        answers: [
            { text: "Garantir o lucro imediato da empresa.", correct: false, id: "a" },
            { text: "Assegurar que a empresa pode continuar suas operações essenciais após um desastre ou interrupção significativa.", correct: true, id: "b" },
            { text: "Apenas planejar o lançamento de novos produtos.", correct: false, id: "c" },
            { text: "Gerenciar as redes sociais da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Responsabilidade Social Corporativa (RSC)' envolve?",
        answers: [
            { text: "Apenas o cumprimento de leis fiscais.", correct: false, id: "a" },
            { text: "O compromisso de uma empresa com práticas éticas e contribuição para o desenvolvimento econômico, melhorando a qualidade de vida da força de trabalho e da sociedade em geral.", correct: true, id: "b" },
            { text: "Focar exclusivamente na maximização do lucro.", correct: false, id: "c" },
            { text: "Ignorar o impacto ambiental da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o benefício de 'Prototipar para Testar Ideias'?",
        answers: [
            { text: "Demora muito e é caro.", correct: false, id: "a" },
            { text: "Permite validar ou invalidar hipóteses sobre o produto ou serviço de forma rápida e com baixo custo, antes de investir em desenvolvimento completo.", correct: true, id: "b" },
            { text: "Apenas serve para atrasar o projeto.", correct: false, id: "c" },
            { text: "Impede o feedback do usuário.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Escalabilidade Tecnológica'?",
        answers: [
            { text: "A capacidade de um sistema de diminuir sua performance.", correct: false, id: "a" },
            { text: "A capacidade de um sistema de hardware ou software lidar com uma carga de trabalho crescente (ex: mais usuários, mais dados) sem degradar o desempenho.", correct: true, id: "b" },
            { text: "O número de programadores em uma equipe.", correct: false, id: "c" },
            { text: "O custo de um novo servidor.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância do 'Propósito' para uma startup?",
        answers: [
            { text: "É apenas um slogan de marketing.", correct: false, id: "a" },
            { text: "Define a razão de ser da empresa além do lucro, motivando a equipe e atraindo clientes e investidores alinhados aos valores.", correct: true, id: "b" },
            { text: "Atrasar o desenvolvimento do produto.", correct: false, id: "c" },
            { text: "É irrelevante para o sucesso do negócio.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Validação de Problema/Solução Fit'?",
        answers: [
            { text: "Validar o problema e a solução separadamente.", correct: false, id: "a" },
            { text: "Garantir que o problema que você está resolvendo é real e que sua solução é a forma correta de resolver esse problema para os clientes.", correct: true, id: "b" },
            { text: "Apenas validar a tecnologia usada.", correct: false, id: "c" },
            { text: "Ignorar a opinião dos clientes.", correct: false, id: "d" }
        ]
    },
    {
        question: "No contexto de prototipagem, o que é um 'Role-playing'?",
        answers: [
            { text: "Um jogo de tabuleiro.", correct: false, id: "a" },
            { text: "Simulação de uma interação entre o usuário e o protótipo, onde as pessoas atuam como usuários e partes do sistema para testar fluxos.", correct: true, id: "b" },
            { text: "Uma técnica de codificação.", correct: false, id: "c" },
            { text: "Uma pesquisa de mercado formal.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'simplicidade' na comunicação para uma startup?",
        answers: [
            { text: "Para dificultar o entendimento da mensagem.", correct: false, id: "a" },
            { text: "Para transmitir a mensagem de forma clara e concisa, evitando jargões e focando no que é mais relevante para o público.", correct: true, id: "b" },
            { text: "Aumentar a complexidade do produto.", correct: false, id: "c" },
            { text: "Ignorar o feedback dos clientes.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Metodologia Ágil' prioriza no desenvolvimento de software?",
        answers: [
            { text: "Documentação extensa e inflexível.", correct: false, id: "a" },
            { text: "Indivíduos e interações, software funcionando, colaboração com o cliente e resposta à mudança, em detrimento de processos rígidos.", correct: true, id: "b" },
            { text: "Prazos fixos e inalteráveis.", correct: false, id: "c" },
            { text: "Longos ciclos de planejamento inicial.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Consenso' na tomada de decisões em equipe?",
        answers: [
            { text: "Tomar decisões sem discutir.", correct: false, id: "a" },
            { text: "Buscar um acordo geral onde todos os membros da equipe apoiam a decisão, mesmo que não seja sua primeira opção, garantindo comprometimento.", correct: true, id: "b" },
            { text: "Impor a vontade de um único líder.", correct: false, id: "c" },
            { text: "Evitar a tomada de decisões.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Design Responsivo' em desenvolvimento web?",
        answers: [
            { text: "Um design que responde apenas a erros de programação.", correct: false, id: "a" },
            { text: "Uma abordagem de design que permite que um site ou aplicativo se adapte e tenha uma boa aparência em diferentes tamanhos de tela e dispositivos.", correct: true, id: "b" },
            { text: "Um design que só funciona em um tipo de navegador.", correct: false, id: "c" },
            { text: "Um design que ignora a experiência do usuário.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de um 'Plano de Marketing Digital' para uma startup?",
        answers: [
            { text: "É irrelevante para startups.", correct: false, id: "a" },
            { text: "Define estratégias online para atrair, engajar e converter clientes, utilizando canais como redes sociais, SEO, e-mail marketing, etc.", correct: true, id: "b" },
            { text: "Apenas para publicidade em jornais.", correct: false, id: "c" },
            { text: "Serve apenas para empresas tradicionais.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Mercado Alvo' (Target Audience)?",
        answers: [
            { text: "Todos os consumidores do planeta.", correct: false, id: "a" },
            { text: "O grupo específico de pessoas ou empresas com maior probabilidade de comprar seu produto ou serviço, definido por características demográficas, comportamentais, etc.", correct: true, id: "b" },
            { text: "Apenas os concorrentes diretos da empresa.", correct: false, id: "c" },
            { text: "Os fornecedores da matéria-prima.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a relevância da 'capacidade de execução' para uma startup?",
        answers: [
            { text: "É menos importante que ter uma boa ideia.", correct: false, id: "a" },
            { text: "Transformar ideias em realidade, entregar o produto/serviço e alcançar os objetivos estratégicos de forma eficaz.", correct: true, id: "b" },
            { text: "Apenas para planejar o projeto.", correct: false, id: "c" },
            { text: "Aumentar a burocracia e a lentidão.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Curva de Adoção de Inovação' de Rogers descreve?",
        answers: [
            { text: "O ciclo de vida de um produto no mercado.", correct: false, id: "a" },
            { text: "Como diferentes grupos de pessoas (inovadores, adotantes iniciais, maioria inicial, maioria tardia, retardatários) adotam uma nova tecnologia ou ideia ao longo do tempo.", correct: true, id: "b" },
            { text: "Apenas o número de vendas de um produto.", correct: false, id: "c" },
            { text: "A capacidade de uma empresa de inovar rapidamente.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Bootstrapping' como estratégia de financiamento?",
        answers: [
            { text: "Buscar grandes investimentos de capital de risco desde o início.", correct: false, id: "a" },
            { text: "Financiar a startup com recursos próprios ou gerados pela operação do negócio, minimizando a dependência de investidores externos.", correct: true, id: "b" },
            { text: "Uma técnica de contabilidade para startups.", correct: false, id: "c" },
            { text: "Aumento de gastos desnecessários.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel de um 'plano de contingência' para uma startup?",
        answers: [
            { text: "Apenas para prever o lucro anual.", correct: false, id: "a" },
            { text: "Preparar-se para eventos inesperados ou adversidades, estabelecendo ações preventivas e planos de resposta para minimizar impactos negativos.", correct: true, id: "b" },
            { text: "Ignorar os riscos e desafios.", correct: false, id: "c" },
            { text: "Um documento que descreve os sucessos passados.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Princípio de Pareto' (Regra 80/20) sugere no contexto de negócios?",
        answers: [
            { text: "Que todos os fatores contribuem igualmente para um resultado.", correct: false, id: "a" },
            { text: "Que aproximadamente 80% dos efeitos vêm de 20% das causas, sugerindo focar nos esforços que geram maior impacto.", correct: true, id: "b" },
            { text: "Que 80% dos clientes são irrelevantes.", correct: false, id: "c" },
            { text: "Que 20% dos problemas causam 80% do sucesso.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'transparência' na cultura de uma startup?",
        answers: [
            { text: "Cria burocracia desnecessária.", correct: false, id: "a" },
            { text: "Construir confiança entre a equipe, com clientes e investidores, promovendo um ambiente de honestidade e colaboração.", correct: true, id: "b" },
            { text: "Limitar o acesso à informação.", correct: false, id: "c" },
            { text: "Apenas para cumprir regulamentações.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Customer Lifetime Value (CLTV)' representa?",
        answers: [
            { text: "O custo de aquisição de um cliente.", correct: false, id: "a" },
            { text: "A receita total que uma empresa pode esperar de um cliente durante todo o seu relacionamento com a empresa.", correct: true, id: "b" },
            { text: "O tempo que um cliente leva para decidir uma compra.", correct: false, id: "c" },
            { text: "O número de produtos que um cliente compra de uma vez.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'MVP de Papel' (Paper MVP)?",
        answers: [
            { text: "Lançar o produto final impresso.", correct: false, id: "a" },
            { text: "Testar rapidamente a usabilidade e o fluxo de uma interface usando desenhos simples em papel, para obter feedback inicial.", correct: true, id: "b" },
            { text: "Servir como documento legal do produto.", correct: false, id: "c" },
            { text: "Apenas para demonstrações de arte.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Design System'?",
        answers: [
            { text: "Apenas uma biblioteca de componentes visuais.", correct: false, id: "a" },
            { text: "Um conjunto completo de padrões, componentes e diretrizes reutilizáveis, gerenciados de forma centralizada para construir produtos coesos e escaláveis.", correct: true, id: "b" },
            { text: "Um software de design gráfico.", correct: false, id: "c" },
            { text: "Um método de teste de usabilidade.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'autenticidade' para uma startup?",
        answers: [
            { text: "É irrelevante, o importante é a imagem.", correct: false, id: "a" },
            { text: "Construir confiança e lealdade com o público, expressando os valores e a personalidade da marca de forma genuína.", correct: true, id: "b" },
            { text: "Apenas para seguir tendências de marketing.", correct: false, id: "c" },
            { text: "Serve para imitar a concorrência.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'funil de vendas' (Sales Funnel)?",
        answers: [
            { text: "Um método para descartar clientes.", correct: false, id: "a" },
            { text: "Uma representação visual do caminho que um potencial cliente percorre desde o primeiro contato com a empresa até a conversão em venda.", correct: true, id: "b" },
            { text: "Uma ferramenta de análise de custos.", correct: false, id: "c" },
            { text: "Um sistema de gestão de projetos.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Storyboarding' na fase de prototipagem?",
        answers: [
            { text: "Apenas para criar ilustrações bonitas.", correct: false, id: "a" },
            { text: "Visualizar e comunicar como o usuário irá interagir com o produto ou serviço ao longo do tempo, em diferentes cenários, como uma história em quadrinhos.", correct: true, id: "b" },
            { text: "Definir a linguagem de programação.", correct: false, id: "c" },
            { text: "Calcular o retorno sobre o investimento.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Métricas de Aquisição'?",
        answers: [
            { text: "Medem o quanto um produto é usado.", correct: false, id: "a" },
            { text: "Indicadores que mostram como novos clientes são atraídos para o produto ou serviço (ex: custo por aquisição, número de novos registros).", correct: true, id: "b" },
            { text: "Métricas relacionadas à satisfação do cliente.", correct: false, id: "c" },
            { text: "Métricas de lucratividade.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Product-Market Fit' em termos práticos?",
        answers: [
            { text: "Ter um produto que ninguém quer comprar.", correct: false, id: "a" },
            { text: "Quando o produto atende às necessidades de um mercado de forma tão eficaz que a demanda por ele cresce de forma orgânica e sustentável.", correct: true, id: "b" },
            { text: "Lançar o produto sem testar o mercado.", correct: false, id: "c" },
            { text: "Apenas ter um produto com muitas funcionalidades.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Gestão Financeira' para uma startup?",
        answers: [
            { text: "É uma tarefa secundária, a criatividade é mais importante.", correct: false, id: "a" },
            { text: "Fundamental para controlar despesas, gerenciar o fluxo de caixa, planejar investimentos e garantir a sustentabilidade financeira do negócio.", correct: true, id: "b" },
            { text: "Apenas para pagar salários.", correct: false, id: "c" },
            { text: "Não tem relação com a sobrevivência da startup.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Metas SMART' representam?",
        answers: [
            { text: "Metas que são fáceis de atingir.", correct: false, id: "a" },
            { text: "Um acrônimo para metas Específicas, Mensuráveis, Atingíveis, Relevantes e com Prazo Definido (Time-bound).", correct: true, id: "b" },
            { text: "Metas que são apenas ambiciosas e não realistas.", correct: false, id: "c" },
            { text: "Um tipo de software de gestão de metas.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel de um 'Apresentação de Pitch' para investidores?",
        answers: [
            { text: "Apenas contar a história da vida do empreendedor.", correct: false, id: "a" },
            { text: "Apresentar de forma concisa e envolvente a oportunidade de negócio, o time, o mercado, a solução e a proposta de valor para captar investimento.", correct: true, id: "b" },
            { text: "Detalhar exaustivamente cada funcionalidade do produto.", correct: false, id: "c" },
            { text: "Focar apenas nos riscos financeiros.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Viabilidade Técnica' em um projeto de startup?",
        answers: [
            { text: "Se o produto é bonito visualmente.", correct: false, id: "a" },
            { text: "A capacidade de construir e operar a solução proposta com a tecnologia e os recursos disponíveis (se é possível fazer).", correct: true, id: "b" },
            { text: "Se o produto é lucrativo.", correct: false, id: "c" },
            { text: "Se o mercado tem demanda para o produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o significado de 'Business Angel' (Anjo Investidor)?",
        answers: [
            { text: "Um tipo de banco de investimento.", correct: false, id: "a" },
            { text: "Um indivíduo de alta renda que investe capital próprio em startups em estágio inicial, oferecendo também mentoria e networking.", correct: true, id: "b" },
            { text: "Um funcionário de uma startup em fase inicial.", correct: false, id: "c" },
            { text: "Um programa de aceleração de startups.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'mercado addressable (SAM - Serviceable Addressable Market)' representa?",
        answers: [
            { text: "O mercado total disponível globalmente.", correct: false, id: "a" },
            { text: "A porção do TAM (Total Addressable Market) que pode ser alcançada e atendida pelos produtos ou serviços da sua empresa.", correct: true, id: "b" },
            { text: "O mercado que já foi conquistado por concorrentes.", correct: false, id: "c" },
            { text: "O custo para entrar em um novo mercado.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Product Backlog Refinement' (Refinamento do Backlog do Produto)?",
        answers: [
            { text: "Criar novos itens para o backlog sem critério.", correct: false, id: "a" },
            { text: "Detalhar, estimar e priorizar os itens do backlog para garantir que estejam claros e prontos para o desenvolvimento.", correct: true, id: "b" },
            { text: "Ignorar os feedbacks de clientes.", correct: false, id: "c" },
            { text: "Apenas remover itens do backlog.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Design de Interação' (Interaction Design)?",
        answers: [
            { text: "Apenas o design visual de um website.", correct: false, id: "a" },
            { text: "O design da maneira como os usuários interagem com um produto ou sistema, focando na experiência e na usabilidade da interface.", correct: true, id: "b" },
            { text: "O design de produtos físicos apenas.", correct: false, id: "c" },
            { text: "O processo de fabricação de software.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'automação' para o crescimento de startups?",
        answers: [
            { text: "Aumenta a dependência de trabalho manual.", correct: false, id: "a" },
            { text: "Otimiza processos, reduz erros, economiza tempo e permite que a startup escale suas operações de forma mais eficiente.", correct: true, id: "b" },
            { text: "Diminui a produtividade da equipe.", correct: false, id: "c" },
            { text: "É útil apenas para grandes corporações.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Ciclo de Vida do Produto' (Product Lifecycle) descreve?",
        answers: [
            { text: "O tempo de fabricação de um produto.", correct: false, id: "a" },
            { text: "As etapas pelas quais um produto passa desde seu desenvolvimento até sua retirada do mercado: introdução, crescimento, maturidade e declínio.", correct: true, id: "b" },
            { text: "Apenas a vida útil da bateria de um produto.", correct: false, id: "c" },
            { text: "O processo de venda de um produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Plano de Equipe' em uma startup?",
        answers: [
            { text: "Apenas listar os nomes dos fundadores.", correct: false, id: "a" },
            { text: "Descrever a estrutura da equipe, as responsabilidades de cada membro, habilidades necessárias e como a equipe vai trabalhar para atingir os objetivos.", correct: true, id: "b" },
            { text: "Definir o preço dos produtos.", correct: false, id: "c" },
            { text: "Ser um documento de controle de ponto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Validação de Cliente' (Customer Validation)?",
        answers: [
            { text: "Vender o produto a qualquer custo.", correct: false, id: "a" },
            { text: "Processo de confirmar com clientes reais que a solução proposta resolve um problema existente para eles e que estão dispostos a adotá-la.", correct: true, id: "b" },
            { text: "Apenas coletar depoimentos positivos.", correct: false, id: "c" },
            { text: "Criar funcionalidades sem perguntar aos usuários.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância de 'Metas de Curto Prazo' para uma startup?",
        answers: [
            { text: "Apenas para ocupar o tempo da equipe.", correct: false, id: "a" },
            { text: "Permitem acompanhar o progresso, manter a equipe motivada e fazer ajustes rápidos na estratégia para alcançar objetivos de longo prazo.", correct: true, id: "b" },
            { text: "Dificultam o planejamento estratégico.", correct: false, id: "c" },
            { text: "Não têm impacto no sucesso geral.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'Product-Led Growth' enfatiza?",
        answers: [
            { text: "Vendas diretas e agressivas.", correct: false, id: "a" },
            { text: "Que o próprio produto seja o principal motor de aquisição, retenção e expansão de clientes, através de uma excelente experiência de usuário.", correct: true, id: "b" },
            { text: "Marketing focado apenas em branding.", correct: false, id: "c" },
            { text: "A necessidade de uma grande equipe de suporte.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Scrum Master' em uma equipe Scrum?",
        answers: [
            { text: "Ditar todas as tarefas e decisões.", correct: false, id: "a" },
            { text: "Facilitar o processo Scrum, remover impedimentos e garantir que a equipe siga as práticas ágeis, sem ser um gerente tradicional.", correct: true, id: "b" },
            { text: "Apenas escrever o código do software.", correct: false, id: "c" },
            { text: "Controlar as finanças do projeto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Story' em metodologias ágeis?",
        answers: [
            { text: "Um documento técnico detalhado.", correct: false, id: "a" },
            { text: "Uma descrição concisa de uma funcionalidade do sistema da perspectiva do usuário final, focando no valor que ela entrega.", correct: true, id: "b" },
            { text: "Uma história de ficção sobre o produto.", correct: false, id: "c" },
            { text: "Um requisito de segurança de software.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Sprint Backlog' em Scrum?",
        answers: [
            { text: "Listar todas as tarefas do projeto.", correct: false, id: "a" },
            { text: "Um subconjunto do Product Backlog selecionado para ser entregue durante uma Sprint, com as tarefas detalhadas para a equipe de desenvolvimento.", correct: true, id: "b" },
            { text: "Um registro de erros de software.", correct: false, id: "c" },
            { text: "Um plano de marketing de curto prazo.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Daily Scrum' (Reunião Diária) visa alcançar?",
        answers: [
            { text: "Longas discussões sobre problemas.", correct: false, id: "a" },
            { text: "Um encontro rápido diário para a equipe Scrum inspecionar o progresso em relação à Meta da Sprint e planejar as próximas 24 horas, identificando impedimentos.", correct: true, id: "b" },
            { text: "Apresentar resultados financeiros aos investidores.", correct: false, id: "c" },
            { text: "Decidir novas funcionalidades do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo da 'Sprint Review' em Scrum?",
        answers: [
            { text: "Revisar o código-fonte do software.", correct: false, id: "a" },
            { text: "Demonstrar o Incremento (o trabalho concluído na Sprint) aos stakeholders e coletar feedback para o próximo Product Backlog.", correct: true, id: "b" },
            { text: "Avaliar o desempenho individual de cada membro da equipe.", correct: false, id: "c" },
            { text: "Planejar a próxima Sprint em detalhes.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Sprint Retrospective' busca fazer?",
        answers: [
            { text: "Apenas criticar os erros passados.", correct: false, id: "a" },
            { text: "Discutir o que funcionou bem, o que pode ser melhorado e o que deve ser parado para otimizar o processo e a colaboração da equipe para a próxima Sprint.", correct: true, id: "b" },
            { text: "Revisar os requisitos do cliente.", correct: false, id: "c" },
            { text: "Apresentar novas ideias de produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'Time de Desenvolvimento' em Scrum?",
        answers: [
            { text: "Apenas um grupo de programadores.", correct: false, id: "a" },
            { text: "Um grupo multifuncional e auto-organizado de profissionais responsáveis por entregar um Incremento de produto a cada Sprint.", correct: true, id: "b" },
            { text: "O gerente de projetos.", correct: false, id: "c" },
            { text: "A equipe de marketing da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Product Owner' em uma equipe Scrum?",
        answers: [
            { text: "Gerenciar a equipe de desenvolvimento.", correct: false, id: "a" },
            { text: "Maximizar o valor do produto resultante do trabalho do Time de Desenvolvimento, sendo o principal responsável pelo Product Backlog e pela visão do produto.", correct: true, id: "b" },
            { text: "Conduzir as reuniões diárias.", correct: false, id: "c" },
            { text: "Escrever o código-fonte do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Incremento' em Scrum?",
        answers: [
            { text: "Um novo item no Product Backlog.", correct: false, id: "a" },
            { text: "Um pedaço de software funcional, testado e potencialmente entregável, que é o resultado de uma Sprint e que soma aos Incrementos anteriores.", correct: true, id: "b" },
            { text: "Um erro no software.", correct: false, id: "c" },
            { text: "Apenas uma funcionalidade incompleta.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo da 'Planejamento da Sprint' em Scrum?",
        answers: [
            { text: "Apenas definir o orçamento da Sprint.", correct: false, id: "a" },
            { text: "Definir a Meta da Sprint (o que será feito) e como o Time de Desenvolvimento vai construir o Incremento para alcançá-la.", correct: true, id: "b" },
            { text: "Revisar o que foi feito na Sprint anterior.", correct: false, id: "c" },
            { text: "Discutir problemas pessoais da equipe.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Princípio de Autogestão' implica para um Time de Desenvolvimento Scrum?",
        answers: [
            { text: "Que um gerente externo dita todas as tarefas.", correct: false, id: "a" },
            { text: "Que a equipe é responsável por organizar seu próprio trabalho e decidir a melhor forma de atingir a Meta da Sprint, sem ser microgerenciada.", correct: true, id: "b" },
            { text: "Que cada membro trabalha isoladamente.", correct: false, id: "c" },
            { text: "Que a equipe não precisa de metas.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Objetivo da Sprint' e 'Meta do Produto'?",
        answers: [
            { text: "São sinônimos.", correct: false, id: "a" },
            { text: "Objetivo da Sprint é a meta para a Sprint atual; Meta do Produto é o objetivo de longo prazo para o produto como um todo.", correct: true, id: "b" },
            { text: "Objetivo da Sprint é fixo e nunca muda; Meta do Produto é flexível.", correct: false, id: "c" },
            { text: "Meta do Produto é definida pela equipe de vendas.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Definition of Done (DoD)' representa em Scrum?",
        answers: [
            { text: "Um documento que descreve o que não foi feito.", correct: false, id: "a" },
            { text: "Um conjunto de critérios que todos os itens do Product Backlog devem atender para serem considerados 'concluídos' e parte do Incremento potencialmente entregável.", correct: true, id: "b" },
            { text: "A quantidade de trabalho restante para terminar o projeto.", correct: false, id: "c" },
            { text: "Apenas uma lista de bugs a serem corrigidos.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'inspeção e adaptação' em Scrum?",
        answers: [
            { text: "Aumentar a burocracia do processo.", correct: false, id: "a" },
            { text: "Permitem que a equipe Scrum examine regularmente o progresso em direção à Meta da Sprint e ao Objetivo do Produto, ajustando o curso conforme necessário para otimizar o valor.", correct: true, id: "b" },
            { text: "Apenas para documentar erros passados.", correct: false, id: "c" },
            { text: "São processos realizados apenas no final do projeto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Scrum de Scrums' é utilizado para?",
        answers: [
            { text: "Gerenciar uma única equipe Scrum.", correct: false, id: "a" },
            { text: "Coordenar o trabalho de múltiplas equipes Scrum que estão trabalhando em um único produto ou em produtos interconectados.", correct: true, id: "b" },
            { text: "Substituir as reuniões diárias das equipes individuais.", correct: false, id: "c" },
            { text: "Resolver conflitos pessoais entre membros da equipe.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o significado de 'Tempo de Ciclo' (Cycle Time) no Kanban?",
        answers: [
            { text: "O tempo que leva para o produto ser fabricado.", correct: false, id: "a" },
            { text: "O tempo que um item de trabalho leva para passar do início ao fim do fluxo de trabalho, medindo a eficiência do processo.", correct: true, id: "b" },
            { text: "O tempo gasto em reuniões diárias.", correct: false, id: "c" },
            { text: "A duração de uma Sprint.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Sustentabilidade Financeira' significa para uma startup?",
        answers: [
            { text: "Depender exclusivamente de investimento externo.", correct: false, id: "a" },
            { text: "A capacidade da empresa de gerar receita suficiente para cobrir seus custos operacionais e gerar lucro a longo prazo, sem depender apenas de novos aportes de capital.", correct: true, id: "b" },
            { text: "Apenas ter um grande capital inicial.", correct: false, id: "c" },
            { text: "Não se preocupar com os gastos.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Prototipagem em Papel' e 'Wireframes'?",
        answers: [
            { text: "São a mesma coisa.", correct: false, id: "a" },
            { text: "Prototipagem em papel é de baixíssima fidelidade e rápida para conceitos iniciais; Wireframes são mais estruturados, focam na arquitetura da informação e podem ser digitais.", correct: true, id: "b" },
            { text: "Wireframes são sempre coloridos.", correct: false, id: "c" },
            { text: "Prototipagem em papel é para testes finais.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Journey Mapping'?",
        answers: [
            { text: "Um mapa geográfico de usuários.", correct: false, id: "a" },
            { text: "Uma representação visual do caminho completo que um usuário percorre para alcançar um objetivo, incluindo todos os pontos de contato e experiências.", correct: true, id: "b" },
            { text: "Um plano de marketing de vendas.", correct: false, id: "c" },
            { text: "Um gráfico de desempenho de equipe.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o benefício de 'Testes de Usabilidade Remotos'?",
        answers: [
            { text: "São mais caros e demorados.", correct: false, id: "a" },
            { text: "Permitem alcançar uma variedade maior de usuários em diferentes locais geográficos e fusos horários, oferecendo flexibilidade e escalabilidade.", correct: true, id: "b" },
            { text: "Exigem equipamento especializado e caro.", correct: false, id: "c" },
            { text: "Oferecem menos insights do que testes presenciais.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Minimum Marketable Product (MMP)'?",
        answers: [
            { text: "Um produto que não tem valor de mercado.", correct: false, id: "a" },
            { text: "A menor versão de um produto que pode ser lançada no mercado para resolver um problema real do cliente e ser comercializável, gerando valor imediato.", correct: true, id: "b" },
            { text: "O produto com o maior número de funcionalidades.", correct: false, id: "c" },
            { text: "Um produto que ainda está em fase de protótipo.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'MVP' e 'MMP'?",
        answers: [
            { text: "MVP é para lançamento no mercado, MMP é para validação interna.", correct: false, id: "a" },
            { text: "MVP foca no aprendizado e validação de hipóteses; MMP foca no valor comercial e na satisfação do cliente para lançamento inicial no mercado.", correct: true, id: "b" },
            { text: "MVP é sempre mais complexo que MMP.", correct: false, id: "c" },
            { text: "MMP é uma versão do produto mais barata que o MVP.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Ciclo de Vida do Empreendedor' representa?",
        answers: [
            { text: "As fases da vida pessoal de um empreendedor.", correct: false, id: "a" },
            { text: "As diferentes etapas que um empreendedor e sua startup passam, desde a ideação até o crescimento e, possivelmente, o 'exit'.", correct: true, id: "b" },
            { text: "O tempo que um empreendedor trabalha por dia.", correct: false, id: "c" },
            { text: "Apenas os anos de estudo do empreendedor.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o significado de 'Prototipagem Rápida' (Rapid Prototyping)?",
        answers: [
            { text: "Criar um protótipo com todas as funcionalidades.", correct: false, id: "a" },
            { text: "Processo de construir rapidamente versões preliminares de um produto para testar ideias e coletar feedback cedo e frequentemente.", correct: true, id: "b" },
            { text: "Desenvolver o produto sem testar.", correct: false, id: "c" },
            { text: "Um método de produção em larga escala.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Cultura de Experimentação' incentiva?",
        answers: [
            { text: "O medo de tentar coisas novas.", correct: false, id: "a" },
            { text: "Uma mentalidade de aprendizado contínuo, onde falhas são vistas como oportunidades de aprendizado e o teste de hipóteses é encorajado.", correct: true, id: "b" },
            { text: "O cumprimento cego de processos.", correct: false, id: "c" },
            { text: "A procrastinação na tomada de decisões.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Conselho de Administração' em uma startup mais madura?",
        answers: [
            { text: "Gerenciar as operações diárias da empresa.", correct: false, id: "a" },
            { text: "Supervisionar a gestão executiva, fornecer direção estratégica, garantir a conformidade e representar os interesses dos acionistas.", correct: true, id: "b" },
            { text: "Realizar todas as vendas da empresa.", correct: false, id: "c" },
            { text: "Apenas aprovar o logotipo da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Ciclo PDCA' (Plan-Do-Check-Act) visa otimizar?",
        answers: [
            { text: "Apenas o planejamento de marketing.", correct: false, id: "a" },
            { text: "Um ciclo iterativo de melhoria contínua de processos e produtos: Planejar, Fazer, Checar, Agir.", correct: true, id: "b" },
            { text: "Aumentar a burocracia.", correct: false, id: "c" },
            { text: "Ignorar o feedback dos clientes.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Gestão de Talentos' em uma startup?",
        answers: [
            { text: "É desnecessária para equipes pequenas.", correct: false, id: "a" },
            { text: "Atrair, desenvolver, motivar e reter os profissionais certos, que são o ativo mais valioso de uma startup.", correct: true, id: "b" },
            { text: "Apenas contratar pessoas rapidamente.", correct: false, id: "c" },
            { text: "Ignorar o desenvolvimento dos funcionários.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Viabilidade de Negócio' significa?",
        answers: [
            { text: "Se o produto é tecnicamente complexo.", correct: false, id: "a" },
            { text: "Se o modelo de negócio é capaz de gerar receita suficiente para cobrir os custos e gerar lucro, sendo sustentável no longo prazo.", correct: true, id: "b" },
            { text: "Se a equipe é grande o suficiente.", correct: false, id: "c" },
            { text: "Se o produto é esteticamente agradável.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'MVP de Vídeo'?",
        answers: [
            { text: "Produzir um filme sobre a startup.", correct: false, id: "a" },
            { text: "Apresentar a ideia do produto e sua proposta de valor através de um vídeo explicativo, simulando o uso, para medir o interesse e a demanda antes de construir o produto.", correct: true, id: "b" },
            { text: "Apenas divulgar o produto final.", correct: false, id: "c" },
            { text: "Criar uma apresentação de slides sem áudio.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Produto Core'?",
        answers: [
            { text: "Um produto secundário da empresa.", correct: false, id: "a" },
            { text: "A funcionalidade central e mais importante de um produto, que resolve o problema principal do cliente e entrega o valor essencial.", correct: true, id: "b" },
            { text: "Um produto que não tem valor de mercado.", correct: false, id: "c" },
            { text: "Apenas a embalagem do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'simplicidade' na interface do usuário (UI)?",
        answers: [
            { text: "Para dificultar o aprendizado do usuário.", correct: false, id: "a" },
            { text: "Facilitar a usabilidade, reduzir a curva de aprendizado e tornar a interação com o produto mais intuitiva e eficiente para o usuário.", correct: true, id: "b" },
            { text: "Aumentar a complexidade visual.", correct: false, id: "c" },
            { text: "Tornar o design genérico e sem personalidade.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Síndrome do Objeto Brilhante' (Shiny Object Syndrome) representa para empreendedores?",
        answers: [
            { text: "Focar em um único objetivo por muito tempo.", correct: false, id: "a" },
            { text: "A tendência de se distrair e pular de uma nova ideia para outra, sem concluir projetos anteriores, prejudicando o foco e a execução.", correct: true, id: "b" },
            { text: "Uma busca constante por inovação incremental.", correct: false, id: "c" },
            { text: "A capacidade de identificar oportunidades de mercado.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel de um 'Roadshow' para startups?",
        answers: [
            { text: "Uma viagem de lazer da equipe.", correct: false, id: "a" },
            { text: "Uma série de apresentações (pitchs) realizadas em diferentes locais ou para diversos grupos de investidores, para captar capital ou promover a empresa.", correct: true, id: "b" },
            { text: "Um evento de contratação de funcionários.", correct: false, id: "c" },
            { text: "Um workshop interno de desenvolvimento de produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Product backlog'?",
        answers: [
            { text: "Uma lista de erros de software.", correct: false, id: "a" },
            { text: "Uma lista priorizada e dinâmica de tudo o que é conhecido como necessário para o produto, incluindo funcionalidades, melhorias e correções, mantida pelo Product Owner.", correct: true, id: "b" },
            { text: "O histórico de vendas de um produto.", correct: false, id: "c" },
            { text: "Um relatório financeiro mensal.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'Sprint' em Scrum?",
        answers: [
            { text: "Um período de tempo ilimitado para desenvolvimento.", correct: false, id: "a" },
            { text: "Um período de tempo fixo e curto (geralmente de 1 a 4 semanas) em que uma equipe Scrum trabalha para criar um Incremento de produto potencialmente entregável.", correct: true, id: "b" },
            { text: "Uma reunião anual de planejamento.", correct: false, id: "c" },
            { text: "Apenas uma fase de testes finais.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Design Thinking' como metodologia de inovação?",
        answers: [
            { text: "Um método rígido de engenharia de software.", correct: false, id: "a" },
            { text: "Uma abordagem colaborativa e centrada no ser humano para a resolução de problemas, que utiliza empatia, ideação, prototipagem e testes para criar soluções inovadoras.", correct: true, id: "b" },
            { text: "Um estilo de design de interiores.", correct: false, id: "c" },
            { text: "Um processo linear e inflexível de desenvolvimento de produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'resiliência financeira' para uma startup?",
        answers: [
            { text: "Garantir que a empresa nunca terá perdas.", correct: false, id: "a" },
            { text: "A capacidade da startup de resistir a choques financeiros inesperados (crises, queda de receita) e se recuperar, mantendo sua operação.", correct: true, id: "b" },
            { text: "Apenas ter um grande volume de vendas.", correct: false, id: "c" },
            { text: "Ignorar os relatórios financeiros.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Design de Experiência do Usuário (UX Design)'?",
        answers: [
            { text: "Apenas o visual de um produto.", correct: false, id: "a" },
            { text: "O processo de aprimorar a satisfação do usuário com um produto, melhorando a usabilidade, acessibilidade e o prazer da interação.", correct: true, id: "b" },
            { text: "O código-fonte de um software.", correct: false, id: "c" },
            { text: "A estratégia de marketing de um produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o propósito de 'Wireframes' na prototipagem?",
        answers: [
            { text: "Definir as cores e fontes finais do design.", correct: false, id: "a" },
            { text: "Esboços de baixa fidelidade que representam a estrutura, layout e organização dos elementos de uma interface, focando na funcionalidade e conteúdo.", correct: true, id: "b" },
            { text: "Criar a versão final do produto.", correct: false, id: "c" },
            { text: "Testar o desempenho do software.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'MVP' (Produto Mínimo Viável) em termos de aprendizado?",
        answers: [
            { text: "Um produto que já tem todas as funcionalidades.", correct: false, id: "a" },
            { text: "A versão mais simples de um produto que permite à equipe coletar o máximo de aprendizado validado sobre o cliente com o mínimo de esforço.", correct: true, id: "b" },
            { text: "Um produto para gerar lucro imediato.", correct: false, id: "c" },
            { text: "Um protótipo que não é testado com usuários.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Validação' no processo de criação de uma startup?",
        answers: [
            { text: "Ignorar o feedback dos clientes.", correct: false, id: "a" },
            { text: "Confirmar a existência do problema, a eficácia da solução e a demanda do mercado através de experimentos e feedback de usuários reais.", correct: true, id: "b" },
            { text: "Apenas para documentar a ideia inicial.", correct: false, id: "c" },
            { text: "Aumentar os custos de desenvolvimento.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Lean Startup'?",
        answers: [
            { text: "Um tipo de academia para empreendedores.", correct: false, id: "a" },
            { text: "Uma metodologia para desenvolver negócios e produtos com base em hipóteses, experimentação e aprendizado validado, visando otimização e redução de desperdício.", correct: true, id: "b" },
            { text: "Um método de contabilidade financeira.", correct: false, id: "c" },
            { text: "Um software de gestão de projetos.", correct: false, id: "d" }
        ]
    },
    {
        question: "No Lean Canvas, o que o bloco 'Métricas-Chave' deve conter?",
        answers: [
            { text: "Todos os dados financeiros da empresa.", correct: false, id: "a" },
            { text: "Os indicadores de desempenho mais importantes que guiarão as decisões e medirão o progresso em direção aos objetivos do negócio.", correct: true, id: "b" },
            { text: "Métricas que são difíceis de interpretar.", correct: false, id: "c" },
            { text: "Apenas métricas de vaidade.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'Pitch' (Apresentação) em uma startup?",
        answers: [
            { text: "Apenas para entreter a audiência.", correct: false, id: "a" },
            { text: "Comunicar a ideia de negócio de forma concisa e persuasiva para atrair investidores, parceiros ou clientes.", correct: true, id: "b" },
            { text: "Substituir o plano de negócios completo.", correct: false, id: "c" },
            { text: "Detalhar cada linha de código do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que significa 'Iterar' no contexto de uma startup?",
        answers: [
            { text: "Concluir um produto sem nenhuma mudança.", correct: false, id: "a" },
            { text: "Repetir o ciclo de construção, medição e aprendizado para refinar o produto ou o modelo de negócio com base em feedback e dados.", correct: true, id: "b" },
            { text: "Apenas corrigir erros de programação.", correct: false, id: "c" },
            { text: "Lançar o produto final imediatamente.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Proposta de Valor' para o sucesso de um produto?",
        answers: [
            { text: "É irrelevante se o produto for barato.", correct: false, id: "a" },
            { text: "Comunica de forma clara o benefício único que o produto oferece ao cliente e por que ele deve escolhê-lo em detrimento de outras opções.", correct: true, id: "b" },
            { text: "Apenas para descrever as funcionalidades técnicas.", correct: false, id: "c" },
            { text: "Serve para confundir o cliente.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Product Discovery' é no ciclo de desenvolvimento de produtos?",
        answers: [
            { text: "A fase de desenvolvimento do código-fonte.", correct: false, id: "a" },
            { text: "O processo contínuo de pesquisa e validação para entender o problema do cliente, o mercado e o que deve ser construído.", correct: true, id: "b" },
            { text: "Apenas a fase de marketing e vendas.", correct: false, id: "c" },
            { text: "O lançamento final do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel de 'Prototipagem de Alta Fidelidade'?",
        answers: [
            { text: "Ser rápida e barata de produzir.", correct: false, id: "a" },
            { text: "Simular a experiência do usuário de forma muito próxima ao produto final, permitindo testes de usabilidade mais detalhados e coleta de feedback realista.", correct: true, id: "b" },
            { text: "Apenas para testar conceitos iniciais.", correct: false, id: "c" },
            { text: "Ser descartada após o primeiro teste.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Research' no Design Thinking?",
        answers: [
            { text: "Apenas entrevistas com a equipe interna.", correct: false, id: "a" },
            { text: "A investigação sistemática das necessidades, comportamentos, motivações e frustrações dos usuários para informar o processo de design.", correct: true, id: "b" },
            { text: "A criação de um novo logotipo.", correct: false, id: "c" },
            { text: "A análise de dados financeiros do mercado.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a diferença entre 'Wireframes' e 'Mockups'?",
        answers: [
            { text: "Mockups focam na estrutura, Wireframes no visual.", correct: false, id: "a" },
            { text: "Wireframes focam na estrutura e fluxo da informação (baixa fidelidade); Mockups focam na aparência visual e estética (média a alta fidelidade).", correct: true, id: "b" },
            { text: "São sinônimos.", correct: false, id: "c" },
            { text: "Wireframes são para produtos físicos, Mockups para digitais.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'Escalabilidade' em startups significa?",
        answers: [
            { text: "Aumentar o número de funcionários proporcionalmente ao número de clientes.", correct: false, id: "a" },
            { text: "A capacidade de crescer a receita rapidamente sem um aumento proporcional nos custos, permitindo que o negócio atenda a uma demanda crescente.", correct: true, id: "b" },
            { text: "Aumentar a burocracia do negócio.", correct: false, id: "c" },
            { text: "Manter o tamanho da empresa fixo.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Gestão de Crises' para uma startup?",
        answers: [
            { text: "É desnecessária se a startup for pequena.", correct: false, id: "a" },
            { text: "Permite à empresa se preparar para, responder a e se recuperar de eventos negativos inesperados que podem ameaçar sua reputação ou operação.", correct: true, id: "b" },
            { text: "Apenas para evitar a imprensa.", correct: false, id: "c" },
            { text: "Não tem relação com a sobrevivência da startup.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Prova de Conceito' (Proof of Concept - PoC)?",
        answers: [
            { text: "A versão final de um produto.", correct: false, id: "a" },
            { text: "Uma pequena realização ou demonstração para verificar a viabilidade de uma ideia ou teoria, sem ser um produto completo.", correct: true, id: "b" },
            { text: "Um protótipo com todas as funcionalidades.", correct: false, id: "c" },
            { text: "Um documento de marketing.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Testes de A/B Multivariados'?",
        answers: [
            { text: "Testar apenas uma variável de cada vez.", correct: false, id: "a" },
            { text: "Testar múltiplas variáveis e suas combinações simultaneamente em uma página ou funcionalidade para otimizar a performance.", correct: true, id: "b" },
            { text: "Apenas para testar a velocidade do site.", correct: false, id: "c" },
            { text: "Não fornecem dados relevantes para decisão.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Guerrilha' (Guerrilla Testing) é?",
        answers: [
            { text: "Um teste formal em laboratório.", correct: false, id: "a" },
            { text: "Um método rápido e de baixo custo para obter feedback de usuários reais, abordando pessoas em locais públicos.", correct: true, id: "b" },
            { text: "Um teste de segurança de software.", correct: false, id: "c" },
            { text: "Um teste de desempenho de rede.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Iteração Rápida' em uma startup?",
        answers: [
            { text: "Aumenta o tempo e o custo do desenvolvimento.", correct: false, id: "a" },
            { text: "Permite que a startup aprenda, se adapte e refina seu produto ou modelo de negócio em ciclos curtos, respondendo rapidamente ao feedback do mercado.", correct: true, id: "b" },
            { text: "Impede a inovação.", correct: false, id: "c" },
            { text: "Levar a mais erros.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Validação de Hipótese'?",
        answers: [
            { text: "Apenas assumir que uma ideia é verdadeira.", correct: false, id: "a" },
            { text: "O processo de coletar evidências para confirmar ou refutar suposições sobre o problema, a solução, o cliente ou o mercado.", correct: true, id: "b" },
            { text: "Criar uma hipótese sem qualquer pesquisa.", correct: false, id: "c" },
            { text: "Ignorar os dados coletados.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Viabilidade de Mercado' significa para uma startup?",
        answers: [
            { text: "Se o produto é tecnicamente complexo.", correct: false, id: "a" },
            { text: "Se existe um mercado grande o suficiente e com demanda para o produto ou serviço, e se os clientes estão dispostos a pagar por ele.", correct: true, id: "b" },
            { text: "Se a equipe é talentosa o suficiente.", correct: false, id: "c" },
            { text: "Se o produto é esteticamente agradável.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Plano de Equipe' no Lean Canvas?",
        answers: [
            { text: "Detalhar cada tarefa de cada funcionário.", correct: false, id: "a" },
            { text: "Descrever os principais membros da equipe, suas funções e as habilidades-chave que trazem para o negócio.", correct: true, id: "b" },
            { text: "Apenas listar o nome dos fundadores.", correct: false, id: "c" },
            { text: "Servir como um organograma completo da empresa.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Pivot de Problema' (Problem Pivot)?",
        answers: [
            { text: "Manter o problema, mas mudar a solução.", correct: false, id: "a" },
            { text: "Manter a solução ou a tecnologia, mas descobrir que ela resolve um problema diferente ou para um segmento de clientes diferente do planejado originalmente.", correct: true, id: "b" },
            { text: "Ignorar o problema do cliente.", correct: false, id: "c" },
            { text: "Apenas ajustar a interface do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Cultura de Aprendizado' em uma startup?",
        answers: [
            { text: "Limita a experimentação.", correct: false, id: "a" },
            { text: "Promove a curiosidade, a experimentação, a busca por feedback e a adaptação contínua com base nos conhecimentos adquiridos, essencial para inovação.", correct: true, id: "b" },
            { text: "Apenas para documentar erros.", correct: false, id: "c" },
            { text: "Aumenta a burocracia do processo.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Product/Market Fit' (Ajuste Produto/Mercado) significa?",
        answers: [
            { text: "Quando o produto é lançado sem feedback do mercado.", correct: false, id: "a" },
            { text: "Quando um produto satisfaz um mercado de forma tão eficaz que ele começa a crescer de forma orgânica e sustentável, com alta retenção e recomendação.", correct: true, id: "b" },
            { text: "Quando o produto tem muitas funcionalidades, mas ninguém o utiliza.", correct: false, id: "c" },
            { text: "O custo de produção do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'feedback positivo' para uma startup?",
        answers: [
            { text: "Deve ser ignorado para não gerar complacência.", correct: false, id: "a" },
            { text: "Valida o que está funcionando, reforça o valor do produto e motiva a equipe a continuar investindo em certas áreas, além de atrair novos clientes.", correct: true, id: "b" },
            { text: "Apenas para fins de marketing.", correct: false, id: "c" },
            { text: "Não tem impacto no desenvolvimento do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Growth Marketing' difere do marketing tradicional?",
        answers: [
            { text: "Foca apenas em grandes orçamentos de publicidade.", correct: false, id: "a" },
            { text: "É mais focado em experimentação, dados e otimização para impulsionar o crescimento em todas as fases do funil do cliente, não apenas na aquisição.", correct: true, id: "b" },
            { text: "Ignora as métricas de desempenho.", correct: false, id: "c" },
            { text: "É uma estratégia que não envolve testes.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o objetivo de um 'plano de negócios' bem elaborado?",
        answers: [
            { text: "Apenas cumprir um requisito legal.", correct: false, id: "a" },
            { text: "Detalhar a estratégia, operações, finanças e metas de uma empresa, servindo como um guia e ferramenta para captação de recursos.", correct: true, id: "b" },
            { text: "Ser um documento inflexível que não pode ser alterado.", correct: false, id: "c" },
            { text: "Focar apenas nos problemas da concorrência.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o conceito de 'mercado inexplorado' (Blue Ocean) descreve?",
        answers: [
            { text: "Um mercado com alta concorrência e margens de lucro baixas.", correct: false, id: "a" },
            { text: "A criação de novos espaços de mercado onde a concorrência é irrelevante, através da inovação de valor que oferece novos benefícios aos clientes.", correct: true, id: "b" },
            { text: "Um mercado que já está saturado de produtos.", correct: false, id: "c" },
            { text: "Um mercado que se foca apenas em produtos de baixo custo.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'flexibilidade' em uma startup?",
        answers: [
            { text: "Torna a equipe desorganizada.", correct: false, id: "a" },
            { text: "Permite que a empresa se adapte rapidamente a novas informações, feedback, e mudanças de mercado, otimizando o caminho para o sucesso.", correct: true, id: "b" },
            { text: "Aumenta a resistência a mudanças.", correct: false, id: "c" },
            { text: "Causa desperdício de recursos.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é um 'MVP Concierge'?",
        answers: [
            { text: "Um MVP totalmente automatizado.", correct: false, id: "a" },
            { text: "Uma abordagem onde o serviço é entregue manualmente (ou quase) para um pequeno grupo de clientes, a fim de validar o problema/solução e aprender em profundidade.", correct: true, id: "b" },
            { text: "Um MVP que exige alto investimento.", correct: false, id: "c" },
            { text: "Um produto que não precisa de interação humana.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Customer Acquisition Cost (CAC)'?",
        answers: [
            { text: "O valor total que um cliente gasta na empresa.", correct: false, id: "a" },
            { text: "O custo médio para adquirir um novo cliente, incluindo todos os custos de marketing e vendas.", correct: true, id: "b" },
            { text: "O lucro gerado por cada cliente.", correct: false, id: "c" },
            { text: "O tempo que leva para converter um lead em cliente.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Product Roadmap' é na gestão de produtos?",
        answers: [
            { text: "Um documento que lista apenas os bugs.", correct: false, id: "a" },
            { text: "Um guia de alto nível que descreve a visão, a direção, os objetivos e as iniciativas do produto ao longo do tempo, sem ser um cronograma detalhado.", correct: true, id: "b" },
            { text: "Um registro de reuniões da equipe.", correct: false, id: "c" },
            { text: "Apenas uma lista de funcionalidades concluídas.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância do 'Time to Market' para um produto inovador?",
        answers: [
            { text: "É irrelevante, a perfeição é o mais importante.", correct: false, id: "a" },
            { text: "A velocidade com que um produto é introduzido no mercado, sendo crucial para capturar oportunidades e obter feedback cedo.", correct: true, id: "b" },
            { text: "Garante que o produto nunca precisará de atualizações.", correct: false, id: "c" },
            { text: "Aumenta os riscos do projeto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Viabilidade' busca validar?",
        answers: [
            { text: "Se o produto é esteticamente agradável.", correct: false, id: "a" },
            { text: "Se a ideia ou solução é tecnicamente possível de construir e se há um mercado para ela que gere lucro.", correct: true, id: "b" },
            { text: "Apenas a opinião dos fundadores.", correct: false, id: "c" },
            { text: "O custo de um novo servidor.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o conceito de 'Viabilidade Econômica'?",
        answers: [
            { text: "Apenas os custos iniciais do projeto.", correct: false, id: "a" },
            { text: "A capacidade de um negócio gerar lucro e ser sustentável financeiramente a longo prazo.", correct: true, id: "b" },
            { text: "A demanda do mercado pelo produto.", correct: false, id: "c" },
            { text: "A facilidade de produção do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'User Testing' (Teste com Usuários)?",
        answers: [
            { text: "Um teste de segurança de software.", correct: false, id: "a" },
            { text: "A avaliação de um produto ou protótipo por usuários reais para identificar problemas de usabilidade, coletar feedback e validar o design.", correct: true, id: "b" },
            { text: "Apenas uma pesquisa de mercado online.", correct: false, id: "c" },
            { text: "Um treinamento para a equipe de vendas.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel do 'Product Vision' (Visão do Produto)?",
        answers: [
            { text: "Apenas listar as funcionalidades futuras.", correct: false, id: "a" },
            { text: "Uma descrição concisa do objetivo e do impacto de longo prazo do produto, guiando todas as decisões de desenvolvimento.", correct: true, id: "b" },
            { text: "Ser um documento técnico detalhado.", correct: false, id: "c" },
            { text: "O número de vendas esperadas.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Lean UX'?",
        answers: [
            { text: "Um processo linear de design de experiência.", correct: false, id: "a" },
            { text: "Uma abordagem que combina princípios Lean e Design Thinking para criar experiências de usuário com foco em feedback contínuo, aprendizado e entrega rápida.", correct: true, id: "b" },
            { text: "Apenas o design visual de interfaces.", correct: false, id: "c" },
            { text: "Um método de gestão de projetos sem usuários.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Co-criação' em projetos de inovação?",
        answers: [
            { text: "Limita a criatividade da equipe.", correct: false, id: "a" },
            { text: "Envolve clientes, parceiros e outros stakeholders no processo de design e desenvolvimento, gerando soluções mais relevantes e inovadoras.", correct: true, id: "b" },
            { text: "Apenas para dividir o trabalho.", correct: false, id: "c" },
            { text: "Aumenta o risco de fracasso.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Pivot de Motor de Crescimento' (Growth Engine Pivot) significa?",
        answers: [
            { text: "Manter o mesmo motor de crescimento sempre.", correct: false, id: "a" },
            { text: "Mudar a estratégia para impulsionar o crescimento, como focar em aquisição viral, pagamento ou sticky (retenção).", correct: true, id: "b" },
            { text: "Apenas contratar mais pessoas de marketing.", correct: false, id: "c" },
            { text: "Aumentar o custo por cliente.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual o papel da 'mentoria' para empreendedores iniciantes?",
        answers: [
            { text: "Fazer o trabalho pela startup.", correct: false, id: "a" },
            { text: "Oferecer orientação, insights e suporte com base na experiência de empreendedores mais experientes, acelerando o aprendizado e evitando erros comuns.", correct: true, id: "b" },
            { text: "Apenas para conseguir investimentos.", correct: false, id: "c" },
            { text: "Ser um substituto para a educação formal.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Design System' busca padronizar?",
        answers: [
            { text: "Apenas o tamanho das imagens.", correct: false, id: "a" },
            { text: "Componentes UI, padrões de design e diretrizes de uso para garantir consistência e eficiência no desenvolvimento de produtos digitais.", correct: true, id: "b" },
            { text: "Os custos de produção.", correct: false, id: "c" },
            { text: "As horas de trabalho da equipe.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Validação de Problema'?",
        answers: [
            { text: "Garantir que a solução está correta.", correct: false, id: "a" },
            { text: "Confirmar que o problema que a startup pretende resolver é real, significativo e que os clientes estão dispostos a pagar por uma solução.", correct: true, id: "b" },
            { text: "Apenas para descrever o mercado-alvo.", correct: false, id: "c" },
            { text: "Não tem impacto na aceitação do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que o 'Teste de Clique' (Clickable Test) em protótipos avalia?",
        answers: [
            { text: "A velocidade da digitação do usuário.", correct: false, id: "a" },
            { text: "Se os usuários conseguem navegar e interagir com o protótipo de forma intuitiva, clicando nos elementos esperados para progredir.", correct: true, id: "b" },
            { text: "A qualidade das imagens no protótipo.", correct: false, id: "c" },
            { text: "O número de erros de ortografia.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Plano de Operações' em um plano de negócios?",
        answers: [
            { text: "Apenas para gerenciar o marketing.", correct: false, id: "a" },
            { text: "Descrever como o produto será produzido ou o serviço entregue, incluindo processos, recursos, tecnologia e cadeia de suprimentos.", correct: true, id: "b" },
            { text: "Focar apenas na captação de investimento.", correct: false, id: "c" },
            { text: "Definir o preço de venda do produto.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que 'Pivot de Cliente' (Customer Segment Pivot) representa?",
        answers: [
            { text: "Mudar o produto, mas manter o cliente.", correct: false, id: "a" },
            { text: "Manter o produto ou a tecnologia, mas mudar o segmento de clientes para o qual ele é direcionado, descobrindo um novo mercado-alvo.", correct: true, id: "b" },
            { text: "Alterar a forma como o cliente usa o produto.", correct: false, id: "c" },
            { text: "Ignorar completamente o feedback do cliente.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'persistência' para o empreendedorismo?",
        answers: [
            { text: "Significa nunca mudar de ideia.", correct: false, id: "a" },
            { text: "É crucial para enfrentar e superar os inúmeros desafios, fracassos e rejeições que fazem parte da jornada de construir uma startup.", correct: true, id: "b" },
            { text: "É uma fraqueza que leva ao esgotamento.", correct: false, id: "c" },
            { text: "Apenas para manter o status quo.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Crowdsourcing de Ideias'?",
        answers: [
            { text: "Gerar ideias apenas internamente na empresa.", correct: false, id: "a" },
            { text: "Obter ideias e soluções para um problema ou desafio de um grande número de pessoas, geralmente através de plataformas online.", correct: true, id: "b" },
            { text: "Um método para roubar ideias de concorrentes.", correct: false, id: "c" },
            { text: "Apenas uma reunião de brainstorming com a equipe.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a função do 'Minimum Sellable Product (MSP)'?",
        answers: [
            { text: "Um produto que não pode ser vendido.", correct: false, id: "a" },
            { text: "A menor versão de um produto que pode ser efetivamente comercializada e gerar receita, focando no valor que o cliente está disposto a pagar.", correct: true, id: "b" },
            { text: "Um protótipo que não tem valor comercial.", correct: false, id: "c" },
            { text: "Um produto com todas as funcionalidades.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que é 'Bootstrapping Financeiro'?",
        answers: [
            { text: "Buscar grandes rodadas de investimento de capital de risco.", correct: false, id: "a" },
            { text: "Financiar o crescimento da startup usando apenas os próprios recursos (dos fundadores) ou a receita gerada pelo negócio, evitando dívidas ou capital externo inicial.", correct: true, id: "b" },
            { text: "Uma técnica de análise de mercado.", correct: false, id: "c" },
            { text: "Aumentar os custos operacionais rapidamente.", correct: false, id: "d" }
        ]
    },
    {
        question: "Qual a importância da 'Transparência' na comunicação de uma startup?",
        answers: [
            { text: "Aumenta a desconfiança entre os envolvidos.", correct: false, id: "a" },
            { text: "Construir confiança com clientes, investidores e equipe, promovendo um ambiente de abertura e honestidade, essencial para o crescimento.", correct: true, id: "b" },
            { text: "Serve apenas para impressionar a imprensa.", correct: false, id: "c" },
            { text: "Dificulta a resolução de problemas.", correct: false, id: "d" }
        ]
    },
    {
        question: "O que a 'Inovação de Modelo de Negócio' busca?",
        answers: [
            { text: "Apenas aprimorar um produto existente.", correct: false, id: "a" },
            { text: "Criar uma nova forma de gerar valor, entregar valor e capturar valor, redefinindo como o negócio opera e gera receita.", correct: true, id: "b" },
            {
                text: "Focar apenas em tecnologia de ponta.", correct: false
            },
        ]
    }
];
