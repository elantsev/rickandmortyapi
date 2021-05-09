import { Character } from '../../features/characters/charactersSlice';



export function CharacterCard({ character }: {
    character: Character;
}): JSX.Element {





    return (
        <div>
            {character.name}
        </div>
    );
}
