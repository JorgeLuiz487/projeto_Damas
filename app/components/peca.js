// components/Piece.js
import styles from '@/app/styles/peca.module.css';

export default function Piece({ color }) {
  return <div className={`${styles.piece} ${styles[color]}`} />;
}
