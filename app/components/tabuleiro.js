// components/Board.js
import styles from '@/app/styles/tabuleiro.module.css';
import Square from '@/app/components/quadrados';
import Piece from '@/app/components/peca';

export default function Board() {
  const board = [];

  for (let row = 0; row < 8; row++) {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      const hasPiece =
        (row < 3 && isBlack) || (row > 4 && isBlack);
      const pieceColor = row < 3 ? 'black' : row > 4 ? 'white' : null;

      squares.push(
        <Square key={`${row}-${col}`} isBlack={isBlack}>
          {hasPiece && <Piece color={pieceColor} />}
        </Square>
      );
    }
    board.push(
      <div key={row} className={styles.row}>
        {squares}
      </div>
    );
  }

  return <div className={styles.board}>{board}</div>;
}
