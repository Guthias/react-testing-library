import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from '../components/About';

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

  it('Should contain a pokedex image', () => {
    fail('empty test');
  });
});
