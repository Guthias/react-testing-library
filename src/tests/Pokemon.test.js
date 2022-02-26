import React from 'react';
import { render, screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';
import renderWithRouter from './renderWithRouter';

const props = {
  pokemon: {
    id: 393,
    name: 'Piplup',
    type: 'Water',
    averageWeight: {
      value: '5.2',
      measurementUnit: 'kg',
    },
    image: 'https://archives.bulbagarden.net/media/upload/a/a7/Spr_5b_393.png',
  },
  isFavorite: false,
};

describe('Pokemon', () => {
  it('Should contain Pokemon infos on Screen', () => {
    renderWithRouter(<Pokemon { ...props } />);
    const pokemonName = screen.getByText(/piplup/i);
    const pokemonType = screen.getByText(/water/i);
    const pokemonWeight = screen.getByText(/Average weight: 5.2 kg/i);
    expect(pokemonName && pokemonType && pokemonWeight).toBeInTheDocument();
  });

  it('Should contain a Pokemon sprite', () => {
    renderWithRouter(<Pokemon { ...props } />);
    const pokemonSprite = screen.getByRole('img');
    expect(pokemonSprite.src).toBe(props.pokemon.image);
  });
});
