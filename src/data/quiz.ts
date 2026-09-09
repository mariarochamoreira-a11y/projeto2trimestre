export type ResultKey = 'sonhador' | 'faísca' | 'sábio' | 'conector';

export interface QuizOption {
  label: string;
  icon: string;
  weights: Partial<Record<ResultKey, number>>;
}

export interface QuizQuestion {
  id: number;
  prompt: string;
  subtitle: string;
  options: QuizOption[];
}

export interface QuizResult {
  key: ResultKey;
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  color: string;
  bg: string;
  accent: string;
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    prompt: 'Sábado à tarde, você está livre. O que chama sua atenção?',
    subtitle: 'Não tem resposta errada — só o que parece mais você.',
    options: [
      {
        label: 'Abrir um livro e sumir em outra realidade',
        icon: 'book',
        weights: { sonhador: 3, sábio: 1 },
      },
      {
        label: 'Chamar a turma toda e inventar uma festa',
        icon: 'party',
        weights: { faísca: 3, conector: 1 },
      },
      {
        label: 'Conversar profundamente com alguém querido',
        icon: 'chat',
        weights: { conector: 3, sábio: 1 },
      },
      {
        label: 'Planejar a semana, organizar ideias e metas',
        icon: 'map',
        weights: { sábio: 3, faísca: 1 },
      },
    ],
  },
  {
    id: 2,
    prompt: 'Quando você encontra um problema inesperado, seu primeiro impulso é…',
    subtitle: 'A reação instintiva diz muito sobre você.',
    options: [
      {
        label: 'Imaginar todas as possibilidades — até as impossíveis',
        icon: 'cloud',
        weights: { sonhador: 3 },
      },
      {
        label: 'Agir agora, pensar depois. Movimento é a resposta',
        icon: 'bolt',
        weights: { faísca: 3 },
      },
      {
        label: 'Respirar, analisar e encontrar a melhor saída',
        icon: 'eye',
        weights: { sábio: 3 },
      },
      {
        label: 'Procurar quem está por perto e enfrentar juntos',
        icon: 'heart',
        weights: { conector: 3 },
      },
    ],
  },
  {
    id: 3,
    prompt: 'Seu ambiente ideal tem…',
    subtitle: 'O lugar fala por você.',
    options: [
      {
        label: 'Cantinho aconchegante, luz suave e silêncio criativo',
        icon: 'moon',
        weights: { sonhador: 3 },
      },
      {
        label: 'Cores fortes, música alta e energia o tempo todo',
        icon: 'fire',
        weights: { faísca: 3 },
      },
      {
        label: 'Mesa organizada, plantas e uma xícara de café',
        icon: 'coffee',
        weights: { sábio: 3 },
      },
      {
        label: 'Pessoas que você ama por todo canto',
        icon: 'globe',
        weights: { conector: 3 },
      },
    ],
  },
  {
    id: 4,
    prompt: 'O que mais te move por dentro?',
    subtitle: 'Aquele sentimento que faz tudo valer a pena.',
    options: [
      {
        label: 'Criar. Pintar, escrever, inventar mundos',
        icon: 'palette',
        weights: { sonhador: 3, faísca: 1 },
      },
      {
        label: 'Viver intensamente cada segundo',
        icon: 'sun',
        weights: { faísca: 3 },
      },
      {
        label: 'Aprender algo novo todo dia',
        icon: 'leaf',
        weights: { sábio: 3 },
      },
      {
        label: 'Cuidar das pessoas e ser cuidado de volta',
        icon: 'heart',
        weights: { conector: 3 },
      },
    ],
  },
  {
    id: 5,
    prompt: 'Uma palavra que define seu jeito de ver o mundo?',
    subtitle: 'Só uma. A primeira que vier à cabeça.',
    options: [
      {
        label: 'Imaginação',
        icon: 'sparkle',
        weights: { sonhador: 3 },
      },
      {
        label: 'Coragem',
        icon: 'fire',
        weights: { faísca: 3 },
      },
      {
        label: 'Equilíbrio',
        icon: 'compass',
        weights: { sábio: 3 },
      },
      {
        label: 'Afeto',
        icon: 'heart',
        weights: { conector: 3 },
      },
    ],
  },
  {
    id: 6,
    prompt: 'Qual dessas combinações te parece o paraíso?',
    subtitle: 'Fique com a que fez seu coração piscar.',
    options: [
      {
        label: 'Céu estrelado, cobertor e uma ideia na cabeça',
        icon: 'moon',
        weights: { sonhador: 3 },
      },
      {
        label: 'Estrada aberta, vento no rosto e destino incerto',
        icon: 'compass',
        weights: { faísca: 3 },
      },
      {
        label: 'Biblioteca antiga, chá quente e tempo livre',
        icon: 'book',
        weights: { sábio: 3 },
      },
      {
        label: 'Mesa cheia, comida boa e risadas até tarde',
        icon: 'music',
        weights: { conector: 3 },
      },
    ],
  },
];

export const results: Record<ResultKey, QuizResult> = {
  sonhador: {
    key: 'sonhador',
    name: 'O Sonhador',
    tagline: 'Você vive entre mundos que ainda não existem — e um dia eles vão existir por sua causa.',
    description:
      'Sua mente é um universo particular. Você enxerga beleza onde outros passam direto, e sua imaginação é o seu superpoder. O mundo precisa de pessoas como você: que ousam sonhar antes de construir.',
    traits: ['Criativo', 'Imaginativo', 'Sensível', 'Visão além'],
    color: 'text-wine-600',
    bg: 'bg-cream-100',
    accent: '#c98b8b',
  },
  faísca: {
    key: 'faísca',
    name: 'A Faísca',
    tagline: 'Você é a energia que acende qualquer ambiente em que entra.',
    description:
      'Você não espera as coisas acontecerem — você faz acontecer. Coragem, entusiasmo e uma vontade enorme de viver te movem. Cuidado só para não queimar tudo ao redor: sua intensidade é dom, mas também responsabilidade.',
    traits: ['Corajoso', 'Intenso', 'Espontâneo', 'Líder nato'],
    color: 'text-wine-600',
    bg: 'bg-wine-600',
    accent: '#d4a017',
  },
  sábio: {
    key: 'sábio',
    name: 'O Sábio',
    tagline: 'Onde há caos, você encontra clareza. Onde há dúvida, você traz sentido.',
    description:
      'Você pensa antes de agir, observa antes de julgar. As pessoas buscam seu conselho porque sabem que suas palavras vêm de um lugar profundo. Seu equilíbrio é raro — e contagia quem está perto.',
    traits: ['Reflexivo', 'Calmo', 'Analítico', 'Centrado'],
    color: 'text-cream-100',
    bg: 'bg-sage',
    accent: '#7c8a6f',
  },
  conector: {
    key: 'conector',
    name: 'O Conector',
    tagline: 'Você é o abraço que o mundo precisa depois de um dia longo.',
    description:
      'Sua força está nas pessoas. Você sente o que o outro sente, cria pontes onde havia muros e transforma qualquer grupo em comunidade. O afeto é sua língua nativa — e o mundo fica melhor por causa disso.',
    traits: ['Empático', 'Afetuoso', 'Leal', 'Coração aberto'],
    color: 'text-wine-600',
    bg: 'bg-dusty',
    accent: '#6d1f2c',
  },
};
