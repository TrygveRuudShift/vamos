import { DummyButton } from "../../atoms/Button/DummyButton";

interface ButtonsProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  [key: string]: any;
}

export const DummyButtons: React.FC<ButtonsProps> = ({size, children, ...props}) => {
  return (
    <div>
      <DummyButton size={size} {...props}>{children}</DummyButton>
      <DummyButton size={size} {...props}>{children}</DummyButton>
      <DummyButton size={size} {...props}>{children}</DummyButton>
    </div>
  );
    
};