import "./QuestСomplete.scss";
import { Brand } from "../../../Brand/Brand.jsx";
import { Button } from "../../../Button/Button.jsx";

const QuestComplete = () => {
  return (
    <div className="questComplete">
      <div className="questComplete__wrapper">
        <div className="questComplete__top">
          <Brand size="large" type="ava" />
          <h3 className="questComplete__title">
            Ты всё ближе к цели! 1-ый уровень позади!
          </h3>
          <p className="questComplete__text">
            Ты участвуешь в розыгрыше 50 сертификатов номиналом 10 000 тенге
          </p>
        </div>
        <div className="questComplete__bottom">
          <Button size="large" onClick={() => {}} text="К следующему уровню" />
        </div>
      </div>
      <img
        className="questComplete__image"
        src="https://www.technodom.kz/under/lunar-new-year/ava-prize-1.png"
        alt=""
      />
    </div>
  );
};

export { QuestComplete };
