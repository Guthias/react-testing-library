import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const navLinks = [
  { text: /Home/i, url: '/' },
  { text: /about/i, url: '/about' },
  { text: /Favorite Pokémons/i, url: '/favorites' },
];

describe('App', () => {
  it('Should contain a Link with the text Home and redirect to \'/\'', () => {
    const { history } = renderWithRouter(<App />);
    const linkElement = screen.getByRole('link', { name: 'Home' });
    userEvent.click(linkElement);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
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
