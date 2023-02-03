import React from 'react';
import { Buts } from './Buts';

export default {
  title: 'BUTS',
  component: Buts,
};

export const Text = () => <Buts>Hello Button</Buts>;
export const Emoji = () => (
  <Buts>
    <span role="img" aria-label="so cool">
      TEEEST
    </span>
  </Buts>
);
