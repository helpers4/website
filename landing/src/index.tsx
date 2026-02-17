import { component$ } from '@builder.io/qwik';
import { NavBar } from './components/navbar';
import { Hero } from './components/hero';
import { Libraries } from './components/libraries';
import { Footer } from './components/footer';
import styles from './index.module.css';

export default component$(() => {
  return (
    <main class={styles.main}>
      <NavBar />
      <Hero />
      <Libraries />
      <Footer />
    </main>
  );
});
