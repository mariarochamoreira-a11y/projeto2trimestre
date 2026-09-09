export interface CarouselImage {
  url: string;
  alt: string;
  caption: string;
}

export const heroImages: CarouselImage[] = [
  {
    url: 'https://images.pexels.com/photos/8199217/pexels-photo-8199217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Grupo de estudantes felizes sentados em escada dando soquinho',
    caption: 'Juntos, construímos um ambiente escolar mais acolhedor',
  },
  {
    url: 'https://images.pexels.com/photos/10646599/pexels-photo-10646599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Estudantes de uniforme juntando as mãos simbolizando união',
    caption: 'Respeito às diferenças é o primeiro passo para a empatia',
  },
  {
    url: 'https://images.pexels.com/photos/18445870/pexels-photo-18445870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Adolescentes interagindo com alegria ao ar livre',
    caption: 'Cada gesto de gentileza faz a diferença',
  },
  {
    url: 'https://images.pexels.com/photos/38643078/pexels-photo-38643078.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Três adolescentes se abraçando ao ar livre',
    caption: 'Você nunca está sozinho — sempre há quem se importe',
  },
];

export const topics = [
  {
    id: 'bullying',
    icon: 'ShieldAlert',
    title: 'Bullying',
    desc: 'Entenda o que é bullying, como identificar e quais atitudes ajudam a combater agressões físicas, verbais e sociais no ambiente escolar.',
    accent: 'wine',
  },
  {
    id: 'emocional',
    icon: 'HeartPulse',
    title: 'Saúde Emocional',
    desc: 'Aprenda a reconhecer suas emoções, cuidar do seu bem-estar e buscar apoio quando sentir ansiedade, tristeza ou angústia.',
    accent: 'sage',
  },
  {
    id: 'cyberbullying',
    icon: 'ShieldCheck',
    title: 'Cyberbullying e Segurança Digital',
    desc: 'Como se proteger na internet, identificar ataques virtuais e manter suas redes e senhas seguras.',
    accent: 'mustard',
  },
  {
    id: 'inclusao',
    icon: 'Users',
    title: 'Inclusão e Respeito às Diferenças',
    desc: 'A importância de acolher a diversidade — cada pessoa é única e merece respeito, independentemente de suas diferenças.',
    accent: 'dusty',
  },
  {
    id: 'preconceito',
    icon: 'Scale',
    title: 'Combate ao Preconceito',
    desc: 'Reconhecer e enfrentar preconceitos de gênero, raça, religião e aparência para construir uma escola mais justa.',
    accent: 'wine',
  },
  {
    id: 'mulher',
    icon: 'HandHeart',
    title: 'Violência contra a Mulher',
    desc: 'Informações sobre tipos de violência, sinais de alerta e canais de denúncia e proteção.',
    accent: 'dusty',
  },
];

export const motivationalPhrases = [
  'Você é mais forte do que imagina, e não precisa enfrentar tudo sozinho.',
  'Pedir ajuda não é fraqueza — é coragem de quem se cuida.',
  'Cada sentimento que você carrega é válido. Você merece ser ouvido.',
  'A tempestade passa. E quando ela passar, você ainda estará aqui.',
  'O respeito começa em como tratamos a nós mesmos. Seja gentil consigo.',
  'Existe luz no fim do túnel — e às vezes ela vem na forma de um amigo.',
  'Você importa. Sua história importa. Seu bem-estar importa.',
  'Cuidar da saúde emocional é um ato de amor próprio.',
];

export const quizQuestions = [
  {
    id: 1,
    category: 'Bullying',
    question: 'Um colega constantemente zomba das roupas de outro estudante na frente da turma. Isso é bullying?',
    options: [
      'Não, é apenas uma brincadeira entre amigos.',
      'Sim, é bullying verbal — humilhar alguém repetidamente é uma forma de agressão.',
      'Só é bullying se houver agressão física.',
    ],
    correct: 1,
    explanation:
      'Bullying não precisa ser físico. Zombarias, apelidos pejorativos e humilhações repetidas são bullying verbal e causam danos emocionais graves.',
  },
  {
    id: 2,
    category: 'Respeito',
    question: 'Qual destas atitudes demonstra respeito às diferenças?',
    options: [
      'Excluir um colega por ele ter uma religião diferente.',
      'Criticar o sotaque de alguém na frente da turma.',
      'Ouvir e valorizar a opinião de um colega, mesmo discordando dela.',
    ],
    correct: 2,
    explanation:
      'Respeitar é acolher a diferença e ouvir o outro com empatia, mesmo quando pensamos diferente. Excluir ou julgar é o oposto do respeito.',
  },
  {
    id: 3,
    category: 'Cyberbullying',
    question: 'Você recebe uma mensagem ofensiva e ameaçadora em uma rede social. O que você faz?',
    options: [
      'Responder com outra ofensa para se defender.',
      'Guardar os prints, não responder e procurar um adulto de confiança para denunciar.',
      'Apagar tudo e fingir que nada aconteceu.',
    ],
    correct: 1,
    explanation:
      'Guarde provas (prints), não reaja com agressão e procure um adulto de confiança. Denunciar protege você e pode proteger outras vítimas.',
  },
  {
    id: 4,
    category: 'Segurança Digital',
    question: 'Qual destas senhas é a mais segura?',
    options: ['123456', 'meunome2024', 'P@ssar!nho_92Voador'],
    correct: 2,
    explanation:
      'Senhas seguras misturam letras maiúsculas e minúsculas, números e símbolos, e não contêm dados pessoais ou sequências óbvias como "123456".',
  },
  {
    id: 5,
    category: 'Saúde Emocional',
    question: 'Você está se sentindo muito triste e desmotivado há semanas. O que é mais saudável fazer?',
    options: [
      'Ficar isolado e esperar passar sozinho.',
      'Procurar um adulto de confiança, um profissional da escola ou um serviço de saúde para conversar.',
      'Fingir que está tudo bem o tempo todo.',
    ],
    correct: 1,
    explanation:
      'Sentimentos que persistem merecem atenção. Conversar com alguém de confiança ou um profissional é um passo importante para cuidar de você.',
  },
];

export const references = [
  {
    title: 'Ministério da Saúde — Saúde mental de adolescentes',
    url: 'https://www.gov.br/saude/pt-br',
    type: 'Site governamental',
    desc: 'Cartilhas e orientações oficiais sobre saúde mental e bem-estar de jovens.',
  },
  {
    title: 'Gov.br — Brasil Criança Feliz e combate ao bullying',
    url: 'https://www.gov.br/pt-br',
    type: 'Site governamental',
    desc: 'Programas e campanhas governamentais de proteção à criança e ao adolescente.',
  },
  {
    title: 'Ministério dos Direitos Humanos — Disque 100',
    url: 'https://www.gov.br/mdh/pt-br',
    type: 'Site governamental',
    desc: 'Canal de denúncia de violações de direitos humanos, gratuito e anônimo.',
  },
  {
    title: 'Disque 180 — Central de Atendimento à Mulher',
    url: 'https://www.gov.br/mdh/pt-br/navegue/comunicacao/campanhas/ligue-180',
    type: 'Site governamental',
    desc: 'Canal de denúncia e orientação para mulheres em situação de violência.',
  },
  {
    title: 'Saúde Mental no Brasil — Fiocruz',
    url: 'https://www.fiocruz.br/',
    type: 'Instituição de ensino e pesquisa',
    desc: 'Estudos e materiais educativos sobre saúde mental coletiva.',
  },
  {
    title: 'UNICEF — Saúde mental e bem-estar de adolescentes',
    url: 'https://www.unicef.org/brazil',
    type: 'Organização internacional',
    desc: 'Publicações e campanhas sobre o bem-estar e a proteção de crianças e adolescentes.',
  },
  {
    title: 'OPAS/OMS Brasil — Saúde mental',
    url: 'https://www.paho.org/pt',
    type: 'Organização de saúde',
    desc: 'Diretrizes da Organização Mundial da Saúde sobre saúde mental e prevenção.',
  },
  {
    title: 'Cartilha de Prevenção ao Bullying — MEC',
    url: 'https://www.gov.br/mec/pt-br',
    type: 'Cartilha educativa',
    desc: 'Material educativo do Ministério da Educação sobre identificação e prevenção do bullying escolar.',
  },
  {
    title: 'SaferNet — Centro de denúncias e segurança digital',
    url: 'https://www.safernet.org.br/',
    type: 'Organização não governamental',
    desc: 'Canal de denúncia anônima de crimes na internet e materiais sobre cidadania digital.',
  },
  {
    title: 'CVV — Centro de Valorização da Vida',
    url: 'https://www.cvv.org.br/',
    type: 'Organização de saúde',
    desc: 'Apoio emocional e prevenção ao suicídio — atendimento gratuito pelo telefone 188 e chat.',
  },
];

export const helplines = [
  {
    name: 'Disque 100',
    number: '100',
    desc: 'Denúncia de violência contra crianças e adolescentes. Funciona 24h, gratuito e anônimo.',
  },
  {
    name: 'Central de Atendimento à Mulher — Ligue 180',
    number: '180',
    desc: 'Orientação e denúncia de violência contra a mulher. Gratuito, 24h.',
  },
  {
    name: 'CVV — Centro de Valorização da Vida',
    number: '188',
    desc: 'Apoio emocional e prevenção ao suicídio. Gratuito, 24h. Também pelo site cvv.org.br.',
  },
  {
    name: 'SaferNet',
    number: 'safernet.org.br',
    desc: 'Denúncia anônima de crimes na internet, como cyberbullying e pornografia infantil.',
  },
];
