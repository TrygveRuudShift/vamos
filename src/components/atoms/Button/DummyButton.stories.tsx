import React from 'react';
import { DummyButton } from './DummyButton';

export default {
  title: 'atom/DummyButton',
  component: DummyButton,
  args : { children : 'Button' },
};

export const Default = {}

export const Large = { args : { size : 'large', children: "Large" } }
export const Medium = { args : { size : 'medium', children: "Medium" } }
export const Small = { args : { size : 'small', children: "Small" } }

