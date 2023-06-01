import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material//CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'

interface Props {
    film: {
      film_id: number;
      title: string;
      description: string;
    };
    deleteFilm: ((filmId: number) => Promise<void>) | (() => void)
  }

const Info: React.FC<Props> = ({film, deleteFilm}) => {
  const handleDelete = async () => {
    console.log('Film ID:', film.film_id); // Check the value of film.id
    try {
      await deleteFilm(film.film_id);
    } catch (err) {
      console.log(err);
    }
  };


  return (
  <div>
    <Card elevation={4}>
    <CardHeader 
    action={<IconButton onClick={() => handleDelete()}>
    <DeleteOutlined />
  </IconButton>
    }
    title={film.title}
      />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {film.description}
          </Typography>
        </CardContent>
    </Card>


  </div>

  )
}

export default Info