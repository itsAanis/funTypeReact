import React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material//CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
import SaveAltOutlined from '@mui/icons-material/SaveAltOutlined'
import EditOutlined from '@mui/icons-material/EditOutlined'
import { CloseOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

interface Props {
    film: {
      film_id: number;
      title: string;
      description: string;
    };
    deleteFilm: ((filmId: number) => Promise<void>) | (() => void)
    updateFilm: ((filmdId: number, title: string, description: string) => Promise<void>) | (() => void)
  }

const Info: React.FC<Props> = ({film, deleteFilm, updateFilm}) => {
 
  const [isEditing, setIsEditing] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(film.title)
  const [updatedDescription, setUpdatedDescription] = useState(film.description)
 
 
 
  const handleDelete = async () => {
    try {
      await deleteFilm(film.film_id);
    } catch (err) {
      console.log(err);
    }
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = async () => {
    try {
      await updateFilm(film.film_id,updatedTitle, updatedDescription);

      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  }

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the form fields
    setUpdatedTitle(film.title);
    setUpdatedDescription(film.description);
  }




  return (
  <div>
    <Card elevation={4}>
    <CardHeader 
    action={
      isEditing ? (
        <div>
          <IconButton onClick={handleSave}>
            <SaveAltOutlined/>
          </IconButton>
          <IconButton onClick={handleCancel}>
            <CloseOutlined />
          </IconButton>
        </div>              // if editing 
      ) : (<div> 
      <IconButton onClick={handleEdit}> 
        <EditOutlined />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteOutlined />
      </IconButton>
    </div>
  )}    // not editing /* ICONS ABOVE*/
    title={isEditing ? (
      <TextField id="standard-basic" variant="standard"
      value={updatedTitle}
      onChange={(e) => setUpdatedTitle(e.target.value)} /> 
      ) : 
      (film.title )}
      /> 
      {/* TITLE ABOVE*/}

        <CardContent>
        {isEditing ? (
          <TextareaAutosize
            minRows={3}
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
        ) : (
          <Typography variant="body2" color="textSecondary">
            {film.description}
          </Typography>  // description above
        )}
        </CardContent>
    </Card>
  </div>

  )
}

export default Info