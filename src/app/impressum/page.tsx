import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – IMMYO",
  description: "Anbieterkennzeichnung gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12 md:py-20">
      <div className="immio-container max-w-3xl">
        <article className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 md:p-10 prose-legal">
          <h1 className="text-2xl md:text-4xl font-bold text-carbon mb-2 tracking-tight">
            Impressum
          </h1>
          <p className="text-xs md:text-sm text-carbon/50 mb-8 md:mb-10">
            Angaben gemäß § 5 TMG
          </p>

          <section className="space-y-1 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              Anbieter
            </h2>
            <p className="text-sm md:text-base text-carbon/80">Katrin Katinic Guerrero</p>
            <p className="text-sm md:text-base text-carbon/80">Keltertstraße 20</p>
            <p className="text-sm md:text-base text-carbon/80">72636 Frickenhausen</p>
            <p className="text-sm md:text-base text-carbon/80">Deutschland</p>
          </section>

          <section className="space-y-1 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              Kontakt
            </h2>
            <p className="text-sm md:text-base text-carbon/80">
              E-Mail:{" "}
              <a
                href="mailto:info@immyo.de"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                info@immyo.de
              </a>
            </p>
          </section>

          <section className="space-y-1 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="text-sm md:text-base text-carbon/80">Katrin Katinic Guerrero</p>
            <p className="text-sm md:text-base text-carbon/80">Keltertstraße 20</p>
            <p className="text-sm md:text-base text-carbon/80">72636 Frickenhausen</p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              Haftung für Inhalte
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
              jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir
              gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
              entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              Haftung für Links
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="space-y-3 mb-8">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              Urheberrecht
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung der jeweiligen Autorin bzw. Erstellerin. Downloads und
              Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base md:text-lg font-semibold text-carbon mb-2">
              Streitschlichtung
            </h2>
            <p className="text-sm md:text-base text-carbon/70 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-carbon underline underline-offset-2 hover:text-carbon/70"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
