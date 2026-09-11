import { Mail, Phone, GitBranch, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-20 py-16 mb-16 lg:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <a href="#accueil" className="text-xl font-bold text-on-surface tracking-tight font-display-hero">
              MLS<span className="text-primary">.</span>
            </a>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              Développeur Full Stack spécialisé en Laravel, React & Next.js.
              Disponible pour stage et collaborations techniques.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">Navigation</span>
            <div className="flex flex-col gap-2">
              <a href="#accueil" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body">Accueil</a>
              <a href="#a-propos" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body">À propos</a>
              <a href="#competences" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body">Compétences</a>
              <a href="#projets" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body">Projets</a>
              <a href="#contact" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-body">Contact</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">Contact</span>
            <div className="flex flex-col gap-2 text-on-surface-variant text-sm font-body">
              <a href="mailto:senelamine893@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary shrink-0" /> senelamine893@gmail.com
              </a>
              <a href="tel:+221783162105" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary shrink-0" /> +221 78 316 21 05
              </a>
              <a href="https://github.com/MouhamedLamine3009" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <GitBranch size={14} className="text-primary shrink-0" /> GitHub
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" /> Rufisque, Dakar, Sénégal
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-on-surface-variant text-xs font-code">
            © {new Date().getFullYear()} Mouhamed Lamine Sene. Tous droits réservés.
          </span>
          <span className="text-on-surface-variant text-xs font-code flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Disponible pour stage
          </span>
        </div>
      </div>
    </footer>
  );
}
