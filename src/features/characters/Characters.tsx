import { useQuery } from 'hooks/useQuery';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import {
  selectCharacters,
  fetchCharactersAsync,
  Character,
} from './charactersSlice';


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
