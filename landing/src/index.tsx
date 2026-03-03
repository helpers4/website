import { component$ } from '@builder.io/qwik';
import { NavBar } from './components/navbar';
import { Hero } from './components/hero';
import { Libraries } from './components/libraries';
import { Footer } from './components/footer';

export default component$(() => {
  return (
    <wa-page>
      <div slot="header">
        <NavBar />
      </div>
      <Hero />
      <Libraries />
      <div slot="footer">
        <Footer />
      </div>
    </wa-page>
  );
});
