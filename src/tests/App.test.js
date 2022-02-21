import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando o componente App', () => {
  test('Teste se o link Home está presente na aplicação', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const linkElement = screen.getByRole('link', { name: 'Home' });
    expect(linkElement).toBeInTheDocument();
  });
});
