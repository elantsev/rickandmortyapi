import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useQuery } from 'hooks/useQuery';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { selectCharacters, fetchCharactersAsync, setFavorite, selectFavorites, Gender, Status } from '../../store/characters';


export function Characters() {
  const charactersData = useAppSelector(selectCharacters);
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();



  let query = useQuery();
  const page = parseInt(query.get('page') || '1', 10);
  const gender = query.get('gender') as Gender;
  const status = query.get('status') as Status;
  const name = query.get('name') as string | undefined;

  useEffect(() => {
    dispatch(fetchCharactersAsync({ page, gender, status, name }))
  }, [dispatch, page, gender, status, name]);

  return (
    <Grid container spacing={1} >
      {charactersData?.map((character) => {
        const isFavorite = favorites.includes(character.id)
        return (
          <Grid item xs={12} md={6} lg={4} xl={3} >
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite}
              setFavorite={() => dispatch(setFavorite({ id: character.id, isFavorite: !isFavorite }))} />
          </Grid>
        )
      })}
    </Grid>
  );
}
