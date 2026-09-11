import { Mail, Phone } from 'lucide-react';
import profilDigifact from '../assets/profil_Digifact.PNG';
import profilNjub from '../assets/profil_Njub.PNG';
import profilSmartRecruit from '../assets/profil_SmartRecruit.PNG';
import Reveal from './Reveal';

const projects = [
  {
    code: '01 // SAAS CORE',
    subtitle: 'Architecture Multi-Tenant',
    icon: 'account_balance_wallet',
    image: profilDigifact,
    badge: 'Automated PDF & Mail Engine',
    badgeIcon: 'receipt_long',
    title: 'DigiFact',
    desc: 'Application de gestion de documents (devis et factures), gestion complète des clients et des paiements, génération automatisée de PDF et envoi par e-mail, API sécurisée par jetons d\'authentification, architecture multi-tenant native pour équipes et entreprises.',
    tags: ['Laravel', 'Livewire', 'MySQL', 'REST API', 'Tailwind CSS'],
    primaryTag: 'Laravel',
    status: 'Production-Ready Core',
    github: 'https://github.com/MouhamedLamine3009/FactureDigital',
  },
  {
    code: '02 // AI RECRUITMENT',
    subtitle: 'Groq LLM & Parsing',
    icon: 'psychology',
    image: profilSmartRecruit,
    badge: 'Real-Time Scoring Groq LPU',
    badgeIcon: 'analytics',
    title: 'SmartRecruit',
    desc: "Plateforme intelligente de recrutement reliant candidats et recruteurs. Intègre un module d'intelligence artificielle pour le scoring automatique des CV (extraction de documents PDF/DOCX et analyse sémantique via API Groq), avec système de notifications et génération de rapports de candidatures.",
    tags: ['Laravel', 'Livewire', 'API Groq (IA / LLM)', 'PDF Parser', 'Tailwind CSS'],
    primaryTag: 'Laravel',
    status: 'Inference Engine v2.4',
    github: 'https://github.com/MouhamedLamine3009/SmartRecruit',
  },
  {
    code: '03 // LEGAL ENGINE',
    subtitle: 'Algorithmique & Docker',
    icon: 'gavel',
    image: profilNjub,
    badge: 'Levenshtein Distance Check',
    badgeIcon: 'hub',
    title: 'Njub',
    desc: "Solution complète dédiée aux cabinets d'avocats pour la détection automatisée des conflits d'intérêts clients/dossiers grâce à un algorithme de similarité (distance de Levenshtein), couplée à une API REST performante, un frontend réactif et une infrastructure conteneurisée sous Docker.",
    tags: ['Laravel', 'React', 'Inertia.js', 'Algorithme Levenshtein', 'Docker', 'Tailwind CSS'],
    primaryTag: 'Laravel',
    status: 'Containerized Ready',
    github: 'https://github.com/MouhamedLamine3009/Njub_Cabinet',
  },
];

export default function Projets() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative w-full pt-8 pb-12">
        <Reveal>
          <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2 text-primary font-code text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span>Index 03 / Répertoire Technique</span>
          </div>
          <h1 className="font-display-hero text-2xl lg:text-5xl text-on-surface tracking-tight">
            03 // PROJETS — RÉALISATIONS MAJEURES
          </h1>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            Sélection de projets complets illustrant la conception de moteurs de calcul, d'API résilientes,
            de modules d'IA générative et de backends robustes construits selon les standards d'ingénierie moderne.
          </p>
        </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 py-3 px-6 rounded-xl bg-surface-container-low shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-semibold">Index :</span>
            {['Multi-Tenant', 'IA / LLM', 'Algorithmique', 'Headless SSR'].map((tag) => (
              <span key={tag} className="font-code text-xs px-2 py-1 rounded bg-surface-container text-on-surface">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-code text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Dépôts synchronisés via GitHub</span>
          </div>
          </div>
        </Reveal>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        {projects.map((project, index) => (
          <Reveal key={project.code} delay={index * 120} className="h-full">
          <article className="group relative flex flex-col justify-between p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md hover:-translate-y-1 h-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-code text-xs text-primary font-semibold tracking-wider">{project.code}</span>
                  <span className="text-on-surface-variant">•</span>
                  <span className="font-code text-xs text-on-surface-variant">{project.subtitle}</span>
                </div>
                <span className="p-2 rounded-lg bg-surface-container-lowest text-primary">
                  <span className="material-symbols-outlined text-[20px]">{project.icon}</span>
                </span>
              </div>

              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[14px] text-primary">{project.badgeIcon}</span>
                  <span className="font-code text-xs text-on-surface">{project.badge}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="font-headline text-base text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{project.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className={`font-code text-xs px-2 py-1 rounded-full ${
                    tag === project.primaryTag
                      ? 'bg-surface-container-lowest text-primary font-medium'
                      : 'bg-surface-container-lowest text-on-surface-variant'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between gap-4">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-headline text-xs font-semibold transition-all duration-200 hover:bg-primary-container hover:-translate-y-0.5 shadow-sm"
                href={project.github} rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-[18px]">code_blocks</span>
                <span>Code GitHub</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
              <span className="font-code text-xs text-on-surface-variant hidden sm:inline-block">{project.status}</span>
            </div>
          </article>
          </Reveal>
        ))}
      </section>

      {/* CTA */}
      <section className="w-full my-8 p-8 lg:p-12 rounded-xl bg-surface-container-low shadow-sm">
        <Reveal delay={120}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2 text-primary">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-label text-xs uppercase tracking-wider text-primary font-semibold">Discussion technique • Collaboration</span>
            </div>
            <h3 className="font-headline text-lg text-on-surface">
              Un besoin d'architecture sur-mesure ou une opportunité d'équipe ?
            </h3>
            <p className="font-body text-sm text-on-surface-variant">
              Disponible pour des projets de développement complets, du dimensionnement backend Laravel
              jusqu'aux interfaces dynamiques Next.js et React.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a href="mailto:senelamine893@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-headline text-sm font-semibold hover:bg-primary-container transition-all shadow-md">
              <Mail size={20} />
              <span>Écrire un message</span>
            </a>
            <a href="tel:+221783162105" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-headline text-sm font-medium transition-all">
              <Phone size={20} />
              <span>+221 78 316 21 05</span>
            </a>
          </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
