
import React from 'react'
import { makeStyles } from '@mui/material'

const useStyles = makeStyles({
    page: {
      background: '#f9f9f9',
      width: '100%'
    }
  })

  const Layout = ({children}) => {
    return (
    

        {children}
    )
  }

  export default Layout