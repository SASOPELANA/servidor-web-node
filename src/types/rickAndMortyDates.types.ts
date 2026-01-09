export type ApiInfo = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};

export type CharacterLocation = {
    name: string;
    url: string;
};

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export type Character = {
    id: number;
    name: string;
    status: CharacterStatus;
    species: string;
    type: string;
    gender: CharacterGender;
    origin: CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string; // ISO date
};

export type CharactersResponse = {
    info: ApiInfo;
    results: Character[];
};
