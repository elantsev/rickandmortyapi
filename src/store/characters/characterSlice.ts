import { Character, CharactersState } from './types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchCharacters, Params } from '../../api/characters/charactersAPI';

const initialState: CharactersState = {
  status: 'init',
  data: {
    info: null,
    results: null,
  },
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
  reducers: {},
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

export const selectCharacters = (state: RootState): Character[] | null =>
  state.characters.data?.results;
export const charactersPages = (state: RootState): number | undefined =>
  state.characters.data?.info?.pages;

export default counterSlice.reducer;
