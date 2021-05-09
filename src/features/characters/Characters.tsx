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


  useEffect(() => {
    dispatch(fetchCharactersAsync({}))
  }, [dispatch]);


  return (
    <div>
      {charactersData?.map((character) => <CharacterCard key={character.id} character={character} />)}
    </div>
  );
}
