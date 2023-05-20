import Move from "../game/Move";

export default abstract class Piece {
  color: string;
  abstract possibleMoves: Move[];

  constructor(color: string) {
    this.color = color;
  }
}
