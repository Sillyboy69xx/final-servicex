'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { siteConfig, services } from '@/lib/site'
import { gsap, registerGsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

/* ─── Desktop nav link ─────────────────────────────────────────────────────── */
function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative font-heading text-lg tracking-widest transition-colors',
        active ? 'text-accent-primary' : 'hover:text-accent-primary',
      )}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary" />
      )}
    </Link>
  )
}

/* ─── Mobile drawer link ───────────────────────────────────────────────────── */
function DrawerLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <li className="border-b border-border-dark/15">
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'flex items-center justify-between py-5 font-heading text-4xl tracking-wider transition-colors',
          active ? 'text-accent-primary' : 'text-text-primary',
        )}
      >
        <span>{children}</span>
        {active && (
          <span className="block h-0.5 w-6 bg-accent-primary flex-shrink-0" />
        )}
      </Link>
    </li>
  )
}

/* ─── Main component ───────────────────────────────────────────────────────── */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const drawerRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()

  /* Close on route change */
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  /* Portal needs the DOM */
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  /* Body scroll lock + GSAP entrance */
  useEffect(() => {
    registerGsap()

    if (open) {
      /* Lock scroll */
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'

      /* Animate overlay + drawer in */
      if (overlayRef.current) {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })
      }
      if (drawerRef.current) {
        gsap.fromTo(
          drawerRef.current,
          { xPercent: 100 },
          { xPercent: 0, duration: 0.38, ease: 'power3.out' },
        )
      }
      if (linksRef.current) {
        gsap.fromTo(
          Array.from(linksRef.current.children),
          { x: 48, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45, stagger: 0.055, delay: 0.18, ease: 'power3.out' },
        )
      }
    } else {
      /* Restore scroll */
      const scrollY = -parseInt(document.body.style.top || '0', 10)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) window.scrollTo(0, scrollY)
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [open])

  /* Animated close */
  const close = () => {
    if (!drawerRef.current) {
      setOpen(false)
      return
    }
    gsap.to(drawerRef.current, {
      xPercent: 100,
      duration: 0.28,
      ease: 'power3.in',
      onComplete: () => setOpen(false),
    })
    if (overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.22, ease: 'power2.in' })
    }
  }

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  /* ── Drawer markup (portalled) ─────────────────────────────────────────── */
  const drawer = mounted && open
    ? createPortal(
        /* Scrim */
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[200]"
          style={{ isolation: 'isolate' }}
        >
          {/* Translucent tap-to-close scrim */}
          <div
            className="absolute inset-0 bg-black/30"
            aria-hidden="true"
            onClick={close}
          />

          {/* Drawer panel — right-side full height */}
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Meniu navigare"
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-bg-primary flex flex-col shadow-2xl"
            style={{ willChange: 'transform' }}
          >
            {/* Drawer header row */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-border-dark/15 flex-shrink-0">
              <Link
                href="/"
                onClick={close}
                className="flex items-center gap-2.5"
                tabIndex={open ? 0 : -1}
              >
                <div className="w-8 h-8 border border-border-dark/40 flex items-center justify-center bg-bg-secondary">
                  <Image src="/logo.svg" alt="" width={26} height={26} aria-hidden />
                </div>
                <span className="font-heading text-lg tracking-widest">{siteConfig.name}</span>
              </Link>

              <button
                onClick={close}
                aria-label="Închide meniul"
                className="w-11 h-11 flex items-center justify-center border border-border-dark/40 hover:bg-bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable nav body */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-5 pb-8">
              <ul ref={linksRef} className="flex flex-col mt-2">
                <DrawerLink href="/" active={isActive('/')} onClick={close}>
                  Acasă
                </DrawerLink>

                {/* Services accordion */}
                <li className="border-b border-border-dark/15">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    className={cn(
                      'w-full flex items-center justify-between py-5 font-heading text-4xl tracking-wider transition-colors',
                      isActive('/servicii') ? 'text-accent-primary' : 'text-text-primary',
                    )}
                  >
                    <span>Servicii</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 transition-transform duration-200 flex-shrink-0',
                        servicesOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  {/* Sub-list — CSS height transition, no JS needed */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      servicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
                    )}
                  >
                    <ul className="pb-4 pl-1 space-y-1">
                      <li>
                        <Link
                          href="/servicii"
                          onClick={close}
                          className={cn(
                            'block py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors',
                            isActive('/servicii') && pathname === '/servicii'
                              ? 'text-accent-primary'
                              : 'hover:text-accent-primary',
                          )}
                        >
                          Toate serviciile
                        </Link>
                      </li>
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/servicii/${s.slug}`}
                            onClick={close}
                            className={cn(
                              'block py-1.5 text-sm transition-colors leading-relaxed',
                              isActive(`/servicii/${s.slug}`)
                                ? 'text-accent-primary font-medium'
                                : 'text-text-muted hover:text-accent-primary',
                            )}
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <DrawerLink href="/galerie" active={isActive('/galerie')} onClick={close}>
                  Galerie
                </DrawerLink>
                <DrawerLink href="/despre-noi" active={isActive('/despre-noi')} onClick={close}>
                  Despre
                </DrawerLink>
              </ul>

              {/* Contact footer inside drawer */}
              <div className="mt-8 pt-6 border-t border-border-dark/20 space-y-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 bg-accent-primary text-white px-5 py-4 font-heading text-2xl tracking-widest w-full hover:bg-black transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
                <p className="text-sm text-text-muted">{siteConfig.email}</p>
                <p className="text-sm text-text-muted">{siteConfig.address}</p>
                <p className="text-xs text-text-muted/60">{siteConfig.hours}</p>
              </div>
            </nav>
          </div>
        </div>,
        document.body,
      )
    : null

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-sm border-b border-border-dark/15">
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 border border-border-dark/40 flex items-center justify-center bg-bg-secondary">
              <Image src="/logo.svg" alt="" width={32} height={32} aria-hidden />
            </div>
            <span className="font-heading text-xl md:text-2xl tracking-widest">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigare principală">
            <NavLink href="/" active={pathname === '/'}>Acasă</NavLink>

            <div className="relative group">
              <button className="flex items-center gap-1 font-heading text-lg tracking-widest hover:text-accent-primary transition-colors">
                Servicii <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full -left-4 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                <div className="bg-bg-primary border border-border-dark/20 shadow-xl min-w-72 py-2">
                  <Link
                    href="/servicii"
                    className="block px-5 py-2.5 text-sm font-medium hover:bg-bg-secondary border-b border-border-dark/10 transition-colors"
                  >
                    Toate serviciile
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicii/${s.slug}`}
                      className="block px-5 py-2.5 text-sm hover:bg-bg-secondary hover:text-accent-primary transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/galerie" active={isActive('/galerie')}>Galerie</NavLink>
            <NavLink href="/despre-noi" active={isActive('/despre-noi')}>Despre</NavLink>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 bg-accent-primary text-white px-5 py-2.5 font-heading tracking-widest hover:bg-black transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </nav>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              aria-label="Sună acum"
              className="w-11 h-11 flex items-center justify-center bg-accent-primary text-white"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Deschide meniul"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="w-11 h-11 flex items-center justify-center border border-border-dark/40 hover:bg-bg-secondary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Portal-rendered drawer — outside <header>, always covers full viewport */}
      {drawer}
    </>
  )
}
