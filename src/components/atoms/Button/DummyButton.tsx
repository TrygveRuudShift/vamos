interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  [key: string]: any;
}


// Small is the default size
export const DummyButton: React.FC<ButtonProps> = ({ children, size, ...props }) => {

  let fontsize = undefined;
  if (size) {
    if (size === "small") fontsize = 12;
    if (size === "medium") fontsize = 16;
    if (size === "large") fontsize = 20;
  }

  return (
    <button
      {...props}
      style={{ fontSize: fontsize }}
    >
      {children}
    </button>
  );
};
