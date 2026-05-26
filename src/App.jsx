import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Carousel = lazy(() => import('./components/Carousel'));
const Benefits = lazy(() => import('./components/Benefits'));
const Courses = lazy(() => import('./components/Courses'));

function Fallback() {
  return <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F1F5F9] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Fallback />}><Carousel /></Suspense>
        <Suspense fallback={<Fallback />}><Benefits /></Suspense>
        <Suspense fallback={<Fallback />}><Courses /></Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
