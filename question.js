const questions = [
  {
    id: 1,
    pergunta: "O que é inovação disruptiva segundo Clayton Christensen?",
    alternativas: {
      A: "Melhoria contínua de processos industriais.",
      B: "Inovação que aperfeiçoa produtos existentes no mercado.",
      C: "Inovação que começa simples e substitui soluções tradicionais.",
      D: "Mudança estética em produtos já consagrados."
    },
    resposta_correta: "C"
  },
  {
    id: 2,
    pergunta: "Qual é a principal diferença entre inovação disruptiva e inovação sustentável?",
    alternativas: {
      A: "A disruptiva melhora processos existentes.",
      B: "A sustentável é mais barata.",
      C: "A disruptiva transforma o mercado, a sustentável aperfeiçoa o que já existe.",
      D: "A sustentável não gera valor."
    },
    resposta_correta: "C"
  },
  {
    id: 3,
    pergunta: "Qual o principal objetivo de um plano de negócios?",
    alternativas: {
      A: "Registrar a empresa na Junta Comercial.",
      B: "Contratar funcionários.",
      C: "Organizar ideias, reduzir riscos e atrair investidores.",
      D: "Obter isenção fiscal."
    },
    resposta_correta: "C"
  },
  {
    id: 4,
    pergunta: "Por que é importante validar uma ideia empreendedora?",
    alternativas: {
      A: "Para copiar um concorrente.",
      B: "Para confirmar se o cliente vê valor.",
      C: "Para se registrar no Sebrae.",
      D: "Para definir o logotipo da marca."
    },
    resposta_correta: "B"
  },
  {
    id: 5,
    pergunta: "O que é uma proposta de valor?",
    alternativas: {
      A: "O valor financeiro do negócio.",
      B: "A comunicação com fornecedores.",
      C: "A solução clara para um problema real do cliente.",
      D: "A margem de lucro por produto."
    },
    resposta_correta: "C"
  },
  {
    id: 6,
    pergunta: "Qual dos itens abaixo é um exemplo de inovação de processo?",
    alternativas: {
      A: "Criar um novo produto.",
      B: "Mudar a embalagem.",
      C: "Usar uma nova forma de produção.",
      D: "Vender em outra cidade."
    },
    resposta_correta: "C"
  },
  {
    id: 7,
    pergunta: "O que é diferencial competitivo?",
    alternativas: {
      A: "A empresa cobrar mais caro que os concorrentes.",
      B: "Um elemento único difícil de copiar.",
      C: "Um funcionário motivado.",
      D: "A localização da empresa."
    },
    resposta_correta: "B"
  },
  {
    id: 8,
    pergunta: "Qual ferramenta visual ajuda a montar o modelo de negócio?",
    alternativas: {
      A: "Canvas.",
      B: "Excel.",
      C: "PowerPoint.",
      D: "Word."
    },
    resposta_correta: "A"
  },
  {
    id: 9,
    pergunta: "O que representa a missão de uma empresa?",
    alternativas: {
      A: "Onde a empresa quer chegar.",
      B: "As metas financeiras da organização.",
      C: "A razão pela qual a empresa existe.",
      D: "As atividades rotineiras da empresa."
    },
    resposta_correta: "C"
  },
  {
    id: 10,
    pergunta: "Antes de lançar um produto, o que deve ser analisado?",
    alternativas: {
      A: "Cores da marca.",
      B: "Viabilidade técnica, operacional e legal.",
      C: "Contratação da equipe.",
      D: "Design do logotipo."
    },
    resposta_correta: "B"
  },
  {
    id: 11,
    pergunta: "Qual estratégia competitiva foca em ser a mais barata do mercado?",
    alternativas: {
      A: "Diferenciação.",
      B: "Foco.",
      C: "Liderança em custo.",
      D: "Personalização."
    },
    resposta_correta: "C"
  },
  {
    id: 12,
    pergunta: "A análise SWOT identifica forças, fraquezas, oportunidades e:",
    alternativas: {
      A: "Preços.",
      B: "Investidores.",
      C: "Ameaças.",
      D: "Salários."
    },
    resposta_correta: "C"
  },
  {
    id: 13,
    pergunta: "Qual é a função da DRE (Demonstrativo de Resultados)?",
    alternativas: {
      A: "Calcular o preço do produto.",
      B: "Determinar o ponto de venda.",
      C: "Mostrar lucro ou prejuízo do negócio.",
      D: "Definir salários dos sócios."
    },
    resposta_correta: "C"
  },
  {
    id: 14,
    pergunta: "O que o ROI mede?",
    alternativas: {
      A: "Lucro mensal bruto.",
      B: "Tempo de abertura da empresa.",
      C: "Retorno sobre o investimento.",
      D: "Custo do cliente."
    },
    resposta_correta: "C"
  },
  {
    id: 15,
    pergunta: "Qual dos 4Ps do marketing se refere à divulgação?",
    alternativas: {
      A: "Produto.",
      B: "Preço.",
      C: "Praça.",
      D: "Promoção."
    },
    resposta_correta: "D"
  },
  {
    id: 16,
    pergunta: "O que é CAC?",
    alternativas: {
      A: "Custo de adquirir um novo cliente.",
      B: "Comissão anual do colaborador.",
      C: "Cartão de acesso ao cliente.",
      D: "Custo adicional do crédito."
    },
    resposta_correta: "A"
  },
  {
    id: 17,
    pergunta: "Empreender com ética significa:",
    alternativas: {
      A: "Aumentar os lucros a qualquer custo.",
      B: "Criar propaganda atrativa.",
      C: "Respeitar leis, pessoas e o meio ambiente.",
      D: "Evitar pagar impostos."
    },
    resposta_correta: "C"
  },
  {
    id: 18,
    pergunta: "O que é um MVP?",
    alternativas: {
      A: "Produto final lançado no mercado.",
      B: "Protótipo mais caro.",
      C: "Produto mínimo viável para testar com o público.",
      D: "Versão impressa do plano de negócios."
    },
    resposta_correta: "C"
  },
  {
    id: 19,
    pergunta: "Qual tipo de pitch cabe em uma conversa de elevador?",
    alternativas: {
      A: "Pitch técnico.",
      B: "Elevator pitch.",
      C: "Pitch de vendas.",
      D: "Pitch de captação."
    },
    resposta_correta: "B"
  },
  {
    id: 20,
    pergunta: "O que significa LTV?",
    alternativas: {
      A: "Lucro total variável.",
      B: "Lista total de vendas.",
      C: "Valor do cliente ao longo do tempo.",
      D: "Localização do tipo de venda."
    },
    resposta_correta: "C"
  },
  {
    id: 21,
    pergunta: "Qual o principal benefício do Design Sprint?",
    alternativas: {
      A: "Lançar um produto caro rapidamente.",
      B: "Resolver problemas complexos em cinco dias.",
      C: "Criar campanhas publicitárias.",
      D: "Contratar equipe de vendas."
    },
    resposta_correta: "B"
  },
  {
    id: 22,
    pergunta: "O que é o Business Model Canvas?",
    alternativas: {
      A: "Um programa de computador para finanças.",
      B: "Uma ferramenta visual para estruturar modelo de negócio.",
      C: "Uma metodologia para captação de recursos.",
      D: "Um tipo de protótipo."
    },
    resposta_correta: "B"
  },
  {
    id: 23,
    pergunta: "Quais são os três pilares da responsabilidade ambiental no empreendedorismo?",
    alternativas: {
      A: "Lucro, inovação e marketing.",
      B: "Lucro econômico, impacto social e preservação ambiental.",
      C: "Produção, venda e lucro.",
      D: "Tecnologia, equipe e clientes."
    },
    resposta_correta: "B"
  },
  {
    id: 24,
    pergunta: "Qual desses exemplos é um MVP famoso?",
    alternativas: {
      A: "Amazon começou vendendo apenas livros online.",
      B: "Facebook começou como rede para todos os públicos.",
      C: "Google lançou seu buscador completo desde o início.",
      D: "Tesla lançou carros elétricos com design final."
    },
    resposta_correta: "A"
  },
  {
    id: 25,
    pergunta: "O que representa o 'foco' na estratégia competitiva de Porter?",
    alternativas: {
      A: "Atender a todos os clientes do mercado.",
      B: "Ser a opção mais barata para todos.",
      C: "Atender bem um nicho específico.",
      D: "Copiar a concorrência."
    },
    resposta_correta: "C"
  },
  {
    id: 26,
    pergunta: "Qual ferramenta ajuda a identificar fatores políticos, econômicos, sociais, tecnológicos, ambientais e legais?",
    alternativas: {
      A: "SWOT.",
      B: "PESTEL.",
      C: "Canvas.",
      D: "Porter."
    },
    resposta_correta: "B"
  },
  {
    id: 27,
    pergunta: "Na análise SWOT, o que são 'ameaças'?",
    alternativas: {
      A: "Aspectos internos positivos.",
      B: "Fatores externos que podem prejudicar o negócio.",
      C: "Problemas internos da equipe.",
      D: "Oportunidades de mercado."
    },
    resposta_correta: "B"
  },
  {
    id: 28,
    pergunta: "O que é um pitch de captação?",
    alternativas: {
      A: "Apresentação para atrair investidores.",
      B: "Apresentação para conquistar clientes.",
      C: "Relatório financeiro da empresa.",
      D: "Plano de marketing detalhado."
    },
    resposta_correta: "A"
  },
  {
    id: 29,
    pergunta: "Por que a ética é fundamental no empreendedorismo?",
    alternativas: {
      A: "Para aumentar o faturamento rapidamente.",
      B: "Para garantir confiança, evitar problemas legais e ter negócios sustentáveis.",
      C: "Para cumprir exigências burocráticas.",
      D: "Para evitar contratar muitos funcionários."
    },
    resposta_correta: "B"
  },
  {
    id: 30,
    pergunta: "O que significa 'praça' nos 4 Ps do marketing?",
    alternativas: {
      A: "O preço do produto.",
      B: "Os canais onde o produto será vendido.",
      C: "A qualidade do produto.",
      D: "A promoção feita em redes sociais."
    },
    resposta_correta: "B"
  }
];

