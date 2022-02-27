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
  beforeEach(() => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
  });

  it('Should contain a title with the text \'Encountered pokémons\'', () => {
    const titleElement = screen.getByRole('heading', {
      name: /encountered pokémons/i,
      level: 2,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it('Should contain a button and show the next Pokemon when click on the button'
    + ' and back to first when click on the last pokemon', () => {
    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
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

  it('Should contain filter buttons', () => {
    const fireFilter = screen.getByRole('button', { name: /fire/i });
    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(fireFilter);

    const charmanderCard = screen.getByText(/charmander/i);
    expect(charmanderCard).toBeInTheDocument();
    userEvent.click(nextPokemon);

    const rapidashCard = screen.getByText(/rapidash/i);
    expect(rapidashCard).toBeInTheDocument();
    userEvent.click(nextPokemon);

    expect(charmanderCard).toBeInTheDocument();
  });

  it('Should contain a button for reset filters', () => {
    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    const dragonFilter = screen.getByRole('button', { name: /dragon/i });
    const resetFilter = screen.getByRole('button', { name: /all/i });

    userEvent.click(dragonFilter);
    expect(nextPokemon.disabled).toBe(true);

    userEvent.click(resetFilter);
    expect(nextPokemon.disabled).toBe(false);
  });
});
