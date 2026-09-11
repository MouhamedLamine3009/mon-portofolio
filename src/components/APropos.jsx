import Reveal from './Reveal';

export default function APropos() {
  return (
    <div className="w-full">
      <section className="py-16 lg:py-24">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary font-code text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              <span>Index d'Ingénierie Personnelle</span>
            </div>
            <h1 className="font-display-hero text-2xl lg:text-5xl text-on-surface tracking-tight">
              01 // À PROPOS — PARCOURS & PHILOSOPHIE
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-surface-container-high text-on-surface-variant font-code text-xs flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
              <span>MLS_SPEC_REV_2025.02</span>
            </div>
</div>
          </div>
          </Reveal>

        {/* Énoncé Directeur */}
        <Reveal delay={80}>
          <div className="relative bg-surface-container-low rounded-xl p-8 lg:p-12 mb-12 shadow-md overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest mb-3">
                <span className="material-symbols-outlined text-[18px]">format_quote</span>
                <span>Énoncé Directeur</span>
              </div>
              <p className="font-headline text-base lg:text-lg text-on-surface font-medium leading-relaxed">
                « Diplômé en informatique de gestion, avec une solide base théorique et pratique,
                une grande capacité d'apprentissage et d'adaptation. Prêt à relever de nouveaux défis techniques. »
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-on-surface-variant font-code text-xs">
                <span className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[16px]">verified</span> Rigueur Algorithmique
                </span>
                <span>•</span>
                <span>Architecture Web & Mobile</span>
                <span>•</span>
                <span>Orientation Résultats Métier</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end justify-center pl-8 text-right">
              <span className="font-label text-xs text-outline uppercase tracking-wider">Statut Ingénieur</span>
              <span className="font-headline text-base text-primary font-semibold mt-1">Opérationnel</span>
              <span className="font-code text-xs text-on-surface-variant mt-0.5">Rufisque • Dakar • Remote</span>
            </div>
          </div>
          </div>
          </Reveal>

        {/* Grid: Formation + Certifications + Langues + Localisation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Formation */}
            <Reveal delay={120}>
              <div className="bg-surface-container rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">school</span>
                  </div>
                  <div>
                    <span className="font-label text-xs uppercase tracking-wider text-outline">Formation & Académie</span>
                    <h2 className="font-headline text-base text-on-surface font-semibold">Parcours Universitaire</h2>
                  </div>
                </div>
                <span className="font-code text-xs px-3 py-1 rounded-full bg-surface-container-highest text-primary">2022 — Présent</span>
              </div>

              <div className="space-y-4">
                <div className="bg-surface-container-high rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="font-headline text-sm font-semibold text-on-surface">Licence 3 Informatique de Gestion</h3>
                    <span className="font-code text-xs text-primary font-medium">UCAO / UNCHK Dakar</span>
                  </div>
                  <p className="font-code text-xs text-on-surface-variant uppercase tracking-wider mb-3">
                    Spécialisation : Développement Web & Mobile
                  </p>
                  <p className="font-body text-sm text-on-surface-variant">
                    Acquisition approfondie des architectures orientées services, des bases de données relationnelles normalisées,
                    de l'ingénierie des exigences logicielles et des modèles de conception avancés.
                  </p>
                </div>

                <div className="bg-surface-container-high rounded-xl p-5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[20px]">groups</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h4 className="font-headline text-sm font-semibold text-on-surface">Membre actif du club informatique à l'UCAO</h4>
                      <span className="font-code text-xs text-outline">Atelier & R&D</span>
                    </div>
                    <p className="font-body text-sm text-on-surface-variant">
                      Organisation d'ateliers de programmation collaborative, émulation technique collective,
                      révision de code par les pairs et transfert de compétences sur les standards web modernes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Reveal>

            {/* Certification */}
            <Reveal delay={200}>
              <div className="bg-surface-container rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                  </div>
                  <div>
                    <span className="font-label text-xs uppercase tracking-wider text-outline">Accréditation Officielle</span>
                    <h2 className="font-headline text-base text-on-surface font-semibold">Certification Technique</h2>
                  </div>
                </div>
                <span className="font-code text-xs px-3 py-1 rounded-full bg-surface-container-highest text-primary font-medium">Validé • 2025</span>
              </div>

              <div className="bg-surface-container-high rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-headline text-sm font-bold text-on-surface">Python Essentials 1</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-code text-xs text-primary">Cisco & OpenEDG</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant mb-3">
                    Maîtrise rigoureuse des concepts fondamentaux, algorithmique procédurale et structurée,
                    structures de données natives, manipulation mémoire et logique modulaire sous Python standard.
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {['Algorithmique', 'Data Structures', 'Clean Code'].map((tag) => (
                      <span key={tag} className="font-code text-xs px-2 py-1 rounded-md bg-surface-container-highest text-on-surface">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-auto flex md:flex-col items-center justify-between md:justify-center p-4 rounded-xl bg-surface-container-highest shrink-0 gap-2 text-center">
                  <span className="material-symbols-outlined text-[32px] text-primary">verified_user</span>
                  <span className="font-label text-xs uppercase tracking-wider text-on-surface font-semibold">Cisco Verified</span>
                  <span className="font-code text-xs text-outline">OpenEDG ID</span>
                </div>
              </div>
            </div>
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Langues */}
            <Reveal delay={250}>
              <div className="bg-surface-container rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">translate</span>
                </div>
                <div>
                  <span className="font-label text-xs uppercase tracking-wider text-outline">Compétences Linguistiques</span>
                  <h2 className="font-headline text-base text-on-surface font-semibold">Langues de Travail</h2>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'Français', level: 'Courant • Niveau C2 / Langue d\'instruction', pct: 85 },
                  { name: 'Anglais', level: 'Intermédiaire • Documentation & Collaboration', pct: 40 },
                ].map((lang) => (
                  <div key={lang.name} className="bg-surface-container-high rounded-xl p-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex flex-col">
                        <span className="font-headline text-sm font-semibold text-on-surface">{lang.name}</span>
                        <span className="font-code text-xs text-on-surface-variant">{lang.level}</span>
                      </div>
                      <span className="font-code text-xs font-semibold text-primary">{lang.pct}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${lang.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-surface-container-lowest text-on-surface-variant font-code text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">sync_alt</span>
                <span>Aptitude à opérer dans des environnements d'ingénierie multiculturels.</span>
              </div>
            </div>
            </Reveal>

            {/* Localisation */}
            <Reveal delay={350}>
              <div className="bg-surface-container rounded-xl p-8 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">pin_drop</span>
                  </div>
                  <div>
                    <span className="font-label text-xs uppercase tracking-wider text-outline">Disponibilité Géographique</span>
                    <h2 className="font-headline text-base text-on-surface font-semibold">Localisation & Mobilité</h2>
                  </div>
                </div>

                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 shadow-inner"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkxEu9SiLLEimPYAhrbED5Slalc_LyJNvZLkfWxioOtJUhnL28L0Nh2BktTI0s16uuBLXwscGTw4eHRxHEy4PCt6Yuh5NE5dZP3gKZ_AaEx63R4T5utrKiVw1mXFiDjh8XI7kDiqhMt2IwwY2Ho0WwDxVZmVVa2oE9CxuCT2XQtYJFHgZOr4yq8a2DYqDjpGZARqnb3y8o1Y5wVwNrBEFvjnDxyZ8vILYoH0rAm_cyeBDuMHSvIlIS')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-surface">
                    <div>
                      <span className="font-code text-xs block text-primary font-medium">Rufisque, Dakar</span>
                      <span className="font-label text-xs text-secondary uppercase">Sénégal • Fuseau GMT+0</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container-high/90 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-code text-xs text-on-surface">Direct Sync</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-on-surface-variant font-body text-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">apartment</span>
                    <span>Présentiel • Hub urbain de Dakar et axe Rufisque</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">public</span>
                    <span>Télétravail • Pleine disponibilité fuseaux EMEA & Amériques</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4">
                <div className="p-3 rounded-lg bg-surface-container-high flex items-center justify-between text-on-surface-variant font-code text-xs">
                  <span>Disponibilité :</span>
                  <span className="text-primary font-semibold">Immédiate pour stage / contrat</span>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="rounded-xl bg-surface-container-low p-8 lg:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-1 max-w-xl">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">Engageons une collaboration</span>
            <h3 className="font-headline text-base lg:text-lg text-on-surface font-semibold">
              Prêt à matérialiser vos architectures logicielles les plus ambitieuses.
            </h3>
            <p className="font-body text-sm text-on-surface-variant mt-1">
              Que ce soit pour un stage d'immersion, un contrat junior ou un projet structurant,
              découvrez mon profil détaillé ou échangeons directement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <a href="#contact" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-on-primary font-headline text-sm font-semibold flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 shadow-md">
              <span className="material-symbols-outlined text-[20px]">handshake</span>
              <span>Échanger sur une opportunité</span>
            </a>
            <a href="/CV-Mouhamed-Lamine-Sene.pdf" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-container-highest text-on-surface font-headline text-sm font-medium flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[20px] text-primary">download</span>
              <span>Télécharger le CV</span>
            </a>
          </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
