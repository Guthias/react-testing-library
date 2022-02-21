import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    fail('empty test');
  });

  it.only('Should contain a pokedex image', () => {
    const imageElement = screen.getByRole('img');
    expect(imageElement.src).toBe(imgUrl);
  });
});
