import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando o componente App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });

  test('Teste se o link Home está presente na aplicação', () => {
    const linkElement = screen.getByRole('link', { name: 'Home' });
    expect(linkElement).toBeInTheDocument();
  });

  test('Teste se o link About está presente na aplicação', () => {
    const linkElement = screen.getByRole('link', { name: 'About' });
    expect(linkElement).toBeInTheDocument();
  });
});
