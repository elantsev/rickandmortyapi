import { useQuery } from 'hooks/useQuery';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Character, selectCharacters, fetchCharactersAsync } from '../../store/characters';


export function Characters() {
  const charactersData: Character[] | null = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();

  let query = useQuery();
  const page = parseInt(query.get('page') || '1', 10);

  useEffect(() => {
    dispatch(fetchCharactersAsync({ page }))
  }, [dispatch, page]);


  return (
    <div>
      {charactersData?.map((character) => <CharacterCard key={character.id} character={character} />)}
    </div>
  );
}
