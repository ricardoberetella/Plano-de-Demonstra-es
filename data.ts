
import { Category, OperationPlan } from './types';

export const OPERATIONS: OperationPlan[] = [
  // --- VOLUME 5 (1-20) ---
  {
    id: "v5-1",
    name: "Facear no torno",
    category: Category.Torneamento,
    reference: "1",
    taskNumber: "Tarefa 1",
    time: "20min",
    pieceName: "EIXO CILÍNDRICO DE QUATRO CORPOS",
    volumePage: "5 / 34",
    preparation: "Torno mecânico, pastilha de torneamento externo, suporte de torneamento externo, chave de aperto para castelo, paquímetro.",
    motivation: "Esta operação é utilizada para obter uma superfície de referência para a medição ou ainda como passo prévio à furação.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material.", keyPoints: ["Deixe para fora das castanhas um comprimento inferior ou igual ao diâmetro do material.", "Centralize o material."] },
      { task: "Fixe a ferramenta.", keyPoints: ["Atente-se ao balanço do suporte da ferramenta."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Desloque o carro principal para aproximar a ferramenta da peça.", keyPoints: ["Fixe-o no barramento para evitar irregularidades da face."] },
      { task: "Faça a ferramenta tocar na parte mais saliente do material.", keyPoints: ["Zere ou tome referência no anel graduado do carro superior."] },
      { task: "Afaste a ferramenta até que ela fique fora do diâmetro da peça.", keyPoints: ["Utilizar refrigeração."] },
      { task: "Faceie o material.", keyPoints: ["Dê profundidade de corte utilizando o carro superior.", "Desloque a ferramenta lentamente da periferia até o centro geométrico da peça.", "Dê quantos passos forem necessários até obter uma superfície uniforme e o comprimento desejado."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Qual comprimento do material pode ficar para fora das castanhas?",
      "Qual a importância de se colocar a rotação correta?",
      "Qual a importância de se fixar o carro principal?",
      "Por que a ferramenta não pode ultrapassar o centro geométrico da peça?"
    ]
  },
  {
    id: "v5-2",
    name: "Tornear superfície cilíndrica na placa universal",
    category: Category.Torneamento,
    reference: "2",
    taskNumber: "Tarefa 1",
    time: "20min",
    pieceName: "EIXO CILÍNDRICO DE QUATRO CORPOS",
    volumePage: "5 / 36",
    preparation: "Torno mecânico, pastilha para torneamento externo, suporte para torneamento externo, chave de aperto para castelo, paquímetro.",
    motivation: "É uma das operações mais executadas no torno. A maioria dos conjuntos mecânicos fabricados utiliza peças com superfícies cilíndricas. Exemplo: partes do torno.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material.", keyPoints: ["Deixe para fora das castanhas um comprimento maior que a parte a ser torneada.", "Centre o material."] },
      { task: "Fixe a ferramenta.", keyPoints: ["Atente-se para o balanço do suporte da ferramenta."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Marque o comprimento a ser torneado.", keyPoints: ["Utilize a haste do paquímetro ou a régua graduada."] },
      { task: "Determine a profundidade de corte.", keyPoints: ["Zere ou tome referência no anel graduado do carro transversal.", "Afaste a ferramenta do material utilizando o carro principal.", "Ao dar profundidade de corte, a ferramenta deve estar fora do material."] },
      { task: "Torneie o diâmetro do material.", keyPoints: ["Verifique o sentido de giro da placa.", "Afaste a ferramenta e retorne ao ponto inicial."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que é importante deixar o material fora das castanhas com um comprimento maior do que se vai usinar?",
      "O que devemos observar ao fixar a ferramenta?",
      "Que cuidado devemos ter ao determinar a profundidade de corte?",
      "Qual é a importância do sentido de giro da placa?",
      "Por que o eixo árvore deve estar parado durante o posicionamento das alavancas?"
    ]
  },
  {
    id: "v5-3",
    name: "Facear rebaixo externo",
    category: Category.Torneamento,
    reference: "3",
    taskNumber: "Tarefa 1",
    time: "20min",
    pieceName: "EIXO CILÍNDRICO DE QUATRO CORPOS",
    volumePage: "5 / 38",
    preparation: "Torno mecânico, pastilha de desbaste R0,8mm, suporte para pastilha, chave de castelo, paquímetro.",
    motivation: "O faceamento do rebaixo é realizado quando se deseja obter uma face de referência originada por diferentes diâmetros da peça, utilizando os carros superior e transversal. Alguns conjuntos mecânicos utilizam eixos com faces rebaixadas, que têm a finalidade de servir como apoio ou limite para a montagem de polias, rolamentos e buchas.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Faceie o rebaixo.", keyPoints: ["Deixe sobremetal no comprimento e no diâmetro."] },
      { task: "Posicione a ferramenta.", keyPoints: ["O ângulo da ferramenta deve permitir que somente a ponta da ferramenta toque na face e no diâmetro do material."] },
      { task: "Faceie o rebaixo.", keyPoints: ["Retire o excesso de material até obter o comprimento desejado, utilizando o carro superior."] },
      { task: "Referencie a ferramenta no diâmetro do material.", keyPoints: ["Zere o anel graduado do carro transversal."] },
      { task: "Finalize o rebaixo.", keyPoints: ["Torneie o diâmetro, utilizando a mesma inclinação da ferramenta."] },
      { task: "Faça a medição do material.", keyPoints: ["Utilize a haste de profundidade ou o encosto de ressalto do paquímetro para conferir o comprimento do rebaixo."] },
      { task: "Deixe o material nas medidas especificadas.", keyPoints: ["Repita a operação, se necessário."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que devemos deixar sobremetal?",
      "Por que o posicionamento da ferramenta é importante?",
      "Por que devemos primeiramente facear o comprimento do rebaixo?",
      "Como deve ser realizada a medição do material?"
    ]
  },
  {
    id: "v5-4",
    name: "Chanfrar no torno",
    category: Category.Torneamento,
    reference: "4",
    taskNumber: "Tarefa 3",
    time: "20min",
    pieceName: "EIXO ROSCADO",
    volumePage: "5 / 40",
    preparation: "Torno mecânico, pastilha para chanfrar, suporte para chanfrar, chave de aperto para castelo, transferidor, paquímetro.",
    motivation: "Eliminar arestas vivas para segurança e estética, e criar um guia angular para facilitar a montagem de outras peças, como parafusos e rolamentos.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Selecione a ferramenta.", keyPoints: ["Verifique o ângulo da pastilha."] },
      { task: "Prenda o suporte no castelo.", keyPoints: ["Verifique o aperto."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo arvore da máquina está parado."] },
      { task: "Posicione o suporte.", keyPoints: ["Verifique se o suporte se encontra perpendicular a face da peça."] },
      { task: "Inicie o chanfro.", keyPoints: ["Utilize o carro superior ou o carro transversal.", "Utiliza avanço lento e uniforme.", "Utilize fluido de corte adequado."] },
      { task: "Verifique o chanfro.", keyPoints: ["Utilize o paquímetro e o transferidor para medição e corrija, se necessário."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como deve ser selecionada a pastilha do chanfro?",
      "O que devemos observar no posicionamento do suporte?",
      "Quais os carros do torno podemos utilizar?",
      "Como podemos verificar o chanfro?"
    ]
  },
  {
    id: "v5-5",
    name: "Fazer furo de centro no torno",
    category: Category.Torneamento,
    reference: "5",
    taskNumber: "Tarefa 2",
    time: "20min",
    pieceName: "EIXO COM CANAIS",
    volumePage: "5 / 59",
    preparation: "Torno mecânico, mandril, bucha de redução, saca bucha, broca de centro, pincel, chave de aperto para mandril, paquímetro.",
    motivation: "É uma operação utilizada como passo prévio para furações, em peças que serão trabalhadas entre pontas, placa e ponta.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o mandril no mangote.", keyPoints: ["Faça a limpeza do mangote e utilize bucha de redução, se necessário."] },
      { task: "Prenda a broca no mandril.", keyPoints: ["Certifique-se de que a broca esteja bem presa."] },
      { task: "Aproxime a broca da peça.", keyPoints: ["Deixe uma distância da peça de aproximadamente 10 mm."] },
      { task: "Fixe o cabeçote móvel.", keyPoints: ["Verifique o alinhamento do cabeçote móvel."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Faça o furo de centro.", keyPoints: ["Acione o volante do cabeçote móvel com movimento lento e uniforme, fazendo penetrar parte da broca.", "Afaste a broca e faça a limpeza.", "Repita a operação de fazer o furo até atingir a medida correta."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que é necessário limpar o mangote antes de prender o mandril?",
      "Por que devemos verificar o alinhamento do cabeçote móvel?",
      "Como deve ser feito o movimento de penetração da broca?",
      "Como deve ser feita a limpeza da broca?",
      "Quando podemos considerar que a operação está terminada?"
    ]
  },
  {
    id: "v5-6",
    name: "Tornear superficie cilindrica na placa unviersal e contraponta",
    category: Category.Torneamento,
    reference: "6",
    taskNumber: "Tarefa 2",
    time: "20min",
    pieceName: "EIXO COM CANAIS",
    volumePage: "5 / 61",
    preparation: "Torno mecânico, pastilha de torneamento externo, suporte para torneamento externo, contra ponta, chave de aperto do castelo, paquímetro.",
    motivation: "É importante para usinar peças cujo comprimento exceda 3 vezes o seu diâmetro, para recartilhar, para peças sujeitas a grandes esforços de corte e operações especiais.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Introduza a contra ponta no mangote.", keyPoints: ["Faça a limpeza do mangote e utilize bucha de redução, se necessário.", "O mangote deve ficar fora do cabeçote no máximo duas vezes seu diâmetro."] },
      { task: "Fixe o material na placa universal.", keyPoints: ["Aperte suavemente a placa universal.", "Desloque o cabeçote móvel e fixe-o no barramento.", "Gire o volante do cabeçote móvel até a ponta tocar no furo.", "Verifique a concentricidade do furo com o diâmetro externo do material."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Faça dois rebaixos, um em cada extremidade.", keyPoints: ["Utilize a mesma medida no anel graduado para os dois rebaixos. Alinhe o cabeçote móvel, se necessário."] },
      { task: "Torneie na medida.", keyPoints: ["Retire a peça da placa somente depois de terminada para evitar nova fixação."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar ao introduzir a contra ponta no mangote?",
      "Por que devemos fazer dois rebaixos nas extremidades do material?",
      "O que fazer se encontrarmos medidas diferentes nos rebaixos?",
      "Por que retirar a peça da placa somente depois de terminada?"
    ]
  },
  {
    id: "v5-7",
    name: "Tornear canal externo",
    category: Category.Torneamento,
    reference: "7",
    taskNumber: "Tarefa 2",
    time: "20min",
    pieceName: "EIXO COM CANAIS",
    volumePage: "5 / 63",
    preparation: "Torno mecânico, pastilha para canal, suporte para pastilha de canal, chave de aperto para castelo, paquímetro.",
    motivation: "É uma operação aplicada principalmente na confecção de canais. Ex.: polias e eixos roscados e retificados.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material.", keyPoints: ["Fixe o material de modo que o canal a ser feito fique o mais próximo possível da placa para evitar flexão."] },
      { task: "Prenda o suporte.", keyPoints: ["O balanço do suporte deve ser o menor possível e perpendicular ao eixo de simetria da peça.", "A aresta cortante deve estar na altura do centro da contra ponta."] },
      { task: "Marque a largura do canal.", keyPoints: ["Marque os limites com uma ferramenta ou com o próprio suporte para canal."] },
      { task: "Posicione o suporte entre as marcas dos canais.", keyPoints: ["Fixe o carro principal no barramento."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Avance a ferramenta até tocar de leve o material.", keyPoints: ["Zere o anel graduado do carro transversal."] },
      { task: "Desloque a ferramenta próxima à marca limite.", keyPoints: ["Deixe sobremetal para acabamento."] },
      { task: "Faça a penetração da ferramenta no material.", keyPoints: ["Penetre cerca de 2 mm.", "Alterne os lados do canal para diminuir o esforço e evitar o atrito do cavaco com as paredes laterais da peça."] },
      { task: "Termine o canal.", keyPoints: ["Faceie primeiro os flancos e depois torneie o diâmetro na profundidade desejada.", "Repita a operação, se necessário."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que devemos fazer as marcas limite?",
      "O que devemos observar ao prender o suporte?",
      "Por que devemos alternar a penetração da ferramenta?",
      "De quanto é recomendado ser cada penetração da ferramenta?",
      "O que devemos fazer para terminar o canal?"
    ]
  },
  {
    id: "v5-8",
    name: "Furar no torno com cabeçote móvel",
    category: Category.Torneamento,
    reference: "8",
    taskNumber: "Tarefa 3",
    time: "20min",
    pieceName: "EIXO ROSCADO",
    volumePage: "5 / 86",
    preparation: "Torno mecânico, mandril, broca de centro, broca helicoidal, bucha de redução, saca bucha, martelo, chave de aperto do mandril, paquímetro.",
    motivation: "É utilizada, geralmente, para a realização de operações posteriores como, por exemplo, alargamento, torneamento interno etc.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Fixe a broca helicoidal.", keyPoints: ["Verifique o diâmetro da broca.", "Se a broca for de haste cilíndrica, fixe-a no mandril. Se for de haste cônica, fixe-a no cone do mangote."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Fure o material.", keyPoints: ["Utilize fluido refrigerante.", "Retire frequentemente a broca para extrair os cavacos, evitando o engripamento da broca no furo."] },
      { task: "Verifique a profundidade do furo.", keyPoints: ["Afaste o cabeçote móvel, limpe o furo e verifique sua profundidade com a haste do paquímetro."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como deve ser feita a verificação do diâmetro da broca?",
      "Quais as formas de fixação da broca helicoidal?",
      "Como é realizada a verificação da profundidade do furo?",
      "Por que a broca deve ser retirada com frequência?"
    ]
  },
  {
    id: "v5-9",
    name: "Escarear no torno",
    category: Category.Torneamento,
    reference: "9",
    taskNumber: "Tarefa 3",
    time: "20min",
    pieceName: "EIXO ROSCADO",
    volumePage: "5 / 88",
    preparation: "Torno mecânico, mandril, bucha de redução, saca bucha, martelo, escareador, paquímetro.",
    motivation: "É uma operação que tem por finalidade tornar cônica a extremidade de um furo para permitir alojamento de parafusos ou outros elementos de união cujas cabeças têm formato cônico.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Selecione o escareador.", keyPoints: ["Verifique se o ângulo do escareador é compatível com a cabeça do parafuso do rebite ou da contraponta."] },
      { task: "Prenda o escareador no mandril.", keyPoints: ["Verifique o aperto."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo arvore da máquina está parado."] },
      { task: "Posicione o escareador.", keyPoints: ["Verifique se o escareador encontra-se alinhado ao furo."] },
      { task: "Inicie o escareado.", keyPoints: ["Utiliza avanço lento e uniforme.", "Utilize fluido de corte adequado."] },
      { task: "Verifique o escareado.", keyPoints: ["Utilize o paquímetro para medição e corrija, se necessário."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como deve ser selecionado o escareador?",
      "O que devemos observar no posicionamento do escareador?",
      "Como devemos iniciar o escareado?",
      "Como podemos verificar o escareado?"
    ]
  },
  {
    id: "v5-10",
    name: "Roscar com cossinete no torno",
    category: Category.Torneamento,
    reference: "10",
    taskNumber: "Tarefa 3",
    time: "20min",
    pieceName: "EIXO ROSCADO",
    volumePage: "5 / 89",
    preparation: "Torno mecânico, cossinete, porta cossinete, chave de aperto do porta cossinete, paquímetro, porca calibradora, óleo de corte.",
    motivation: "Esta operação tem a finalidade de obter uma superfície cilíndrica roscada com um cossinete apoiado num mangote. Exemplo: parafusos.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Monte o cossinete no porta-cossinete.", keyPoints: ["Encaixe o cossinete na base no porta-cossinete, apertando os parafusos para fixá-lo."] },
      { task: "Aproxime o cabeçote móvel do material.", keyPoints: ["Faça com que o porta-cossinete fique aproximadamente a 10 mm da face do material.", "Deixe o cabeçote móvel livre."] },
      { task: "Posicione as alavancas de rotação na posição neutra.", keyPoints: ["O eixo árvore deve girar livremente."] },
      { task: "Faça a rosca.", keyPoints: ["O material deve estar chanfrado.", "Apoie a haste do porta-cossinete no castelo para evitar movimento de giro.", "Gire a placa um quarto de volta no sentido horário para quebrar o cavaco."] },
      { task: "Verifique a rosca.", keyPoints: ["Faça a verificação com a porca calibradora."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Para que serve o chanfro?",
      "O que devemos observar na montagem do cossinete?",
      "Como é feita a quebra do cavaco?",
      "Como fazer a verificação da rosca?"
    ]
  },
  {
    id: "v5-11",
    name: "Tornear superfície cônica com carro superior",
    category: Category.Torneamento,
    reference: "11",
    taskNumber: "Tarefa 3",
    time: "20min",
    pieceName: "EIXO ROSCADO",
    volumePage: "5 / 91",
    preparation: "Torno mecânico, pastilha para torneamento externo, suporte para torneamento externo, chave de aperto do castelo, chave fixa, transferidor de graus ou goniômetro, paquímetro.",
    motivation: "Esta operação é aplicada na confecção de pontas de tornos, buchas de redução, sede de válvulas e pinos cônicos.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Incline o carro superior do torno.", keyPoints: ["Solte os parafusos da base, gire o carro superior no ângulo desejado e aperte os parafusos."] },
      { task: "Fixe o suporte.", keyPoints: ["Deixe-a perpendicular à geratriz do cone e na altura do centro da contra ponta.", "Observe que a ferramenta deverá ultrapassar o comprimento do cone aproximadamente 5 mm."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Inicie o torneamento pelo diâmetro menor até o diâmetro maior.", keyPoints: ["Observe o posicionamento do carro superior e do carro principal.", "Gire a manivela do carro superior com passes finos e movimento lento e constante."] },
      { task: "Verifique o ângulo do cone.", keyPoints: ["Utilize transferidor de graus ou goniômetro e corrija se necessário.", "Repita os passos da operação, sempre que necessário."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Qual deve ser o procedimento para a inclinação do carro superior?",
      "Como deve ser o posicionamento da ferramenta?",
      "Como deve ser realizado o avanço da ferramenta?",
      "Com quais possíveis instrumentos, fazemos a verificação do ângulo do cone?"
    ]
  },
  {
    id: "v5-12",
    name: "Roscar manualmente com macho no torno",
    category: Category.Torneamento,
    reference: "12",
    taskNumber: "Tarefa 4",
    time: "20min",
    pieceName: "MANÍPULO",
    volumePage: "5 / 115",
    preparation: "Torno Mecânico, macho, desandador para macho, mandril, bucha de redução, cunha, contraponta, chave de aperto do mandril, fluido de corte, parafuso calibrador, paquímetro.",
    motivation: "Esta operação tem como finalidade obter roscas internas com macho em peças furadas. Exemplo: porcas, pontas de eixo etc.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o macho número 1 (macho de pré-corte) no mandril.", keyPoints: ["Certifique-se de que o macho esteja bem preso."] },
      { task: "Posicione as alavancas de rotação na posição neutra.", keyPoints: ["Observe para que o eixo árvore gire livremente."] },
      { task: "Posicione o cabeçote móvel.", keyPoints: ["Faça com que o macho fique aproximadamente a 10 mm da face do material.", "Deixe o cabeçote móvel livre."] },
      { task: "Inicie a rosca.", keyPoints: ["Observe para que a parte cônica do macho penetre no furo.", "Gire a placa com a mão e, simultaneamente, pressione o macho, girando o volante do cabeçote móvel no sentido oposto ao da placa, até que penetre uns 4 filetes."] },
      { task: "Solte o macho do mandril.", keyPoints: ["Deixe o macho na peça."] },
      { task: "Afaste o cabeçote móvel.", keyPoints: ["Deixe o cabeçote o mais afastado possível."] },
      { task: "Coloque o desandador no macho.", keyPoints: ["Observe para que o comprimento do desandador seja compatível com o diâmetro do macho."] },
      { task: "Posicione as alavancas de rotação na menor rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Termine de passar o macho número 1.", keyPoints: ["Gire o desandador, fazendo penetrar o macho.", "Gire a placa um quarto de volta no sentido horário para quebrar o cavaco.", "Utilize o fluido de corte."] },
      { task: "Termine a rosca.", keyPoints: ["Introduza os machos manualmente, fazendo coincidir com os filetes abertos anteriormente.", "Passe o macho número 2 (macho de corte) e número 3 (macho de acabamento)."] },
      { task: "Verifique a rosca.", keyPoints: ["Utilize parafuso calibrador."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como devemos iniciar a rosca?",
      "Como devemos quebrar o cavaco?",
      "O que devemos observar ao colocar o desandador no macho?",
      "Como é realizado o término da rosca?",
      "Como é feita a verificação da rosca?"
    ]
  },
  {
    id: "v5-13",
    name: "Recartilhar",
    category: Category.Torneamento,
    reference: "13",
    taskNumber: "Tarefa 4",
    time: "20min",
    pieceName: "MANÍPULO",
    volumePage: "5 / 113",
    preparation: "Torno mecânico, recartilha, calço, chave de aperto do porta ferramentas, ferramenta para chanfrar (45º), escova de aço, paquímetro.",
    motivation: "É uma operação executada no torno para produzir sulcos paralelos ou cruzados sob compressão dos dentes da recartilha. É feita para evitar que as mãos deslizem durante a manipulação de uma peça.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Fixe a porta recartilha no castelo.", keyPoints: ["A altura da recartilha deve ficar na altura do eixo geométrico da peça.", "O alinhamento da recartilha deve ficar perpendicular à superfície a ser recartilhada."] },
      { task: "Posicione as alavancas de rotação e avanço.", keyPoints: ["O avanço deve ser 1/5 do passo das estrias da recartilha.", "O eixo árvore do torno deve estar parado."] },
      { task: "Avance a recartilha até marcar o material.", keyPoints: ["A roldana deverá tocar no máximo sua metade na peça.", "Desligue o torno e examine a parte recartilhada."] },
      { task: "Recartilhe toda a superfície desejada.", keyPoints: ["Observe o diâmetro compatível com la recartilha a ser utilizada.", "Ligue o torno e engate o movimento automático."] },
      { task: "Mude a posição da alavanca inversora.", keyPoints: ["O eixo árvore do torno deve estar parado.", "Mantenha o contato da porta recartilha com a peça."] },
      { task: "Ligue o torno e aprofunde a recartilha.", keyPoints: ["Retorne com movimento automático à posição inicial.", "Dê quantos passes for necessário até concluir o recartilhado."] },
      { task: "Limpe o recartilhado.", keyPoints: ["Utilize escova de aço, movimentando-a no sentido das estrias."] },
      { task: "Chanfre os cantos do material.", keyPoints: ["Eliminar rebarbas."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que o diâmetro a ser recartilhado deve ser menor do que a dimensão final da peça?",
      "O que devemos observar na montagem da recartilha?",
      "Por que devemos inverter a posição da alavanca?",
      "Qual deve ser o avanço para recartilhar?",
      "Como devemos fazer a limpeza do recartilhado?"
    ]
  },
  {
    id: "v5-14",
    name: "Cortar no torno",
    category: Category.Torneamento,
    reference: "14",
    taskNumber: "Tarefa 4",
    time: "20min",
    pieceName: "MANÍPULO",
    volumePage: "5 / 117",
    preparation: "Torno Mecânico, bedame, pastilha para suporte, suporte de corte, chave de aperto para castelo, paquímetro.",
    motivation: "Ao cortar no torno, pode-se deixar sobremetal no comprimento ou a peça sai pronta da usinagem, permitindo maior agilidade do processo. Permite ainda garantir a perpendicularidade em relação a linha de centro da peça.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Marque o comprimento a ser cortado.", keyPoints: ["Fixe o material de modo que o corte a ser feito fique o mais próximo possível da placa.", "Marque o limite com uma ferramenta ou com o próprio bedame."] },
      { task: "Prenda o suporte de corte.", keyPoints: ["O balanço do suporte deve ser o menor possível e perpendicular ao eixo de simetria da peça."] },
      { task: "Posicione o suporte de corte.", keyPoints: ["Observe para que a ferramenta fique aproximadamente 2 mm após a posição do corte."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Encoste a ferramenta no material para referenciar.", keyPoints: ["Zere o anel graduado do carro transversal"] },
      { task: "Faça a penetração da ferramenta no material.", keyPoints: ["Penetre o bedame cerca de 2 mm. Alterne os lados do corte para diminuir o esforço e evitar o atrito do cavaco com as paredes laterais da peça."] },
      { task: "Corte a peça.", keyPoints: ["Observe a afiação do bedame evitando rebarbas na peça."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que devemos fazer a marca limite?",
      "O que devemos observar ao prender o bedame?",
      "Por que devemos alternar a penetração do bedame?",
      "De quanto deve ser a penetração do bedame?"
    ]
  },
  {
    id: "v5-15",
    name: "Tornear superfície cilíndrica entre pontas",
    category: Category.Torneamento,
    reference: "15",
    taskNumber: "Tarefa 5",
    time: "20min",
    pieceName: "EIXO CALIBRADO",
    volumePage: "5 / 145",
    preparation: "Torno mecânico, placa arrastadora, arrastador, ponta, contra ponta, paquímetro, micrômetro externo, base magnética, relógio comparador, chave Allen, pastilha para torneamento externo, suporte para torneamento externo.",
    motivation: "Esta operação é executada em peças que devem conservar os centros para fácil centragem posterior, com a finalidade de manter a coaxilidade entre os diâmetros usinados.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Monte a placa de arraste, a ponta e a contra ponta no torno.", keyPoints: ["Limpe as roscas e os cones do eixo-árvore e do mangote."] },
      { task: "Verifique a centragem e o alinhamento das pontas.", keyPoints: ["Corrija se necessário."] },
      { task: "Afaste o cabeçote móvel e fixe-o na posição adequada.", keyPoints: ["Deixe o mangote para fora do cabeçote no máximo duas vezes seu diâmetro."] },
      { task: "Coloque o arrastador na peça, sem fixá-lo.", keyPoints: ["Utilize o arrastador adequado ao diâmetro da peça."] },
      { task: "Ajuste o material entre as pontas e fixe o mangote", keyPoints: ["Lubrifique os furos de centro com graxa no caso de contra ponta fixa.", "A peça deve girar livremente, sem folga entre as pontas."] },
      { task: "Posicione e fixe o arrastador.", keyPoints: ["Em caso de superfícies já usinadas e acabadas, use proteção entre o arrastador e a peça."] },
      { task: "Monte a ferramenta e torneie a peça.", keyPoints: ["Verifique o alinhamento com o paquímetro ou micrômetro e corrija, se necessário, deslocando o parafuso de alinhamento do cabeçote móvel"] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Quais instrumentos utilizamos para verificar o alinhamento?",
      "Caso a ponta e a contra ponta estejam desalinhadas, como devemos proceder?",
      "Quando devemos lubrificar os centros com graxa?",
      "Quanto devemos deixar o mangote para fora do cabeçote?"
    ]
  },
  {
    id: "v5-16",
    name: "Alargar furo no torno",
    category: Category.Torneamento,
    reference: "16",
    taskNumber: "Tarefa 5",
    time: "20min",
    pieceName: "EIXO CALIBRADO",
    volumePage: "5 / 147",
    preparation: "Torno mecânico, mandril flutuante, alargador, fluido de corte, paquímetro.",
    motivation: "É uma operação utilizada para a obtenção de uma dimensão precisa e de uma baixa rugosidade.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Fure a peça.", keyPoints: ["Deixe sobremetal no furo, considerando o material da peça, o diâmetro do furo e o tipo de alargador."] },
      { task: "Monte o alargador.", keyPoints: ["O alargador deve ser montado num mandril flutuante que, por sua vez, é fixado no mangote do cabeçote móvel."] },
      { task: "Aproxime o cabeçote móvel do material e fixe-o.", keyPoints: ["O alargador deve estar alinhado com o furo.", "O mangote deve estar o máximo possível para dentro do cabeçote móvel."] },
      { task: "Selecione a rotação.", keyPoints: ["Selecione a rotação para a operação de alargar de acordo com a tabela de velocidade de corte."] },
      { task: "Ligue o torno e passe o alargador.", keyPoints: ["Utilize o fluido de corte adequado para obter bom acabamento."] },
      { task: "Finalize a operação e retire o alargador.", keyPoints: ["O alargador deve ser retirado com o material girando no mesmo sentido da penetração.", "O alargador deve ser limpo com um pincel."] },
      { task: "Verifique a medida.", keyPoints: ["Verifique a medida com um calibrador tampão ou um micrômetro interno."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como deve ser feito o alinhamento do alargador?",
      "Qual a importância do fluido de corte nesta operação?",
      "Em que sentido o material deve girar para a retirada do alargador?",
      "Quais instrumentos são usados para a verificação final?"
    ]
  },
  {
    id: "v5-17",
    name: "Tornear rosca triangular externa",
    category: Category.Torneamento,
    reference: "17",
    taskNumber: "Tarefa 5",
    time: "20min",
    pieceName: "EIXO CALIBRADO",
    volumePage: "5 / 149",
    preparation: "Torno mecânico, paquímetro, ferramenta de rosca, calibrador, escantilhão e pente de rosca, fluido de corte.",
    motivation: "É uma operação muito empregada na união de peças por meio de roscamento. Ex: Parafusos, eixos, virabrequins automotivos.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Verifique a inclinação do castelo.", keyPoints: ["A posição deve estar 90° em relação a face da peça."] },
      { task: "Fixe o suporte no castelo.", keyPoints: ["Alinhe a ferramenta com auxílio do escantilhão."] },
      { task: "Selecione o passo da rosca e a rotação.", keyPoints: ["Utilize a caixa de avanços. Se o torno não tiver, monte o jogo de engrenagens.", "O eixo árvore deve estar parado."] },
      { task: "Ligue o torno e referencie a ferramenta.", keyPoints: ["Desloque manualmente a ferramenta para fora do material e zere o anel graduado."] },
      { task: "Dê o primeiro passe.", keyPoints: ["Avance a ferramenta, dando uma profundidade de corte de corte mínima."] },
      { task: "Engate o carro principal.", keyPoints: ["Ligue o torno e deixe a ferramenta deslocar-se num comprimento de aproximadamente 10 filetes, afaste a ferramenta e desligue o torno."] },
      { task: "Verifique o passo.", keyPoints: ["Utilize o pente de rosca.", "Corrija o passo, se necessário."] },
      { task: "Desbaste a rosca.", keyPoints: ["Afaste a ferramenta do diâmetro da peça.", "Retorne a ferramenta ao ponto inicial de corte, dando reversão no torno ou utilizando o freio.", "Aplique folga lateral na ferramenta.", "Utilize óleo de corte."] },
      { task: "Dê a profundidade de corte recomendada.", keyPoints: ["Faça o controle por meio do anel graduado."] },
      { task: "Dê acabamento na rosca.", keyPoints: ["Repita o último passe até obter o acabamento especificado.", "Utilize óleo de corte."] },
      { task: "Calibre a rosca.", keyPoints: ["Verifique a rosca com calibrador.", "Se necessário, repasse a rosca dando o mínimo possível de profundidade de corte até conseguir o ajuste."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como se mede o passo de uma rosca?",
      "O que utilizamos para verificar o posicionamento da ferramenta?",
      "O que utilizamos para calibrar a rosca?",
      "Como damos acabamento na rosca?",
      "Como determinamos o avanço do torno?"
    ]
  },
  {
    id: "v5-18",
    name: "Tornear superfície cilíndrica interna passante",
    category: Category.Torneamento,
    reference: "18",
    taskNumber: "Tarefa 6",
    time: "20min",
    pieceName: "LUVA COM DOIS CORPOS INTERNOS",
    volumePage: "5 / 173",
    preparation: "Torno Mecânico, calços, calço em V, chave de aperto do castelo, ferramenta de torneamento interno, paquímetro.",
    motivation: "Também conhecida com o nome de broquear, é usada para obter furos cilíndricos com baixa rugosidade e dimensões exatas. Exemplo: buchas, polias, engrenagens etc.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda a ferramenta de torneamento interno.", keyPoints: ["O comprimento útil da ferramenta deve ser suficiente para tornear toda a peça.", "O corpo da ferramenta deve ser o mais rígido possível.", "A ferramenta deve estar na altura e paralela ao eixo geométrico da peça."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore do torno está parado."] },
      { task: "Faça um rebaixo no furo.", keyPoints: ["Zere o anel graduado.", "Este rebaixo deve servir de base para a medição."] },
      { task: "Torneie o diâmetro do material.", keyPoints: ["Dê quantos passes forem necessários"] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que o corpo da ferramenta deve ser o mais rígido possível?",
      "O que devemos observar em relação ao comprimento útil da ferramenta?",
      "Por que a ferramenta deve estar na altura e paralela ao eixo geométrico da peça?",
      "Para que serve o rebaixo no furo?"
    ]
  },
  {
    id: "v5-19",
    name: "Facear rebaixo interno",
    category: Category.Torneamento,
    reference: "19",
    taskNumber: "Tarefa 6",
    time: "20min",
    pieceName: "LUVA COM DOIS CORPOS INTERNOS",
    volumePage: "5 / 175",
    preparation: "Torno Mecânico, calços, calço em V, chave de aperto do castelo, ferramenta de torneamento interno, paquímetro.",
    motivation: "Esta operação é realizada para usinar, por exemplo, alojamentos de rolamentos ou buchas.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda a ferramenta de facear interno.", keyPoints: ["Deixe a ferramenta para fora dos calços somente o necessário para evitar vibrações."] },
      { task: "Aproxime a ferramenta do material e fixe o carro principal.", keyPoints: ["Certifique-se de que a base do carro superior não colida com a placa."] },
      { task: "Regule os parâmetros de corte.", keyPoints: ["Selecione RPM e avanço pré-estabelecidos tecnicamente, conforme parâmetros de corte."] },
      { task: "Encoste a ferramenta na face do material.", keyPoints: ["Utilize referências no anel graduado e avance aproximadamente 0,5 mm."] },
      { task: "Desloque a ferramenta até que a medida do rebaixo se aproxime da medida do diâmetro.", keyPoints: ["Deixe sobremetal para acabamento, numa medida entre 0,5 e 1 mm."] },
      { task: "Termine o rebaixo.", keyPoints: ["Torneie primeiro o diâmetro e, em seguida, faceie na profundidade requerida."] },
      { task: "Faça a verificação com auxílio do paquímetro.", keyPoints: ["Antes de medir, retire as rebarbas."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Quanto deve se deixar de material para acabamento?",
      "Para finalizar o rebaixo, o que deve ser torneado primeiro?",
      "Por que deixar a ferramenta para fora dos calços somente o necessário?",
      "Por que devemos fixar o carro principal?"
    ]
  },
  {
    id: "v5-20",
    name: "Tornear rosca triangular interna",
    category: Category.Torneamento,
    reference: "20",
    taskNumber: "Tarefa 6",
    time: "20min",
    pieceName: "LUVA COM DOIS CORPOS INTERNOS",
    volumePage: "5 / 177",
    preparation: "Torno mecânico, chave de aperto para castelo, paquímetro, ferramenta de fazer rosca interna, escantilhão, pente de rosca, calibrador, fluido de corte.",
    motivation: "É uma operação muito empregada na união de peças por meio de roscamento. Ex: Luvas, buchas, porcas de fixação.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Posicione a ferramenta de roscar.", keyPoints: ["O posicionamento da ferramenta deve ser realizado com o auxílio de um escantilhão.", "Verifique se o corpo da ferramenta passa com folga no furo da peça e chega até o canal de saída."] },
      { task: "Prepare o torno.", keyPoints: ["Posicione as alavancas. Em alguns tornos é necessário a troca de engrenagens, consulte a tabela na caixa de avanço.", "O eixo árvore deve estar parado."] },
      { task: "Limite o comprimento da ferramenta de acordo com o comprimento da rosca.", keyPoints: ["Caso o furo seja passante, não será necessário limitar a ferramenta."] },
      { task: "Ligue o torno e encoste a ferramenta no diâmetro interno.", keyPoints: ["Ajuste a rotação.", "Zere o anel graduado do carro transversal."] },
      { task: "Desloque manualmente a ferramenta para fora do furo.", keyPoints: ["Dê uma profundidade de corte minima."] },
      { task: "Engate o carro principal e inicie a rosca.", keyPoints: ["Ao chegar ao comprimento da rosca, recue a ferramenta e inverta o sentido de rotação do torno."] },
      { task: "Desbaste a rosca.", keyPoints: ["Aplique folga lateral na ferramenta.", "Utilize óleo de corte."] },
      { task: "Dê a profundidade de corte recomendada.", keyPoints: ["Faça o controle por meio do anel graduado."] },
      { task: "Termine a rosca.", keyPoints: ["Verifique a rosca com um parafuso ou calibrador tampão de rosca.", "Se necessário, repasse a rosca dando o mínimo possível de profundidade de corte até conseguir o ajuste."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Que instrumento utilizamos para verificar o passo da rosca?",
      "O que utilizamos para verificar o posicionamento da ferramenta?",
      "Como controlamos a profundidade de corte?",
      "O que utilizamos para calibrar a rosca?",
      "Como determinamos o avanço do torno?"
    ]
  },

  // --- VOLUME 6 (21-36) ---
  {
    id: "v6-21",
    name: "Fresar superfície plana",
    category: Category.Fresamento,
    reference: "21",
    taskNumber: "Tarefa 7",
    time: "20min",
    pieceName: "BLOCO FRESADO",
    volumePage: "6 / 40",
    preparation: "Fresadora, paquímetro, esquadro de precisão, calços paralelos, cabeçote faceador, lima murça, relógio comparador.",
    motivation: "Esta operação consiste na forma mais rápida e simples de se fresar uma superfície plana, é uma etapa muito importante para o fresador, pois é um passo prévio para fresagem de perpendicularidade. Ex. base da morsa.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material na morsa.", keyPoints: ["Verifique a limpeza da morsa.", "Verifique se o material não possui rebarbas.", "Utilize os calços adequados à altura do mordente.", "Golpeie levemente sobre o material com um macete para assentá-lo sobre os calços."] },
      { task: "Monte o cabeçote faceador.", keyPoints: ["Verifique a limpeza dos cones do eixo árvore e do cabeçote faceador."] },
      { task: "Posicione as alavancas de rotação e avanço.", keyPoints: ["Verifique se o eixo árvore da fresadora está parado."] },
      { task: "Referencie a ferramenta no material.", keyPoints: ["Zere o anel graduado."] },
      { task: "Afaste o material, dê a profundidade de corte e realize o passe para obter superfície plana.", keyPoints: ["Dê quantos passes forem necessários para obter a dimensão e a rugosidade desejadas."] },
      { task: "Retire o material da morsa e elimine suas rebarbas.", keyPoints: ["Utilize lima chata mursa."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar para prender o material na morsa?",
      "O que devemos observar na montagem do cabeçote faceador?",
      "Qual ferramenta utilizamos para eliminar rebarbas do material?",
      "Por que o eixo árvore deve estar parado ao se posicionar as alavancas de rotação?"
    ]
  },
  {
    id: "v6-22",
    name: "Fresar superfície plana paralela",
    category: Category.Fresamento,
    reference: "22",
    taskNumber: "Tarefa 7",
    time: "20min",
    pieceName: "BLOCO FRESADO",
    volumePage: "6 / 42",
    preparation: "Fresadora, paquímetro, calços paralelos, cabeçote faceador, lima chata murça, base magnética, régua de fio, relógio comparador, padrão para verificação de rugosidade.",
    motivation: "É uma etapa muito importante para o fresador, pois é nela que realizamos a usinagem de peças com superfícies de referência como guias e barramentos de máquinas. Ex.: mordente da morsa.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material na morsa.", keyPoints: ["Apoie as superfícies de referência na base da morsa e na mandíbula fixa.", "Se necessário, use calço a fim de regular a altura do material em relação ao mordente da morsa."] },
      { task: "Fixe o cabeçote faceador na fresadora.", keyPoints: ["Verifique a limpeza dos cones do eixo árvore e do cabeçote faceador.", "Atentar-se ao curso da rosca do fuso fixador do cabeçote faceador."] },
      { task: "Posicione as alavancas de rotação e avanço.", keyPoints: ["Verifique se o eixo árvore da fresadora está parado."] },
      { task: "Referencie a ferramenta no material.", keyPoints: ["Zere o anel graduado."] },
      { task: "Afaste o material, dê a profundidade de corte e ligue o avanço automático.", keyPoints: ["Dê quantos passes forem necessários para obter a dimensão e a rugosidade desejadas."] },
      { task: "Verifique o paralelismo.", keyPoints: ["Desligue a máquina e verifique o paralelismo com o relógio comparador.", "Corrija, se necessário."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar para prender o material na morsa?",
      "O que devemos observar na montagem do cabeçote faceador?",
      "Como verificamos o paralelismo da peça?",
      "Como é feita a correção do paralelismo da peça?"
    ]
  },
  {
    id: "v6-23",
    name: "Limar superfícies",
    category: Category.Ajustagem,
    reference: "23",
    taskNumber: "Tarefa 7",
    time: "20min",
    pieceName: "BLOCO FRESADO",
    volumePage: "6 / 44",
    preparation: "Paquímetro, morsa, esquadro de precisão, lima bastarda, lima murça, régua de controle de fio, dispositivos para verificação de tolerância geométrica, pasta de ajuste, mordente de proteção, padrão para verificação de rugosidade.",
    motivation: "Essa operação é aplicada em peças prismáticas e em ajustes de peças de máquinas em geral. Ex.: Chavetas, encaixes, ajuste em matrizes, réguas, guias etc.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material na morsa.", keyPoints: ["Observe para que o material fique na posição horizontal e acima do mordente da morsa."] },
      { task: "Lime uma das bordas do material.", keyPoints: ["Elimine as rebarbas.", "Mantenha a planeza da borda.", "Mantenha a perpendicularidade da borda em relação às faces."] },
      { task: "Vire o material e lime a borda oposta.", keyPoints: ["Elimine as rebarbas.", "Verifique o paralelismo entre as bordas.", "Repita a operação até obter a dimensão e a rugosidade desejadas."] },
      { task: "Vire o material, fixando-o com um dos topos para cima.", keyPoints: ["O material deverá ficar na posição horizontal e acima do mordente da morsa."] },
      { task: "Lime o topo de referência.", keyPoints: ["Mantenha a perpendicularidade em relação às faces e à borda."] },
      { task: "Vire o material e lime o topo oposto.", keyPoints: ["Mantenha o paralelismo dos topos e a perpendicularidade em relação às faces e às bordas.", "Repita a operação até obter a dimensão e a rugosidade desejadas."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar ao prender o material na morsa?",
      "Como devemos verificar a planeza da borda limada?",
      "Como devemos fazer a verificação do paralelismo?",
      "Como devemos fazer a verificação da perpendicularidade?"
    ]
  },
  {
    id: "v6-24",
    name: "Traçar retas com calibrador traçador de altura",
    category: Category.Ajustagem,
    reference: "24",
    taskNumber: "Tarefa 8",
    time: "20min",
    pieceName: "BLOCO REBAIXADO",
    volumePage: "6 / 70",
    preparation: "Calibrador traçador de alturas, desempeno, prisma, tinta de traçagem.",
    motivation: "Esta operação tem a finalidade de traçar retas paralelas a um plano de referência. É importante para determinar o centro das peças, traçagem de ranhuras, rebaixos e localização de furos.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Pinte a face que será traçada.", keyPoints: ["A face deve estar limpa e livre de oleosidade."] },
      { task: "Posicione o material sobre o desempeno.", keyPoints: ["Utilize cantoneiras, prismas ou calços."] },
      { task: "Prepare o calibrador traçador de altura.", keyPoints: ["Verifique se o calibrador está zerado."] },
      { task: "Determine a dimensão a ser traçada.", keyPoints: ["Desloque o calibrador até a medida desejada."] },
      { task: "Execute o traçado.", keyPoints: ["Encoste a ponta do traçador no material e o desloque lateralmente em um único sentido."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar antes de pintar a face do material a ser traçado?",
      "Como é posicionado o material sobre o desempeno?",
      "Como é feita a preparação do calibrador traçador de altura?",
      "Como determinamos a dimensão a ser traçada?",
      "Como deve ser feito o traçado?"
    ]
  },
  {
    id: "v6-25",
    name: "Fresar superfície perpendicular",
    category: Category.Fresamento,
    reference: "25",
    taskNumber: "Tarefa 8",
    time: "20min",
    pieceName: "BLOCO REBAIXADO",
    volumePage: "6 / 72",
    preparation: "Fresadora, paquímetro, esquadro de precisão, calços paralelos, cabeçote faceador, lima murça, relógio comparador.",
    motivation: "Esta operação é de extrema importância para o fresador, pois é um passo prévio para as demais operações a serem realizadas nas peças. Ex. mordentes das morsas.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda a face de referência na mandíbula fixa.", keyPoints: ["Dê um aperto suave."] },
      { task: "Corrija a perpendicularidade.", keyPoints: ["Utilize o esquadro de precisão em uma base de referência. (base da morsa ou superfície da mesa)."] },
      { task: "Aperte a peça firmemente.", keyPoints: ["Utilize somente a chave (manivela) da morsa."] },
      { task: "Monte o cabeçote faceador.", keyPoints: ["Verifique a limpeza dos cones do eixo árvore e do cabeçote faceador."] },
      { task: "Posicione as alavancas de rotação e avanço.", keyPoints: ["Verifique se o eixo árvore da fresadora está parado."] },
      { task: "Referencie a ferramenta no material.", keyPoints: ["Zere o anel graduado."] },
      { task: "Afaste o material, dê a profundidade de corte e realize o passe para obter superfície plana.", keyPoints: ["Dê quantos passes forem necessários para obter a dimensão e a rugosidade desejadas."] },
      { task: "Retire o material da morsa e elimine suas rebarbas.", keyPoints: ["Utilize lima murça."] },
      { task: "Verifique a perpendicularidade.", keyPoints: ["Utilize o esquadro de precisão ou dispositivo próprio. A verificação da perpendicularidade deve ser baseada nas duas bases de referência."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como verificamos a perpendicularidade?",
      "O que devemos observar na montagem do cabeçote faceador?",
      "Qual ferramenta utilizamos para eliminar rebarbas do material?",
      "Como deve ser fixado o material para se realizar o fresamento da superfície perpendicular?"
    ]
  },
  {
    id: "v6-26",
    name: "Fresar rebaixos",
    category: Category.Fresamento,
    reference: "26",
    taskNumber: "Tarefa 8",
    time: "20min",
    pieceName: "BLOCO REBAIXADO",
    volumePage: "6 / 74",
    preparation: "Fresadora, paquímetro, relógio comparador, fresa de topo, esquadro de precisão, cabeçote faceador, calços paralelos, lima murça.",
    motivation: "Esta operação é aplicada na construção de peças como: matrizes, chapas de fixação e calços escalonados.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Fixe o material na morsa.", keyPoints: ["A morsa deve estar alinhada."] },
      { task: "Monte a ferramenta.", keyPoints: ["Selecione a ferramenta de acordo com o tipo de rebaixo."] },
      { task: "Posicione as alavancas de rotação e avanço.", keyPoints: ["Verifique se o eixo árvore da fresadora está parado."] },
      { task: "Referencie a ferramenta na superfície horizontal do material.", keyPoints: ["Zere o anel graduado."] },
      { task: "Determine a largura do rebaixo.", keyPoints: ["Deixe 0,5 mm de sobremetal na parede do rebaixo."] },
      { task: "Referencie a ferramenta no eixo vertical.", keyPoints: ["Zere o anel graduado do eixo vertical."] },
      { task: "Afaste o material e efetue a profundidade de corte.", keyPoints: ["Deixe 0,5 mm de sobremetal no fundo do rebaixo.", "Caso a profundidade seja superior à que a máquina pode suportar, dê tantos passes quantos forem necessários."] },
      { task: "Inicie o corte.", keyPoints: ["Utilize avanço manual e depois avanço automático.", "Se necessário utilize fluído de corte."] },
      { task: "Verifique as dimensões do rebaixo.", keyPoints: ["Desligue a máquina.", "Utilize paquímetro."] },
      { task: "Termine o rebaixo.", keyPoints: ["Movimente a mesa com auxílio do anel graduado, observando as dimensões finais."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que a morsa deve estar alinhada?",
      "O que devemos observar ao montar a ferramenta?",
      "Como é feito o referenciamento da ferramenta?",
      "O que devemos observar ao efetuar a profundidade de corte?",
      "Como é feita a verificação das dimensões do rebaixo?"
    ]
  },
  {
    id: "v6-27",
    name: "Fresar rasgos",
    category: Category.Fresamento,
    reference: "27",
    taskNumber: "Tarefa 8",
    time: "20min",
    pieceName: "BLOCO REBAIXADO",
    volumePage: "6 / 76",
    preparation: "Fresadora, fresa de topo, paquímetro, calços paralelos, relógio comparador.",
    motivation: "Esta operação é executada para obtenção de canais com profundidade e largura variáveis. É aplicada na construção de mesas de máquinas, alojamentos, rasgos de chaveta e encaixes para dispositivos.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Fixe o material.", keyPoints: ["A morsa deve estar alinhada.", "Dependendo do tamanho e formato da peça, fixe-a na morsa ou direto na mesa da máquina"] },
      { task: "Selecione a fresa.", keyPoints: ["Observe o tipo e as dimensões do rasgo a ser realizado."] },
      { task: "Posicione as alavancas de rotação e avanço.", keyPoints: ["Verifique se o eixo árvore da máquina está parado."] },
      { task: "Posicione a ferramenta.", keyPoints: ["Considere a localização do rasgo para referenciar os anéis graduados."] },
      { task: "Inicie o rasgo.", keyPoints: ["Deixe sobremetal nas dimensões do rasgo.", "Inicie o rasgo com avanço manual e, em seguida, ligue o avanço automático.", "Utilize fluido de corte adequado."] },
      { task: "Faça a verificação das dimensões.", keyPoints: ["Desligue a máquina.", "Utilize paquímetro."] },
      { task: "Faça os ajustes na profundidade do rasgo.", keyPoints: ["Utilize o anel graduado para terminar as dimensões da profundidade."] },
      { task: "Desloque lateralmente a ferramenta.", keyPoints: ["Com o auxílio do anel graduado obtenha a medida da parede de referência do rasgo.", "Verifique a medida com paquímetro."] },
      { task: "Desloque a ferramenta para o lado oposto e termine o rasgo.", keyPoints: ["Com o auxílio do anel graduado obtenha a medida da largura final do rasgo."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como podemos fixar o material?",
      "O que devemos observar na escolha da ferramenta?",
      "O que devemos considerar no posicionamento da ferramenta?",
      "Como devemos iniciar o rasgo?",
      "Como podemos obter as dimensões finais do rasgo?"
    ]
  },
  {
    id: "v6-28",
    name: "Puncionar",
    category: Category.Ajustagem,
    reference: "28",
    taskNumber: "Tarefa 9",
    time: "20min",
    pieceName: "CASTANHA MOLE",
    volumePage: "6 / 113",
    preparation: "Martelo, punção de bico, cepo, lupa.",
    motivation: "Esta operação tem a finalidade de marcar pontos de referência no traçado ou centros para a furação de peças. É importante porque precede a execução de outras operações.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Apoie a peça sobre o cepo.", keyPoints: ["Verifique se a peça está bem assentada sobre o cepo."] },
      { task: "Posicione o punção.", keyPoints: ["Observe o ângulo de ponta (60º).", "Desloque o punção na posição inclinada sobre os traços até encontrar os cruzamentos das linhas."] },
      { task: "Bata o martelo no punção.", keyPoints: ["Posicione o punção verticalmente.", "A marca do punção deve gerar um diâmetro de, aproximadamente, 0,3 mm.", "Faça uma inspeção visual da peça puncionada utilizando lupa."] },
      { task: "Substitua o punção.", keyPoints: ["Observe o ângulo de ponta (90º)."] },
      { task: "Posicione o punção.", keyPoints: ["Desloque o punção na posição inclinada sobre os traços até encontrar o cruzamento das linhas."] },
      { task: "Bata o martelo no punção.", keyPoints: ["Posicione o punção verticalmente.", "A marca do punção deve gerar um diâmetro de, aproximadamente, 0,6 a 1 mm.", "Evite inclinar o punção para que não haja deslocamento do centro."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar ao escolher o punção?",
      "Como deve ser feito o posicionamento do punção?",
      "Como deve ser feito o primeiro puncionamento?",
      "Como é feita a inspeção da peça?",
      "Como deve ser feito o puncionamento definitivo?"
    ]
  },
  {
    id: "v6-29",
    name: "Furar na furadeira de coluna de bancada ou de piso",
    category: Category.Furadeira,
    reference: "29",
    taskNumber: "Tarefa 9",
    time: "20min",
    pieceName: "CASTANHA MOLE",
    volumePage: "6 / 115",
    preparation: "Broca, Broca de centro, paquímetro, furadeira, calços.",
    motivation: "É uma operação que tem por finalidade obter furos cilíndricos em peças que, posteriormente, poderão passar por outros processos de usinagem, tais como: alargamento, roscamento etc.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda a peça.", keyPoints: ["Fixe a peça na morsa ou utilize grampos.", "Utilize calços paralelos."] },
      { task: "Selecione a broca.", keyPoints: ["Meça o diâmetro da broca sobre os fios de corte com o paquímetro sem girá-la.", "Verifique se a afiação está adequada ao material."] },
      { task: "Prenda a broca no mandril.", keyPoints: ["Verifique o aperto."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore da máquina está parado."] },
      { task: "Posicione a broca.", keyPoints: ["Verifique se a ponta da broca se encontra rigorosamente no centro do puncionado."] },
      { task: "Inicie a furação.", keyPoints: ["Verifique se o furo produzido se encontra no centro do traçado.", "Utilize avanço lento e uniforme.", "Utilize fluido de corte adequado."] },
      { task: "Verifique a profundidade.", keyPoints: ["Utilize a escala graduada da máquina se o furo não for passante.", "Utilize o paquímetro e corrija, se necessário."] },
      { task: "Termine a furação.", keyPoints: ["Diminua o avanço de penetração ao final do furo."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar ao prender a peça?",
      "Como deve ser selecionada a broca?",
      "O que devemos observar no posicionamento da broca?",
      "Como devemos iniciar a furação?",
      "De que forma é feita a verificação da profundidade?",
      "O que devemos observar ao terminar a furação?"
    ]
  },
  {
    id: "v6-30",
    name: "Fresar superfície plana inclinada",
    category: Category.Fresamento,
    reference: "30",
    taskNumber: "Tarefa 9",
    time: "20min",
    pieceName: "CASTANHA MOLE",
    volumePage: "6 / 117",
    preparation: "Fresadora universal, fresa de topo, paquímetro, esquadro, cabeçote faceador de 90°, goniômetro, base magnética, relógio comparador.",
    motivation: "Esta operação é utilizada na construção de chanfros e ranhuras em ângulo.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Fixe o material.", keyPoints: ["Utilize calços retificados a fim de se regular a distância da superfície a ser fresada em relação ao mordente."] },
      { task: "Incline o cabeçote universal no ângulo a ser fresado.", keyPoints: ["Utilize a chave correta para soltar os parafusos e porcas."] },
      { task: "Posicione as alavancas de rotação e avanço.", keyPoints: ["Verifique se o eixo árvore da fresadora está parado."] },
      { task: "Referencie a ferramenta.", keyPoints: ["Tangencie a ferramenta manualmente."] },
      { task: "Dê a profundidade de corte.", keyPoints: ["Realize a usinagem em movimento automático e discordante."] },
      { task: "Faça a verificação da superfície fresada.", keyPoints: ["Utilize o paquímetro para as medidas lineares e o goniômetro para a medida angular."] },
      { task: "Dê os passes necessários para a obtenção da superfície.", keyPoints: ["Realize constantemente a medição da peça."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Por que o eixo árvore deve estar desligado ao se posicionar as alavancas de rotação?",
      "Como deve ser o referenciamento do cabeçote faceador?",
      "Por que devemos realizar a operação em movimento discordante?",
      "Quais os instrumentos utilizados para a verificação das medidas?"
    ]
  },
  {
    id: "v6-31",
    name: "Rebaixar furo na furadeira de coluna de bancada ou de piso",
    category: Category.Furadeira,
    reference: "31",
    taskNumber: "Tarefa 9",
    time: "20min",
    pieceName: "CASTANHA MOLE",
    volumePage: "6 / 119",
    preparation: "Rebaixador, paquímetro, furadeira, calços.",
    motivation: "É uma operação que tem por finalidade aumentar o diâmetro de um furo até uma profundidade determinada para alojar cabeças de parafusos, rebites, porcas e peças diversas.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Selecione o rebaixador.", keyPoints: ["Observe para que o diâmetro do piloto do rebaixador seja, aproximadamente, 0,1 mm menor do que o furo."] },
      { task: "Prenda o rebaixador no mandril.", keyPoints: ["Verifique o aperto."] },
      { task: "Posicione as alavancas de rotação.", keyPoints: ["Verifique se o eixo árvore da máquina está parado."] },
      { task: "Posicione o rebaixador.", keyPoints: ["Introduza o piloto do rebaixador no furo."] },
      { task: "Referencie o rebaixador.", keyPoints: ["Referencie a aresta de corte na superfície da peça e zere a escala graduada da máquina."] },
      { task: "Inicie o rebaixo.", keyPoints: ["Utilize fluido de corte."] },
      { task: "Verifique a profundidade do rebaixo.", keyPoints: ["Utilize o paquímetro ou o componente que será alojado.", "Corrija se for necessário."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar na escolha do rebaixador?",
      "O que devemos observar no posicionamento do rebaixador?",
      "De que forma é feito o referenciamento do rebaixador?",
      "Como deve ser feita a verificação da profundidade do rebaixo?"
    ]
  },
  {
    id: "v6-32",
    name: "Roscar manualmente com macho na bancada",
    category: Category.Ajustagem,
    reference: "32",
    taskNumber: "Tarefa 10",
    time: "20min",
    pieceName: "BASE DA CASTANHA",
    volumePage: "6 / 145",
    preparation: "Macho, paquímetro, desandador para machos, esquadro de precisão, morsa, fluido de corte.",
    motivation: "É uma operação que tem por finalidade abrir roscas internas, empregada na construção de flanges, porcas e peças de máquinas em geral.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Selecione o macho.", keyPoints: ["Verifique o tipo e o sistema de rosca.", "Verifique o diâmetro do furo da peça."] },
      { task: "Prenda o macho no desandador.", keyPoints: ["Selecione o 1º macho.", "O comprimento do desandador deve ser proporcional ao diâmetro do macho."] },
      { task: "Introduza o macho no furo.", keyPoints: ["Exerça leve pressão e gire o macho até iniciar o corte."] },
      { task: "Verifique a perpendicularidade.", keyPoints: ["Utilize esquadro de precisão.", "Corrija a perpendicularidade, se necessário."] },
      { task: "Termine de passar o 1º macho.", keyPoints: ["Gire o macho no sentido contrário para quebrar os cavacos.", "Utilize fluido de corte adequado."] },
      { task: "Passe o 2º macho.", keyPoints: ["Gire o macho no sentido contrário para quebrar os cavacos."] },
      { task: "Termine a rosca com o 3º macho (se houver).", keyPoints: ["Utilize movimento circular contínuo."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos observar na seleção do macho?",
      "Qual ferramenta é utilizada na fixação do macho?",
      "Como devemos verificar a perpendicularidade dos machos?",
      "Para que devemos girar o macho no sentido contrário?"
    ]
  },
  {
    id: "v6-33",
    name: "Escarear na furadeira de coluna de bancada ou de piso",
    category: Category.Furadeira,
    reference: "33",
    taskNumber: "Tarefa 10",
    time: "20min",
    pieceName: "BASE DA CASTANHA",
    volumePage: "6 / 147",
    preparation: "Escareador, paquímetro, furadeira, calços.",
    motivation: "É uma operação que tem por finalidade tornar cônica a extremidade de um furo para permitir alojamento de parafusos ou outros elementos de união cujas cabeças têm formato cônico.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Selecione o escareador", keyPoints: ["Verifique se o ângulo do escareador é compatível com a cabeça do parafuso ou rebite"] },
      { task: "Prenda o escareador no mandril", keyPoints: ["Verifique o aperto"] },
      { task: "Posicione as alavancas de rotação", keyPoints: ["Verifique se o eixo árvore da máquina está parado."] },
      { task: "Posicione o escareador", keyPoints: ["Verifique se o escareador encontra-se alinhado com o furo"] },
      { task: "Inicie o escareado", keyPoints: ["Utilize avanço lento e uniforme", "Utilize fluido de corte adequado"] },
      { task: "Verifique o escareado", keyPoints: ["Utilize o paquímetro ou o parafuso que será utilizado no furo e corrija, se necessário"] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como deve ser selecionado o escareador?",
      "O que devemos observar no posicionamento do escareador?",
      "Como devemos iniciar o escareado?",
      "Como podemos verificar o escareado?"
    ]
  },
  {
    id: "v6-34",
    name: "Serrar manualmente",
    category: Category.Ajustagem,
    reference: "34",
    taskNumber: "Tarefa 11",
    time: "20min",
    pieceName: "MORDENTE DE PROTEÇÃO",
    volumePage: "6 / 166",
    preparation: "Arco de serra, morsa, lâmina de serra.",
    motivation: "Esta operação permite cortar o material utilizando arco de serra. É importante porque precede a realização de diversas operações.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Selecione a lâmina de serra.", keyPoints: ["Considere a espessura e o tipo de material."] },
      { task: "Monte a lâmina no arco.", keyPoints: ["Verifique se os dentes estão voltados para frente.", "Tensione a lâmina girando a porca borboleta."] },
      { task: "Prenda o material na morsa.", keyPoints: ["Utilize a traçagem como referência e deixe-a próxima aos mordentes."] },
      { task: "Serre o material.", keyPoints: ["Deixe sobremetal.", "A pressão da serra sobre o material é feita apenas durante o avanço e não deve ser excessiva.", "Ao se aproximar o término do corte, reduza a pressão da serra.", "Utilize todo o comprimento da lâmina.", "O número de golpes deve ser de, aproximadamente, 60 por minuto."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "O que devemos considerar para selecionar a lâmina de serra?",
      "Como deve ser montada a lâmina no arco?",
      "O que devemos observar ao prender o material na morsa?",
      "Quantos golpes por minuto devem ser dados durante a operação?",
      "Como deve ser a pressão da serra durante a operação?"
    ]
  },
  {
    id: "v6-35",
    name: "Limar material fino",
    category: Category.Ajustagem,
    reference: "35",
    taskNumber: "Tarefa 11",
    time: "20min",
    pieceName: "MORDENTE DE PROTEÇÃO",
    volumePage: "6 / 168",
    preparation: "Lima murça, régua de controle de fio, calços de madeira, paquímetro, macete.",
    motivation: "Esta operação é utilizada na usinagem de materiais de pouca espessura. É importante para a confecção de gabaritos, lâminas para ajustes etc.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material na morsa com o auxílio de calços de madeira.", keyPoints: ["Desempene o material se necessário.", "A superfície a ser limada deve ficar próxima dos calços."] },
      { task: "Lime o material.", keyPoints: ["Mantenha a lima em posição obliqua à superfície."] },
      { task: "Verifique a superfície limada.", keyPoints: ["Utilize régua de controle de fio."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Como desempenar o material?",
      "Qual a finalidade das cantoneiras ou calços de madeira ao limar material fino?",
      "Qual a posição da lima ao limar material fino?",
      "Como deve ser realizada a verificação da superfície limada?"
    ]
  },
  {
    id: "v6-36",
    name: "Dobrar material fino",
    category: Category.Ajustagem,
    reference: "36",
    taskNumber: "Tarefa 11",
    time: "20min",
    pieceName: "MORDENTE DE PROTEÇÃO",
    volumePage: "6 / 169",
    preparation: "Macete, martelo, calço, esquadro de precisão, goniômetro, cantoneira, morsa.",
    motivation: "Esta operação tem a finalidade de conformar chapas planas de até 1,5 mm em perfis angulares ou curvos. Ex. mordentes de proteção.",
    presentation: {
      sincrese: "Demonstrar em velocidade real (percepção do todo).",
      analise: "Demonstrar em velocidade reduzida, passo a passo, ressaltando os pontos-chave (percepção das partes que compõe o todo).",
      sintese: "Repetir a demonstração em velocidade real (recomposição do todo)."
    },
    steps: [
      { task: "Prenda o material na morsa.", keyPoints: ["Utilize a traçagem como referência.", "Utilize cantoneiras."] },
      { task: "Inicie a dobra da chapa com o macete e finalize com o martelo.", keyPoints: ["Utilize calço de proteção para evitar marcas ou deformações."] },
      { task: "Verifique a dobra.", keyPoints: ["Utilize esquadro de precisão, gabaritos ou goniômetro."] }
    ],
    application: "Cada aluno deve participar da demonstração, executando, no mínimo, uma parte da operação.",
    verification: [
      "Ao prender a peça na morsa, qual deverá ser a referência?",
      "Qual é a finalidade do calço de proteção ao dobrar a chapa?",
      "Em que momento devemos utilizar macete para dobrar a chapa?",
      "Como é feita a verificação da dobra?"
    ]
  }
];
