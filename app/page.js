import Head from 'next/head';
import Board from '@/app/components/tabuleiro';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabuleiro de Damas</title>
      </Head>
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        <Board />
      </main>
    </>
  );
}
