export default class Move {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;

  constructor(toX: number, toY: number) {
    this.toX = toX;
    this.toY = toY;
    this.fromX = 0;
    this.fromY = 0;
  }
}
