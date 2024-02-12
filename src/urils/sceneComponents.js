import { StartScene } from "../components/SceneSwitcher/components/StartScene/StartScene";
import { BrandsScene } from "../components/SceneSwitcher/components/BrandsScene/BrandsScene";
import { PopupScene } from "../components/SceneSwitcher/components/PopupScene/PopupScene";
import { GamePreview } from "../components/SceneSwitcher/components/GamePreview/GamePreview";
import { QuizSound } from "../components/SceneSwitcher/components/QuizSound/QuizSound";
import { QuestComplete } from "../components/SceneSwitcher/components/QuestСomplete/QuestСomplete.jsx";

export const sceneComponents = {
  start: StartScene,
  brands: BrandsScene,
  popup: PopupScene,
  gamePreview: GamePreview,
  quizSound: QuizSound,
  questComplete: QuestComplete,
};
