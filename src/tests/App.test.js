import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente App', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  test('Teste se o link Home está presente na aplicação', () => {
    const linkElement = screen.getByRole('link', { name: 'Home' });
    expect(linkElement).toBeInTheDocument();
  });

  test('Teste se o link About está presente na aplicação', () => {
    const linkElement = screen.getByRole('link', { name: 'About' });
    expect(linkElement).toBeInTheDocument();
  });

  test('Teste se o link Favorite Pokémons está presente na aplicação', () => {
    const linkElement = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkElement).toBeInTheDocument();
  });
});
