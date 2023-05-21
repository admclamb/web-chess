import TraditionalGame from "./classes/game/TraditionalGame";
import "./style.css";

const appElement = document.querySelector("#app");
const game = new TraditionalGame();
game.start();
const boardElement = game.getBoardElement();
appElement?.appendChild(boardElement);
