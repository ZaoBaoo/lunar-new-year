import "./Brand.scss";
import { clsx } from "clsx";

const Brand = ({ type, isActive = "", className = "", size = "small" }) => {
  return (
    <img
      className={clsx(
        {
          brand: true,
          brand_small: size === "small",
          brand_large: size === "large",
        },
        className,
      )}
      src={`https://www.technodom.kz/under/lunar-new-year/brand-${type}${isActive ? "-active" : ""}.png`}
      alt=""
    />
  );
};

export { Brand };
