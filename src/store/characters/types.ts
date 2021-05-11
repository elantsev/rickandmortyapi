export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export type Status = 'Alive' | 'Dead' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharactersState {
  status: 'init' | 'loading' | 'loaded' | 'failed';
  data: {
    info: Info | null;
    results: Character[] | null;
  };
  favorites: number[];
}
