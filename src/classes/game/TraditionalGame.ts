import Board from "../board/Board";
import Square from "../board/Square";
import Bishop from "../pieces/Bishop";
import King from "../pieces/King";
import Knight from "../pieces/Knight";
import Pawn from "../pieces/Pawn";
import Piece from "../pieces/Piece";
import Queen from "../pieces/Queen";
import Rook from "../pieces/Rook";
import Game from "./Game";
import Move from "./Move";

export default class TraditionalGame extends Game {
  pieces: Piece[];
  board: Board;
  constructor() {
    super();
    this.pieces = this.initPieces();
    const initialBoard = this.initBoard();
    this.board = new Board(initialBoard);
  }

  public start(): void {
    this.board.render();
  }

  public initMoves(): Move[] {
    return [];
  }

  public bindPieces(moves: Move[]): void {}

  public initBoard(): Square[][] {
    const initialBoard: Square[][] = [[], [], [], [], [], [], [], []];
    for (let row = 0; row < 8; row++) {
      for (let file = 0; file < 8; file++) {
        if (row % 2 === 0 || row === 0) {
          if (file % 2 === 0 || file === 0) {
            initialBoard[row].push(new Square("black"));
          } else {
            initialBoard[row].push(new Square("white"));
          }
        } else {
          if (file % 2 === 0 || file === 0) {
            initialBoard[row].push(new Square("white"));
          } else {
            initialBoard[row].push(new Square("black"));
          }
        }
      }
    }
    return initialBoard;
  }

  public initPieces(): Piece[] {
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

  public getBoardElement(): HTMLDivElement {
    return this.board.getElement();
  }
}
