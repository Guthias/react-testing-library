import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

const pokemons = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    averageWeight: {
      value: '8.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
  },
  {
    id: 148,
    name: 'Dragonair',
    type: 'Dragon',
    averageWeight: {
      value: '16.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png',
  },
];

describe('Favorite Pokemmons', () => {
  it('Should have the text \'No favorite pokemon found\' when dont have a favorites',
    () => {
      renderWithRouter(<FavoritePokemons />);
      const noFavoriteText = screen.getByText(/no favorite pokemon found/i);
      expect(noFavoriteText).toBeInTheDocument();
    });

  it('Should contain all Pokemon cards', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
    const pikachuElement = screen.getByText(/pikachu/i);
    const charmanderElement = screen.getByText(/charmander/i);
    const dragoniteElement = screen.getByText(/dragonair/i);
    expect(pikachuElement && charmanderElement && dragoniteElement).toBeInTheDocument();

    const cards = screen.getAllByRole('link', { name: /more details/i });
    expect(cards.length).toBe(pokemons.length);
  });
});
