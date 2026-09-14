import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const categories = [
  { key: 'all', label: 'Toutes (5)' },
  { key: 'langages', label: '01. Langages' },
  { key: 'frameworks', label: '02. Frameworks & Full-Stack' },
  { key: 'devops', label: '03. Outils & DevOps' },
  { key: 'systemes', label: '04. Systèmes & Réseaux' },
  { key: 'softskills', label: '05. Soft Skills & Méthodes' },
];

export default function Competences() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="w-full">
      {/* Section Title */}
      <section className="w-full pb-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-primary font-code text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              <span>Index 02 / Stack Technique</span>
            </div>
            <h1 className="font-display-hero text-2xl lg:text-5xl text-on-surface tracking-tight">02 // COMPÉTENCES — STACK & ÉCOSYSTÈMES</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="font-code text-xs text-on-surface-variant">Architecture logicielle • Rufisque</span>
              <span className="font-code text-xs text-primary">Status : Prêt pour déploiement</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-[20px]">layers</span>
            </div>
          </div>
        </div>
        </Reveal>
        <div className="w-full h-px bg-surface-container-high mt-4" />
      </section>

      {/* Filter Buttons */}
      <section className="w-full pb-6">
        <div className="flex items-center justify-between flex-wrap gap-3 bg-surface-container-lowest p-2 rounded-xl shadow-sm">
          <div className="flex flex-wrap items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-1.5 rounded-lg font-code text-xs transition-all ${
                  filter === cat.key
                    ? 'bg-primary text-on-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="hidden xl:flex items-center gap-1 px-3 py-1 text-on-surface-variant font-code text-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">tune</span>
            <span>Filtrage réactif</span>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="w-full pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 01. Langages */}
          <SkillCard category="langages" filter={filter} span="lg:col-span-7" icon="code" index="01" title="Langages Fondamentaux" badge="6 Technologies"
            desc="Syntaxes maîtresses au cœur des moteurs applicatifs, requêtage relationnel structuré et restitution sémantique optimisée.">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
              {[
                { abbr: 'JS', name: 'JavaScript', ver: 'ES6+' },
                { abbr: 'PHP', name: 'PHP', ver: '8.x OOP' },
                { abbr: 'JV', name: 'Java', ver: 'Core/SE' },
                { abbr: 'PY', name: 'Python', ver: 'Scripting' },
                { abbr: '<>', name: 'HTML5 / CSS3', ver: 'Semantics' },
                { abbr: 'SQL', name: 'SQL', ver: 'Relational' },
              ].map((lang) => (
                <div key={lang.abbr} className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-dim transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="font-code text-xs font-semibold text-primary">{lang.abbr}</span>
                    <span className="font-code text-xs text-on-surface">{lang.name}</span>
                  </div>
                  <span className="font-label text-[10px] text-on-surface-variant">{lang.ver}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-surface-container-highest flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-code text-xs text-on-surface-variant">Distribution du code :</span>
                <div className="flex items-center gap-1">
                  <span className="w-6 h-2 rounded bg-primary" title="PHP / JS : 55%" />
                  <span className="w-4 h-2 rounded bg-surface-container-highest" title="Java : 20%" />
                  <span className="w-3 h-2 rounded bg-outline-variant" title="Python : 15%" />
                  <span className="w-2 h-2 rounded bg-surface-bright" title="SQL : 10%" />
                </div>
              </div>
              <span className="font-code text-xs text-primary">Typage rigoureux</span>
            </div>
          </SkillCard>

          {/* 02. Frameworks */}
          <SkillCard category="frameworks" filter={filter} span="lg:col-span-5" icon="terminal" index="02" title="Frameworks & Full-Stack" badge="SPA / SSR"
            desc="Composants réactifs, architectures modulaires avec hydratation server-side et applications natives cross-platform.">
            <div className="flex flex-col gap-2">
              {[
                { name: 'React', level: 50, label: 'Intermédiaire' },
                { name: 'Next.js (App Router)', level: 50, label: 'Intermédiaire' },
                { name: 'Laravel / Inertia.js', level: 65, label: 'Intermédiaire' },
                { name: 'Laravel / Livewire', level: 65, label: 'Intermédiaire' },
              ].map((fw) => (
                <div key={fw.name} className="p-3 rounded-lg bg-surface-container-lowest flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-code text-xs text-on-surface font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">radio_button_checked</span> {fw.name}
                    </span>
                    <span className="font-label text-[10px] text-primary">{fw.label}</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${fw.level}%` }} />
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                  <span className="font-code text-xs text-on-surface">Tailwind CSS</span>
                  <span className="font-label text-[10px] text-primary">Design Sys</span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                  <span className="font-code text-xs text-on-surface">NativePHP</span>
                  <span className="font-label text-[10px] text-on-surface-variant">Desktop & Mobile</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-2 flex items-center justify-between font-code text-xs text-on-surface-variant">
              <span>Standard MVC + Hydration</span>
              <span className="text-primary font-semibold">100% Type-Safe</span>
            </div>
          </SkillCard>

          {/* 03. DevOps */}
          <SkillCard category="devops" filter={filter} span="lg:col-span-4" icon="dns" index="03" title="Outils & DevOps" badge=""
            desc="Automatisation, conteneurisation des services et intégration continue pour des déploiements fiables.">
            <div className="flex flex-col gap-2">
              {[
                { icon: 'commit', name: 'Git / GitHub', label: 'GitFlow' },
                { icon: 'inventory_2', name: 'Docker & Compose', label: 'Conteneurs' },
                { icon: 'published_with_changes', name: 'CI/CD (GH Actions)', label: 'Pipelines' },
                { icon: 'api', name: 'Postman', label: 'API Tests' },
                { icon: 'database', name: 'MySQL / PostgreSQL', label: 'Indexing', highlight: true },
              ].map((tool) => (
                <div key={tool.name} className="p-3 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary">{tool.icon}</span>
                    <span className="font-code text-xs text-on-surface">{tool.name}</span>
                  </div>
                  <span className={`font-label text-[10px] ${tool.highlight ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>{tool.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-on-surface-variant font-code text-xs">
              <span className="material-symbols-outlined text-[14px] text-primary">lock_clock</span>
              <span>Environnements reproductibles</span>
            </div>
          </SkillCard>

          {/* 04. Systèmes */}
          <SkillCard category="systemes" filter={filter} span="lg:col-span-4" icon="hub" index="04" title="Systèmes & Réseaux" badge=""
            desc="Configuration d'environnements d'exécution, administration de serveurs et diagnostic de protocoles réseau.">
            <div className="grid grid-cols-1 gap-2">
              {[
                { icon: 'terminal', name: 'Linux (Ubuntu Server)', label: 'Admin / Bash', highlight: true },
                { icon: 'desktop_windows', name: 'Windows Pro / Server', label: 'Environnement' },
              ].map((sys) => (
                <div key={sys.name} className="p-3 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary">{sys.icon}</span>
                    <span className="font-code text-xs text-on-surface">{sys.name}</span>
                  </div>
                  <span className={`font-label text-[10px] ${sys.highlight ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>{sys.label}</span>
                </div>
              ))}
              <div className="p-3 rounded-lg bg-surface-container-lowest flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary">lan</span>
                    <span className="font-code text-xs text-on-surface">Notions Réseaux</span>
                  </div>
                  <span className="font-label text-[10px] text-on-surface-variant">Analyse</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {['Wireshark', 'Packet Tracer', 'TCP/IP'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-surface-container font-code text-[11px] text-on-surface-variant">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 p-2 rounded-lg bg-surface-container-lowest flex items-center justify-between font-code text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-on-surface-variant">Latence passerelle :</span>
              </div>
              <span className="text-primary font-semibold">&lt; 1ms local</span>
            </div>
          </SkillCard>

          {/* 05. Soft Skills */}
          <SkillCard category="softskills" filter={filter} span="lg:col-span-4" icon="psychology" index="05" title="Soft Skills & Méthodes" badge=""
            desc="Posture professionnelle orientée résultats, travail collaboratif et itération méthodique continue.">
            <div className="flex flex-col gap-2">
              {[
                { icon: 'bolt', title: 'Apprentissage rapide', sub: 'Veille proactive & autodidaxie' },
                { icon: 'self_improvement', title: 'Autonomie complète', sub: 'Résolution de problèmes complexes' },
                { icon: 'groups', title: "Esprit d'équipe", sub: 'Code review & communication fluide' },
                { icon: 'verified', title: 'Rigueur & Précision', sub: 'Propreté du code & documentation' },
                { icon: 'cycle', title: 'Gestion de projet Agile', sub: 'Scrum, Sprints, Stand-ups' },
              ].map((skill) => (
                <div key={skill.title} className="p-3 rounded-lg bg-surface-container-lowest flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px] text-primary">{skill.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-headline text-sm text-on-surface font-medium leading-none">{skill.title}</span>
                    <span className="font-code text-xs text-on-surface-variant mt-0.5">{skill.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between font-code text-xs text-on-surface-variant">
              <span>Cadence itérative</span>
              <span className="text-primary font-semibold">Adaptabilité</span>
            </div>
          </SkillCard>
        </div>
      </section>

      {/* Validation Section */}
      <section className="w-full pb-12">
        <Reveal delay={80}>
          <div className="bg-surface-container-low rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col gap-2 max-w-xl z-10">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span className="font-label text-xs uppercase tracking-wider">Normes & Bonnes Pratiques</span>
            </div>
            <h3 className="font-headline text-lg text-on-surface">Un socle méthodologique éprouvé pour des livrables de haute précision.</h3>
            <p className="font-body text-sm text-on-surface-variant">
              Chaque projet fait l'objet d'une séparation stricte des préoccupations, de tests automatisés,
              et d'un dimensionnement architectural conçu pour évoluer de manière pérenne.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto z-10">
            {[
              { val: '4+', label: 'Années de pratique', primary: true },
              { val: '100%', label: 'Autonomie dev', primary: false },
              { val: '0', label: 'Dette technique tolérée', primary: true, span: 'col-span-2 sm:col-span-1' },
            ].map((stat) => (
              <div key={stat.label} className={`flex flex-col p-4 rounded-lg bg-surface-container ${stat.span || ''}`}>
                <span className={`font-headline text-2xl leading-none ${stat.primary ? 'text-primary' : 'text-on-surface'}`}>{stat.val}</span>
                <span className="font-code text-xs text-on-surface-variant mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
          </Reveal>
      </section>

      {/* CTA */}
      <section className="w-full flex flex-col items-center justify-center text-center pb-8">
        <Reveal delay={120}>
          <div className="flex flex-col items-center max-w-xl gap-4">
          <span className="font-label text-xs uppercase tracking-widest text-primary">Validation terrain</span>
          <h2 className="font-headline text-2xl text-on-surface">Prêt à examiner le code source ?</h2>
          <p className="font-body text-sm text-on-surface-variant">
            La théorie n'a de valeur que confrontée aux défis de production.
            Consultez les études de cas détaillées et les dépôts GitHub associés.
          </p>
          <div className="pt-2">
            <a href="#projets" className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-md">
              <span>Découvrir ces compétences en pratique dans mes projets</span>
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
          </div>
          </Reveal>
      </section>
    </div>
  );
}

function SkillCard({ category, filter, span, icon, index, title, badge, desc, children }) {
  const isVisible = filter === 'all' || filter === category;

  return (
    <div
      className={`skill-card ${span} bg-surface-container rounded-xl p-8 flex flex-col justify-between shadow-sm hover:bg-surface-container-high transition-all duration-300 group`}
      data-category={category}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        display: isVisible ? 'flex' : 'none',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}
    >
      <Reveal delay={parseInt(index, 10) * 100} className="h-full">
        <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[18px]">{icon}</span>
            </span>
            <div className="flex flex-col">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Index {index}</span>
              <h2 className="font-headline text-base text-on-surface font-semibold">{title}</h2>
            </div>
          </div>
          {badge && <span className="font-code text-xs px-2 py-1 rounded-md bg-surface-container-lowest text-primary">{badge}</span>}
        </div>
        <p className="font-body text-xs text-on-surface-variant leading-relaxed">{desc}</p>
        {children}
      </div>
      </Reveal>
    </div>
  );
}
