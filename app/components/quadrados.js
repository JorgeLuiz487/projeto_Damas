// components/Square.js
import styles from '@/app/styles/quadrado.module.css';

export default function Square({ isBlack, children }) {
  return (
    <div
      className={`${styles.square} ${isBlack ? styles.black : styles.white}`}
    >
      {children}
    </div>
  );
}
