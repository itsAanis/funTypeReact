import { render, screen, fireEvent } from '@testing-library/react';
import Info from './Info';


describe('Test icon component', () => {
    it('Test delete click event', () => {
      const mockDeleteFilm= jest.fn(); //creates a function 
      const mockUpdateFilm = jest.fn()
      jest.mock('./Context', () => ({  // recreates Context so can useContext to pass mockcreated 

        useContext: () => ({ film: mockFilm, deleteFilm: mockDeleteFilm ,updateFilm: mockUpdateFilm})

       }))
    const mockFilm = {
        film_id: 1,
        title: 'title',
        description: 'description'
    }


       render(<Info film={mockFilm} deleteFilm={mockDeleteFilm} updateFilm={mockUpdateFilm} /> )
        
      

       const deleteButton = screen.getByTestId('DeleteOutlinedIcon')
       
       fireEvent.click(deleteButton)

       expect(mockDeleteFilm)

    })
    })