import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-bg-secondary border-t border-border-dark/15 mt-16 md:mt-24">
      <div className="container-x py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-border-dark/40 flex items-center justify-center bg-bg-primary">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden
                />
              </div>
              <span className="font-heading text-2xl tracking-widest">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Pregătim mașini pentru locuri unde drumul se termină. Fiecare
              proiect este personal.
            </p>
            <p className="font-accent text-xl mt-4 text-text-muted">
              — lucrat manual, atent.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl tracking-widest mb-5">
              Servicii
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicii/${s.slug}`}
                    className="text-sm text-text-muted hover:text-accent-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl tracking-widest mb-5">
              Companie
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/despre-noi"
                  className="text-sm text-text-muted hover:text-accent-primary"
                >
                  Despre noi
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-sm text-text-muted hover:text-accent-primary"
                >
                  Galerie build-uri
                </Link>
              </li>
              <li>
                <Link
                  href="/servicii"
                  className="text-sm text-text-muted hover:text-accent-primary"
                >
                  Toate serviciile
                </Link>
              </li>
            </ul>
            <h3 className="font-heading text-xl tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2.5 hover:text-accent-primary"
                >
                  <Phone className="w-4 h-4" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-text-muted hover:text-accent-primary"
                >
                  <Mail className="w-4 h-4" /> {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-text-muted">
                <MapPin className="w-4 h-4" /> {siteConfig.address}
              </li>
              <li className="flex items-center gap-2.5 text-text-muted">
                <Clock className="w-4 h-4" /> {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-dark/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Toate drepturile
            rezervate.
          </p>
          <p className="font-accent text-base">
            o mașină nu se reparӑ — se cunoaște.
          </p>
        </div>
      </div>
    </footer>
  );
}
