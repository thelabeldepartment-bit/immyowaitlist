import Link from "next/link";
import Image from "next/image";
import { Shield, Calendar, Star, ArrowRight, Home, Users, TrendingUp, Building2, Briefcase, PenLine, CheckCircle, Key, Tag, Handshake, Mail, MapPin, BadgeCheck, Wrench, CalendarDays, Phone, Zap, Hammer, Clock, ChevronRight, Maximize2 } from "lucide-react";
import { ScrollJackInit } from "@/components/marketing/ScrollJackInit";
import { HeroWaitlist } from "@/components/marketing/HeroWaitlist";
import { WaitlistForm } from "@/components/marketing/WaitlistForm";

export default function LandingPage() {
  return (
    <>
      <ScrollJackInit />

      {/* ── Hero ── */}
      <section data-gsap-hero className="relative w-full min-h-[640px] md:min-h-[780px]">
        <Image
          src="/hero-building.jpg"
          alt="Modernes Gebäude – IMMYO"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-8 text-center">
          <HeroWaitlist />
        </div>
      </section>


      {/* ── Profil Card Stack ── */}
      <section data-gsap-section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-stone-50">
        <div className="immio-container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left: text + features */}
            <div>
              <div>
                <span className="text-[10px] md:text-xs font-semibold text-carbon/40 uppercase tracking-widest">Bewerber-Profil</span>
                <h2 className="text-2xl md:text-4xl font-bold text-carbon mt-2 mb-3 md:mb-4 leading-tight">
                  Einmal ausfüllen.<br />Überall bewerben.
                </h2>
                <p className="text-sm md:text-base text-carbon/60 mb-6 md:mb-8 leading-relaxed">
                  Erstelle dein Profil einmalig mit allen relevanten Unterlagen – und bewirb dich auf jede Immobilie mit einem Klick. Kein Papierkram, kein Chaos.
                </p>
              </div>
              <div className="space-y-4 md:space-y-5">
                {[
                  {
                    icon: <Users className="h-5 w-5 text-stone-500" />,
                    title: "Ein Profil für alle Bewerbungen",
                    desc: "Profil einmal anlegen und mit einem Klick auf jede Immobilie bewerben – ohne Texte, ohne Aufwand.",
                  },
                  {
                    icon: <Star className="h-5 w-5 text-amber-500" />,
                    title: "Pro-Bewerbung: Heb dich ab",
                    desc: "Mit einer Pro-Bewerbung rückst du an die Spitze des Stapels und hinterlegst eine persönliche Nachricht.",
                    highlight: true,
                  },
                  {
                    icon: <Calendar className="h-5 w-5 text-stone-500" />,
                    title: "Direkt zur Besichtigung eingeladen",
                    desc: "Anbieter laden dich per App mit Datum und Uhrzeit ein – du bestätigst mit einem Tap.",
                  },
                  {
                    icon: <Shield className="h-5 w-5 text-stone-500" />,
                    title: "Dokumente sicher hochladen & freigeben",
                    desc: "Lade Gehaltszettel, Schufa und Co. einmalig hoch. Anbieter können Dokumente anfragen – du genehmigst per Klick, und sie landen direkt in ihrem Postfach.",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3 md:gap-4">
                    <div className={`h-9 w-9 md:h-10 md:w-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-card ${f.highlight ? "bg-amber-50" : "bg-white"}`}>
                      {f.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-sm md:text-base mb-0.5 md:mb-1 ${f.highlight ? "text-amber-700" : "text-carbon"}`}>{f.title}</h3>
                      <p className="text-xs md:text-sm text-carbon/60 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mockups matching real UI */}
            <div className="relative h-[500px] md:h-[660px] flex justify-center origin-top mt-4 md:mt-20 mockup-3d">

              {/* Besichtigung — floats left, mid-height */}
              <div className="absolute left-0 top-[200px] w-[205px] z-20 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden -rotate-2">
                <div className="bg-green-500 px-3 py-2 flex items-center gap-1.5">
                  <div className="h-6 w-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-white">Besichtigungseinladung!</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <div className="h-9 w-10 rounded-lg bg-gradient-to-br from-stone-200 to-stone-300 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-carbon truncate">2-Zi. Altbau, Stuttgart</p>
                    <p className="text-[10px] text-green-600 font-medium mt-0.5">Sa, 22. März · 14:00</p>
                  </div>
                </div>
                <div className="px-3 pb-3 flex gap-1.5">
                  <button className="flex-1 py-1.5 rounded-xl text-[11px] font-medium text-carbon/60 bg-stone-100">Ansehen</button>
                  <button className="flex-1 py-1.5 rounded-xl text-[11px] font-semibold text-white bg-green-500 transition-transform duration-150 hover:scale-105">Annehmen</button>
                </div>
              </div>

              {/* Dokument — floats right, lower */}
              <div className="absolute right-[30px] top-[380px] w-[175px] z-20 bg-white rounded-2xl border border-stone-200 shadow-xl p-3.5 rotate-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-carbon">Dokumente angefragt</p>
                    <p className="text-[10px] text-carbon/50 mt-0.5 leading-snug">Anbieter möchte deine Dokumente einsehen.</p>
                  </div>
                  <div className="flex gap-1.5 w-full">
                    <button className="flex-1 text-[11px] font-semibold bg-carbon text-white py-1.5 rounded-lg transition-transform duration-150 hover:scale-105">Freigeben</button>
                    <button className="flex-1 text-[11px] font-semibold bg-stone-100 text-carbon/60 py-1.5 rounded-lg">Ablehnen</button>
                  </div>
                </div>
              </div>

              {/* Card fan stack: multiple normal cards behind PRO */}
              <div className="relative w-[230px] h-[575px]" style={{ filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.18))" }}>

                {/* Back cards fanning out — simplified, faded */}
                {[
                  { rotate: "-rotate-[18deg]", opacity: "opacity-20", z: "z-0" },
                  { rotate: "-rotate-[12deg]", opacity: "opacity-30", z: "z-[1]" },
                  { rotate: "-rotate-[6deg]",  opacity: "opacity-45", z: "z-[2]" },
                  { rotate: "-rotate-[2deg]",  opacity: "opacity-60", z: "z-[3]" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{ transformOrigin: "bottom center" }}
                    className={`absolute inset-0 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col ${s.rotate} ${s.opacity} ${s.z}`}
                  >
                    <div className="relative h-32 shrink-0 bg-gradient-to-br from-stone-200 to-stone-300">
                      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
                      <p className="absolute bottom-2 left-3 text-[10px] font-bold text-white">Dein Name</p>
                    </div>
                    <div className="p-2.5 flex flex-col gap-2">
                      <div className="grid grid-cols-3 gap-1">
                        {[0,1,2].map((j) => <div key={j} className="h-10 bg-stone-50 rounded-xl" />)}
                      </div>
                      <div className="h-2 bg-stone-100 rounded-full w-full" />
                      <div className="h-2 bg-stone-100 rounded-full w-3/4" />
                      <div className="h-8 bg-stone-50 rounded-xl border-l-4 border-stone-200" />
                      <div className="flex gap-1">
                        <div className="h-5 bg-stone-100 rounded-full w-20" />
                        <div className="h-5 bg-stone-100 rounded-full w-16" />
                      </div>
                      <div className="h-12 bg-stone-50 rounded-xl" />
                      <div className="h-10 bg-stone-50 rounded-xl" />
                    </div>
                  </div>
                ))}

                {/* PRO card — front, exact Mein Profil layout */}
                <div
                  style={{ transformOrigin: "bottom center" }}
                  className="absolute inset-0 bg-white rounded-2xl border-2 border-blue-500 shadow-2xl shadow-blue-200/70 overflow-hidden flex flex-col z-10"
                >
                  {/* PRO banner */}
                  <div className="bg-blue-500 px-3 py-1.5 flex items-center gap-1.5 shrink-0">
                    <Star className="h-3 w-3 text-white fill-white shrink-0" />
                    <span className="text-[10px] font-bold text-white tracking-wide">Pro-Bewerbung</span>
                  </div>

                  {/* Photo area — h-72 in real, proportionally h-32 here */}
                  <div className="relative h-32 shrink-0">
                    <div className="h-full w-full overflow-hidden">
                      <img src="/profile-mieter.png" alt="Profil" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                    {/* Dringend gesucht badge */}
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                      <Zap className="h-2.5 w-2.5" />Dringend gesucht
                    </div>
                    {/* Name + job */}
                    <div className="absolute bottom-2.5 left-3">
                      <p className="text-sm font-bold text-white leading-tight">Dein Name <span className="text-white/70 font-normal text-xs">29</span></p>
                      <p className="text-[9px] text-white/80 mt-0.5">💼 Angestellt · Muster GmbH</p>
                    </div>
                  </div>

                  {/* Content — mirrors real p-5 space-y-6 */}
                  <div className="p-2.5 flex flex-col gap-2">

                    {/* 3 stat tiles — grid-cols-3 */}
                    <div className="grid grid-cols-3 gap-1">
                      <div className="bg-stone-50 rounded-xl p-1.5 text-center">
                        <p className="text-sm">🏠</p>
                        <p className="text-[8px] text-carbon/50 mt-0.5">Mieten</p>
                      </div>
                      <div className="bg-stone-50 rounded-xl p-1.5 text-center">
                        <div className="flex items-center justify-center gap-0.5">
                          <Users className="h-3 w-3 text-stone-400" />
                          <span className="text-xs font-bold text-carbon">2</span>
                        </div>
                        <p className="text-[8px] text-carbon/50 mt-0.5">1E · 1K</p>
                      </div>
                      <div className="bg-stone-50 rounded-xl p-1.5 text-center">
                        <CalendarDays className="h-3.5 w-3.5 text-stone-400 mx-auto" />
                        <p className="text-[8px] text-carbon/50 mt-0.5">01.04.26</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-[9px] text-carbon/50 leading-relaxed italic">
                      Deine Beschreibung…
                    </p>

                    {/* Prompt box — border-l-4 */}
                    <div className="bg-stone-50 rounded-xl p-2 border-l-4 border-carbon/20">
                      <p className="text-[8px] font-semibold text-carbon/40 mb-0.5">Ich suche eine Wohnung in der Nähe von …</p>
                      <p className="text-[9px] text-carbon/50 leading-snug italic">z.B. meiner Arbeitsstelle</p>
                    </div>

                    {/* Lifestyle chips */}
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[8px] font-medium bg-stone-100 text-carbon px-2 py-1 rounded-full">🚭 Nichtraucher</span>
                      <span className="text-[8px] font-medium bg-stone-100 text-carbon px-2 py-1 rounded-full">🐕 mittel Hund</span>
                    </div>

                    {/* Finanzen & Job */}
                    <div className="bg-stone-50 rounded-xl p-2.5 space-y-1.5">
                      <p className="text-[8px] font-semibold text-carbon/40 uppercase tracking-wider mb-1.5">Finanzen & Job</p>
                      <div className="flex items-center gap-1.5 text-[9px] text-carbon/75">
                        <Home className="h-3 w-3 text-stone-400 shrink-0" />
                        <span><span className="font-semibold text-carbon">3.500 €</span> Haushaltseinkommen / Mo</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] text-carbon/75">
                        <Briefcase className="h-3 w-3 text-stone-400 shrink-0" />
                        <span>Assistenz der Geschäftsführung</span>
                      </div>
                    </div>

                    {/* Schufa */}
                    <div className="bg-green-50 rounded-xl p-2.5 flex items-center gap-2 border border-green-100">
                      <div className="h-7 w-7 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <Shield className="h-3.5 w-3.5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-[9px] font-semibold text-green-700">✓ Schufa-Auskunft vorhanden</p>
                        <p className="text-[8px] text-green-600/70">Hochgeladen · Score: 97</p>
                      </div>
                    </div>

                    {/* Kontakt */}
                    <div className="bg-stone-50 rounded-xl p-2.5 space-y-1.5">
                      <p className="text-[8px] font-semibold text-carbon/40 uppercase tracking-wider mb-1.5">Kontakt</p>
                      <div className="flex items-center gap-1.5 text-[9px] text-carbon/70">
                        <Phone className="h-3 w-3 text-stone-400 shrink-0" />
                        <span>+49 XXX XXXXXXX</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] text-carbon/70">
                        <Mail className="h-3 w-3 text-stone-400 shrink-0" />
                        <span>deine@email.de</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] text-carbon/70">
                        <MapPin className="h-3 w-3 text-stone-400 shrink-0" />
                        <span>Stuttgart, Baden-Württemberg</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Für Anbieter & Verkäufer ── */}
      <section data-gsap-section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-white">
        <div className="immio-container md:pt-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div>
                <span className="text-[10px] md:text-xs font-semibold text-carbon/40 uppercase tracking-widest">Vermieter & Verkäufer</span>
                <h2 className="text-2xl md:text-4xl font-bold text-carbon mt-2 mb-3 md:mb-4 leading-tight">
                  Dein Objekt verdient<br />die besten Interessenten.
                </h2>
                <p className="text-sm md:text-base text-carbon/60 mb-6 md:mb-8 leading-relaxed">
                  Schluss mit endlosen Nachrichten und unqualifizierten Anfragen. IMMYO zeigt dir
                  verifizierte Interessenten mit vollständigen Profilen – damit du sofort siehst,
                  wer wirklich passt.
                </p>
              </div>
              <div className="space-y-4 md:space-y-5">
                {[
                  {
                    icon: <TrendingUp className="h-5 w-5 text-stone-500" />,
                    title: "Dashboard für alle deine Objekte",
                    desc: "Verwalte Miet- und Kaufobjekte zentral. Neue Anfragen erscheinen sofort als rote Badge.",
                  },
                  {
                    icon: <Users className="h-5 w-5 text-stone-500" />,
                    title: "Interessenten auf einen Blick",
                    desc: "Sieh Mieter- und Käuferprofile als Karten-Stack – mit Einkommen, Haushalt und Schufa.",
                  },
                  {
                    icon: <Shield className="h-5 w-5 text-stone-500" />,
                    title: "Kostenlose Marktpreisschätzung",
                    desc: "Erhalte eine datenbasierte Preiseinschätzung für jede Immobilie – direkt beim Inserieren.",
                  },
                  {
                    icon: <PenLine className="h-5 w-5 text-stone-500" />,
                    title: "Digitaler Vertragsabschluss",
                    desc: "Vertrag automatisch mit Bewerber- und Objektdaten befüllen und direkt über die App versenden – papierlos und rechtssicher.",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3 md:gap-4">
                    <div className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-stone-50 flex items-center justify-center flex-shrink-0 shadow-card">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-base text-carbon mb-0.5 md:mb-1">{f.title}</h3>
                      <p className="text-xs md:text-sm text-carbon/60 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="rounded-3xl p-4 md:p-6 border border-stone-100 overflow-visible" style={{ background: "rgba(248,247,245,0.80)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", boxShadow: "0 16px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
              <h4 className="text-xs font-semibold text-carbon/40 mb-4 uppercase tracking-widest">Meine Objekte</h4>
              <div className="grid grid-cols-2 gap-3 overflow-visible pt-2">

                {/* First card — matches real VermieterPropertyGrid card, expands on hover */}
                <div className="group relative col-span-1">
                  <span className="notification-dot z-10">7</span>
                  <article className="immio-card ring-2 ring-red-100 overflow-visible">
                    {/* Cover photo */}
                    <div className="relative h-28 bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden rounded-t-[inherit]">
                      <div className="absolute top-2 left-2">
                        <span className="immio-badge text-[10px] flex items-center gap-1 bg-white/90 text-green-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                          Online
                        </span>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-3">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <h3 className="font-semibold text-carbon text-xs leading-tight line-clamp-1">2-Zi. Altbau · Stuttgart Mitte</h3>
                        <span className="text-xs font-bold text-carbon shrink-0">1.200 €<span className="text-[10px] font-normal text-carbon/50">/Mo</span></span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-carbon/50 mb-2.5">
                        <MapPin className="h-2.5 w-2.5 shrink-0" />
                        <span>70173 Stuttgart</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-carbon/60 border-t border-stone-100 pt-2.5">
                        <span className="flex items-center gap-1"><Maximize2 className="h-2.5 w-2.5" />60 m²</span>
                        <span>·</span>
                        <span>2 Zi.</span>
                        <span className="ml-auto flex items-center gap-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <Users className="h-2.5 w-2.5" />ANFRAGEN
                        </span>
                      </div>
                    </div>
                    {/* Expanded property details — slides in on hover */}
                    <div className="max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-300 ease-in-out">
                      <div className="px-3 pb-3 border-t border-stone-100 pt-2.5 space-y-1.5">
                        <p className="text-[10px] font-semibold text-carbon/40 uppercase tracking-widest">Objektdetails</p>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                          {[
                            { label: "Typ", value: "Altbau · Miete" },
                            { label: "Fläche", value: "60 m²" },
                            { label: "Badezimmer", value: "1" },
                            { label: "Etage", value: "3. OG" },
                            { label: "Verfügbar", value: "01. Apr. 2025" },
                            { label: "Kaution", value: "3.600 €" },
                          ].map((d) => (
                            <div key={d.label} className="flex justify-between text-[9px]">
                              <span className="text-carbon/40">{d.label}</span>
                              <span className="font-semibold text-carbon">{d.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Second listing card */}
                <article className="immio-card h-full">
                  <div className="relative h-28 bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
                    <div className="absolute top-2 left-2">
                      <span className="immio-badge text-[10px] flex items-center gap-1 bg-white/90 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        Online
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <h3 className="font-semibold text-carbon text-xs leading-tight line-clamp-1">Einfamilienhaus</h3>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-carbon/50 mb-2.5">
                      <MapPin className="h-2.5 w-2.5 shrink-0" />
                      <span>73728 Esslingen am Neckar</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-carbon/60 border-t border-stone-100 pt-2.5">
                      <span className="flex items-center gap-1"><Maximize2 className="h-2.5 w-2.5" />120 m²</span>
                      <span>·</span>
                      <span>5 Zi.</span>
                      <span className="ml-auto flex items-center gap-1 bg-stone-100 text-carbon/40 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <Users className="h-2.5 w-2.5" />ANFRAGEN
                      </span>
                    </div>
                  </div>
                </article>

                {/* Anfragen section — spans full width */}
                <div className="col-span-2 bg-white rounded-xl border border-stone-100 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <p className="text-[11px] font-semibold text-carbon">Anfragen · 2-Zi. Altbau</p>
                      <span className="text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full">7 neu</span>
                    </div>
                    {/* Filter tabs */}
                    <div className="flex items-center gap-0.5 bg-stone-100 rounded-lg p-0.5">
                      {["Alle", "Offen", "Eingeladen"].map((t, i) => (
                        <span key={t} className={`text-[9px] font-semibold px-2 py-0.5 rounded-md ${i === 0 ? "bg-white text-carbon shadow-sm" : "text-carbon/40"}`}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Bewerber cards grid */}
                  <div className="grid grid-cols-3 gap-2.5 p-3">

                    {/* Pro applicant */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden">
                      <div className="relative h-20 bg-gradient-to-br from-stone-200 to-stone-300">
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent"/>
                        {/* Schufa badge */}
                        <div className="absolute top-1.5 left-1.5 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center" title="Schufa vorhanden">
                          <Shield className="h-2 w-2 text-white"/>
                        </div>
                        {/* Status */}
                        <span className="absolute top-1.5 right-1.5 text-[8px] font-bold bg-red-50 text-red-600 px-1.5 py-0.5 rounded-full flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block"/>Neu</span>
                        {/* Star */}
                        <Star className="absolute bottom-1.5 right-1.5 h-3 w-3 text-blue-400 fill-blue-400"/>
                      </div>
                      <div className="p-2">
                        <div className="flex items-center gap-1 mb-0.5">
                          <p className="text-[10px] font-semibold text-blue-800 truncate">Anna M.</p>
                          <span className="inline-flex items-center gap-0.5 text-[8px] font-bold bg-blue-500 text-white px-1 py-0.5 rounded-full shrink-0"><Zap className="h-2 w-2 fill-white"/>Pro</span>
                        </div>
                        <p className="text-[9px] text-blue-600/70 truncate">Angestellt · 3.800 €/Mo</p>
                        <div className="flex items-center gap-1.5 mt-1.5 text-[9px] text-carbon/50">
                          <span className="flex items-center gap-0.5"><Users className="h-2.5 w-2.5"/>2P</span>
                          <span className="ml-auto font-semibold text-green-600">Einladen</span>
                        </div>
                      </div>
                    </div>

                    {/* Regular applicant */}
                    <div className="bg-white border border-stone-100 rounded-xl overflow-hidden">
                      <div className="relative h-20 bg-gradient-to-br from-stone-200 to-stone-300">
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent"/>
                        <div className="absolute top-1.5 left-1.5 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                          <Shield className="h-2 w-2 text-white"/>
                        </div>
                        <span className="absolute top-1.5 right-1.5 text-[8px] font-bold bg-red-50 text-red-600 px-1.5 py-0.5 rounded-full flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block"/>Neu</span>
                        <Star className="absolute bottom-1.5 right-1.5 h-3 w-3 text-white/50"/>
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] font-medium text-carbon truncate mb-0.5">Thomas K.</p>
                        <p className="text-[9px] text-carbon/50 truncate">Selbständig · 2.900 €/Mo</p>
                        <div className="flex items-center gap-1.5 mt-1.5 text-[9px] text-carbon/50">
                          <span className="flex items-center gap-0.5"><Users className="h-2.5 w-2.5"/>1P</span>
                          <span className="ml-auto font-semibold text-green-600">Einladen</span>
                        </div>
                      </div>
                    </div>

                    {/* Invited applicant */}
                    <div className="bg-white border border-stone-100 rounded-xl overflow-hidden">
                      <div className="relative h-20 bg-gradient-to-br from-stone-200 to-stone-300">
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent"/>
                        {/* Besichtigung bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-[7px] font-bold text-center py-0.5 tracking-wide">
                          Besichtigungstermin 22. März 14:00 Uhr
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] font-medium text-carbon truncate mb-0.5">Sophie L.</p>
                        <p className="text-[9px] text-carbon/50 truncate">Angestellt · 3.200 €/Mo</p>
                        <div className="flex items-center gap-1.5 mt-1.5 text-[9px] text-carbon/50">
                          <span className="flex items-center gap-0.5"><Users className="h-2.5 w-2.5"/>2P</span>
                          <span className="ml-auto text-[8px] font-bold bg-green-50 text-green-700 px-1.5 py-0.5 rounded-full flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block"/>Eingeladen</span>
                        </div>
                      </div>
                    </div>

                  </div>
                  <p className="text-center text-[9px] text-carbon/30 pb-2.5">+4 weitere Bewerber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Für Dienstleister ── */}
      <section data-gsap-section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-stone-50">
        <div className="immio-container">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <span className="text-[10px] md:text-xs font-semibold text-carbon/40 uppercase tracking-widest">Für Dienstleister</span>
            <h2 className="text-2xl md:text-4xl font-bold text-carbon mt-2 mb-3 md:mb-4 leading-tight">
              Mehr Kunden. Direkt in dein Postfach.
            </h2>
          </div>

          {/* 3-step flow */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-6 max-w-lg mx-auto">
            {[
              { step: "1", title: "Profil anlegen", desc: "In 2 Minuten eingerichtet" },
              { step: "2", title: "Gefunden werden", desc: "Regional & nach Spezialgebiet" },
              { step: "3", title: "Anfragen erhalten", desc: "Direkt per E-Mail" },
            ].map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-1.5">
                {i > 0 && (
                  <div className="absolute left-0 top-3.5 w-full h-px bg-stone-200 -z-10" />
                )}
                <div className="h-8 w-8 rounded-full bg-carbon text-white flex items-center justify-center text-sm font-bold">{s.step}</div>
                <p className="text-xs font-semibold text-carbon leading-tight">{s.title}</p>
                <p className="text-[11px] text-carbon/50 leading-tight">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* service type cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
            {[
              {
                icon: <Briefcase className="h-5 w-5 text-blue-600" />,
                bg: "bg-blue-50",
                badge: "Makler",
                title: "Neue Aufträge für Makler",
                desc: "Präsentiere dein Portfolio und werde von Eigentümern und Käufern direkt angefragt.",
                perks: ["Profil mit Bewertungen & Referenzen", "Anfragen direkt per E-Mail", "Kartenansicht für deine Region"],
                href: "#waitlist",
                cta: "Als Makler registrieren",
              },
              {
                icon: <BadgeCheck className="h-5 w-5 text-violet-600" />,
                bg: "bg-violet-50",
                badge: "Architekten",
                title: "Projekte für Architekten",
                desc: "Zeige deine Referenzprojekte und werde von Bauherren für Neubau & Sanierung gefunden.",
                perks: ["Baustil- & Bauart-Filter", "Verifiziertes Unternehmensprofil", "Leads für Neubau & Sanierung"],
                href: "#waitlist",
                cta: "Als Architekt registrieren",
              },
              {
                icon: <Hammer className="h-5 w-5 text-yellow-600" />,
                bg: "bg-yellow-50",
                badge: "Bauunternehmen",
                title: "Aufträge für Bauunternehmen",
                desc: "Präsentiere dein Unternehmen und werde von Bauherren für Neubau, Sanierung und Umbau direkt angefragt.",
                perks: ["Gewerk- & Bauart-Filter", "Verifiziertes Unternehmensprofil", "Leads für Neubau & Sanierung"],
                href: "#waitlist",
                cta: "Als Bauunternehmen registrieren",
              },
              {
                icon: <Wrench className="h-5 w-5 text-orange-600" />,
                bg: "bg-orange-50",
                badge: "Objektservice",
                title: "Aufträge für Dienstleister",
                desc: "Biete Hausmeister- oder Reinigungsdienste an und werde von Eigentümern direkt beauftragt.",
                perks: ["Dienstleistungsfilter für Interessenten", "Einsatzgebiet & Objekttyp angeben", "Direkte Kundenanfragen per E-Mail"],
                href: "#waitlist",
                cta: "Als Dienstleister registrieren",
              },
            ].map((c) => (
              <div key={c.badge} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 md:p-5 flex flex-col">
                <div className="flex items-center gap-2.5 mb-2.5 md:mb-3">
                  <div className={`h-8 w-8 md:h-9 md:w-9 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                    {c.icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-carbon/40 uppercase tracking-widest">{c.badge}</span>
                </div>
                <h3 className="font-bold text-carbon text-sm md:text-base mb-1.5 leading-snug">{c.title}</h3>
                <p className="text-xs text-carbon/60 leading-relaxed mb-3 flex-1">{c.desc}</p>
                <ul className="space-y-1.5">
                  {c.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-carbon/70">
                      <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom trust row */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6 text-[11px] md:text-xs text-carbon/50">
            {[
              { icon: <Mail className="h-3.5 w-3.5" />, text: "Anfragen direkt per E-Mail" },
              { icon: <MapPin className="h-3.5 w-3.5" />, text: "Regional gefunden werden" },
              { icon: <BadgeCheck className="h-3.5 w-3.5" />, text: "Verifiziertes Profil" },
              { icon: <CheckCircle className="h-3.5 w-3.5" />, text: "Einfach registrieren" },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2">
                {t.icon}
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warum ich IMMYO entwickelt habe ── */}
      <section data-gsap-section className="relative flex flex-col justify-center py-20 md:py-24 bg-stone-50 overflow-hidden">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[360px] w-[360px] rounded-full bg-stone-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-stone-200/30 blur-3xl" />

        <div className="immio-container relative">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">

            {/* Left: portrait, sticky on desktop */}
            <div className="md:col-span-5 md:sticky md:top-24 order-2 md:order-1">
              <div className="relative w-full max-w-[380px] mx-auto md:mx-0">
                <div className="absolute -inset-3 rounded-2xl bg-carbon/5 -z-10 rotate-[-2deg]" />
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-stone-100 border border-white shadow-xl">
                  <Image
                    src="/Katrin.jpg"
                    alt="Katrin Katinic – Gründerin von IMMYO"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2.5">
                  <div className="h-px flex-1 bg-carbon/15" />
                  <span className="text-[9px] font-semibold text-carbon/45 uppercase tracking-[0.25em]">Gründerin</span>
                  <div className="h-px flex-1 bg-carbon/15" />
                </div>
                <p className="mt-2 text-base font-bold text-carbon text-center leading-tight tracking-tight">
                  Katrin Katinic
                </p>
                <p className="text-xs text-carbon/55 text-center mt-0.5">
                  IMMYO
                </p>
              </div>
            </div>

            {/* Right: copy */}
            <div className="md:col-span-7 order-1 md:order-2">
              <h2 className="text-xl md:text-3xl font-bold text-carbon leading-[1.15] tracking-tight mb-4 md:mb-6">
                Warum ich IMMYO entwickelt habe.
              </h2>

              <div className="space-y-4 text-carbon/80 leading-relaxed text-[13px] md:text-[14px]">
                <p className="text-[14px] md:text-[15px] text-carbon font-medium leading-snug">
                  Ich habe IMMYO gebaut, weil sich Wohnungssuche irgendwann nur noch wie Zeitverschwendung angefühlt hat.
                </p>

                {/* Pain points block */}
                <div className="border-l-2 border-carbon/15 pl-4 py-0.5 space-y-1 text-carbon/70">
                  <p className="flex items-baseline gap-3"><span className="text-carbon/30 text-[11px]">01</span><span>Veraltete Systeme.</span></p>
                  <p className="flex items-baseline gap-3"><span className="text-carbon/30 text-[11px]">02</span><span>Endlose Bewerbungen.</span></p>
                  <p className="flex items-baseline gap-3"><span className="text-carbon/30 text-[11px]">03</span><span>Plattformen, die sich seit Jahren kaum verändert haben.</span></p>
                </div>

                <p>
                  Gleichzeitig wird Wohnraum immer knapper — und trotzdem machen die größten Plattformen Profit mit jedem Inserat, jeder Sichtbarkeit und jeder Bewerbung.
                </p>

                <p>
                  Irgendwann hatte ich das Gefühl, dass es längst nicht mehr darum geht, Menschen schneller zusammenzubringen.{" "}
                  <span className="text-carbon font-semibold">Sondern nur noch darum, wer am meisten bezahlt.</span>
                </p>

                {/* Pull-quote */}
                <div className="relative my-4 md:my-5 py-1">
                  <span className="absolute -left-1 -top-2 text-3xl md:text-4xl leading-none text-carbon/15 select-none font-serif">“</span>
                  <p className="text-lg md:text-2xl font-bold text-carbon leading-tight tracking-tight pl-5">
                    IMMYO soll das verändern.
                  </p>
                </div>

                {/* Solution block */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Eine modernere Plattform.",
                    "Keine Zeitverschwendung.",
                    "Faire Preise.",
                    "Mehr sichtbare Objekte — Wohnraum wieder zugänglich.",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-2 bg-white rounded-lg border border-stone-200 px-3 py-2 shadow-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-carbon shrink-0" />
                      <span className="text-[12.5px] text-carbon font-medium leading-snug">{line}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[14px] md:text-[15px] text-carbon font-medium leading-snug pt-1">
                  Denn der Wohnungsmarkt braucht nicht noch mehr Chaos.<br />
                  Sondern endlich ein besseres System.
                </p>

                {/* Signature */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="h-px w-10 bg-carbon/30" />
                  <span
                    className="text-2xl text-carbon"
                    style={{ fontFamily: "var(--font-handwriting), 'Caveat', cursive", fontWeight: 600 }}
                  >
                    Katrin
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="waitlist" data-gsap-section className="min-h-screen flex flex-col bg-carbon text-white">
        {/* Waitlist signup — centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center immio-container py-16 md:py-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
            Sei als Erste:r dabei.
          </h2>
          <p className="text-sm md:text-base text-white/55 max-w-md mx-auto leading-relaxed mb-8 md:mb-10">
            Trag dich in die Warteliste ein und sei beim Launch von IMMYO sofort dabei.<br />Kein Spam. Kein Drama. Versprochen.
          </p>
          <WaitlistForm />

          {/* "Wofür trage ich mich ein?" — expandable manifesto */}
          <details className="group mt-10 w-full max-w-xl text-left">
            <summary className="list-none flex items-center justify-between cursor-pointer rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] transition-colors px-5 py-3.5">
              <span className="text-sm font-semibold text-white">
                Wofür trage ich mich ein?
              </span>
              <span
                aria-hidden
                className="text-white/55 text-base leading-none transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-5 py-5 space-y-4 text-[14px] md:text-[15px] leading-relaxed text-white/75 border-x border-b border-white/10 rounded-b-xl bg-white/[0.02] -mt-px">
              <p>
                Die Warteliste ist für die, die nicht länger akzeptieren wollen, wie Wohnen heute funktioniert — sondern Teil von etwas Neuem sein möchten.
              </p>
              <p>
                Du meldest dich nicht für „Early Access" an.<br />
                <span className="text-white font-semibold">
                  Du wirst Teil der ersten Bewegung gegen den heutigen Wohnungsmarkt.
                </span>
              </p>
              <p>
                Tritt der Warteliste bei, um beim Launch dabei zu sein — und nicht zu verpassen, wenn IMMYO live geht.
              </p>
            </div>
          </details>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-white/10 py-10">
          <div className="immio-container">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
              <div className="max-w-sm">
                <span className="text-white font-bold text-lg tracking-tight">IMMYO</span>
                <p className="text-white/40 text-xs mt-2 leading-relaxed">
                  Die moderne Immobilienplattform für Deutschland. Bald verfügbar.
                </p>
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Rechtliches</p>
                <ul className="space-y-2 flex flex-col md:flex-row md:gap-6 md:space-y-0">
                  {[
                    { href: "/datenschutz", label: "Datenschutz" },
                    { href: "/impressum", label: "Impressum" },
                    { href: "/agb", label: "AGB" },
                  ].map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-white/50 hover:text-white text-xs transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-white/25 text-xs">© {new Date().getFullYear()} IMMYO. Alle Rechte vorbehalten.</p>
              <p className="text-white/25 text-xs">Made in Germany 🇩🇪</p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
