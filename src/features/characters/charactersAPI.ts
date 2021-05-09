import { Gender, Status } from './charactersSlice';
import API from '../../api/request';

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export type Params = {
  page?: number;
  name?: string;
  gender?: Gender;
  status?: Status;
};

export function fetchCharacters(params: Params) {
  return API.get('/character/', params);
}
