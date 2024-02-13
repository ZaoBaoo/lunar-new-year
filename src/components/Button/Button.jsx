import "./Button.scss";
import { clsx } from "clsx";

const Button = ({ text, size, className = "", ...props }) => {
  return (
    <button
      className={clsx(
        {
          button: true,
          button_large: size === "large",
          button_small: size === "small",
        },
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
};

export { Button };
