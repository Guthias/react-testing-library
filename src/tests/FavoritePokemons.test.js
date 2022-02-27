import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Favorite Pokemmons', () => {
  it('Should have the text \'No favorite pokemon found\' when dont have a favorites',
    () => {
      renderWithRouter(<FavoritePokemons />);
      const noFavoriteText = screen.getByText(/no favorite pokemon found/i);
      expect(noFavoriteText).toBeInTheDocument();
    });
});
