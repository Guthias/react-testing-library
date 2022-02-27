import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

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

  it('Should contain a area with Pokemon summary', () => {
    const titleElement = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });
    expect(titleElement).toBeInTheDocument();

    const summaryContent = screen.getByText(pokemons[0].summary);
    expect(summaryContent).toBeInTheDocument();
  });

  it('Should contain a area for show Pokemon routes', () => {
    const titleElement = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
      level: 2,
    });
    expect(titleElement).toBeInTheDocument();

    const routesContent = screen.getAllByRole('img', {
      name: /pikachu location/i,
    });

    routesContent.forEach((route, index) => {
      expect(route.src).toBe(pokemons[0].foundAt[index].map);
    });
  });

  it('Should contain a checkbox for mark Pokemon as favorite', () => {
    const favoriteCheckbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(favoriteCheckbox);

    let favoriteStar = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });

    expect(favoriteStar).toBeInTheDocument();
    userEvent.click(favoriteCheckbox);

    expect(favoriteStar).not.toBeInTheDocument();
    userEvent.click(favoriteCheckbox);

    favoriteStar = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });

    expect(favoriteStar).toBeInTheDocument();
  });
});
