import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Pokedex from '../components/Pokedex';
import pokemons from '../data';

const isPokemonFavoriteById = {};
pokemons.forEach(({ id }) => {
  isPokemonFavoriteById[id] = false;
});

describe('Pokedex', () => {
  it('Should contain a title with the text \'Encountered pokémons\'', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
  });
});
