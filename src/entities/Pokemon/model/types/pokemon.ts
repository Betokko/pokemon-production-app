export interface IPokemon {
    id: string
    name: string
    img: string
    content: IPokemonContent[]
    type: PokemonTypes[]
}

export interface IPokemonContent {
    id: string
    type: 'text' | 'img'
    src?: string
    title?: string
    paragraphs?: string[]
}

export enum PokemonTypes {
    NORMAL = 'normal',
    FIRE = 'fire',
    WATER = 'water',
    GRASS = 'grass',
    ELECTRIC = 'electric',
    ICE = 'ice',
    FIGHTING = 'fighting',
    POISON = 'poison',
    GROUND = 'ground'
}
