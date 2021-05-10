import React, { useCallback } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);


const genderOptions = [
  { label: '', value: '' },
  { label: 'Мужчина', value: 'Male' },
  { label: 'Женщина', value: 'Female' },
  { label: 'Бесполый', value: 'Genderless' },
  { label: 'Не известно', value: 'unknown' },
]

const statusOptions = [
  { label: '', value: '' },
  { label: 'Жив', value: 'Alive' },
  { label: 'Мертв', value: 'Dead' },
  { label: 'Не известно', value: 'unknown' },
]



export default function FilterForm() {
  const classes = useStyles();
  let history = useHistory();
  const [gender, setGender] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');


  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      history.push({ search: "?" + new URLSearchParams({ gender, status, name, page: '1' }).toString() },)
    },
    [history, gender, status, name],
  );


  return (
    <Box mb={5}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container alignItems='flex-end' spacing={3}>
          <Grid item>
            <TextField value={name} onChange={(e) => setName(e.target.value as string)} />
          </Grid>

          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel>Пол</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value as string)}
              >
                {genderOptions.map(({ label, value }) => <MenuItem value={value}>{label}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel>Статус</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value as string)}
              >
                {statusOptions.map(({ label, value }) => <MenuItem value={value}>{label}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button type='submit' variant="contained" color="primary">Поиск</Button>
          </Grid>
        </Grid>

      </form>
    </Box>
  );
}
