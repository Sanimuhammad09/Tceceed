import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { PORTAL_LOGOS, PORTAL_CONTACT } from '../data/portalData';
import { WhatsAppIcon } from './WhatsAppWidget';

interface NavItem {
  name: string;
  short: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', short: 'Home', href: '/' },
  { name: 'About TCECEED', short: 'About', href: '/about' },
  { name: 'Research & Projects', short: 'Research', href: '/research' },
  { name: 'Career & Internship', short: 'Internship', href: '/internship' },
  { name: 'Management Structure', short: 'Governance', href: '/management' },
  { name: 'News & Publications', short: 'News', href: '/news' },
  { name: 'Contact Us', short: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const primaryWhatsApp = PORTAL_CONTACT.whatsappNumbers[0];
  const secondaryWhatsApp = PORTAL_CONTACT.whatsappNumbers[1];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
      {/* Top Academic & Institutional Accreditation Strip */}
      <div className="bg-[#0b5738] text-white py-1.5 px-4 text-xs font-medium border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
          {/* Left: Contact Channels */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-1.5 text-white/95">
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span className="font-semibold text-emerald-300">WhatsApp:</span>
              <a
                href={primaryWhatsApp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors underline-offset-2 hover:underline"
                title="Chat with Primary Desk"
              >
                {primaryWhatsApp.label}
              </a>
              <span className="text-white/40">/</span>
              <a
                href={secondaryWhatsApp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors underline-offset-2 hover:underline"
                title="Chat with Alternate Desk"
              >
                {secondaryWhatsApp.label}
              </a>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/90">
              <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <a
                href={`mailto:${PORTAL_CONTACT.email}`}
                className="hover:text-emerald-300 transition-colors"
              >
                {PORTAL_CONTACT.email}
              </a>
            </span>
          </div>

          {/* Right: Location & Accreditation Badge */}
          <div className="flex items-center gap-x-4">
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Federal Polytechnic Nasarawa, P.M.B 01, Nigeria</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-white text-[10px] font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
              <ShieldCheck className="w-3 h-3 text-[#25D366]" />
              <span>TETFund Centre of Excellence</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Desktop & Responsive Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 lg:h-20 gap-3 lg:gap-6">
          {/* Brand Cluster: The 3 Official Logos + Institutional Typography */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group focus:outline-none"
            title="TCECEED Home"
          >
            {/* The 3 Official Logos side by side in an institutional white badge */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] group-hover:border-emerald-300 transition-all duration-200">
              {/* Logo 1: TETFund */}
              <div className="relative flex items-center justify-center p-0.5" title={PORTAL_LOGOS.logo1.title}>
                <img
                  src={PORTAL_LOGOS.logo1.src}
                  alt={PORTAL_LOGOS.logo1.alt}
                  className="h-9 sm:h-10 lg:h-11 w-auto object-contain max-w-[42px] sm:max-w-[48px] lg:max-w-[52px] transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="w-px h-7 sm:h-8 bg-slate-200"></div>

              {/* Logo 2: Federal Polytechnic Nasarawa */}
              <div className="relative flex items-center justify-center p-0.5" title={PORTAL_LOGOS.logo2.title}>
                <img
                  src={PORTAL_LOGOS.logo2.src}
                  alt={PORTAL_LOGOS.logo2.alt}
                  className="h-9 sm:h-10 lg:h-11 w-auto object-contain max-w-[62px] sm:max-w-[75px] lg:max-w-[82px] transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="w-px h-7 sm:h-8 bg-slate-200"></div>

              {/* Logo 3: TCECEED */}
              <div className="relative flex items-center justify-center p-0.5" title={PORTAL_LOGOS.logo3.title}>
                <img
                  src={PORTAL_LOGOS.logo3.src}
                  alt={PORTAL_LOGOS.logo3.alt}
                  className="h-9 sm:h-10 lg:h-11 w-auto object-contain max-w-[52px] sm:max-w-[64px] lg:max-w-[70px] transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Institutional Brand Heading */}
            <div className="hidden lg:flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl lg:text-[22px] tracking-tight text-[#064e3b] leading-none group-hover:text-emerald-700 transition-colors">
                  TCECEED
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  National Hub
                </span>
              </div>
              <span className="font-heading font-semibold text-xs text-slate-800 mt-1 leading-tight">
                The Federal Polytechnic Nasarawa
              </span>
              <span className="text-[10.5px] text-slate-500 leading-tight">
                TETFund Centre of Excellence for Clean Energy &amp; Entrepreneurship Dev.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (starts cleanly at lg breakpoint - 1024px+) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-2.5 xl:px-3 py-2 rounded-lg font-heading text-[13px] xl:text-[13.5px] font-semibold transition-all duration-150 ${
                    active
                      ? 'text-[#064e3b] font-bold bg-emerald-50/80 shadow-2xs'
                      : 'text-slate-700 hover:text-[#064e3b] hover:bg-slate-100/80'
                  }`}
                >
                  {/* Full label on xl/2xl, concise on lg */}
                  <span className="hidden xl:inline">{item.name}</span>
                  <span className="xl:hidden">{item.short}</span>

                  {/* Animated Active Accent Line */}
                  {active && (
                    <motion.div
                      layoutId="desktop-active-indicator"
                      className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#0b5738] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Corner Actions: WhatsApp Quick Link & Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop WhatsApp Quick Action Icon Button */}
            <a
              href={primaryWhatsApp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center p-2 rounded-lg border border-emerald-200 bg-emerald-50/70 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-2xs group relative"
              title={`Chat with TCECEED on WhatsApp (${primaryWhatsApp.label})`}
              aria-label="Direct WhatsApp Contact"
            >
              <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            {/* Primary Action Button: Apply for Internship */}
            <Link
              to="/internship"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 lg:px-4 py-2.5 rounded-lg bg-[#0b5738] text-white font-heading font-semibold text-xs lg:text-[13px] hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-150"
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Apply for Internship</span>
            </Link>

            {/* Mobile / Tablet Menu Button (screens < 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Framer Motion (screens < 1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-slate-200 bg-white overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="p-3 bg-slate-50 rounded-xl mb-3 flex items-center justify-between border border-slate-100">
                <div className="flex items-center gap-2">
                  <img src={PORTAL_LOGOS.logo3.src} alt="TCECEED" className="h-7 w-auto" />
                  <span className="font-heading font-bold text-sm text-[#064e3b]">TCECEED Nasarawa</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold px-2 py-0.5 bg-emerald-50 rounded-full border border-emerald-200">
                  TETFund Hub
                </span>
              </div>

              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      active
                        ? 'bg-[#064e3b] text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-[#064e3b]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                  </Link>
                );
              })}

              <div className="pt-3 space-y-2">
                <Link
                  to="/internship"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0b5738] text-white font-semibold text-sm hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Apply for 6-Month Internship</span>
                </Link>

                <a
                  href={primaryWhatsApp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs hover:bg-emerald-100 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp ({primaryWhatsApp.label})</span>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{primaryWhatsApp.label} / {secondaryWhatsApp.label}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{PORTAL_CONTACT.email}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
