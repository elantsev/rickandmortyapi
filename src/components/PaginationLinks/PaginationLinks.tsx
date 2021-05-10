import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { useQuery } from 'hooks/useQuery';
import { useAppSelector } from 'app/hooks';
import { charactersPages } from 'store/characters';


export default function PaginationLink() {
    const pages: number | undefined = useAppSelector(charactersPages);
    let query = useQuery();
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <Pagination
            page={page}
            count={pages}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`?page=${item.page}`}
                    {...item}
                />
            )}
        />
    );
}
