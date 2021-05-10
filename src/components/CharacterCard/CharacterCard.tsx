import { Box } from '@material-ui/core';
import { Character } from '../../store/characters';



export function CharacterCard({ character }: {
    character: Character;
}): JSX.Element {

    return (
        <Box>
            {character.name}
        </Box>
    );
}
