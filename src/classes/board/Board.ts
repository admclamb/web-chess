export default class Board<T> {
  positions: T;
  constructor(configuredBoard: T) {
    this.positions = configuredBoard;
  }
}
