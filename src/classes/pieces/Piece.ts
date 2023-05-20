import Move from "../game/Move";

export default abstract class Piece {
  color: string;
  abstract possibleMoves: { x: number; y: number }[];

  constructor(color: string) {
    this.color = color;
  }

  public abstract makeMove(move: Move): void;
}
