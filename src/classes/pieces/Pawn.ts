import Move from "../game/Move";
import Piece from "./Piece";

export default class Pawn extends Piece {
  constructor(color: string) {
    super(color);
  }

  public makeMove(move: Move): void {}
}
