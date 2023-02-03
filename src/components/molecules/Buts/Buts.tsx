import {Butt} from '../atoms/Butt';

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const Buts: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <Butt {...props} />
      <Butt {...props} />
    </div>
  )
};