import "./Loader.scss";
import { clsx } from "clsx";

const Loader = ({ className = "" }) => {
  return <div className={clsx("loader", className)}></div>;
};

export { Loader };
