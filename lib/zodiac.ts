export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  emoji: string;
  dateRange: string;
  element: 'Fuego' | 'Tierra' | 'Aire' | 'Agua';
  color: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    emoji: '🐏',
    dateRange: '21 Mar – 19 Abr',
    element: 'Fuego',
    color: '#ef4444',
  },
  {
    id: 'taurus',
    name: 'Tauro',
    symbol: '♉',
    emoji: '🐂',
    dateRange: '20 Abr – 20 May',
    element: 'Tierra',
    color: '#22c55e',
  },
  {
    id: 'gemini',
    name: 'Géminis',
    symbol: '♊',
    emoji: '👯',
    dateRange: '21 May – 20 Jun',
    element: 'Aire',
    color: '#eab308',
  },
  {
    id: 'cancer',
    name: 'Cáncer',
    symbol: '♋',
    emoji: '🦀',
    dateRange: '21 Jun – 22 Jul',
    element: 'Agua',
    color: '#60a5fa',
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    emoji: '🦁',
    dateRange: '23 Jul – 22 Ago',
    element: 'Fuego',
    color: '#f97316',
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    emoji: '👧',
    dateRange: '23 Ago – 22 Sep',
    element: 'Tierra',
    color: '#84cc16',
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    emoji: '⚖️',
    dateRange: '23 Sep – 22 Oct',
    element: 'Aire',
    color: '#f472b6',
  },
  {
    id: 'scorpio',
    name: 'Escorpio',
    symbol: '♏',
    emoji: '🦂',
    dateRange: '23 Oct – 21 Nov',
    element: 'Agua',
    color: '#a855f7',
  },
  {
    id: 'sagittarius',
    name: 'Sagitario',
    symbol: '♐',
    emoji: '🏹',
    dateRange: '22 Nov – 21 Dic',
    element: 'Fuego',
    color: '#f59e0b',
  },
  {
    id: 'capricorn',
    name: 'Capricornio',
    symbol: '♑',
    emoji: '🐐',
    dateRange: '22 Dic – 19 Ene',
    element: 'Tierra',
    color: '#6b7280',
  },
  {
    id: 'aquarius',
    name: 'Acuario',
    symbol: '♒',
    emoji: '🏺',
    dateRange: '20 Ene – 18 Feb',
    element: 'Aire',
    color: '#38bdf8',
  },
  {
    id: 'pisces',
    name: 'Piscis',
    symbol: '♓',
    emoji: '🐟',
    dateRange: '19 Feb – 20 Mar',
    element: 'Agua',
    color: '#818cf8',
  },
];

export const ELEMENT_COLORS: Record<string, string> = {
  Fuego: 'text-red-400',
  Tierra: 'text-green-400',
  Aire: 'text-yellow-300',
  Agua: 'text-blue-400',
};

export interface HoroscopeData {
  sign: string;
  date: string;
  horoscope: string;
}
