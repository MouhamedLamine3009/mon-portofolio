import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';
import ThemeProvider from './context/ThemeProvider';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-on-surface transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="accueil" className="scroll-mt-20 lg:scroll-mt-24"><Accueil /></section>
          <section id="a-propos" className="scroll-mt-20 lg:scroll-mt-24"><APropos /></section>
          <section id="competences" className="scroll-mt-20 lg:scroll-mt-24"><Competences /></section>
          <section id="projets" className="scroll-mt-20 lg:scroll-mt-24"><Projets /></section>
          <section id="contact" className="scroll-mt-20 lg:scroll-mt-24"><Contact /></section>
        </main>
        <Footer />
        <MobileNav />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;