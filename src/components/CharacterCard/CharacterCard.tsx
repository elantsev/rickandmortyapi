import React from 'react';
import {
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    CardMedia,
    Typography,
    CardContent
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Character } from '../../store/characters';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        content: {
            flex: 'auto',
        },
        cover: {
            minWidth: '8rem',
        },
    }),
);



export function CharacterCard({ character, isFavorite, setFavorite }: {
    character: Character;
    isFavorite: boolean;
    setFavorite: () => void;
}): JSX.Element {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {character.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {character.gender} {' '}
                    <Typography variant="subtitle1" color="primary" component='span'>
                        {character.status}
                    </Typography>
                </Typography>
                <IconButton aria-label="add to favorites" onClick={() => setFavorite()}>
                    <FavoriteIcon color={isFavorite ? "secondary" : 'primary'} />
                </IconButton>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={character.image}
                title="Live from space album cover"
            />
        </Card>
    );
}
