import "./App.scss";
import { isMobile } from "../../urils/isMobile";

// Components
import { ScreenResolutionWarning } from "../ScreenResolutionWarning/ScreenResolutionWarning";
import { SceneSwitcher } from "../SceneSwitcher/SceneSwitcher";

function App() {
  return (
    <div className="app">
      {isMobile() ? <SceneSwitcher /> : <ScreenResolutionWarning />}
    </div>
  );
}

export { App };
