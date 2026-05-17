import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen – IMMYO",
  description:
    "Allgemeine Geschäftsbedingungen für die Nutzung der Warteliste und der IMMYO-Website.",
};

export default function AGBPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12 md:py-20">
      <div className="immio-container max-w-3xl">
        <article className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold text-carbon mb-2 tracking-tight">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-xs md:text-sm text-carbon/50 mb-8 md:mb-10">
            Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 1 Geltungsbereich und Anbieterin
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten
              für die Nutzung der Website{" "}
              <a
                href="https://immyo.de"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                immyo.de
              </a>{" "}
              (nachfolgend „Website") sowie für die kostenlose Anmeldung zur
              Warteliste von IMMYO.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (2) Anbieterin der Website ist:
            </p>
            <div className="text-sm md:text-base text-carbon/80 leading-relaxed">
              <p>Katrin Katinic Guerrero</p>
              <p>Keltertstraße 20</p>
              <p>72636 Frickenhausen</p>
              <p className="mt-1">
                E-Mail:{" "}
                <a
                  href="mailto:info@immyo.de"
                  className="text-carbon underline underline-offset-2 hover:text-carbon/70"
                >
                  info@immyo.de
                </a>
              </p>
            </div>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (3) Abweichende Bedingungen der Nutzer:innen werden nicht anerkannt,
              es sei denn, die Anbieterin stimmt ihrer Geltung ausdrücklich
              schriftlich zu.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 2 Leistungsgegenstand
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (1) Die Website bietet aktuell eine kostenlose Anmeldung zu einer
              Warteliste an. Ziel ist es, interessierte Nutzer:innen über den
              Launch der IMMYO-Plattform sowie damit zusammenhängende Informationen
              zu informieren.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (2) Zusätzlich bietet die Website die Möglichkeit, anonyme
              Erfahrungsberichte rund um das Thema Wohnen und Immobilien
              („Geständnisse") einzureichen und einzusehen.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (3) Ein Anspruch auf eine bestimmte Verfügbarkeit oder einen
              bestimmten Funktionsumfang der Website besteht nicht. Die Anbieterin
              behält sich vor, Inhalte, Funktionen und Leistungen jederzeit zu
              ändern, einzuschränken oder einzustellen.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 3 Anmeldung zur Warteliste
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (1) Die Anmeldung zur Warteliste erfolgt durch Eingabe einer gültigen
              E-Mail-Adresse sowie optional einer Rollenangabe (z.&nbsp;B.
              Mieter:in, Vermieter:in, Dienstleister:in) und Klick auf den
              entsprechenden Anmeldebutton. Mit der Anmeldung erklären Sie sich
              damit einverstanden, dass die Anbieterin Sie per E-Mail über den
              Launch und damit zusammenhängende Themen informiert.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (2) Die Anmeldung ist kostenlos und kann jederzeit ohne Angabe von
              Gründen mit Wirkung für die Zukunft widerrufen werden, z.&nbsp;B.
              über den Abmeldelink in unseren E-Mails oder per Nachricht an{" "}
              <a
                href="mailto:info@immyo.de"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                info@immyo.de
              </a>
              .
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (3) Mit der Anmeldung entsteht kein Anspruch auf einen späteren
              Zugang zur IMMYO-Plattform, auf einen bestimmten Zeitpunkt des
              Launches oder auf bestimmte Leistungen.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 4 Geständnisse („Confessions")
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (1) Nutzer:innen können auf der Website freiwillig anonyme
              Erfahrungsberichte einreichen. Mit dem Einreichen räumen sie der
              Anbieterin ein unentgeltliches, nicht-ausschließliches, zeitlich und
              räumlich unbegrenztes Nutzungsrecht zur Veröffentlichung des
              eingereichten Textes auf der Website ein.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (2) Nutzer:innen versichern, dass die von ihnen eingereichten Inhalte
              keine Rechte Dritter verletzen, insbesondere keine Persönlichkeits-,
              Urheber- oder Markenrechte. Es ist untersagt, beleidigende,
              diskriminierende, gewaltverherrlichende, sexuell anstößige oder
              anderweitig rechtswidrige Inhalte zu veröffentlichen sowie
              personenbezogene Daten Dritter zu nennen.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (3) Die Anbieterin behält sich vor, Beiträge ohne Angabe von Gründen
              zu kürzen, zu bearbeiten oder zu löschen, insbesondere wenn diese
              gegen geltendes Recht oder Absatz (2) verstoßen.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 5 Verfügbarkeit und Änderungen
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (1) Die Anbieterin bemüht sich um eine möglichst unterbrechungsfreie
              Verfügbarkeit der Website, übernimmt jedoch keine Gewähr dafür. Die
              Website kann insbesondere wegen Wartungs-, Sicherheits- oder
              Kapazitätsbelangen sowie aufgrund von Ereignissen, die nicht im
              Einflussbereich der Anbieterin liegen, vorübergehend nicht erreichbar
              sein.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (2) Die Anbieterin ist berechtigt, diese AGB mit Wirkung für die
              Zukunft zu ändern. Über Änderungen werden Nutzer:innen rechtzeitig in
              geeigneter Form informiert.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 6 Haftung
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (1) Die Anbieterin haftet unbeschränkt für Schäden aus der Verletzung
              des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die
              auf vorsätzlichem oder grob fahrlässigem Verhalten der Anbieterin,
              ihrer gesetzlichen Vertreter:innen oder Erfüllungsgehilf:innen
              beruhen.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (2) Bei einfacher Fahrlässigkeit haftet die Anbieterin nur bei
              Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht),
              deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt
              erst ermöglicht und auf deren Einhaltung die Nutzer:innen regelmäßig
              vertrauen dürfen. In diesem Fall ist die Haftung auf den
              vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (3) Im Übrigen ist die Haftung – soweit gesetzlich zulässig –
              ausgeschlossen. Die Haftung nach dem Produkthaftungsgesetz bleibt
              unberührt.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (4) Für Inhalte, die Nutzer:innen auf der Website einstellen
              (insbesondere Geständnisse), übernimmt die Anbieterin keine
              Verantwortung im Sinne einer eigenen inhaltlichen Aussage.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 7 Datenschutz
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Informationen zur Verarbeitung personenbezogener Daten entnehmen Sie
              bitte unserer{" "}
              <a
                href="/datenschutz"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 8 Anwendbares Recht und Gerichtsstand
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (1) Es gilt ausschließlich das Recht der Bundesrepublik Deutschland
              unter Ausschluss des UN-Kaufrechts. Gegenüber Verbraucher:innen gilt
              diese Rechtswahl nur insoweit, als hierdurch nicht der durch
              zwingende Bestimmungen des Rechts des Staates, in dem der oder die
              Verbraucher:in seinen oder ihren gewöhnlichen Aufenthalt hat,
              gewährte Schutz entzogen wird.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              (2) Ist der/die Nutzer:in Kaufmann, juristische Person des
              öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist
              ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im
              Zusammenhang mit diesen AGB der Sitz der Anbieterin.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              § 9 Schlussbestimmungen
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar
              sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen
              davon nicht berührt. Anstelle der unwirksamen oder undurchführbaren
              Bestimmung gilt diejenige wirksame und durchführbare Regelung als
              vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung
              am nächsten kommt.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
