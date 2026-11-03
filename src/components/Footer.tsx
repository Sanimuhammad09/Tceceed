import React from 'react';
import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, ExternalLink, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PORTAL_LOGOS } from '../data/portalData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface-variant pt-16 pb-10 border-t border-surface-container-high shadow-[0_-2px_12px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-surface-container-high">
          {/* Col 1: Institutional Tripartite Identity & 3 Logos */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* The 3 Official Logos in Footer */}
            <div className="flex items-center gap-3 p-2 bg-white rounded-xl shadow-xs border border-surface-container w-fit">
              <img
                src={PORTAL_LOGOS.logo1.src}
                alt={PORTAL_LOGOS.logo1.alt}
                title={PORTAL_LOGOS.logo1.title}
                className="h-10 w-auto object-contain max-w-[48px]"
              />
              <div className="w-[1px] h-6 bg-surface-container-high"></div>
              <img
                src={PORTAL_LOGOS.logo2.src}
                alt={PORTAL_LOGOS.logo2.alt}
                title={PORTAL_LOGOS.logo2.title}
                className="h-10 w-auto object-contain max-w-[80px]"
              />
              <div className="w-[1px] h-6 bg-surface-container-high"></div>
              <img
                src={PORTAL_LOGOS.logo3.src}
                alt={PORTAL_LOGOS.logo3.alt}
                title={PORTAL_LOGOS.logo3.title}
                className="h-10 w-auto object-contain max-w-[65px]"
              />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-lg text-primary leading-tight">
                TCECEED
              </h3>
              <p className="font-heading font-semibold text-xs text-on-surface">
                The Federal Polytechnic Nasarawa
              </p>
            </div>

            <p className="text-xs text-on-surface-variant leading-relaxed">
              TETFund Centre of Excellence for Clean Energy and Entrepreneurship Development.
              Advancing renewable energy research, indigenous hardware prototypes, biogas systems,
              and accredited technical workforce empowerment in Nigeria.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary-emerald"></span>
              <span className="text-xs font-semibold text-secondary">
                Federal Polytechnic Nasarawa &amp; TETFund Supported
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-on-surface uppercase tracking-wider mb-4 border-b border-surface-container pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" /> Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" /> About the Centre
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" /> Research &amp; Innovations
                </Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" /> 6-Month Internship
                </Link>
              </li>
              <li>
                <Link to="/management" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" /> Board &amp; Governance
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" /> News &amp; Dispatches
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-secondary" /> Contact Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Strategic Focus Areas */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-on-surface uppercase tracking-wider mb-4 border-b border-surface-container pb-2">
              Programme Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                <span>Solar PV Testing, String Design &amp; Energy Storage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></span>
                <span>Anaerobic Biomass Gasification &amp; Biofertilizer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                <span>Hybrid Mobile Inverter Stations &amp; Alternator Carts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></span>
                <span>Low-Speed Wind Turbine Design for Central Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                <span>Commercial Clean-Tech Incubation &amp; Seed Grants</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Direct Contacts */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-on-surface uppercase tracking-wider mb-4 border-b border-surface-container pb-2">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-on-surface">TCECEED Complex</p>
                  <p>The Federal Polytechnic Nasarawa, P.M.B 01, Nasarawa State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-on-surface">Telephony / WhatsApp</p>
                  <p>+234 803 636 3090</p>
                  <p>+234 803 397 2612</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-on-surface">Official Registry</p>
                  <a
                    href="mailto:tceceedinfo2024@gmail.com"
                    className="hover:text-primary underline-offset-2 hover:underline"
                  >
                    tceceedinfo2024@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/2348036363090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-white text-[11px] font-semibold hover:bg-secondary-emerald transition-colors shadow-xs"
                >
                  <span>WhatsApp Live Desk</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p className="text-center md:text-left">
            &copy; 2025/2026 TCECEED &bull; TETFund Centre of Excellence for Clean Energy and
            Entrepreneurship Development, The Federal Polytechnic Nasarawa. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>&bull;</span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Terms of Grant
            </span>
            <span>&bull;</span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Federal Polytechnic Nasarawa Portal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
