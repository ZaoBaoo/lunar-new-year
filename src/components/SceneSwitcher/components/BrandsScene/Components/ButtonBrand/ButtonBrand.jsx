import "./ButtonBrand.scss";
import { Brand } from "../../../../../Brand/Brand";

const ButtonBrand = ({ type = "", isActive, handleNextScene }) => {
  return (
    <button className="buttonBrand" onClick={() => handleNextScene(type)}>
      <Brand type={type} size="small" isActive={isActive} />
    </button>
  );
};

export { ButtonBrand };
