import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Pokemon Details', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    console.log(history);
    history.push('/pokemons/25');
  });

  it('Should contain a h2 with the text \'Pikachu details\'', () => {
    const titleElement = screen.getByRole('heading', {
      name: /pikachu details/i,
      level: 2,
    });
    expect(titleElement).toBeInTheDocument();
  });
});
