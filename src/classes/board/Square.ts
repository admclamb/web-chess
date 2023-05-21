import Piece from "../pieces/Piece";

export default class Square {
  private color: string;
  private piece: Piece | null = null;
  private squareElement: HTMLDivElement;
  constructor(color: string, initialPiece: Piece | null = null) {
    this.color = color;
    this.piece = initialPiece;
    this.squareElement = document.createElement("div");
    this.squareElement.classList.add(color);
    this.squareElement.classList.add("square");
  }

  public occupy(piece: Piece): void {
    if (!this.piece) {
      throw new Error("Square is already occupied");
    }
    this.piece = piece;
  }

  public unoccupy(): Piece {
    if (!this.piece) {
      throw new Error("This square is not occupied");
    }
    const piece = this.piece;
    this.piece = null;
    return piece;
  }

  public getColor(): string {
    return this.color;
  }

  public getPiece(): Piece | null {
    return this.piece;
  }

  public render(): HTMLDivElement {
    return this.squareElement;
  }
}
