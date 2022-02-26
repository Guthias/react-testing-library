import React from 'react';
import { render, screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';

const props = {
  pokemon: {
    id: 393,
    name: 'Piplup',
    type: 'Water',
    averageWeight: {
      value: '5.2',
      measurementUnit: 'kg',
    },
    image: 'https://archives.bulbagarden.net/media/upload/a/a7/Spr_5b_393.png',
  },
  isFavorite: false,
};

describe('Pokemon', () => {
  beforeEach(() => {
    render(
      <Pokemon { ...props } />,
    );
  });

  it('', () => { });
});
