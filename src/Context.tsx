import React, { createContext} from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



// for data passed from DB
interface Film {
    film_id: number;
    title: string;
    description: string
  }

  interface AppContextType { // define structure of AppContext
    films: Film[]
   deleteFilm: (filmId: number) => Promise<void>
   addFilm: (title: string, description: string) => Promise<void>
  }
  const AppContext = createContext<AppContextType | null>(null)

  interface Props {
    children: React.ReactNode;
  }

const AppProvider: React.FC <Props> = ({ children }) => {

    const [films, setFilms] = useState<Film[]>([]);
    
    useEffect(() => {
    const fetchMovies = async() => {
    try{
        const res = await axios.get('http://localhost:3000/films')
        const {results} = res.data
        setFilms(results);   
    }
    catch(err) {
        console.log(err)
    }
}
fetchMovies() }
, [])
// add a film here 
const addFilm = async(Title : string, Description: string) => {
  try {
    const response = await axios.post('http://localhost:3000/films', {
      title: Title,
      description: Description
    })
  }

catch (err) {
  console.log(err)
}
}


// delete a film
const deleteFilm = async (filmId: number):Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/films/${filmId}`)
  setFilms((prevFilms) => prevFilms.filter((film) => film.film_id !== filmId))
}
catch (err) {
  console.log(err);
}
}



return (
<AppContext.Provider  value={{films, deleteFilm, addFilm}}> {children} </AppContext.Provider>
)

}

export {AppContext, AppProvider}



