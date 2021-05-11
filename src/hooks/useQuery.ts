import { Gender, Status } from './../store/characters/types';
import { useLocation } from 'react-router-dom';

export function useQuery() {
  const query = new URLSearchParams(useLocation().search);
  const page = parseInt(query.get('page') || '1', 10);
  const gender = query.get('gender') as Gender;
  const status = query.get('status') as Status;
  const name = query.get('name') as string | undefined;
  return { page, gender, status, name };
}
