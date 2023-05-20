import Board from "../board/Board";
import Bishop from "../pieces/Bishop";
import King from "../pieces/King";
import Knight from "../pieces/Knight";
import Pawn from "../pieces/Pawn";
import Piece from "../pieces/Piece";
import Queen from "../pieces/Queen";
import Rook from "../pieces/Rook";
import Move from "./Move";

export default class Game {
  private init(): void {
    const board = new Board();
  }
  private initMoves(): void {}

  private initPieces(): Piece[] {
    const pieces: Piece[] = [];

    for (let i = 0; i <= 16; i++) {
      if (i <= 8) {
        pieces.push(new Pawn("white", []));
      } else {
        pieces.push(new Pawn("black", []));
      }
    }

    pieces.push(new Knight("white", []));
    pieces.push(new Knight("white", []));
    pieces.push(new Knight("black", []));
    pieces.push(new Knight("black", []));

    pieces.push(new Bishop("white", []));
    pieces.push(new Bishop("white", []));
    pieces.push(new Bishop("black", []));
    pieces.push(new Bishop("black", []));

    pieces.push(new Rook("white", []));
    pieces.push(new Rook("black", []));

    pieces.push(new Queen("white", []));
    pieces.push(new Queen("black", []));

    pieces.push(new King("white", []));
    pieces.push(new King("black", []));

    return pieces;
  }
}
