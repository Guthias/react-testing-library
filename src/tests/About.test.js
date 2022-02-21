import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

const imgUrl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

describe('About', () => {
  beforeEach(() => {
    render(
      <About />,
    );
  });

  it('Should contain a h2 with text \'About Pokédex\'', () => {
    const titleElement = screen.getByRole('heading',
      { level: 2, name: /About Pokédex/i });

    expect(titleElement).toBeInTheDocument();
  });

  it('Should contain two paragraphs with texts about the pokedex', () => {
    const firstParagraph = screen.getByText(/This application simulates a Pokédex/i);
    const secondParagraph = screen.getByText(/One can filter Pokémons by type/i);
    expect(firstParagraph && secondParagraph).toBeInTheDocument();
  });

  it('Should contain a pokedex image', () => {
    const imageElement = screen.getByRole('img');
    expect(imageElement.src).toBe(imgUrl);
  });
});
