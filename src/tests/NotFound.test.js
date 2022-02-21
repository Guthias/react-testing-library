import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Not Found', () => {
  beforeEach(() => {
    render(
      <NotFound />,
    );
  });

  it('Should contain a h2 with text \'Page requested not found\'', () => {
    const titleElement = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });
    expect(titleElement).toBeInTheDocument();
  });

  it('Should contain a image with pikachu crying', () => { });
});
