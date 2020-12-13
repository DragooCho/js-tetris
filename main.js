const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// 상수를 사용해 캔버스의 크기를 계산한다.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

class Board {
  grid;

  // 새 게임이 시작되면 보드를 초기화한다.
  reset() {
    this.grid = this.getEmptyBoard();
  }

  // 0으로 채워진 행렬을 얻는다.
  getEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}

let board = new Board();

function play() {
  board = getEmptyBoard();
  let piece = new Piece(ctx);
  piece.draw();

  board.piece = piece;
}
