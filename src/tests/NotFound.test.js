import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/Notfound';

describe('Not Found', () => {
  beforeEach(() => {
    render(
      <NotFound />,
    );
  });

  it('Should contain a h2 with text \'Page requested not found 😭\'', () => { });

  it('Should contain a image with pikachu crying', () => { });
});
