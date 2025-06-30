const questions = [
    {
      "id": 1,
      "pergunta": "O que é o Lean Canvas?",
      "alternativas": {
        "A": "Um modelo tradicional de gestão financeira.",
        "B": "Um método para automatizar processos industriais.",
        "C": "Uma ferramenta enxuta para planejar negócios em validação.",
        "D": "Um tipo de software ERP."
      },
      "resposta_correta": "B"
    },
    {
      "id": 2,
      "pergunta": "Qual é o objetivo do Produto Mínimo Viável (MVP)?",
      "alternativas": {
        "A": "Aumentar o preço de mercado rapidamente.",
        "B": "Evitar concorrência por meio de patentes.",
        "C": "Validar ideias com o menor custo e tempo possível.",
        "D": "Testar o produto final antes do lançamento oficial."
      },
      "resposta_correta": "D"
    },
    {
      "id": 3,
      "pergunta": "Qual das alternativas representa uma das 5 Forças de Porter?",
      "alternativas": {
        "A": "Proposta de Valor.",
        "B": "Fontes de Receita.",
        "C": "Poder de negociação dos fornecedores.",
        "D": "Canvas de Inovação."
      },
      "resposta_correta": "A"
    },
    {
      "id": 4,
      "pergunta": "O que representa a 'Proposta de Valor' em um modelo de negócio?",
      "alternativas": {
        "A": "Um slogan publicitário criativo.",
        "B": "O preço final do produto.",
        "C": "O diferencial que torna o produto valioso para o cliente.",
        "D": "O plano de marketing da empresa."
      },
      "resposta_correta": "C"
    },
    {
      "id": 5,
      "pergunta": "Segundo Christensen, o que caracteriza a inovação disruptiva?",
      "alternativas": {
        "A": "É cara e exclusiva.",
        "B": "Melhora produtos premium.",
        "C": "É simples, acessível e começa inferior.",
        "D": "É usada apenas em setores tradicionais."
      },
      "resposta_correta": "D"
    },
    {
      "id": 6,
      "pergunta": "Qual é a principal função de um Pitch de negócios?",
      "alternativas": {
        "A": "Apresentar a estrutura de custos da empresa.",
        "B": "Fazer uma análise contábil do projeto.",
        "C": "Convencer investidores ou parceiros sobre a ideia.",
        "D": "Mostrar estatísticas de vendas passadas."
      },
      "resposta_correta": "A"
    },
    {
      "id": 7,
      "pergunta": "O que são os 'Canais' no Lean Canvas?",
      "alternativas": {
        "A": "Os departamentos da empresa.",
        "B": "Os setores da indústria.",
        "C": "Os meios pelos quais o produto chega ao cliente.",
        "D": "As redes de investidores."
      },
      "resposta_correta": "B"
    },
    {
      "id": 8,
      "pergunta": "Qual o papel da 'Vantagem Injusta' no Lean Canvas?",
      "alternativas": {
        "A": "Indicar um monopólio legal.",
        "B": "Mostrar a receita bruta mensal.",
        "C": "Apontar algo que não pode ser copiado ou comprado.",
        "D": "Registrar marcas e patentes."
      },
      "resposta_correta": "D"
    },
    {
      "id": 9,
      "pergunta": "O que representa a 'Estrutura de Custos' no Business Model Canvas?",
      "alternativas": {
        "A": "Lista de fornecedores confiáveis.",
        "B": "Planilha de folha de pagamento.",
        "C": "Todos os gastos fixos e variáveis do negócio.",
        "D": "Custo de aquisição de clientes."
      },
      "resposta_correta": "A"
    },
    {
      "id": 10,
      "pergunta": "O que é um 'Segmento de Clientes' no Canvas?",
      "alternativas": {
        "A": "A parcela de mercado dominada pelos concorrentes.",
        "B": "O público-alvo que se pretende atingir.",
        "C": "O conjunto de sócios e acionistas da empresa.",
        "D": "O grupo de colaboradores do projeto."
      },
      "resposta_correta": "C"
    },
    {
      "id": 11,
      "pergunta": "Qual das alternativas representa um diferencial competitivo?",
      "alternativas": {
        "A": "Produto similar ao da concorrência.",
        "B": "Campanhas com baixo alcance.",
        "C": "Atendimento exclusivo e ágil.",
        "D": "Preço igual ao mercado."
      },
      "resposta_correta": "B"
    },
    {
      "id": 12,
      "pergunta": "Qual a função principal da análise SWOT?",
      "alternativas": {
        "A": "Definir o preço do produto.",
        "B": "Analisar os concorrentes diretos.",
        "C": "Identificar forças, fraquezas, oportunidades e ameaças.",
        "D": "Criar um logotipo para a marca."
      },
      "resposta_correta": "D"
    },
    {
      "id": 13,
      "pergunta": "O que diferencia o Business Model Canvas do Lean Canvas?",
      "alternativas": {
        "A": "O Lean Canvas foca em empresas consolidadas.",
        "B": "O Business Canvas exclui segmentos de clientes.",
        "C": "O Lean Canvas prioriza riscos e hipóteses em startups.",
        "D": "O Canvas tradicional é exclusivo para indústrias."
      },
      "resposta_correta": "A"
    },
    {
      "id": 14,
      "pergunta": "Para que serve um Design Sprint?",
      "alternativas": {
        "A": "Estimar o orçamento anual da empresa.",
        "B": "Criar logomarcas e identidade visual.",
        "C": "Resolver problemas complexos de forma rápida.",
        "D": "Realizar auditorias fiscais."
      },
      "resposta_correta": "B"
    },
    {
      "id": 15,
      "pergunta": "O que é um Mockup?",
      "alternativas": {
        "A": "Protótipo funcional interativo.",
        "B": "Representação visual próxima do produto final.",
        "C": "Documento de análise de mercado.",
        "D": "Cópia de segurança de dados."
      },
      "resposta_correta": "D"
    },
    {
      "id": 16,
      "pergunta": "Qual das alternativas descreve um 'problema' no Lean Canvas?",
      "alternativas": {
        "A": "O preço do produto.",
        "B": "As métricas de sucesso.",
        "C": "As principais dores que o cliente enfrenta.",
        "D": "O modelo de receita."
      },
      "resposta_correta": "A"
    },
    {
      "id": 17,
      "pergunta": "Por que validar uma ideia com MVP é importante?",
      "alternativas": {
        "A": "Para conseguir um CNPJ mais rápido.",
        "B": "Para evitar o uso de tecnologia cara.",
        "C": "Para aprender com o cliente e ajustar a solução.",
        "D": "Para evitar contratar desenvolvedores."
      },
      "resposta_correta": "B"
    },
    {
      "id": 18,
      "pergunta": "Qual é o principal objetivo de um plano de negócios?",
      "alternativas": {
        "A": "Estabelecer as metas financeiras anuais.",
        "B": "Criar campanhas publicitárias.",
        "C": "Guiar decisões estratégicas com base em dados.",
        "D": "Registrar marca e logotipo."
      },
      "resposta_correta": "D"
    },
    {
      "id": 19,
      "pergunta": "O que representa 'Fontes de Receita' no modelo de negócios?",
      "alternativas": {
        "A": "Custos operacionais.",
        "B": "Métricas de desempenho.",
        "C": "Formas como o negócio gera dinheiro.",
        "D": "Despesas com fornecedores."
      },
      "resposta_correta": "A"
    },
    {
      "id": 20,
      "pergunta": "Qual é a principal vantagem de se usar o Canvas para planejar negócios?",
      "alternativas": {
        "A": "Criar um cronograma de atividades semanal.",
        "B": "Registrar a empresa na Junta Comercial.",
        "C": "Visualizar todos os aspectos do negócio de forma simples.",
        "D": "Calcular o preço de venda do produto."
      },
      "resposta_correta": "B"
    },
    {
      "id": 21,
      "pergunta": "O que é o Lean Canvas?",
      "alternativas": {
        "A": "Um software para gestão financeira de grandes empresas.",
        "B": "Um plano de marketing para produtos físicos.",
        "C": "Uma ferramenta para mapear os principais blocos de um modelo de negócio enxuto.",
        "D": "Um sistema de controle de qualidade industrial."
      },
      "resposta_correta": "C"
    },
    {
      "id": 22,
      "pergunta": "Qual o principal objetivo de um Produto Mínimo Viável (MVP)?",
      "alternativas": {
        "A": "Obter retorno financeiro imediato.",
        "B": "Criar um produto completo para o mercado.",
        "C": "Validar uma ideia com o menor custo e esforço possível.",
        "D": "Contratar uma equipe de marketing experiente."
      },
      "resposta_correta": "D"
    },
    {
      "id": 23,
      "pergunta": "O que representa o bloco 'Segmento de Clientes' no Lean Canvas?",
      "alternativas": {
        "A": "As despesas fixas da empresa.",
        "B": "O público que se pretende atingir com o produto ou serviço.",
        "C": "Os sócios e acionistas da organização.",
        "D": "A análise da concorrência direta."
      },
      "resposta_correta": "B"
    },
    {
      "id": 24,
      "pergunta": "Qual das alternativas descreve uma inovação disruptiva?",
      "alternativas": {
        "A": "Uma campanha publicitária muito criativa.",
        "B": "A melhoria de um processo interno da empresa.",
        "C": "Uma solução simples e acessível que inicia inferior, mas cresce e domina o mercado.",
        "D": "A criação de uma nova embalagem de produto."
      },
      "resposta_correta": "A"
    },
    {
      "id": 25,
      "pergunta": "Para que serve a análise SWOT?",
      "alternativas": {
        "A": "Definir o preço final de um produto.",
        "B": "Avaliar os custos fixos do negócio.",
        "C": "Identificar forças, fraquezas, oportunidades e ameaças de um negócio.",
        "D": "Controlar o estoque de produtos."
      },
      "resposta_correta": "D"
    },
    {
      "id": 26,
      "pergunta": "Qual a função de um pitch no contexto de startups?",
      "alternativas": {
        "A": "Controlar o fluxo de caixa da empresa.",
        "B": "Apresentar rapidamente a ideia do negócio para atrair investidores.",
        "C": "Gerenciar a logística de distribuição.",
        "D": "Registrar a empresa em órgãos competentes."
      },
      "resposta_correta": "B"
    },
    {
      "id": 27,
      "pergunta": "Qual o objetivo do bloco 'Canais' no Lean Canvas?",
      "alternativas": {
        "A": "Listar os concorrentes.",
        "B": "Identificar parceiros estratégicos.",
        "C": "Apontar os meios de distribuição e comunicação com o cliente.",
        "D": "Definir o nome da marca."
      },
      "resposta_correta": "C"
    },
    {
      "id": 28,
      "pergunta": "Qual é a 'Proposta de Valor' em um modelo de negócio?",
      "alternativas": {
        "A": "A missão e visão da empresa.",
        "B": "O diferencial que justifica a escolha pelo produto ou serviço.",
        "C": "O valor de mercado estimado da empresa.",
        "D": "O capital social registrado em cartório."
      },
      "resposta_correta": "B"
    },
    {
      "id": 29,
      "pergunta": "Qual das opções é uma das 5 Forças de Porter?",
      "alternativas": {
        "A": "Receita Recorrente.",
        "B": "Ameaça de novos entrantes.",
        "C": "Faturamento Mensal.",
        "D": "Segmento Premium."
      },
      "resposta_correta": "A"
    },
    {
      "id": 30,
      "pergunta": "O que caracteriza a Vantagem Injusta no Lean Canvas?",
      "alternativas": {
        "A": "Uma campanha publicitária de alto impacto.",
        "B": "Algo que não pode ser copiado ou comprado.",
        "C": "Um preço inferior ao da concorrência.",
        "D": "Uma parceria com empresas grandes."
      },
      "resposta_correta": "B"
    },
    {
      "id": 31,
      "pergunta": "Qual é a estrutura mais comum do Design Sprint?",
      "alternativas": {
        "A": "7 dias de planejamento e 3 de execução.",
        "B": "2 dias de teste, 2 de venda e 1 de lançamento.",
        "C": "5 dias com etapas específicas para entender, esboçar, decidir, prototipar e testar.",
        "D": "Um mês completo de execução de projeto ágil."
      },
      "resposta_correta": "C"
    },
    {
      "id": 32,
      "pergunta": "O que é um Mockup?",
      "alternativas": {
        "A": "Uma planilha de gastos.",
        "B": "Um desenho técnico do circuito.",
        "C": "Uma representação visual aproximada de um produto final.",
        "D": "Uma rede de contatos empresariais."
      },
      "resposta_correta": "D"
    },
    {
      "id": 33,
      "pergunta": "Qual é a principal função de um plano de negócios?",
      "alternativas": {
        "A": "Contratar funcionários.",
        "B": "Validar a identidade visual do negócio.",
        "C": "Guiar decisões estratégicas e analisar a viabilidade do negócio.",
        "D": "Realizar a propaganda do produto."
      },
      "resposta_correta": "A"
    },
    {
      "id": 34,
      "pergunta": "O que representa o bloco 'Fluxos de Receita' no Lean Canvas?",
      "alternativas": {
        "A": "A previsão de despesas mensais.",
        "B": "As formas pelas quais o negócio gera dinheiro.",
        "C": "A lista de materiais utilizados na produção.",
        "D": "Os custos de aquisição de clientes."
      },
      "resposta_correta": "B"
    },
    {
      "id": 35,
      "pergunta": "Qual das opções abaixo melhor define o MVP?",
      "alternativas": {
        "A": "Produto pronto e com todas as funcionalidades.",
        "B": "Primeiro esboço do produto para marketing.",
        "C": "Versão simplificada de um produto para validação.",
        "D": "Um protótipo sem interação com usuários."
      },
      "resposta_correta": "C"
    },
    {
      "id": 36,
      "pergunta": "Qual das seguintes é uma vantagem do uso do Lean Canvas?",
      "alternativas": {
        "A": "Produz relatórios contábeis automáticos.",
        "B": "Permite análises estatísticas de mercado.",
        "C": "Facilita a visualização do negócio de forma enxuta e clara.",
        "D": "Gera contratos com fornecedores."
      },
      "resposta_correta": "D"
    },
    {
      "id": 37,
      "pergunta": "Em que contexto o Design Sprint é mais utilizado?",
      "alternativas": {
        "A": "Contratação de talentos.",
        "B": "Testes de produtos finais no mercado.",
        "C": "Resolução rápida de problemas complexos de produto.",
        "D": "Planejamento financeiro a longo prazo."
      },
      "resposta_correta": "A"
    },
    {
      "id": 38,
      "pergunta": "O que diferencia uma inovação disruptiva de uma inovação incremental?",
      "alternativas": {
        "A": "A disruptiva melhora levemente um processo existente.",
        "B": "A incremental substitui tecnologias obsoletas.",
        "C": "A disruptiva começa inferior, mas transforma o mercado com o tempo.",
        "D": "A incremental é voltada ao mercado financeiro."
      },
      "resposta_correta": "C"
    },
    {
      "id": 39,
      "pergunta": "O que significa 'Custo de Aquisição de Clientes' (CAC)?",
      "alternativas": {
        "A": "Lucro obtido por cliente.",
        "B": "Valor gasto para conseguir um novo cliente.",
        "C": "Custo de fidelização do consumidor.",
        "D": "Custo de desenvolvimento de produto."
      },
      "resposta_correta": "B"
    },
    {
      "id": 40,
      "pergunta": "Quais são os elementos que compõem a análise SWOT?",
      "alternativas": {
        "A": "Segmento, Receita, Valor e Preço.",
        "B": "Missão, Visão, Valores e Cultura.",
        "C": "Forças, Fraquezas, Oportunidades e Ameaças.",
        "D": "Produto, Processo, Pessoas e Parcerias."
      },
      "resposta_correta": "C"
    },
    {
      "id": 41,
      "pergunta": "O que representa o 'Problema' no Lean Canvas?",
      "alternativas": {
        "A": "O ponto forte do produto.",
        "B": "A dor do cliente que a solução se propõe a resolver.",
        "C": "A concorrência atual.",
        "D": "O tamanho do mercado."
      },
      "resposta_correta": "B"
    },
    {
      "id": 42,
      "pergunta": "Para que serve a 'Métrica-Chave' no Lean Canvas?",
      "alternativas": {
        "A": "Avaliar a satisfação dos sócios.",
        "B": "Medir ações críticas que sustentam o negócio.",
        "C": "Calcular os impostos mensais.",
        "D": "Definir os preços de venda."
      },
      "resposta_correta": "D"
    },
    {
      "id": 43,
      "pergunta": "Qual o papel dos 'Recursos-Chave' no Canvas?",
      "alternativas": {
        "A": "Elencar os fornecedores.",
        "B": "Indicar os concorrentes.",
        "C": "Apontar os elementos essenciais para funcionamento do negócio.",
        "D": "Descrever os produtos concorrentes."
      },
      "resposta_correta": "C"
    },
    {
      "id": 44,
      "pergunta": "Como o Pitch ajuda startups?",
      "alternativas": {
        "A": "Reduzindo custos com publicidade.",
        "B": "Conectando diretamente com investidores potenciais.",
        "C": "Aumentando a carga tributária.",
        "D": "Gerando relatórios fiscais."
      },
      "resposta_correta": "B"
    },
    {
      "id": 45,
      "pergunta": "O que é um protótipo em Design Thinking?",
      "alternativas": {
        "A": "Um relatório de contabilidade.",
        "B": "Uma versão inicial testável de uma solução.",
        "C": "Uma planilha de custos variáveis.",
        "D": "Um gráfico de desempenho financeiro."
      },
      "resposta_correta": "B"
    },
    {
      "id": 46,
      "pergunta": "Qual a diferença entre mockup e protótipo?",
      "alternativas": {
        "A": "Mockup testa funcionalidade; protótipo mostra visual.",
        "B": "Mockup é visual; protótipo testa funcionalidade.",
        "C": "Ambos são apenas conceitos teóricos.",
        "D": "Mockup e protótipo são sinônimos."
      },
      "resposta_correta": "B"
    },
    {
      "id": 47,
      "pergunta": "O que é o Design Thinking?",
      "alternativas": {
        "A": "Um tipo de software de design gráfico.",
        "B": "Uma abordagem centrada no cliente para resolver problemas complexos.",
        "C": "Um modelo de negócios para startups.",
        "D": "Uma ferramenta contábil."
      },
      "resposta_correta": "B"
    },
    {
      "id": 48,
      "pergunta": "Qual é o objetivo do pitch de elevador?",
      "alternativas": {
        "A": "Fechar uma venda imediatamente.",
        "B": "Explicar o modelo de negócio em reuniões longas.",
        "C": "Apresentar uma ideia de forma rápida e convincente.",
        "D": "Solicitar empréstimos a bancos."
      },
      "resposta_correta": "C"
    },
    {
      "id": 49,
      "pergunta": "Por que o MVP é importante?",
      "alternativas": {
        "A": "Porque reduz o valor percebido.",
        "B": "Porque gera vendas automáticas.",
        "C": "Porque ajuda a validar hipóteses antes de investir pesado.",
        "D": "Porque ignora o feedback do cliente."
      },
      "resposta_correta": "C"
    },
    {
      "id": 50,
      "pergunta": "Em qual etapa do Design Sprint ocorre o teste com usuários reais?",
      "alternativas": {
        "A": "Dia 1",
        "B": "Dia 3",
        "C": "Dia 5",
        "D": "Dia 2"
      },
      "resposta_correta": "C"
    },
    {
      "id": 51,
      "pergunta": "Qual das opções representa um canal no Canvas?",
      "alternativas": {
        "A": "Análise SWOT",
        "B": "Email marketing",
        "C": "Fluxo de caixa",
        "D": "Controle de estoque"
      },
      "resposta_correta": "B"
    },
    {
      "id": 52,
      "pergunta": "Quais são os principais elementos do Canvas?",
      "alternativas": {
        "A": "Clientes, preço e lucro",
        "B": "Segmentos, Proposta de Valor, Canais, Receita",
        "C": "Produto, logística, TI",
        "D": "Lucro, prejuízo e faturamento"
      },
      "resposta_correta": "B"
    },
    {
      "id": 53,
      "pergunta": "Qual o foco do Lean Canvas em relação ao Canvas tradicional?",
      "alternativas": {
        "A": "Foco em grandes corporações.",
        "B": "Foco em aspectos mais arriscados para startups.",
        "C": "Foco em fábricas industriais.",
        "D": "Foco em franquias globais."
      },
      "resposta_correta": "B"
    },
    {
      "id": 54,
      "pergunta": "O que se entende por estrutura de custos no Canvas?",
      "alternativas": {
        "A": "Impostos pagos por funcionários.",
        "B": "Lista de fornecedores confiáveis.",
        "C": "Principais custos do negócio.",
        "D": "Orçamento do cliente final."
      },
      "resposta_correta": "C"
    },
    {
      "id": 55,
      "pergunta": "Qual o papel da proposta de valor no sucesso de um negócio?",
      "alternativas": {
        "A": "Conquistar investidores com promessas.",
        "B": "Oferecer algo único e de valor ao cliente.",
        "C": "Reduzir custos operacionais.",
        "D": "Aumentar o número de colaboradores."
      },
      "resposta_correta": "B"
    },
    {
      "id": 56,
      "pergunta": "O que diferencia o pitch de vendas do pitch de captação?",
      "alternativas": {
        "A": "O pitch de vendas é técnico e o de captação, jurídico.",
        "B": "Pitch de vendas convence o cliente, o de captação, o investidor.",
        "C": "Ambos são iguais.",
        "D": "Pitch de vendas é para redes sociais; o outro, para rádio."
      },
      "resposta_correta": "B"
    },
    {
      "id": 57,
      "pergunta": "Por que o Design Sprint é considerado ágil?",
      "alternativas": {
        "A": "Porque dispensa testes com clientes.",
        "B": "Porque se baseia apenas em intuição.",
        "C": "Porque foca em solução rápida e testes reais.",
        "D": "Porque utiliza muitas planilhas."
      },
      "resposta_correta": "C"
    },
    {
      "id": 58,
      "pergunta": "Em qual etapa do Design Thinking se cria o protótipo?",
      "alternativas": {
        "A": "Empatia",
        "B": "Definição",
        "C": "Prototipagem",
        "D": "Ideação"
      },
      "resposta_correta": "C"
    },
    {
      "id": 59,
      "pergunta": "Qual é a utilidade prática de um mockup?",
      "alternativas": {
        "A": "Mostrar a estrutura jurídica da empresa.",
        "B": "Testar funcionalidades do sistema operacional.",
        "C": "Apresentar visualmente a solução proposta.",
        "D": "Controlar estoque de produtos."
      },
      "resposta_correta": "C"
    },
    {
      "id": 60,
      "pergunta": "O que representa o bloco 'Parcerias Principais' no Canvas?",
      "alternativas": {
        "A": "Concorrentes diretos.",
        "B": "Clientes recorrentes.",
        "C": "Atores externos que ajudam na entrega de valor.",
        "D": "Investidores privados."
      },
      "resposta_correta": "C"
    },
    {
      "id": 61,
      "pergunta": "Qual é uma das principais vantagens da inovação disruptiva?",
      "alternativas": {
        "A": "Alto custo inicial.",
        "B": "Manutenção do status quo.",
        "C": "Democratização do acesso ao mercado.",
        "D": "Exclusividade para grandes empresas."
      },
      "resposta_correta": "C"
    },
    {
      "id": 62,
      "pergunta": "No MVP, o que é mais importante?",
      "alternativas": {
        "A": "Ter o design mais bonito possível.",
        "B": "Obter validação do cliente real.",
        "C": "Incluir todas as funcionalidades.",
        "D": "Reduzir a equipe ao mínimo."
      },
      "resposta_correta": "B"
    },
    {
      "id": 63,
      "pergunta": "Qual é o benefício de um pitch bem feito?",
      "alternativas": {
        "A": "Fechar vendas com qualquer público.",
        "B": "Conquistar apoio estratégico de quem assiste.",
        "C": "Evitar marketing digital.",
        "D": "Substituir o plano de negócios."
      },
      "resposta_correta": "B"
    },
    {
      "id": 64,
      "pergunta": "Qual é a função da etapa de ideação no Design Thinking?",
      "alternativas": {
        "A": "Analisar os custos do projeto.",
        "B": "Gerar múltiplas soluções possíveis.",
        "C": "Testar o MVP no mercado.",
        "D": "Definir os dados contábeis."
      },
      "resposta_correta": "B"
    },
    {
      "id": 65,
      "pergunta": "Qual o propósito da definição de métricas-chave no Canvas?",
      "alternativas": {
        "A": "Medir lucros por funcionário.",
        "B": "Medir crescimento e desempenho do negócio.",
        "C": "Reduzir impostos empresariais.",
        "D": "Definir layout do escritório."
      },
      "resposta_correta": "B"
    },
    {
      "id": 66,
      "pergunta": "Por que 'estrutura de custos' é essencial?",
      "alternativas": {
        "A": "Determina o nome da marca.",
        "B": "Ajuda a prever os gastos do negócio.",
        "C": "Diz quantos clientes serão atendidos.",
        "D": "Registra o CNPJ automaticamente."
      },
      "resposta_correta": "B"
    },
    {
      "id": 67,
      "pergunta": "Em que situação usar um pitch de captação?",
      "alternativas": {
        "A": "Para vender em shopping centers.",
        "B": "Para buscar parcerias com investidores.",
        "C": "Para lançar anúncios pagos.",
        "D": "Para treinar equipe de RH."
      },
      "resposta_correta": "B"
    },
    {
      "id": 68,
      "pergunta": "Como um protótipo ajuda no Design Sprint?",
      "alternativas": {
        "A": "Evita retrabalho e valida com usuários.",
        "B": "Serve apenas como ilustração gráfica.",
        "C": "Ajuda a desenvolver marketing digital.",
        "D": "Garante fidelidade à ideia inicial."
      },
      "resposta_correta": "A"
    },
    {
      "id": 69,
      "pergunta": "Quais são os 5 dias do Design Sprint?",
      "alternativas": {
        "A": "Planejar, testar, divulgar, vender, escalar.",
        "B": "Entender, Esboçar, Decidir, Prototipar, Testar.",
        "C": "Estudar, Criar, Executar, Acompanhar, Corrigir.",
        "D": "Pensar, Projetar, Programar, Publicar, Vender."
      },
      "resposta_correta": "B"
    },
    {
      "id": 70,
      "pergunta": "O que um pitch precisa ter?",
      "alternativas": {
        "A": "Somente uma apresentação de slides.",
        "B": "Uma explicação convincente, clara e curta.",
        "C": "Declaração contábil do último trimestre.",
        "D": "Projeção de vendas para 10 anos."
      },
      "resposta_correta": "B"
    },
    {
      "id": 71,
      "pergunta": "Qual o papel dos parceiros-chave no Canvas?",
      "alternativas": {
        "A": "Substituir os clientes na cadeia de valor.",
        "B": "Ajudar a empresa em atividades essenciais ou distribuição.",
        "C": "Recrutar novos funcionários.",
        "D": "Executar todas as tarefas internas da empresa."
      },
      "resposta_correta": "B"
    },
    {
      "id": 72,
      "pergunta": "Por que a etapa de empatia é essencial no Design Thinking?",
      "alternativas": {
        "A": "Ajuda a criar logotipos para a marca.",
        "B": "Garante a execução do plano de negócios.",
        "C": "Permite entender profundamente as necessidades do usuário.",
        "D": "Facilita a análise de concorrentes diretos."
      },
      "resposta_correta": "C"
    },
    {
      "id": 73,
      "pergunta": "Qual a utilidade da definição do problema no processo de inovação?",
      "alternativas": {
        "A": "Para escrever uma missão empresarial.",
        "B": "Para apresentar ideias aos concorrentes.",
        "C": "Para resolver dores reais dos usuários.",
        "D": "Para substituir testes de produto."
      },
      "resposta_correta": "C"
    },
    {
      "id": 74,
      "pergunta": "No Design Thinking, o que vem após a etapa de empatia?",
      "alternativas": {
        "A": "Prototipagem.",
        "B": "Teste de mercado.",
        "C": "Definição do problema.",
        "D": "Escolha de fornecedores."
      },
      "resposta_correta": "C"
    },
    {
      "id": 75,
      "pergunta": "Como o Canvas auxilia empreendedores?",
      "alternativas": {
        "A": "Criando uma campanha de marketing.",
        "B": "Organizando o modelo de negócio em um quadro visual.",
        "C": "Registrando patentes de forma legal.",
        "D": "Elaborando contratos jurídicos."
      },
      "resposta_correta": "B"
    },
    {
      "id": 76,
      "pergunta": "Qual a principal vantagem de um MVP em relação a um produto completo no início?",
      "alternativas": {
        "A": "Ele gera maior receita imediata.",
        "B": "Ele reduz o risco e permite aprendizado rápido.",
        "C": "Ele é mais fácil de patentear.",
        "D": "Ele atinge um público muito maior desde o início."
      },
      "resposta_correta": "B"
    },
    {
      "id": 77,
      "pergunta": "O que é um 'early adopter' no contexto de lançamento de um MVP?",
      "alternativas": {
        "A": "Um investidor anjo que financia a startup.",
        "B": "Um concorrente que copia a ideia do produto.",
        "C": "Um cliente inicial que adota o produto antes dos demais.",
        "D": "Um membro da equipe de desenvolvimento do produto."
      },
      "resposta_correta": "C"
    },
    {
      "id": 78,
      "pergunta": "Qual dos seguintes não é um bloco do Lean Canvas?",
      "alternativas": {
        "A": "Segmentos de Clientes.",
        "B": "Métricas-Chave.",
        "C": "Ações de Marketing.",
        "D": "Proposta de Valor Única."
      },
      "resposta_correta": "C"
    },
    {
      "id": 79,
      "pergunta": "O que a 'Solução' representa no Lean Canvas?",
      "alternativas": {
        "A": "A equipe de vendas do negócio.",
        "B": "As funcionalidades do produto que resolvem o problema do cliente.",
        "C": "Os canais de distribuição utilizados.",
        "D": "O preço de venda do serviço."
      },
      "resposta_correta": "B"
    },
    {
      "id": 80,
      "pergunta": "No Design Sprint, qual o objetivo do dia de 'Esboçar'?",
      "alternativas": {
        "A": "Definir o público-alvo para o marketing.",
        "B": "Desenhar e refinar ideias para a solução.",
        "C": "Analisar as finanças do projeto.",
        "D": "Realizar testes com usuários."
      },
      "resposta_correta": "B"
    },
    {
      "id": 81,
      "pergunta": "O que o conceito de 'pivotar' significa para uma startup?",
      "alternativas": {
        "A": "Aumentar o investimento em marketing.",
        "B": "Mudar a estratégia ou modelo de negócio com base em aprendizados.",
        "C": "Contratar mais funcionários para a equipe.",
        "D": "Registrar a patente da sua ideia principal."
      },
      "resposta_correta": "B"
    },
    {
      "id": 82,
      "pergunta": "Qual a principal característica de um bom pitch?",
      "alternativas": {
        "A": "Ser longo e detalhado, cobrindo todos os aspectos.",
        "B": "Ser complexo e técnico, impressionando especialistas.",
        "C": "Ser claro, conciso e cativante.",
        "D": "Ser focado apenas nos problemas financeiros da empresa."
      },
      "resposta_correta": "C"
    },
    {
      "id": 83,
      "pergunta": "Para que serve a 'Métrica Acionável' em um negócio enxuto?",
      "alternativas": {
        "A": "Para medir a satisfação dos funcionários.",
        "B": "Para guiar decisões e ações futuras com base em dados.",
        "C": "Para calcular o lucro bruto do mês.",
        "D": "Para definir o nome da empresa."
      },
      "resposta_correta": "B"
    },
    {
      "id": 84,
      "pergunta": "Qual das seguintes NÃO é uma fase do Design Thinking?",
      "alternativas": {
        "A": "Empatia.",
        "B": "Definição.",
        "C": "Financiamento.",
        "D": "Prototipagem."
      },
      "resposta_correta": "C"
    },
    {
      "id": 85,
      "pergunta": "O que é um 'benchmark' no plano de negócios?",
      "alternativas": {
        "A": "Uma estratégia para reduzir custos operacionais.",
        "B": "Um ponto de referência para comparação de desempenho.",
        "C": "Um tipo de software de gestão de projetos.",
        "D": "Um processo de recrutamento de talentos."
      },
      "resposta_correta": "B"
    },
    {
      "id": 86,
      "pergunta": "Qual o benefício de ter uma 'Vantagem Injusta' no Lean Canvas?",
      "alternativas": {
        "A": "Facilita a obtenção de empréstimos bancários.",
        "B": "Cria uma barreira para a concorrência.",
        "C": "Permite aumentar os preços do produto livremente.",
        "D": "Assegura a satisfação de todos os clientes."
      },
      "resposta_correta": "B"
    },
    {
      "id": 87,
      "pergunta": "Como o Design Sprint contribui para o desenvolvimento de produtos?",
      "alternativas": {
        "A": "Apenas na fase final de lançamento.",
        "B": "Ao permitir testar e validar ideias rapidamente.",
        "C": "Limitando a criatividade da equipe.",
        "D": "Focando em análises burocráticas."
      },
      "resposta_correta": "B"
    },
    {
      "id": 88,
      "pergunta": "O que a 'Estrutura de Custos' descreve no Business Model Canvas?",
      "alternativas": {
        "A": "As receitas provenientes de vendas.",
        "B": "Os gastos mais significativos para operar o negócio.",
        "C": "O valor de mercado da empresa.",
        "D": "A estimativa de impostos anuais."
      },
      "resposta_correta": "B"
    },
    {
      "id": 89,
      "pergunta": "Qual é a principal diferença entre um 'plano de negócios' e um 'Business Model Canvas'?",
      "alternativas": {
        "A": "O plano de negócios é mais resumido e o Canvas é detalhado.",
        "B": "O Canvas é uma ferramenta visual e o plano de negócios é um documento extenso.",
        "C": "Ambos são usados apenas por grandes empresas.",
        "D": "O plano de negócios é focado em design e o Canvas em finanças."
      },
      "resposta_correta": "B"
    },
    {
      "id": 90,
      "pergunta": "No contexto de inovação, o que significa 'Iterar'?",
      "alternativas": {
        "A": "Copiar a ideia de um concorrente.",
        "B": "Repetir o mesmo erro várias vezes.",
        "C": "Refinar e melhorar uma ideia com base em feedback e testes.",
        "D": "Lançar o produto sem validação prévia."
      },
      "resposta_correta": "C"
    },
    {
      "id": 91,
      "pergunta": "Qual o papel do 'Poder de Negociação dos Compradores' nas 5 Forças de Porter?",
      "alternativas": {
        "A": "Determina o nível de produtividade da equipe.",
        "B": "Indica a capacidade dos clientes de influenciar os preços.",
        "C": "Avalia a qualidade dos fornecedores.",
        "D": "Mede o potencial de inovação do setor."
      },
      "resposta_correta": "B"
    },
    {
      "id": 92,
      "pergunta": "Por que o 'Segmento de Clientes' é crucial no Lean Canvas?",
      "alternativas": {
        "A": "Para definir o preço dos produtos dos concorrentes.",
        "B": "Para entender quem você está tentando ajudar e suas dores.",
        "C": "Para mapear os custos fixos da empresa.",
        "D": "Para escolher o nome da marca."
      },
      "resposta_correta": "B"
    },
    {
      "id": 93,
      "pergunta": "Qual o objetivo de um 'Roadmap' de produto?",
      "alternativas": {
        "A": "Detalhar os finanças da empresa.",
        "B": "Descrever a visão e evolução do produto ao longo do tempo.",
        "C": "Registrar as vendas diárias.",
        "D": "Organizar as reuniões da equipe."
      },
      "resposta_correta": "B"
    },
    {
      "id": 94,
      "pergunta": "O que um 'Pitch Deck' geralmente contém?",
      "alternativas": {
        "A": "Apenas a biografia dos fundadores.",
        "B": "Dados financeiros completos e auditorias.",
        "C": "Uma apresentação visual da ideia, problema, solução e equipe.",
        "D": "O plano detalhado de expansão global."
      },
      "resposta_correta": "C"
    },
    {
      "id": 95,
      "pergunta": "No contexto de MVP, o que 'Construir-Medir-Aprender' significa?",
      "alternativas": {
        "A": "Um ciclo de desenvolvimento de software tradicional.",
        "B": "Uma metodologia de vendas para produtos complexos.",
        "C": "Um processo iterativo para validar e refinar o produto.",
        "D": "Uma forma de gestão de projetos lineares."
      },
      "resposta_correta": "C"
    },
    {
      "id": 96,
      "pergunta": "Qual das seguintes é uma 'Atividade-Chave' no Canvas?",
      "alternativas": {
        "A": "Consumo de cafezinho pela equipe.",
        "B": "Produção, desenvolvimento de software ou marketing.",
        "C": "Controle de despesas pessoais dos funcionários.",
        "D": "Cálculo de juros bancários."
      },
      "resposta_correta": "B"
    },
    {
      "id": 97,
      "pergunta": "O que um 'Protótipo de Baixa Fidelidade' busca testar?",
      "alternativas": {
        "A": "A interface gráfica final do produto.",
        "B": "A ideia central e a usabilidade básica, sem detalhes visuais.",
        "C": "A segurança e escalabilidade do sistema.",
        "D": "A compatibilidade com todos os dispositivos existentes."
      },
      "resposta_correta": "B"
    },
    {
      "id": 98,
      "pergunta": "Qual o papel da 'Solução' no Lean Canvas para startups?",
      "alternativas": {
        "A": "Listar todos os concorrentes indiretos.",
        "B": "Apresentar a tecnologia subjacente ao produto.",
        "C": "Oferecer a resposta para os problemas dos clientes-alvo.",
        "D": "Definir o público-alvo para futuras campanhas de vendas."
      },
      "resposta_correta": "C"
    },
    {
      "id": 99,
      "pergunta": "Em qual cenário a 'Inovação Incremental' é mais comum?",
      "alternativas": {
        "A": "Na criação de mercados totalmente novos.",
        "B": "Em indústrias que buscam pequenas melhorias em produtos existentes.",
        "C": "Quando o foco é destruir os concorrentes.",
        "D": "Em empresas que ignoram o feedback do cliente."
      },
      "resposta_correta": "B"
    },
    {
      "id": 100,
      "pergunta": "Qual a importância de um 'Plano de Ação' em um plano de negócios?",
      "alternativas": {
        "A": "Apenas para cumprir exigências burocráticas.",
        "B": "Detalhar o cronograma e responsabilidades para atingir os objetivos.",
        "C": "Ignorar as metas financeiras de curto prazo.",
        "D": "Manter os custos ocultos do projeto."
      },
      "resposta_correta": "B"
    },
    {
      "id": 101,
      "pergunta": "Qual a finalidade de um 'Business Case'?",
      "alternativas": {
        "A": "Registrar a marca da empresa legalmente.",
        "B": "Apresentar a justificativa e viabilidade de um projeto ou investimento.",
        "C": "Detalhar o histórico de vendas de um produto.",
        "D": "Avaliar o desempenho individual dos colaboradores."
      },
      "resposta_correta": "B"
    },
    {
      "id": 102,
      "pergunta": "Em Design Thinking, por que 'Testar' é uma fase crucial?",
      "alternativas": {
        "A": "Para evitar a participação dos usuários finais.",
        "B": "Para validar a solução com o público-alvo e obter feedback.",
        "C": "Para garantir que o produto seja lançado sem falhas.",
        "D": "Para definir os preços de custo do material."
      },
      "resposta_correta": "B"
    },
    {
      "id": 103,
      "pergunta": "O que é um 'Canal de Distribuição' no contexto de negócios?",
      "alternativas": {
        "A": "A forma como os funcionários se comunicam internamente.",
        "B": "Os meios pelos quais o produto ou serviço chega ao cliente.",
        "C": "Um tipo de estrutura de custos fixa.",
        "D": "O método de contratação de novos talentos."
      },
      "resposta_correta": "B"
    },
    {
      "id": 104,
      "pergunta": "Qual a importância da 'Curva S' na inovação disruptiva?",
      "alternativas": {
        "A": "Representa o crescimento linear de um produto tradicional.",
        "B": "Ilustra o ciclo de vida e a adoção de uma tecnologia ou inovação.",
        "C": "Descreve a estrutura organizacional de uma startup.",
        "D": "Mede a satisfação do cliente em um serviço."
      },
      "resposta_correta": "B"
    },
    {
      "id": 105,
      "pergunta": "O que o bloco 'Fontes de Receita' detalha no Canvas?",
      "alternativas": {
        "A": "Os custos operacionais do negócio.",
        "B": "As diferentes maneiras pelas quais a empresa gera dinheiro.",
        "C": "O investimento inicial necessário para a startup.",
        "D": "A dívida total da empresa com fornecedores."
      },
      "resposta_correta": "B"
    },
    {
      "id": 106,
      "pergunta": "Por que o 'Poder de Negociação dos Fornecedores' é relevante na análise de Porter?",
      "alternativas": {
        "A": "Afeta a capacidade da empresa de vender seus produtos.",
        "B": "Influencia diretamente os custos e a qualidade dos insumos.",
        "C": "Determina a demanda do consumidor pelo produto.",
        "D": "Define a estratégia de marketing digital da empresa."
      },
      "resposta_correta": "B"
    },
    {
      "id": 107,
      "pergunta": "Em um MVP, qual a função da 'Proposta de Valor'?",
      "alternativas": {
        "A": "Apenas atrair investidores.",
        "B": "Comunicar o benefício central e único que o produto oferece ao cliente.",
        "C": "Definir o preço de venda do protótipo.",
        "D": "Identificar os custos de produção."
      },
      "resposta_correta": "B"
    },
    {
      "id": 108,
      "pergunta": "Qual é um dos principais benefícios de usar o 'Lean Startup'?",
      "alternativas": {
        "A": "Garantir o sucesso imediato de qualquer negócio.",
        "B": "Reduzir o desperdício e acelerar o ciclo de aprendizado.",
        "C": "Eliminar a necessidade de um plano de negócios.",
        "D": "Focar apenas na expansão de mercado."
      },
      "resposta_correta": "B"
    },
    {
      "id": 109,
      "pergunta": "O que um 'elevator pitch' busca alcançar em pouco tempo?",
      "alternativas": {
        "A": "Uma venda complexa do produto.",
        "B": "O interesse e curiosidade para uma conversa mais aprofundada.",
        "C": "Um contrato assinado com o cliente.",
        "D": "A listagem da empresa na bolsa de valores."
      },
      "resposta_correta": "B"
    },
    {
      "id": 110,
      "pergunta": "Qual das seguintes alternativas descreve melhor a 'Ameaça de Produtos Substitutos' de Porter?",
      "alternativas": {
        "A": "Produtos idênticos vendidos pela concorrência.",
        "B": "Novos produtos que satisfazem a mesma necessidade do cliente de forma diferente.",
        "C": "Produtos com defeito de fabricação.",
        "D": "Produtos que dependem de fornecedores exclusivos."
      },
      "resposta_correta": "B"
    },
    {
      "id": 111,
      "pergunta": "No Design Thinking, qual a importância da fase de 'Definição'?",
      "alternativas": {
        "A": "Gerar a maior quantidade possível de ideias.",
        "B": "Compreender profundamente os usuários sem focar em problemas.",
        "C": "Transformar insights da empatia em problemas claros e acionáveis.",
        "D": "Prototipar a primeira solução que surgir."
      },
      "resposta_correta": "C"
    },
    {
      "id": 112,
      "pergunta": "O que 'Métricas de Vaidade' representam no contexto de startups?",
      "alternativas": {
        "A": "Métricas que realmente indicam o crescimento sustentável do negócio.",
        "B": "Dados que parecem impressionantes, mas não ajudam na tomada de decisão real.",
        "C": "Indicadores financeiros obrigatórios por lei.",
        "D": "Métricas relacionadas à popularidade da marca nas redes sociais."
      },
      "resposta_correta": "B"
    },
    {
      "id": 113,
      "pergunta": "Qual é a principal aplicação do 'Lean Canvas'?",
      "alternativas": {
        "A": "Gerenciamento de grandes projetos de infraestrutura.",
        "B": "Planejamento inicial e validação de ideias para startups.",
        "C": "Análise de balanços financeiros de empresas consolidadas.",
        "D": "Criação de planos de marketing detalhados para o varejo."
      },
      "resposta_correta": "B"
    },
    {
      "id": 114,
      "pergunta": "O que significa 'Validação' no desenvolvimento de produtos e negócios?",
      "alternativas": {
        "A": "Lançar o produto no mercado sem testes prévios.",
        "B": "Confirmar que a ideia ou solução atende às necessidades reais dos usuários.",
        "C": "Obter aprovação legal para o registro da empresa.",
        "D": "Garantir que a equipe de desenvolvimento seja certificada."
      },
      "resposta_correta": "B"
    },
    {
      "id": 115,
      "pergunta": "Qual a importância do 'Time to Market' para um MVP?",
      "alternativas": {
        "A": "Garantir o preço mais alto possível para o produto.",
        "B": "Reduzir o tempo de lançamento para aprender mais rápido com o mercado.",
        "C": "Investir mais tempo em pesquisa de concorrência.",
        "D": "Aumentar o número de funcionalidades antes do lançamento."
      },
      "resposta_correta": "B"
    },
    {
      "id": 116,
      "pergunta": "O que o bloco 'Estrutura de Custos' do Canvas ajuda a identificar?",
      "alternativas": {
        "A": "Os lucros esperados do negócio.",
        "B": "As principais despesas para operar o modelo de negócio.",
        "C": "A capacidade de investimento de novos sócios.",
        "D": "O percentual de impostos sobre a receita bruta."
      },
      "resposta_correta": "B"
    },
    {
      "id": 117,
      "pergunta": "Como o 'Design Sprint' contribui para a inovação?",
      "alternativas": {
        "A": "Impedindo qualquer tipo de falha no projeto.",
        "B": "Permitindo testar ideias ousadas sem o risco de um lançamento completo.",
        "C": "Focando apenas em melhorias incrementais de produtos.",
        "D": "Eliminando a necessidade de pesquisa de mercado."
      },
      "resposta_correta": "B"
    },
    {
      "id": 118,
      "pergunta": "O que é um 'Prototipo de Alta Fidelidade'?",
      "alternativas": {
        "A": "Um rascunho rápido feito em papel.",
        "B": "Uma versão visualmente detalhada e interativa do produto.",
        "C": "Um documento descritivo sem qualquer representação visual.",
        "D": "Um produto já lançado no mercado para todos os usuários."
      },
      "resposta_correta": "B"
    },
    {
      "id": 119,
      "pergunta": "Qual o foco principal do 'Business Model Canvas' em comparação com um plano de negócios tradicional?",
      "alternativas": {
        "A": "Detalhar os aspectos jurídicos e contábeis exaustivamente.",
        "B": "Oferecer uma visão geral e visual dos elementos-chave do negócio.",
        "C": "Focar apenas nas projeções financeiras de longo prazo.",
        "D": "Ser utilizado exclusivamente por startups de tecnologia."
      },
      "resposta_correta": "B"
    },
    {
      "id": 120,
      "pergunta": "O que significa 'Fit Problema-Solução' no Lean Canvas?",
      "alternativas": {
        "A": "O alinhamento da equipe com a visão da empresa.",
        "B": "A garantia de que a solução proposta realmente resolve o problema do cliente.",
        "C": "A correspondência entre o preço e o custo de produção.",
        "D": "A adequação da tecnologia utilizada ao mercado."
      },
      "resposta_correta": "B"
    },
    {
      "id": 121,
      "pergunta": "Qual a função do 'Fluxo de Receita' no modelo de negócios?",
      "alternativas": {
        "A": "Descrever os gastos mensais da empresa.",
        "B": "Indicar como a empresa pretende gerar dinheiro com seu produto/serviço.",
        "C": "Mostrar o volume de vendas dos concorrentes.",
        "D": "Definir o salário dos colaboradores."
      },
      "resposta_correta": "B"
    },
    {
      "id": 122,
      "pergunta": "Por que a 'Proposta de Valor Única' é fundamental no Lean Canvas?",
      "alternativas": {
        "A": "Para evitar qualquer tipo de concorrência.",
        "B": "Para deixar claro o que torna o produto ou serviço diferente e melhor.",
        "C": "Para garantir um preço mais elevado no mercado.",
        "D": "Para simplificar as atividades-chave da empresa."
      },
      "resposta_correta": "B"
    },
    {
      "id": 123,
      "pergunta": "Em um 'Pitch', qual é a importância da 'equipe'?",
      "alternativas": {
        "A": "Apenas para listar os cargos de cada um.",
        "B": "É um fator crucial para investidores avaliarem a capacidade de execução.",
        "C": "Não é um elemento relevante em um pitch.",
        "D": "Serve apenas para impressionar com nomes famosos."
      },
      "resposta_correta": "B"
    },
    {
      "id": 124,
      "pergunta": "O que o conceito de 'Escalabilidade' significa para uma startup?",
      "alternativas": {
        "A": "A capacidade de crescer a receita sem aumentar proporcionalmente os custos.",
        "B": "A necessidade de contratar mais pessoas para cada novo cliente.",
        "C": "A dificuldade de expandir o negócio para novos mercados.",
        "D": "A dependência de poucos clientes para sobreviver."
      },
      "resposta_correta": "A"
    },
    {
      "id": 125,
      "pergunta": "Qual a principal vantagem de usar o 'Design Thinking' na resolução de problemas?",
      "alternativas": {
        "A": "Garantir uma solução perfeita na primeira tentativa.",
        "B": "Focar exclusivamente na tecnologia envolvida.",
        "C": "Centrar a solução nas necessidades e experiências dos usuários.",
        "D": "Minimizar o tempo gasto em pesquisa."
      },
      "resposta_correta": "C"
    },
  {
    "id": 126,
    "pergunta": "Qual princípio ético é essencial ao desenvolver um MVP que coleta dados de usuários?",
    "alternativas": {
      "A": "Maximizar o lucro com a venda de dados.",
      "B": "Transparência e consentimento explícito na coleta.",
      "C": "Ignorar regulamentações para agilizar o lançamento.",
      "D": "Ocultar os termos de uso em letras miúdas."
    },
    "resposta_correta": "B"
  },
  {
    "id": 127,
    "pergunta": "Como a disruptização pode contribuir para a sustentabilidade ambiental?",
    "alternativas": {
      "A": "Aumentando a produção de descartáveis.",
      "B": "Criando soluções que reduzem desperdício (ex.: economia compartilhada).",
      "C": "Ignorando certificações ambientais.",
      "D": "Priorizando apenas o retorno financeiro imediato."
    },
    "resposta_correta": "B"
  },
  {
    "id": 128,
    "pergunta": "Qual item NÃO deve faltar em um plano de negócios sustentável?",
    "alternativas": {
      "A": "Estratégia de descarte de resíduos.",
      "B": "Uso de materiais não recicláveis.",
      "C": "Ausência de metas de redução de carbono.",
      "D": "Parcerias com fornecedores poluentes."
    },
    "resposta_correta": "A"
  },
  {
    "id": 129,
    "pergunta": "O que é 'greenwashing' no contexto empresarial?",
    "alternativas": {
      "A": "Prática de lavagem de produtos com água reciclada.",
      "B": "Marketing enganoso que exagera ações sustentáveis.",
      "C": "Uso exclusivo de energia solar.",
      "D": "Reciclagem interna de papéis."
    },
    "resposta_correta": "B"
  },
  {
    "id": 130,
    "pergunta": "Por que a ética é crucial em inovações disruptivas?",
    "alternativas": {
      "A": "Para evitar consequências sociais negativas (ex.: desemprego em massa).",
      "B": "Para acelerar processos sem revisão jurídica.",
      "C": "Para copiar modelos de concorrentes.",
      "D": "Para reduzir custos com consultorias."
    },
    "resposta_correta": "A"
  },
  {
    "id": 131,
    "pergunta": "Qual exemplo representa uma inovação disruptiva sustentável?",
    "alternativas": {
      "A": "Carros elétricos com baterias de difícil reciclagem.",
      "B": "Plataformas de logística que otimizam rotas para reduzir emissões.",
      "C": "Embalagens plásticas descartáveis.",
      "D": "Mineração de criptomoedas com alto consumo energético."
    },
    "resposta_correta": "B"
  },
  {
    "id": 132,
    "pergunta": "No plano de negócios, o que é 'triple bottom line'?",
    "alternativas": {
      "A": "Foco em lucro, lucro e lucro.",
      "B": "Balanço financeiro trimestral.",
      "C": "Modelo que considera pessoas, planeta e lucro.",
      "D": "Relatório de vendas em três mercados."
    },
    "resposta_correta": "C"
  },
  {
    "id": 133,
    "pergunta": "Qual ação NÃO é ética ao validar um MVP?",
    "alternativas": {
      "A": "Testar com usuários sem explicar os riscos.",
      "B": "Oferecer recompensa por feedback honesto.",
      "C": "Documentar falhas para correção.",
      "D": "Garantir privacidade dos dados coletados."
    },
    "resposta_correta": "A"
  },
  {
    "id": 134,
    "pergunta": "Como a economia circular se relaciona com disruptização?",
    "alternativas": {
      "A": "Promovendo descarte rápido de produtos.",
      "B": "Criando modelos de reuso e reciclagem inovadores.",
      "C": "Ignorando a vida útil dos materiais.",
      "D": "Aumentando a produção linear."
    },
    "resposta_correta": "B"
  },
  {
    "id": 135,
    "pergunta": "Qual seção do plano de negócios deve abordar impacto ambiental?",
    "alternativas": {
      "A": "Apenas no anexo técnico.",
      "B": "Em nenhuma seção, pois é irrelevante.",
      "C": "Em estratégias operacionais e de responsabilidade social.",
      "D": "Somente no resumo executivo."
    },
    "resposta_correta": "C"
  },
  {
    "id": 136,
    "pergunta": "O que é 'obsolescência programada' na disruptização?",
    "alternativas": {
      "A": "Planejamento para que produtos durem mais.",
      "B": "Estratégia para produtos se tornarem obsoletos rapidamente.",
      "C": "Uso de materiais biodegradáveis.",
      "D": "Inovação contínua sem substituição de versões."
    },
    "resposta_correta": "B"
  },
  {
    "id": 137,
    "pergunta": "Qual prática é antiética em um pitch para investidores?",
    "alternativas": {
      "A": "Apresentar dados reais de testes.",
      "B": "Superestimar projeções financeiras sem base.",
      "C": "Mencionar riscos do negócio.",
      "D": "Mostrar cases de concorrentes."
    },
    "resposta_correta": "B"
  },
  {
    "id": 138,
    "pergunta": "Como incluir ESG (Environmental, Social, Governance) no Lean Canvas?",
    "alternativas": {
      "A": "Ignorar, pois é burocracia desnecessária.",
      "B": "Adicionar métricas de impacto social e ambiental nos blocos relevantes.",
      "C": "Considerar apenas o governance para reduzir custos.",
      "D": "Deixar para abordar após o lançamento."
    },
    "resposta_correta": "B"
  },
  {
    "id": 139,
    "pergunta": "Qual é um dilema ético comum em startups disruptivas?",
    "alternativas": {
      "A": "Escolher entre escala rápida e impacto social positivo.",
      "B": "Seguir todas as regras sem questionar.",
      "C": "Evitar qualquer risco jurídico.",
      "D": "Não inovar para manter empregos tradicionais."
    },
    "resposta_correta": "A"
  },
  {
    "id": 140,
    "pergunta": "O que é 'upcycling' em negócios sustentáveis?",
    "alternativas": {
      "A": "Descartar materiais de forma segura.",
      "B": "Transformar resíduos em produtos de maior valor.",
      "C": "Reciclar apenas plásticos.",
      "D": "Reduzir a produção sem reutilizar."
    },
    "resposta_correta": "B"
  },
  {
    "id": 141,
    "pergunta": "Qual estratégia NÃO é válida para um plano de negócios verde?",
    "alternativas": {
      "A": "Certificações ambientais (ex.: ISO 14001).",
      "B": "Parcerias com cooperativas de reciclagem.",
      "C": "Uso exclusivo de energia não renovável.",
      "D": "Logística reversa para embalagens."
    },
    "resposta_correta": "C"
  },
  {
    "id": 142,
    "pergunta": "Por que a disruptização pode ser ameaçada por questões éticas?",
    "alternativas": {
      "A": "Pela falta de concorrência no mercado.",
      "B": "Pela possibilidade de excluir grupos sociais ou violar privacidade.",
      "C": "Por ser sempre mais cara que modelos tradicionais.",
      "D": "Por depender de patentes internacionais."
    },
    "resposta_correta": "B"
  },
  {
    "id": 143,
    "pergunta": "Qual indicador mede eficiência ambiental em um negócio?",
    "alternativas": {
      "A": "Número de funcionários.",
      "B": "Pegada de carbono por unidade produzida.",
      "C": "Taxa de juros bancária.",
      "D": "Lucro líquido trimestral."
    },
    "resposta_correta": "B"
  },
  {
    "id": 144,
    "pergunta": "O que é 'compliance' em ética empresarial?",
    "alternativas": {
      "A": "Cumprimento de leis e regulamentos.",
      "B": "Flexibilização de normas para inovar.",
      "C": "Redução de custos com multas.",
      "D": "Venda de produtos sem certificação."
    },
    "resposta_correta": "A"
  },
  {
    "id": 145,
    "pergunta": "Como a disruptização afeta empregos tradicionais?",
    "alternativas": {
      "A": "Sempre os elimina sem compensação.",
      "B": "Pode substituí-los, mas cria novas oportunidades.",
      "C": "Nunca impacta o mercado de trabalho.",
      "D": "Apenas beneficia setores informais."
    },
    "resposta_correta": "B"
  },
  {
    "id": 146,
    "pergunta": "Qual prática é sustentável no desenvolvimento de produtos?",
    "alternativas": {
      "A": "Usar materiais virgens sempre.",
      "B": "Projetar para facilitar a desmontagem e reparo.",
      "C": "Ignorar a eficiência energética.",
      "D": "Evitar avaliações de ciclo de vida."
    },
    "resposta_correta": "B"
  },
  {
    "id": 147,
    "pergunta": "O que é 'impacto social positivo' em um modelo de negócio?",
    "alternativas": {
      "A": "Apenas gerar lucro para acionistas.",
      "B": "Contribuir para resolver problemas sociais (ex.: inclusão digital).",
      "C": "Ter sede em bairros nobres.",
      "D": "Contratar apenas profissionais experientes."
    },
    "resposta_correta": "B"
  },
  {
    "id": 148,
    "pergunta": "Qual risco ético ao usar IA em produtos disruptivos?",
    "alternativas": {
      "A": "Vieses algorítmicos que discriminam grupos.",
      "B": "Custos altos de desenvolvimento.",
      "C": "Necessidade de treinamento técnico.",
      "D": "Falta de interesse do mercado."
    },
    "resposta_correta": "A"
  },
  {
    "id": 149,
    "pergunta": "O que é 'capitalismo consciente'?",
    "alternativas": {
      "A": "Foco exclusivo em maximizar lucros.",
      "B": "Modelo que integra propósito social e rentabilidade.",
      "C": "Empresas sem fins lucrativos.",
      "D": "Investimento apenas em grandes corporações."
    },
    "resposta_correta": "B"
  },
  {
      "id": 150,
      "pergunta": "Como incluir ética no Design Thinking?",
      "alternativas": {
        "A": "Testar apenas com grupos privilegiados.",
        "B": "Considerar impactos sociais em todas as etapas.",
        "C": "Ignorar feedbacks negativos.",
        "D": "Priorizar velocidade sobre reflexão."
      },
      "resposta_correta": "B"
    }
];
