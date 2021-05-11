import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { useQuery } from 'hooks/useQuery';
import { useAppSelector } from 'store/hooks';
import { charactersPages } from 'store/characters';


export default function PaginationLink() {
    const pages: number | undefined = useAppSelector(charactersPages);
    const { page } = useQuery();

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
