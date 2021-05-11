import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useQuery } from 'hooks/useQuery';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { selectCharacters, fetchCharactersAsync, setFavorite, selectFavorites } from '../../store/characters';
import { useAppDispatch, useAppSelector } from 'store/hooks';


export function Characters() {
  const charactersData = useAppSelector(selectCharacters);
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const { page, gender, status, name } = useQuery();


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

