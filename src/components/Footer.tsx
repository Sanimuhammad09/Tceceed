import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { PORTAL_LOGOS, PORTAL_CONTACT } from '../data/portalData';
import { WhatsAppIcon } from './WhatsAppWidget';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
    }, 4000);
  };

  const primaryWhatsApp = PORTAL_CONTACT.whatsappNumbers[0];
  const secondaryWhatsApp = PORTAL_CONTACT.whatsappNumbers[1];

  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Research Bulletin Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#064e3b] to-[#0b5738] border border-emerald-700/50 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              Quarterly Academic Dispatch
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Subscribe to TCECEED Clean Energy Bulletins
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
              Get peer-reviewed research summaries, technical internship admissions notices, and renewable energy workshop dates delivered to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-emerald-400/40 text-emerald-200 text-xs font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                <span>Thank you! Your email is subscribed to the official bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter institutional email..."
                  className="w-full sm:w-72 h-11 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto h-11 px-5 rounded-xl bg-[#25D366] hover:bg-emerald-400 text-slate-900 font-heading font-bold text-xs transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Institutional Tripartite Identity & 3 Logos */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* The 3 Official Logos in Footer */}
            <div className="flex items-center gap-2.5 p-2 bg-white rounded-xl shadow-xs border border-slate-200 w-fit">
              <img
                src={PORTAL_LOGOS.logo1.src}
                alt={PORTAL_LOGOS.logo1.alt}
                title={PORTAL_LOGOS.logo1.title}
                className="h-10 w-auto object-contain max-w-[46px]"
              />
              <div className="w-px h-7 bg-slate-300"></div>
              <img
                src={PORTAL_LOGOS.logo2.src}
                alt={PORTAL_LOGOS.logo2.alt}
                title={PORTAL_LOGOS.logo2.title}
                className="h-10 w-auto object-contain max-w-[75px]"
              />
              <div className="w-px h-7 bg-slate-300"></div>
              <img
                src={PORTAL_LOGOS.logo3.src}
                alt={PORTAL_LOGOS.logo3.alt}
                title={PORTAL_LOGOS.logo3.title}
                className="h-10 w-auto object-contain max-w-[60px]"
              />
            </div>

            <div>
              <h3 className="font-heading font-black text-xl text-white tracking-tight leading-tight">
                TCECEED
              </h3>
              <p className="font-heading font-semibold text-xs text-emerald-400">
                The Federal Polytechnic Nasarawa &bull; Nigeria
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              TETFund Centre of Excellence for Clean Energy and Entrepreneurship Development. Advancing applied renewable energy research, indigenous hardware prototypes, biomass anaerobic digesters, and accredited technical workforce empowerment.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>Federal Republic of Nigeria &bull; TETFund Approved</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" /> Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" /> About the Centre
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" /> Research &amp; Projects
                </Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" /> 6-Month Internship
                </Link>
              </li>
              <li>
                <Link to="/management" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" /> Governance &amp; Council
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" /> News &amp; Publications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" /> Contact Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Strategic Focus Areas */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Research Streams
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Solar PV Testing, String Sizing &amp; Inverters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Anaerobic Biomass Gasification &amp; Fertilizer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Hybrid Mobile Micro-Grid Stations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Low-Speed Wind Turbine Blade Aerodynamics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Commercial Clean-Tech Start-up Incubation</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Direct Contacts & WhatsApp */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Secretariat Direct
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">TCECEED Complex</p>
                  <p>The Federal Polytechnic Nasarawa, Along Nasarawa-Keffi Road, P.M.B. 01, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Telephony Hotlines</p>
                  <p>+234 803 636 3090 / +234 803 397 2612</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Official Registry</p>
                  <a
                    href={`mailto:${PORTAL_CONTACT.email}`}
                    className="hover:text-emerald-400 underline-offset-2 hover:underline"
                  >
                    {PORTAL_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={primaryWhatsApp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-slate-900 text-[11px] font-bold hover:bg-emerald-400 transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk 1</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={secondaryWhatsApp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold border border-white/20 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Desk 2</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            &copy; 2025/2026 TCECEED &bull; TETFund Centre of Excellence for Clean Energy and Entrepreneurship Development, The Federal Polytechnic Nasarawa. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">
              Statutory Governance
            </span>
            <span>&bull;</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">
              TETFund Guidelines
            </span>
            <span>&bull;</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">
              Federal Polytechnic Nasarawa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
