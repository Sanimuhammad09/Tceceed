import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Building,
  Navigation,
  Compass,
  FileCheck,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScrollReveal } from '../components/ScrollReveal';
import { TypewriterText } from '../components/TypewriterText';
import { SEOHead } from '../components/SEOHead';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    category: 'research',
    message: '',
  });
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TCECEED-SEC-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketId(id);
  };

  return (
    <div className="w-full flex flex-col pt-4">
      <SEOHead
        title="Contact Secretariat & Innovation Labs | TCECEED"
        description="Contact the TETFund Centre of Excellence for Clean Energy and Entrepreneurship Development at Federal Polytechnic Nasarawa. Connect via WhatsApp, telephone, email, or institutional visit."
        canonicalPath="/contact"
        keywords="Contact TCECEED, Federal Polytechnic Nasarawa Clean Energy, WhatsApp Help Desk, Clean Tech Partnerships Nigeria, Solar Training Enquiries"
        ogImage="/assets/images/workshop_cohort_training.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Secretariat', path: '/contact' },
        ]}
      />

      {/* Top Academic Context Band */}
      <section className="w-full bg-surface-container-low py-10 lg:py-14 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Secretariat' }]} />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-2">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/50 text-on-secondary-container text-xs font-heading font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>Institutional Engagement Portal</span>
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight leading-tight">
                <TypewriterText
                  text="Contact the TETFund Centre of Excellence for Clean Energy"
                  speed={28}
                  delay={120}
                  cursorClassName="w-[3px] h-[0.85em] bg-secondary ml-1 inline-block align-baseline animate-pulse"
                />
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Connect with our research secretariat, technical innovation laboratories, and academic
                liaison desk at The Federal Polytechnic Nasarawa.
              </p>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-surface-container flex items-center gap-3.5 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold text-on-surface-variant uppercase tracking-wider block">
                  Official Secretariat Hours
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm text-on-surface">
                  Monday – Friday: 8:00 AM – 4:00 PM
                </span>
                <span className="text-[11px] text-secondary block mt-0.5 font-medium">
                  West Africa Time (WAT) &bull; GMT+1
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CONTACT CHANNELS MATRIX */}
      <section className="w-full relative z-10 -mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-surface-container hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-heading font-bold text-secondary uppercase tracking-wider block mb-1">
                Campus Location
              </span>
              <h3 className="font-heading font-bold text-sm text-on-surface mb-1">TCECEED Complex</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Federal Polytechnic Nasarawa, P.M.B 01, Nasarawa State, Nigeria.
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-surface-container hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-heading font-bold text-secondary uppercase tracking-wider block mb-1">
                Official Telephony
              </span>
              <h3 className="font-heading font-bold text-sm text-on-surface mb-1">Helplines &amp; Enquiries</h3>
              <div className="space-y-0.5 text-xs">
                <a href="tel:+2348036363090" className="text-primary hover:underline font-semibold block">
                  +234 803 636 3090
                </a>
                <a href="tel:+2348033972612" className="text-on-surface-variant hover:text-primary transition-colors block">
                  +234 803 397 2612
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-surface-container hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-heading font-bold text-secondary uppercase tracking-wider block mb-1">
                Central Registry
              </span>
              <h3 className="font-heading font-bold text-sm text-on-surface mb-1">Electronic Mail</h3>
              <a
                href="mailto:tceceedinfo2024@gmail.com"
                className="text-xs text-primary hover:underline font-semibold block break-all"
              >
                tceceedinfo2024@gmail.com
              </a>
              <span className="text-[11px] text-on-surface-variant block mt-1">24–48hr Response Window</span>
            </div>

            {/* WhatsApp */}
            <div className="bg-primary text-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-secondary-fixed">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-white text-[10px] font-heading font-bold uppercase">
                    Live Desk
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm text-white mb-1">WhatsApp Quick-Chat</h3>
                <p className="text-xs text-white/80 mb-3">Chat directly with our lead secretariat officer.</p>
              </div>
              <a
                href="https://wa.me/2348036363090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-secondary text-white text-xs font-heading font-semibold hover:bg-secondary-emerald transition-all shadow-xs"
              >
                <span>Chat +234 803 636 3090</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FORM & SIDEBAR SECTION */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form Column (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-surface-container">
              <div className="mb-6">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary">
                  Official Communication Channel
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-on-surface mt-1">
                  Submit an Academic or Project Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  Fill out the formal submission record below. Communications are registered into the
                  TCECEED Secretariat dispatch database.
                </p>
              </div>

              {ticketId ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-surface-container-low border border-secondary/30 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-primary">
                    Enquiry Logged in Registry
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm mx-auto">
                    Your request has been filed. Official Reference Ticket:{' '}
                    <strong>{ticketId}</strong>
                  </p>
                  <p className="text-xs text-outline">
                    A duty officer will review and reply within 24–48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setTicketId(null);
                      setFormData({ fullName: '', email: '', organization: '', category: 'research', message: '' });
                    }}
                    className="mt-2 px-5 py-2.5 rounded-lg bg-primary text-white text-xs font-heading font-semibold hover:bg-primary-dark"
                  >
                    Submit New Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Prof. Amina Bello / Engr. John Musa"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        Institutional / Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@institution.edu.ng"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                      Organization / Institution / Department *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Federal Ministry of Power / Dept of Mechanical Engineering"
                      className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                      Domain of Engagement
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    >
                      <option value="research">Clean Energy Research &amp; Prototype Development</option>
                      <option value="internship">Student &amp; Technical Internship Programme</option>
                      <option value="partnership">Industry &amp; International Grant Partnership</option>
                      <option value="workshops">Clean Tech Entrepreneurship &amp; Skilling Workshops</option>
                      <option value="audit">Solar / Biomass Energy Audits &amp; Advisory</option>
                      <option value="general">General Administrative Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                      Enquiry Details &amp; Scope *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your project specifications, research inquiries, dates of proposed engagement, or administrative queries..."
                      className="w-full p-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-white font-heading font-bold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Enquiry</span>
                    </button>

                    <span className="text-[11px] text-on-surface-variant flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-secondary" />
                      <span>Protected by TETFund Governance Protocols</span>
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Lateral Info Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Secretariat Identity Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-container space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-primary">TCECEED Secretariat</h3>
                    <span className="text-xs text-secondary font-medium">TETFund Centre of Excellence</span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Established under the Federal Government of Nigeria Tertiary Education Trust Fund mandate
                  to pioneer renewable energy research, commercial patents, and green industrial skilling at
                  The Federal Polytechnic Nasarawa.
                </p>
                <div className="p-3 rounded-lg bg-surface-container-low text-[11px] flex items-center justify-between font-semibold">
                  <span className="text-on-surface-variant">Administrative Division</span>
                  <span className="text-primary">Office of the Director</span>
                </div>
              </div>

              {/* Departmental Desks */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container space-y-3">
                <h4 className="font-heading font-bold text-sm text-on-surface">Departmental Directory</h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-surface-container">
                    <span className="text-[10px] font-heading font-bold uppercase text-outline block">
                      Grants &amp; Fellowships
                    </span>
                    <span className="font-semibold text-on-surface">Directorate of Research</span>
                    <span className="text-primary block text-[11px] mt-0.5">tceceedinfo2024@gmail.com</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-surface-container">
                    <span className="text-[10px] font-heading font-bold uppercase text-outline block">
                      Media &amp; Public Relations
                    </span>
                    <span className="font-semibold text-on-surface">Directorate of Information</span>
                    <span className="text-secondary block text-[11px] mt-0.5">+234 803 397 2612</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-surface-container">
                    <span className="text-[10px] font-heading font-bold uppercase text-outline block">
                      Student &amp; Staff Liaison
                    </span>
                    <span className="font-semibold text-on-surface">Internship Coordination Desk</span>
                    <span className="text-secondary block text-[11px] mt-0.5">+234 803 636 3090</span>
                  </div>
                </div>
              </div>

              {/* Compliance Note */}
              <div className="p-4 rounded-xl bg-surface-container flex items-start gap-2.5 text-xs text-on-surface-variant">
                <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="leading-snug">
                  All formal procurement bids, grant expressions of interest, and prototype validation
                  requests require official physical or digital stamp from the TCECEED Director.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS LOCATION & TRAVEL GUIDE */}
      <section className="w-full bg-surface-container-low py-16 border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-secondary">
              Visiting Nasarawa Campus
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-on-surface mt-1">
              Campus Location &amp; Directions
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5">
              The TCECEED Secretariat Complex is located inside the Engineering &amp; Technology Annex at
              The Federal Polytechnic Nasarawa, Nasarawa State.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-surface-container shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm">
                <Navigation className="w-4 h-4 text-secondary" />
                <span>From Abuja (Airport)</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Approx. 2.5 hours drive from Nnamdi Azikiwe International Airport via Abuja-Keffi-Nasarawa
                Expressway. Public and charter shuttles terminate at Poly Junction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-surface-container shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm">
                <Navigation className="w-4 h-4 text-secondary" />
                <span>From Lafia (State Capital)</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Approx. 1.5 hours drive via the Lafia-Doma-Nasarawa regional transport axis. Enter via the
                Main Polytechnic Gate and head to the Engineering Complex.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-surface-container shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm">
                <Navigation className="w-4 h-4 text-secondary" />
                <span>From Keffi</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Approx. 45 minutes direct transit via Keffi-Nasarawa Road. Security checkpoint guidance will
                direct you to the TETFund Centre of Excellence building.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

