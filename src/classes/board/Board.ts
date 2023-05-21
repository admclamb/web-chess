import Square from "./Square";

export default class Board {
  boardElement: HTMLDivElement;
  boardArray: Square[][];
  constructor(initialBoard: Square[][]) {
    this.boardArray = initialBoard;
    this.boardElement = document.createElement("div");
    this.boardElement.classList.add("board");
  }

  render(): void {
    for (let row = 0; row < 8; row++) {
      for (let file = 0; file < 8; file++) {
        const square = this.boardArray[row][file].render();
        this.boardElement.append(square);
      }
    }
    console.log(this.boardElement.innerHTML);
  }

  public getElement(): HTMLDivElement {
    return this.boardElement;
  }
}
