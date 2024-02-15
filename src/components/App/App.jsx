import "./App.scss";
import { isMobileApp } from "../../urils/isMobileApp.js";

// Components
import { ScreenResolutionWarning } from "../ScreenResolutionWarning/ScreenResolutionWarning";
import { SceneSwitcher } from "../SceneSwitcher/SceneSwitcher";
import { useEffect } from "react";
import { api } from "../../urils/Api.js";
import { parseProfile } from "../../urils/parseProfile.js";
import { useDispatch } from "react-redux";
import { setBrandsAction } from "../../store/reducers/scene.js";

function App() {
  const dispatch = useDispatch();

  const getUserProfile = async () => {
    const profileData = await api.getProfileUser();

    const brands = parseProfile(profileData);

    dispatch(setBrandsAction(brands));
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="app">
      {isMobileApp() ? <SceneSwitcher /> : <ScreenResolutionWarning />}
    </div>
  );
}

export { App };
