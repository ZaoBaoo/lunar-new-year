import { StartScene } from "../components/SceneSwitcher/components/StartScene/StartScene";
import { BrandsScene } from "../components/SceneSwitcher/components/BrandsScene/BrandsScene";
import { PopupScene } from "../components/SceneSwitcher/components/PopupScene/PopupScene";
import { GamePreview } from "../components/SceneSwitcher/components/GamePreview/GamePreview";
import { QuizSound } from "../components/SceneSwitcher/components/QuizSound/QuizSound";
import { QuestComplete } from "../components/SceneSwitcher/components/QuestСomplete/QuestСomplete.jsx";
import { TicTacToe } from "../components/SceneSwitcher/components/TicTacToe/TicTacToe.jsx";
import { QuizQuestions } from "../components/SceneSwitcher/components/QuizQuestions/QuizQuestions.jsx";
import { MemoryGame } from "../components/SceneSwitcher/components/MemoryGame/MemoryGame.jsx";
import { CommercialQuest } from "../components/SceneSwitcher/components/CommercialQuest/CommercialQuest.jsx";
import { QuizQuestionsGrid } from "../components/SceneSwitcher/components/QuizQuestionsGrid/QuizQuestionsGrid.jsx";
import { Puzzle15 } from "../components/SceneSwitcher/components/Puzzle-15/Puzzle-15.jsx";

export const sceneComponents = {
  start: StartScene,
  brands: BrandsScene,
  popup: PopupScene,
  gamePreview: GamePreview,
  quizSound: QuizSound,
  questComplete: QuestComplete,
  quizQuestions: QuizQuestions,
  ticTacToe: TicTacToe,
  memoryGame: MemoryGame,
  commercialQuest: CommercialQuest,
  quizQuestionsGrid: QuizQuestionsGrid,
  puzzle15: Puzzle15,
};
