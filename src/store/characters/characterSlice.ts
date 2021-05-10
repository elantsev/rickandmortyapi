import { Character, CharactersState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchCharacters, Params } from '../../api/characters/charactersAPI';

const initialState: CharactersState = {
  status: 'init',
  data: {
    info: null,
    results: null,
  },
  favorites: JSON.parse(localStorage?.favorites ?? '[]'),
};

export const fetchCharactersAsync = createAsyncThunk(
  'characters/fetchCharacters',
  async (params: Params) => {
    const response = await fetchCharacters(params);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setFavorite: (
      state,
      action: PayloadAction<{ id: number; isFavorite: boolean }>
    ) => {
      const { id, isFavorite } = action.payload;
      if (isFavorite) {
        state.favorites.push(id);
      } else {
        state.favorites = state.favorites.filter((item) => item !== id);
      }
      if (localStorage) {
        localStorage.favorites = JSON.stringify(state.favorites);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharactersAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      });
  },
});

export const { setFavorite } = counterSlice.actions;

export const selectCharacters = (state: RootState): Character[] | null =>
  state.characters.data?.results;
export const selectFavorites = (state: RootState): number[] =>
  state.characters.favorites;
export const charactersPages = (state: RootState): number | undefined =>
  state.characters.data?.info?.pages;

export default counterSlice.reducer;
