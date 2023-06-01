import React from 'react'
import { useState } from 'react'
import { useContext} from 'react'
import { AppContext } from './Context'
import Typography from '@mui/material/Typography'
import {Container} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const Create = () => {
    const {addFilm} = useContext(AppContext) || { addFilm: async () => {} }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        addFilm(title, description);
        setTitle('');
        setDescription('');
        

    }
  return (
<Container>
<Typography
  variant="h4" 
  color="textSecondary"
  component="h2"
  gutterBottom
>
Add a film to Database
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          label="Film Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
          <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<SendIcon/>}>
          Submit
        </Button>
        </form>       
        </Container>


)
}

export default Create