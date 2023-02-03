import {Butt} from "../../atoms/Button/Butt"

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