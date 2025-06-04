import "./ScreenResolutionWarning.scss";
import React from "react";
import { Button } from "../Button/Button.jsx";

const ScreenResolutionWarning = () => {
  const handleSetLocation = () =>
    (window.location.href = "https://technodomkz.page.link/ny24");

  return (
    <div className="screenResolutionWarning">
      <p>Игра доступна только на телефоне</p>
      {/*<a*/}
      {/*  className="screenResolutionWarning__link"*/}
      {/*  href="https://technodomkz.page.link/ny24"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    src="https://www.technodom.kz/under/lunar-new-year/link-app.png"*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</a>*/}

      {/*<Button*/}
      {/*  className="screenResolutionWarning__button"*/}
      {/*  text="Скачать"*/}
      {/*  size="large"*/}
      {/*  onClick={handleSetLocation}*/}
      {/*/>*/}
    </div>
  );
};

export { ScreenResolutionWarning };
