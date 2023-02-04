import { DummyButtons } from './DummyButtons';

export default {
  title: 'molecules/DummyButtons',
  component: DummyButtons,
    //! This is only for a more complex component, not needed
    argTypes: {
      size: {
        control: {
          type: 'select',
          options: ['small', 'medium', 'large'],
          defaultValue: 'small',
        }
      },
      children: {
        control: {
          type: 'text',
        },
        defaultValue: 'Button',
      }
    },
  };
  
const Template = (args: any) => <DummyButtons {...args}>{args.children}</DummyButtons>;
export const Primary = Template.bind({});

export const Small = () => <DummyButtons size="small">Small Button</DummyButtons>;
export const Medium = () => <DummyButtons size="medium">Medium Button</DummyButtons>;
export const Big = () => <DummyButtons size="large">Hello Button</DummyButtons>;
