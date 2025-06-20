import Head from 'next/head';
import FlashcardDeck from '../components/FlashcardDeck';
import { flashcards } from '../data/flashcards';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Computer Vision Transformer Flashcards</title>
        <meta name="description" content="Learn about Vision Transformers with flashcards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Computer Vision Transformer Flashcards
        </h1>
        
        <p className="description">
          Learn about Vision Transformer (ViT) and Swin Transformer architectures
        </p>

        <div className="papers-summary">
          <h2>Based on Research Papers:</h2>
          <ul>
            <li>
              <strong>An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale</strong> - 
              The Vision Transformer (ViT) applies a pure transformer directly to image patches, showing strong 
              performance without convolutional layers.
            </li>
            <li>
              <strong>Swin Transformer: Hierarchical Vision Transformer using Shifted Windows</strong> - 
              Introduces a hierarchical vision transformer that uses shifted windows to efficiently process 
              visual information at multiple scales.
            </li>
          </ul>
        </div>

        <div className="flashcard-section">
          <FlashcardDeck cards={flashcards} />
        </div>
      </main>

      <footer className="footer">
        <p>
          Created with Next.js and React
        </p>
      </footer>
    </div>
  );
}