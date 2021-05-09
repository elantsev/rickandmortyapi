import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchCharacters, Params } from './charactersAPI';

export interface Gender {
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
}
export interface Status {
  gender: 'Alive' | 'Dead' | 'unknown';
}
export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharactersState {
  status: 'init' | 'loading' | 'loaded' | 'failed';
  data: {
    info: Info | null;
    results: Character[] | null;
  };
}

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

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCharacters = (state: RootState): Character[] | null =>
  state.characters.data?.results;

export default counterSlice.reducer;
