import React from 'react';
import { Butt } from './Butt';

export default {
  title: 'Button',
  component: Butt,
};

export const Text = () => <Butt>Hello Button</Butt>;
export const Emoji = () => (
  <Butt>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Butt>
);
