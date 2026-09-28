import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de cookie-uri | PRV Atelier Auto",
  description:
    "Cookie-urile și tehnologiile de măsurare folosite pe prvatelierauto.ro.",
};

const sectionClass = "space-y-3 border-t border-black/15 pt-7";
const headingClass = "text-2xl font-bold tracking-tight";
const linkClass = "font-medium text-red-700 underline underline-offset-4";

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-[#f5efe6] px-5 py-16 text-[#191919] md:py-24">
      <article className="mx-auto max-w-3xl space-y-9 leading-7">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Informații legale
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight md:text-5xl">
            Politica de cookie-uri
          </h1>

          <p className="text-sm text-black/65">
            Ultima actualizare: 28 septembrie 2026
          </p>

          <p>
            Această pagină explică utilizarea cookie-urilor și a tehnologiilor
            similare pe prvatelierauto.ro. Operatorul site-ului este PROSERV
            INNOVATION SRL.
          </p>
        </header>

        <section className={sectionClass}>
          <h2 className={headingClass}>1. Ce sunt cookie-urile</h2>

          <p>
            Cookie-urile sunt fișiere mici pe care un site le poate stoca în
            browserul tău. Stocarea locală din browser poate îndeplini funcții
            asemănătoare. Aceste tehnologii pot servi la funcționarea site-ului,
            memorarea alegerilor, măsurarea traficului sau publicitate.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. Categoriile folosite</h2>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Necesare:</strong> păstrează alegerea făcută în panoul de
              consimțământ și permit funcționarea de bază a site-ului. Nu pot fi
              dezactivate din acest panou.
            </li>

            <li>
              <strong>Statistici:</strong> permit Google Analytics 4 să
              folosească cookie-uri pentru măsurarea vizitelor și
              interacțiunilor. Sunt opționale.
            </li>

            <li>
              <strong>Publicitate și măsurarea conversiilor:</strong> permit
              folosirea cookie-urilor de măsurare Google Ads și a datelor
              relevante pentru evaluarea interacțiunilor cu reclamele. Sunt
              opționale.
            </li>

            <li>
              <strong>Reclame personalizate:</strong> reprezintă o alegere
              separată. Le poți refuza chiar dacă accepți măsurarea
              publicității.
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>3. Cookie-uri și durate</h2>

          <p>
            Tabelul prezintă cookie-ul folosit pentru alegerea ta și
            identificatorii obișnuiți ai serviciilor Google configurate prin Tag
            Manager. Cookie-urile Google apar în funcție de tagurile active,
            setările acestora și opțiunile tale.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/30">
                  <th className="py-3 pr-4">Nume</th>
                  <th className="py-3 pr-4">Furnizor / scop</th>
                  <th className="py-3 pr-4">Categorie</th>
                  <th className="py-3">Durată</th>
                </tr>
              </thead>

              <tbody className="align-top">
                <tr className="border-b border-black/15">
                  <td className="py-4 pr-4 font-medium">prv_consent_v1</td>
                  <td className="py-4 pr-4">
                    PRV Atelier Auto: reține alegerile făcute în banner.
                  </td>
                  <td className="py-4 pr-4">Necesar</td>
                  <td className="py-4">180 de zile</td>
                </tr>

                <tr className="border-b border-black/15">
                  <td className="py-4 pr-4 font-medium">_ga</td>
                  <td className="py-4 pr-4">
                    Google Analytics 4: diferențierea vizitatorilor.
                  </td>
                  <td className="py-4 pr-4">Statistici</td>
                  <td className="py-4">
                    Până la 2 ani, conform setării implicite Google.
                  </td>
                </tr>

                <tr className="border-b border-black/15">
                  <td className="py-4 pr-4 font-medium">_ga_&lt;ID&gt;</td>
                  <td className="py-4 pr-4">
                    Google Analytics 4: păstrarea stării sesiunii.
                  </td>
                  <td className="py-4 pr-4">Statistici</td>
                  <td className="py-4">
                    Până la 2 ani, conform setării implicite Google.
                  </td>
                </tr>

                <tr className="border-b border-black/15">
                  <td className="py-4 pr-4 font-medium">
                    _gcl_au, _gcl_aw, _gcl_gs
                  </td>
                  <td className="py-4 pr-4">
                    Google Ads: măsurarea interacțiunilor și asocierea
                    conversiilor cu clicurile pe reclame.
                  </td>
                  <td className="py-4 pr-4">Publicitate</td>
                  <td className="py-4">
                    Până la 90 de zile, conform informațiilor Google.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-black/70">
            În funcție de configurația finală a tagurilor, pot apărea numai o
            parte dintre identificatorii Google enumerați. Duratele pot diferi
            dacă sunt modificate setările implicite.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>
            4. Statistici Vercel și semnale fără cookie-uri
          </h2>

          <p>
            Folosim și Vercel Web Analytics pentru statistici agregate. Potrivit
            Vercel, acest serviciu nu folosește cookie-uri pentru măsurarea
            traficului.
          </p>

          <p>
            Google Tag Manager, Google Analytics 4 și Google Ads folosesc
            Advanced Consent Mode. Înainte de alegerea ta, categoriile opționale
            au implicit starea „denied”. Dacă le refuzi, tagurile Google nu ar
            trebui să folosească respectivele cookie-uri opționale, însă pot
            transmite către Google semnale limitate fără cookie-uri, de exemplu
            informații despre starea consimțământului și evenimente de măsurare.
            Aceste comunicări sunt descrise și în{" "}
            <Link className={linkClass} href="/politica-de-confindentialitate">
              Politica de confidențialitate
            </Link>
            .
          </p>

          <p>
            Informații despre modul în care Google utilizează datele primite de
            la site-uri și aplicații găsești pe{" "}
            <a
              className={linkClass}
              href="https://business.safety.google/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pagina Google privind utilizarea datelor
            </a>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Cum faci sau schimbi alegerea</h2>

          <p>
            La prima vizită poți apăsa „Respinge opționalele”, „Acceptă toate”
            sau „Personalizează”. În opțiunile detaliate, statisticile,
            măsurarea publicității și reclamele personalizate pot fi selectate
            separat. Alegerea ta este memorată pentru 180 de zile.
          </p>

          <p>
            Poți reveni oricând asupra alegerii prin butonul „Setări cookie-uri”
            din subsolul site-ului. Retragerea acordului oprește utilizarea
            ulterioară a categoriilor respective prin mecanismul nostru de
            consimțământ. Încercăm să ștergem și cookie-urile Google accesibile
            site-ului; cookie-urile de pe alte domenii pot fi gestionate din
            setările browserului.
          </p>

          <p>
            Poți șterge și bloca cookie-uri din browser. Blocarea generală a
            acestora poate afecta funcțiile site-urilor care depind de ele.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>6. Contact și actualizări</h2>

          <p>
            Pentru întrebări, scrie-ne la{" "}
            <a className={linkClass} href="mailto:Proservinnovation@gmail.com">
              Proservinnovation@gmail.com
            </a>
            . Pentru informații suplimentare despre prelucrarea datelor,
            consultă{" "}
            <Link className={linkClass} href="/politica-de-confindentialitate">
              Politica de confidențialitate
            </Link>
            .
          </p>

          <p>
            Actualizăm această pagină dacă modificăm serviciile sau tehnologiile
            folosite. Dacă introducem categorii noi, vom solicita din nou
            alegerea ta înainte de folosirea lor.
          </p>
        </section>
      </article>
    </main>
  );
}
