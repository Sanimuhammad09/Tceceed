import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { PORTAL_LOGOS } from '../data/portalData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About TCECEED', href: '/about' },
  { name: 'Research & Projects', href: '/research' },
  { name: 'Career & Internship', href: '/internship' },
  { name: 'Management Structure', href: '/management' },
  { name: 'News & Publications', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-container">
      {/* Top Academic & Emergency Information Strip */}
      <div className="bg-primary text-white py-1.5 px-4 text-xs font-medium border-b border-primary-dark">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="text-secondary-fixed font-bold">WhatsApp:</span>
              <a
                href="https://wa.me/2348036363090"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-fixed transition-colors underline-offset-2 hover:underline"
              >
                +234 803 636 3090
              </a>
              <span className="text-white/40">/</span>
              <a
                href="https://wa.me/2348033972612"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-fixed transition-colors underline-offset-2 hover:underline"
              >
                +234 803 397 2612
              </a>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/90">
              <Mail className="w-3.5 h-3.5 text-secondary-fixed" />
              <a
                href="mailto:tceceedinfo2024@gmail.com"
                className="hover:text-secondary-fixed transition-colors"
              >
                tceceedinfo2024@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-secondary-fixed" />
              <span>Federal Polytechnic Nasarawa, P.M.B 01, Nigeria</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-white text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping"></span>
              TETFund Centre of Excellence
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with the 3 Official Logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
          {/* 3 Logos + Brand Identity Block */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 shrink-0 group">
            {/* The 3 Official Logos side by side */}
            <div className="flex items-center gap-2 sm:gap-3 p-1.5 bg-white rounded-xl shadow-xs border border-surface-container">
              {/* Logo 1: TETFund */}
              <div className="relative group/logo">
                <img
                  src={PORTAL_LOGOS.logo1.src}
                  alt={PORTAL_LOGOS.logo1.alt}
                  title={PORTAL_LOGOS.logo1.title}
                  className="h-10 sm:h-12 w-auto object-contain max-w-[48px] sm:max-w-[56px] transition-transform duration-200 group-hover/logo:scale-105"
                />
              </div>

              <div className="w-[1px] h-8 bg-surface-container-high"></div>

              {/* Logo 2: Federal Polytechnic Nasarawa */}
              <div className="relative group/logo">
                <img
                  src={PORTAL_LOGOS.logo2.src}
                  alt={PORTAL_LOGOS.logo2.alt}
                  title={PORTAL_LOGOS.logo2.title}
                  className="h-10 sm:h-12 w-auto object-contain max-w-[70px] sm:max-w-[85px] transition-transform duration-200 group-hover/logo:scale-105"
                />
              </div>

              <div className="w-[1px] h-8 bg-surface-container-high"></div>

              {/* Logo 3: TCECEED */}
              <div className="relative group/logo">
                <img
                  src={PORTAL_LOGOS.logo3.src}
                  alt={PORTAL_LOGOS.logo3.alt}
                  title={PORTAL_LOGOS.logo3.title}
                  className="h-10 sm:h-12 w-auto object-contain max-w-[60px] sm:max-w-[75px] transition-transform duration-200 group-hover/logo:scale-105"
                />
              </div>
            </div>

            {/* Title / Institutional Heading */}
            <div className="hidden lg:flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-xl tracking-tight text-primary leading-none group-hover:text-primary-dark transition-colors">
                  TCECEED
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-secondary/10 text-secondary">
                  National Hub
                </span>
              </div>
              <span className="font-heading font-semibold text-xs text-on-surface mt-1 leading-tight">
                The Federal Polytechnic Nasarawa
              </span>
              <span className="text-[11px] text-on-surface-variant leading-tight">
                TETFund Centre of Excellence for Clean Energy &amp; Entrepreneurship Dev.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 rounded-lg text-[13px] 2xl:text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/internship"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-secondary text-white font-heading font-semibold text-xs lg:text-sm hover:bg-secondary-emerald transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-150"
            >
              <Sparkles className="w-4 h-4 text-secondary-fixed" />
              <span>Apply for Internship</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden border-t border-surface-container bg-white overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="p-3 bg-surface-container-low rounded-xl mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={PORTAL_LOGOS.logo3.src} alt="TCECEED" className="h-7 w-auto" />
                  <span className="font-heading font-bold text-sm text-primary">TCECEED Nasarawa</span>
                </div>
                <span className="text-[11px] text-secondary font-semibold">TETFund Hub</span>
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
                        ? 'bg-primary text-white'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-white' : 'text-outline-variant'}`} />
                  </Link>
                );
              })}

              <div className="pt-3">
                <Link
                  to="/internship"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-secondary text-white font-semibold text-sm hover:bg-secondary-emerald transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-secondary-fixed" />
                  <span>Apply for 6-Month Internship</span>
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-surface-container text-xs text-on-surface-variant space-y-1">
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  <span>+234 803 636 3090 / +234 803 397 2612</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-secondary" />
                  <span>tceceedinfo2024@gmail.com</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

