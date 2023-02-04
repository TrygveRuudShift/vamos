import React from 'react';
import { DummyButton } from './DummyButton';

export default {
  title: 'atom/DummyButton',
  component: DummyButton,
};

export const Large = () => <DummyButton size="large">Large Button</DummyButton>;
export const Medium = () => <DummyButton size="medium">Medium Button</DummyButton>;
export const Small = () => <DummyButton size="small">Small Button</DummyButton>;

