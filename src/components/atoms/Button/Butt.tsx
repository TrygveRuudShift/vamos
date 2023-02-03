

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const Butt: React.FC<ButtonProps> = (props) => {
  return <button {...props} />;
};