import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Character } from '../../store/characters';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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



export function CharacterCard({ character }: {
    character: Character;
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
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={character.image}
                title="Live from space album cover"
            />
        </Card>
    );
}
