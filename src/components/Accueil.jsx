import { ArrowRight, Mail, Code, Download } from 'lucide-react';
import Reveal from './Reveal';

export default function Accueil() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 lg:py-24 flex flex-col justify-center overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column */}
          <Reveal direction="left" className="lg:col-span-7 lg:h-auto">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface">
                DISPONIBLE POUR UN STAGE — DAKAR & REMOTE
              </span>
            </div>

            <div className="flex flex-col gap-1 mt-1">
              <span className="font-code text-xs uppercase tracking-widest text-primary font-semibold">
                Architecte Logiciel & Ingénieur Produit
              </span>
              <h1 className="font-display-hero text-4xl lg:text-6xl text-on-surface tracking-tight uppercase">
                Mouhamed Lamine Sene
              </h1>
              <p className="font-headline text-lg lg:text-xl text-primary font-medium tracking-tight mt-1">
                Développeur Full Stack — Laravel, React & Next.js
              </p>
            </div>

            <p className="font-body text-base lg:text-lg text-on-surface-variant max-w-2xl leading-relaxed mt-2">
              Diplômé en informatique de gestion, avec une solide base théorique et pratique,
              une grande capacité d'apprentissage et d'adaptation. Prêt à relever de nouveaux défis techniques.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <a
                href="#projets"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-headline text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                <span>Voir mes projets</span>
                <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright font-headline text-sm font-medium tracking-wide shadow-sm transition-all duration-200"
              >
                <Mail size={20} className="text-primary" />
                <span>Me contacter</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-on-surface-variant">
              <a className="group inline-flex items-center gap-1 hover:text-primary transition-colors" href="https://github.com/MouhamedLamine3009" rel="noreferrer" target="_blank">
                <Code size={18} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                <span className="font-code text-xs">github.com/MouhamedLamine3009</span>
              </a>
              <span className="hidden sm:inline-block text-surface-container-highest">•</span>
              <a className="group inline-flex items-center gap-1 hover:text-primary transition-colors" href="/CV-Mouhamed-Lamine-Sene.pdf" target="_blank" rel="noreferrer">
                <Download size={18} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                <span className="font-code text-xs">Télécharger CV</span>
              </a>
            </div>
          </div>
          </Reveal>

          {/* Right Column — Photo */}
          <Reveal direction="right" className="lg:col-span-5 lg:h-auto" delay={150}>
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 w-full">
            <div className="relative w-full max-w-md lg:max-w-[460px]">
              <div className="absolute -inset-8 bg-gradient-to-tr from-primary-container/30 via-primary/20 to-transparent rounded-[40px] blur-3xl opacity-70 pointer-events-none -z-10" />
              <div className="absolute -top-10 -right-8 w-72 h-72 rounded-full border border-primary/20 blur-[1px] rotate-12 pointer-events-none -z-10 hidden sm:block" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-primary-container/15 blur-2xl pointer-events-none -z-10" />

              <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-b from-primary/50 via-primary-container/20 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(192,138,62,0.15)]">
                <div className="relative rounded-[22px] overflow-hidden bg-surface-container-lowest w-full h-[540px] lg:h-[620px]">
                  <img
                    alt="Mouhamed Lamine Sene"
                    className="w-full h-full object-cover object-top transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm2ifDwBZi2lg8U0p9swcyNZOFLHaya_HYUk7oU_cTI2XTYrY1TFjJ_xLihmHB2T9aDnXmENM6I1lvvx4JzVREMV6qYNyJEYXQnR42jke2Ln_ZPoqdrYfXV1xuiM31P1xlWQAHNEfybfYb1O25JjRT4oJo3MmhNwPIQYBuzpQGRg2uJ4wM_D-g1jfvocvp6BFSNW8jMYiN8bqrjGrBhw1k9JHNBpj0S_ckClb4o3v5N2SIZm6FDsVoFujpHaHbANYkBg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent opacity-90 pointer-events-none" />

                  <div className="absolute bottom-24 inset-x-5 z-10 flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-2 h-0.5 bg-primary" />
                      <span className="font-label text-xs uppercase tracking-wider text-primary font-semibold">Profil Technique</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Laravel', 'React', 'Next.js', 'TypeScript', 'Docker', 'CI/CD', 'Python'].map((tech) => (
                        <span key={tech} className="font-code text-xs px-2.5 py-1 rounded-lg bg-surface-container-lowest/80 text-on-surface backdrop-blur-md border border-outline-variant/30 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Location */}
              <div className="absolute -top-3 right-3 z-20 px-3 py-2 rounded-xl bg-surface-container-lowest/85 backdrop-blur-md border border-primary-container/30 shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="font-code text-xs text-on-surface font-medium">Dakar, SN</span>
              </div>

              {/* Floating Badge: Education */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-20 p-3 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl border border-primary-container/30 shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-container to-primary text-on-primary flex items-center justify-center shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                </div>
                <div className="flex flex-col pr-1">
                  <span className="font-headline text-sm font-semibold text-on-surface leading-tight">Bac+3 Info de Gestion</span>
                  <span className="font-code text-xs text-primary/90 mt-0.5">Fondations Math & Algo</span>
                </div>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Piliers Methodologiques */}
      <section className="w-full py-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">Piliers Méthodologiques</span>
              <h2 className="font-headline text-2xl lg:text-3xl text-on-surface tracking-tight mt-1">Pratiques & Discipline</h2>
            </div>
            <p className="font-code text-xs text-on-surface-variant max-w-xs">
              Exécution minutieuse du design architectural à l'optimisation des requêtes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: 'database',
              title: 'Architecture Backend Robuste',
              desc: 'Modélisation rigoureuse de bases de données relationnelles, API RESTful sécurisées avec Laravel, Eloquent ORM maîtrisé, découpage en services et tests unitaires cohérents.',
              tags: 'PostgreSQL • MySQL • Redis',
              tagIcon: 'dns',
            },
            {
              icon: 'layers',
              title: 'Interfaces Web Modernes & Réactives',
              desc: "Développement d'expériences fluides et accessibles en React et Next.js. Maîtrise de Tailwind CSS pour un rendu épuré, du responsive design strict et des architectures de composants isolés.",
              tags: 'App Router • SSR • State Mgmt',
              tagIcon: 'devices',
            },
            {
              icon: 'hub',
              title: "Culture d'Ingénierie & Rigueur",
              desc: "Sens aigu du code maintenable : Clean Code, versioning Git méthodique, veille constante, esprit d'analyse et intégration rapide au sein d'équipes pluridisciplinaires agiles.",
              tags: 'Git • CI/CD • Clean Arch',
              tagIcon: 'verified_user',
            },
          ].map((item, index) => (
            <Reveal key={item.icon} delay={index * 120}>
              <div className="group flex flex-col justify-between p-6 rounded-2xl bg-surface-container shadow-md hover:bg-surface-container-high transition-all duration-300 h-full">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high group-hover:bg-primary-container/20 group-hover:text-primary transition-colors flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline text-base text-on-surface tracking-tight">{item.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="font-code text-xs">{item.tags}</span>
                <span className="material-symbols-outlined text-[18px]">{item.tagIcon}</span>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Recrutement */}
      <section className="w-full py-8">
        <Reveal delay={100}>
          <div className="p-8 rounded-2xl bg-surface-container-low shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-xl text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-wider text-primary">Collaboration & Recrutement</span>
            <h3 className="font-headline text-lg text-on-surface">À la recherche d'un profil engagé et opérationnel ?</h3>
            <p className="font-body text-sm text-on-surface-variant">
              Je suis disponible immédiatement pour un stage en entreprise ou à distance,
              afin de contribuer concrètement à vos projets tout en continuant d'élever mes compétences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a href="#contact" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-on-primary font-headline text-sm font-semibold tracking-wide shadow-md transition-all hover:brightness-110 active:scale-95 text-center">
              Proposer un entretien
            </a>
            <a href="mailto:senelamine893@gmail.com" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright font-headline text-sm font-medium tracking-wide shadow-sm transition-all text-center">
              senelamine893@gmail.com
            </a>
          </div>
          </div>
          </Reveal>
      </section>
    </div>
  );
}
