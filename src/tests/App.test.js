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
  navLinks.forEach(({ text, url }) => {
    it(`Should contain a Link with the text ${text} and redirect to '${url}'`, () => {
      const { history } = renderWithRouter(<App />);
      const linkElement = screen.getByRole('link', { name: text });
      userEvent.click(linkElement);
      const { pathname } = history.location;
      expect(pathname).toBe(url);
    });
  });
});
