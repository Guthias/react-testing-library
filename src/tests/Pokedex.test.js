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
    const titleElement = screen.getByRole('heading', {
      name: /encountered pokémons/i,
      level: 2,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it(`Should contain a button and show the next Pokemon when click on the button
    and back to first when click on the last pokemon`, () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
    const nextPokemon = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    pokemons.forEach(({ name }) => {
      const pokemonName = screen.getByText(name);
      const moreDetails = screen.getAllByRole('link', {
        name: /more details/i,
      });
      expect(moreDetails.length).toBe(1);
      expect(pokemonName).toBeInTheDocument();
      userEvent.click(nextPokemon);
    });
    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();
  });
});
