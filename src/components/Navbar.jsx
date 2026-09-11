import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/themeContext';

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À propos', href: '#a-propos' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Projets', href: '#projets' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* ===== Zone Gauche : Identité ===== */}
          <a href="#accueil" className="flex flex-col shrink-0 leading-none">
            <span className="text-base lg:text-lg font-bold text-on-surface tracking-tight font-display-hero">
              Mouhamed Lamine Sene
            </span>
            <span className="text-[11px] lg:text-xs text-on-surface-variant font-code tracking-wide hidden sm:block">
              Full Stack Developer — Rufisque / Dakar
            </span>
          </a>

          {/* ===== Zone Centrale : Navigation (Desktop) ===== */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium font-label transition-all duration-200 ${
                    isActive
                      ? 'text-on-surface bg-surface-container-high font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* ===== Zone Droite : Badge Statut + Toggle Thème ===== */}
          <div className="flex items-center gap-3">
            {/* Badge Disponibilité */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-dot opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-dot" />
              </span>
              <span className="text-xs font-medium text-on-surface-variant font-label whitespace-nowrap">
                DISPONIBLE POUR STAGE
              </span>
            </div>

            {/* Toggle Thème */}
            <button
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-200"
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              <Sun
                size={18}
                className={`absolute transition-all duration-300 ${
                  theme === 'dark'
                    ? 'opacity-0 rotate-90 scale-0'
                    : 'opacity-100 rotate-0 scale-100 text-on-surface'
                }`}
              />
              <Moon
                size={18}
                className={`absolute transition-all duration-300 ${
                  theme === 'dark'
                    ? 'opacity-100 rotate-0 scale-100 text-on-surface'
                    : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </button>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-200 text-on-surface-variant"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Menu Mobile Déroulant ===== */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface border-b border-outline-variant/20 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 px-3 rounded-lg text-sm font-medium font-label transition-colors ${
                  isActive
                    ? 'text-on-surface bg-surface-container-high font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Badge Disponibilité Mobile */}
          <div className="flex items-center gap-2 px-3 py-2 mt-2 rounded-full bg-surface-container-high border border-outline-variant/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-dot opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-dot" />
            </span>
            <span className="text-xs font-medium text-on-surface-variant font-label">
              DISPONIBLE POUR STAGE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
