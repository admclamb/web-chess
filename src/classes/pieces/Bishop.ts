import Move from "../game/Move";
import Piece from "./Piece";

export default class Bishop extends Piece {
  possibleMoves: Move[];
  constructor(color: string, possibleMoves: Move[]) {
    super(color);
    this.possibleMoves = possibleMoves;
  }
}
