import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Accueil', href: '#accueil', icon: 'home' },
  { name: 'Profil', href: '#a-propos', icon: 'person' },
  { name: 'Skills', href: '#competences', icon: 'code' },
  { name: 'Projets', href: '#projets', icon: 'terminal' },
  { name: 'Contact', href: '#contact', icon: 'mail' },
];

export default function MobileNav() {
  const [active, setActive] = useState('accueil');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-surface/90 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)]">
      <nav className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const id = item.href.slice(1);
          const isActive = active === id;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-1 px-2 transition-colors ${
                isActive
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="font-label text-[10px] uppercase mt-1">{item.name}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}