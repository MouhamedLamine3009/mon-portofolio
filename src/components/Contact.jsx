import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeqbrwp';

export default function Contact() {
  const [dakarTime, setDakarTime] = useState('--:--:-- GMT');
  const [toast, setToast] = useState({ show: false, message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef(null);

  // Dakar Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat([], {
        timeZone: 'Africa/Dakar',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setDakarTime(formatter.format(now) + ' (GMT+0)');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast.show) {
      const timeout = setTimeout(() => setToast({ show: false, message: '' }), 3200);
      return () => clearTimeout(timeout);
    }
  }, [toast.show]);

  const showToast = (message) => setToast({ show: true, message });

  const copyEmail = () => {
    navigator.clipboard.writeText('senelamine893@gmail.com').then(() => {
      showToast('Adresse e-mail copiée dans le presse-papier !');
    }).catch(() => {
      showToast('Copié : senelamine893@gmail.com');
    });
  };

  const handleQuickSelect = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (!response.ok) throw new Error('Envoi échoué');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCharCount(0);
      showToast('Message transmis à Mouhamed Lamine Sene');
    } catch {
      showToast("Échec de l'envoi, veuillez réessayer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const focusStyle = "focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container";

  return (
    <div className="w-full relative">
      {/* Toast */}
      <div className={`fixed bottom-20 lg:bottom-10 right-6 z-50 transform transition-all duration-300 ease-out flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-highest text-on-surface shadow-2xl ${
        toast.show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}>
        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
        <span className="font-code text-xs tracking-tight">{toast.message}</span>
      </div>

      {/* Header */}
      <section className="relative w-full pt-8 pb-12 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <Reveal>
          <div className="flex flex-col gap-3 relative z-10">
          <div className="flex items-center gap-2 text-primary font-code text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span>Index 04 / Lignes Directes</span>
          </div>
          <h1 className="font-display-hero text-2xl lg:text-5xl text-on-surface max-w-4xl tracking-tight leading-tight mt-1">
            04 // CONTACT — DISCUTONS DE VOS PROJETS
          </h1>
          <p className="font-body text-base text-on-surface-variant max-w-2xl mt-2">
            Conception rigoureuse d'architectures full stack, intégrations API robustes et interfaces web réactives.
            Basé à Rufisque, disponible immédiatement.
          </p>
        </div>
        </Reveal>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Contact Channels */}
          <Reveal delay={100}>
            <div className="bg-surface-container p-6 rounded-xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2">
              <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Lignes Directes</span>
              <span className="font-code text-xs text-primary flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                Canaux Actifs
              </span>
            </div>

            {/* Email */}
            <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-2 transition-colors hover:bg-surface-container-highest">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">alternate_email</span>
                  E-mail Direct
                </span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 font-code text-xs text-primary hover:text-on-surface transition-colors py-1 px-2 rounded-lg bg-surface-container hover:bg-surface-container-low"
                >
                  <span className="material-symbols-outlined text-[15px]">content_copy</span>
                  <span>Copier</span>
                </button>
              </div>
              <a className="font-code text-sm text-on-surface font-semibold hover:text-primary transition-colors truncate" href="mailto:senelamine893@gmail.com">
                senelamine893@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-2 transition-colors hover:bg-surface-container-highest">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">call</span>
                  Téléphone & WhatsApp
                </span>
                <a className="flex items-center gap-1 font-code text-xs text-primary hover:text-on-surface transition-colors py-1 px-2 rounded-lg bg-surface-container hover:bg-surface-container-low" href="https://wa.me/221783162105" rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>WhatsApp</span>
                </a>
              </div>
              <a className="font-code text-sm text-on-surface font-semibold hover:text-primary transition-colors" href="tel:+221783162105">
                +221 78 316 21 05
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-2 transition-colors hover:bg-surface-container-highest">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
                  Répertoire GitHub
                </span>
                <a className="flex items-center gap-1 font-code text-xs text-primary hover:text-on-surface transition-colors py-1 px-2 rounded-lg bg-surface-container hover:bg-surface-container-low" href="https://github.com/MouhamedLamine3009" rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                  <span>Visiter</span>
                </a>
              </div>
              <a className="font-code text-sm text-on-surface font-semibold hover:text-primary transition-colors truncate" href="https://github.com/MouhamedLamine3009" rel="noreferrer" target="_blank">
                github.com/MouhamedLamine3009
              </a>
            </div>
          </div>
          </Reveal>

          {/* Location */}
          <Reveal delay={160}>
            <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
                <span className="font-label text-xs uppercase tracking-wider text-on-surface">Base Opérationnelle</span>
              </div>
              <span className="font-code text-xs px-2 py-0.5 rounded-full bg-surface-container-highest text-primary">GMT+0</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-headline text-sm text-on-surface font-medium">Rufisque, Dakar, Sénégal</p>
              <p className="font-body text-xs text-on-surface-variant">
                Mobilité complète sur toute la région de Dakar & Télétravail international (Remote synchrone).
              </p>
            </div>

            {/* Clock */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container text-on-surface">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
                <span className="font-code text-xs text-on-surface-variant">Heure Locale (Dakar) :</span>
              </div>
              <span className="font-code text-sm font-semibold text-primary">{dakarTime}</span>
            </div>

            {/* Map Preview */}
            <div className="w-full h-40 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB36dTQ6jNeBcJjgtTLy4STSbCORP2yGtpf0D31__clCdodpGiBHCeoTm6qgL-I3o_08-1y0GXmNQM4B_Zegy5Vx3G7AzzIrb9ARI6W1pmH4eQemKmXF3rkRAghEkz8Q8OZ-92FV0Ahs1Y6imPcooXcJJJoqw79XKNMg_5VBbvK-pZbJQTBUaEOiPLrHF1wiqF-SUQuhYrlQNb1DmIc_uA-cCobh_2pLR1jpqWhDCd0qjjPVhP99JV5')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex items-end p-3">
                <span className="font-code text-xs text-on-surface font-medium flex items-center gap-1 bg-surface-container/90 backdrop-blur-md px-2 py-1 rounded">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Péninsule du Cap-Vert • 14.7167° N, 17.2717° W
                </span>
              </div>
            </div>
          </div>
          </Reveal>

          {/* Confidentiality */}
          <Reveal delay={220}>
            <div className="bg-surface-container-highest/40 p-4 rounded-xl flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">verified_user</span>
            <div className="flex flex-col gap-0.5">
              <span className="font-label text-xs uppercase text-on-surface font-semibold">Protocole de Confidentialité</span>
              <p className="font-body text-xs text-on-surface-variant">
                Réponse garantie sous 24 à 48 heures. Données strictement confidentielles et traitées sans aucun pistage tiers.
              </p>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Right Column: Form */}
        <Reveal delay={280} className="lg:col-span-7">
          <div className="flex flex-col gap-4 bg-surface-container p-8 rounded-xl shadow-md h-full">
          <div className="flex flex-col gap-1 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              <h2 className="font-headline text-base text-on-surface">Transmettre une transmission directe</h2>
            </div>
            <p className="font-body text-sm text-on-surface-variant">
              Formulaire structuré pour proposition de stage de fin d'études, mission technique ou audit logiciel.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 mt-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label text-xs uppercase text-on-surface tracking-wider" htmlFor="full-name">
                  Nom complet <span className="text-primary">*</span>
                </label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ex. Amadou Diop ou Sophie Miller"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 bg-surface-container-low text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 rounded-lg outline-none transition-all ${focusStyle}`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label text-xs uppercase text-on-surface tracking-wider" htmlFor="email-address">
                  Adresse e-mail <span className="text-primary">*</span>
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="votre.nom@entreprise.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 bg-surface-container-low text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 rounded-lg outline-none transition-all ${focusStyle}`}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label className="font-label text-xs uppercase text-on-surface tracking-wider" htmlFor="opportunity-type">
                Objet / Type d'opportunité <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <select
                  id="opportunity-type"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 bg-surface-container-low text-on-surface font-body text-sm rounded-lg outline-none transition-all appearance-none cursor-pointer ${focusStyle}`}
                >
                  <option value="" disabled>Sélectionnez le format d'intervention</option>
                  <option value="Stage">Stage Full Stack / Ingénierie Logicielle</option>
                  <option value="Freelance">Mission Freelance / Développement d'application</option>
                  <option value="Échange technique">Échange technique / Mentorat & Networking</option>
                  <option value="Autre">Autre opportunité de collaboration</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </div>
              </div>
            </div>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-1 -mt-2">
              {[
                { value: 'Stage', label: '+ Offre de stage' },
                { value: 'Freelance', label: '+ Projet Laravel / React' },
                { value: 'Échange technique', label: '+ Échange technique' },
              ].map((tag) => (
                <button
                  key={tag.value}
                  type="button"
                  onClick={() => handleQuickSelect(tag.value)}
                  className="font-code text-xs px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors"
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label className="font-label text-xs uppercase text-on-surface tracking-wider" htmlFor="message-content">
                  Message <span className="text-primary">*</span>
                </label>
                <span className="font-code text-xs text-on-surface-variant">{charCount} / 1200 car.</span>
              </div>
              <textarea
                id="message-content"
                name="message"
                required
                rows={6}
                maxLength={1200}
                placeholder="Décrivez les contours de votre proposition, les technologies visées, le calendrier prévisionnel..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-4 bg-surface-container-low text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 rounded-lg outline-none transition-all resize-y ${focusStyle}`}
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-1 text-on-surface-variant self-start sm:self-center">
                <span className="material-symbols-outlined text-[18px] text-primary">lock</span>
                <span className="font-code text-xs">Canal chiffré TLS 1.3</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-lg bg-primary text-on-primary font-headline text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all transform active:scale-95 disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Transmission en cours...' : 'Envoyer le message'}</span>
                <span className={`material-symbols-outlined text-[20px] ${isSubmitting ? 'animate-spin' : ''}`}>
                  {isSubmitting ? 'sync' : 'send'}
                </span>
              </button>
            </div>
          </form>

          {/* Success Banner */}
          {isSubmitted && (
            <div className="p-4 rounded-lg bg-surface-container-highest text-on-surface flex items-start gap-3 mt-3">
              <span className="material-symbols-outlined text-primary text-[24px]">task_alt</span>
              <div className="flex flex-col gap-1">
                <span className="font-headline text-sm text-on-surface font-semibold">Message envoyé avec succès</span>
                <p className="font-body text-xs text-on-surface-variant">
                  Merci de votre intérêt. Votre message a été consigné. Une réponse vous parviendra sous 24 à 48 heures.
                </p>
              </div>
            </div>
          )}
        </div>
        </Reveal>
      </div>
    </div>
  );
}
