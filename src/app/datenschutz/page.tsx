import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – IMMYO",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12 md:py-20">
      <div className="immio-container max-w-3xl">
        <article className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold text-carbon mb-2 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-xs md:text-sm text-carbon/50 mb-8 md:mb-10">
            Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              1. Verantwortliche Stelle
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
              der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="text-sm md:text-base text-carbon/80 leading-relaxed">
              <p>Katrin Katinic Guerrero</p>
              <p>Keltertstraße 20</p>
              <p>72636 Frickenhausen</p>
              <p>Deutschland</p>
              <p className="mt-2">
                E-Mail:{" "}
                <a
                  href="mailto:info@immyo.de"
                  className="text-carbon underline underline-offset-2 hover:text-carbon/70"
                >
                  info@immyo.de
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Wir verarbeiten personenbezogene Daten unserer Nutzer:innen
              grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Eine Verarbeitung erfolgt regelmäßig nur nach
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder auf Grundlage
              gesetzlicher Erlaubnistatbestände (insbesondere Art. 6 Abs. 1 lit. b
              und f DSGVO).
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              3. Bereitstellung der Website und Server-Logfiles
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Beim Aufruf unserer Website erfasst unser Hosting-Anbieter automatisch
              Informationen, die Ihr Browser an unseren Server übermittelt. Dazu
              gehören:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base text-carbon/70 leading-relaxed">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seite / Datei</li>
              <li>Übertragene Datenmenge und Statusmeldung</li>
              <li>Browsertyp, Betriebssystem und Referrer-URL</li>
            </ul>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Diese Daten werden zur Sicherstellung eines störungsfreien Betriebs
              der Website sowie zur Verbesserung unseres Angebots ausgewertet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse). Eine Zusammenführung dieser Daten mit anderen
              Datenquellen findet nicht statt.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              4. Warteliste (Newsletter)
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Wenn Sie sich auf unserer Website für die Warteliste eintragen,
              verarbeiten wir die von Ihnen angegebene E-Mail-Adresse sowie
              optionale Angaben zu Ihrer Rolle (z.&nbsp;B. „Mieter:in",
              „Vermieter:in"), um Sie über den Launch von IMMYO sowie über damit
              zusammenhängende Informationen zu benachrichtigen.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a
              DSGVO. Sie können Ihre Einwilligung jederzeit mit Wirkung für die
              Zukunft widerrufen, beispielsweise per E-Mail an{" "}
              <a
                href="mailto:info@immyo.de"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                info@immyo.de
              </a>{" "}
              oder über den Abmeldelink in unseren E-Mails.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Für den Versand der Warteliste-Kommunikation setzen wir den Dienst{" "}
              <strong>Brevo</strong> (Sendinblue GmbH, Köpenicker Str. 126, 10179
              Berlin, sowie Sendinblue SAS, 7 rue de Madrid, 75008 Paris,
              Frankreich) ein. Brevo verarbeitet Ihre Daten in unserem Auftrag
              gemäß Art. 28 DSGVO. Mehr Informationen finden Sie unter{" "}
              <a
                href="https://www.brevo.com/de/datenschutz-uebersicht/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                brevo.com/de/datenschutz-uebersicht
              </a>
              .
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              5. Geständnisse („Confessions")
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Auf unserer Website können Sie freiwillig anonyme Erfahrungsberichte
              („Geständnisse") rund um das Thema Wohnen und Immobilien einreichen.
              Es wird kein Name und keine sonstige Identifizierungsmerkmale
              gespeichert. Optional können Sie bei der Einreichung Ihre
              E-Mail-Adresse angeben, um sich gleichzeitig auf die Warteliste
              setzen zu lassen; in diesem Fall gelten die Angaben unter Ziffer 4
              entsprechend.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Bitte geben Sie in Ihren Geständnissen keine personenbezogenen Daten
              Dritter (z.&nbsp;B. Namen, Anschriften) preis. Wir behalten uns vor,
              Beiträge, die gegen geltendes Recht oder die guten Sitten verstoßen,
              ohne Angabe von Gründen zu löschen.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              6. Cookies und vergleichbare Technologien
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Unsere Website verwendet ausschließlich technisch notwendige Cookies
              bzw. Speichermechanismen (z.&nbsp;B. zur Speicherung Ihrer
              Cookie-Auswahl im lokalen Speicher Ihres Browsers). Diese sind für
              den Betrieb der Seite erforderlich. Rechtsgrundlage ist § 25 Abs. 2
              Nr. 2 TTDSG i.&nbsp;V.&nbsp;m. Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Sollten künftig optionale Cookies (z.&nbsp;B. für Statistik oder
              Marketing) eingesetzt werden, geschieht dies erst nach Ihrer
              ausdrücklichen Einwilligung über unseren Cookie-Hinweis.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              7. Schriftarten (next/font)
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Wir verwenden auf unserer Website Schriftarten (u.&nbsp;a. „Geist",
              „Permanent Marker", „Caveat") über die in Next.js integrierte
              Funktion <em>next/font</em>. Die Schriftdateien werden zum Zeitpunkt
              des Builds heruntergeladen und direkt von unserem Server
              ausgeliefert. Eine Verbindung Ihres Browsers zu Google-Servern findet
              dabei nicht statt.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              8. Empfänger und Drittlandsübermittlung
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Eine Übermittlung Ihrer personenbezogenen Daten erfolgt nur an die
              in dieser Erklärung genannten Auftragsverarbeiter (insbesondere
              unseren Hosting-Anbieter sowie Brevo). Eine Übermittlung in
              Drittländer außerhalb der EU/des EWR findet derzeit nicht statt. Soweit
              Auftragsverarbeiter Daten in Drittländern verarbeiten sollten,
              erfolgt dies nur auf Grundlage geeigneter Garantien gemäß
              Art. 44&nbsp;ff. DSGVO.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              9. Speicherdauer
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Wir speichern personenbezogene Daten nur so lange, wie dies für die
              jeweilige Verarbeitung erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen. Warteliste-Daten werden bis zum
              Widerruf Ihrer Einwilligung bzw. bis zum Abschluss des Warteliste-
              und Onboarding-Prozesses gespeichert.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              10. Ihre Rechte als betroffene Person
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Sie haben uns gegenüber jederzeit folgende Rechte hinsichtlich der
              Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base text-carbon/70 leading-relaxed">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>
                Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die
                Zukunft (Art. 7 Abs. 3 DSGVO)
              </li>
            </ul>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an{" "}
              <a
                href="mailto:info@immyo.de"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                info@immyo.de
              </a>
              . Ihnen steht außerdem ein Beschwerderecht bei einer
              Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO), insbesondere beim{" "}
              <a
                href="https://www.baden-wuerttemberg.datenschutz.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                Landesbeauftragten für den Datenschutz und die Informationsfreiheit
                Baden-Württemberg
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              11. Aktualität dieser Datenschutzerklärung
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
              Änderungen unserer Leistungen umzusetzen, z.&nbsp;B. bei der
              Einführung neuer Funktionen. Für Ihren erneuten Besuch gilt dann die
              jeweils aktuelle Fassung.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
