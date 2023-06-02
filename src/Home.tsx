import React from 'react'
import { useContext} from 'react'
import { AppContext } from './Context'
import {Container} from '@mui/material'
import { Grid } from '@mui/material';
import Info from './Info';
import Typography from '@mui/material/Typography'


const Home = () => {
  const {films, deleteFilm, updateFilm} = useContext(AppContext) ?? {films: [], deleteFilm: () => {}, updateFilm:() => {} }
  

  return (
    <Container>
      <div style={{ marginBottom: '20px' }}>
      <Typography
      variant="h4" component="h1" align="center">
          Welcome to Film The Collection
      </Typography>
      </div>
      <Grid container spacing={3}>
        {films.map((film) => (
          <Grid item xs={12} md={6} lg={4} key={film.film_id}>
            <Info film={film} deleteFilm={deleteFilm}  updateFilm={updateFilm}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home

// how many columns it takes up out of 12  lg=4