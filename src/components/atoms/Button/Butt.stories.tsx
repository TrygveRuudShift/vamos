import { Butt } from './Butt';

export default {
  title: 'atom/Button',
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
