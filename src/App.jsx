import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';
import Carousel from './components/Carousel';
import Benefits from './components/Benefits';
import Courses from './components/Courses';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Carousel />
        <Benefits />
        <Courses />
        <Pricing />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
