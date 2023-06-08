
import { render, screen, fireEvent } from '@testing-library/react';
import Create from './Create';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockAddFilm = jest.fn(); //creates function

    jest.mock('./Context', () => ({ // creates implementation of useContext
      useContext: () => ({ addFilm: mockAddFilm }),
    }));

    render(<Create />)

    const submitButton = screen.getByText('Submit')
    fireEvent.click(submitButton)

    expect(mockAddFilm)
  })
})

    