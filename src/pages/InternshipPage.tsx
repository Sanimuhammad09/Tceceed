import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  Send,
  Upload,
  FileCheck,
  Award,
  Users,
  Compass,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const InternshipPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'A' | 'B'>('B');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stateOfOrigin: '',
    qualification: 'HND',
    discipline: 'Electrical/Electronic Engineering',
    institution: '',
    graduationYear: '2024',
    statement: '',
  });
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `TCECEED-INT-2025-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <div className="w-full flex flex-col pt-4">
      {/* Top Banner / Editorial Intro */}
      <section className="relative overflow-hidden bg-surface-container-low py-10 lg:py-14 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Career & Internship Programme' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-2">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-heading font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>TETFund Capacity Building &amp; Tech Incubation</span>
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight leading-tight">
                TCECEED Career Development &amp; Technical Internship Programme
              </h1>

              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Equipping Nigerian graduates, polytechnic diploma holders, and early-stage researchers
                with hands-on renewable energy engineering, biogas production, and cleantech
                commercialization skills at The Federal Polytechnic Nasarawa.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#application-form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-heading font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow-sm"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for Cohort 2025</span>
                </a>

                <a
                  href="https://wa.me/2348036363090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-surface-container text-on-surface font-heading font-semibold text-xs sm:text-sm hover:bg-surface-container transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>WhatsApp: +234 803 636 3090</span>
                </a>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="p-3.5 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col">
                  <span className="font-heading font-extrabold text-2xl text-primary">6</span>
                  <span className="text-[10px] font-heading font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                    Months Max Period
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col">
                  <span className="font-heading font-extrabold text-2xl text-secondary">100%</span>
                  <span className="text-[10px] font-heading font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                    Hands-on Practicals
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col">
                  <span className="font-heading font-extrabold text-2xl text-primary">₦ GRANT</span>
                  <span className="text-[10px] font-heading font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                    Monthly Stipend
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Graphic Highlight Card with Cohort Badge */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-surface-container group">
                <img
                  src="/assets/images/pv_training_cohort.png"
                  alt="Nigerian technical students during clean energy installation practical sessions at Federal Polytechnic Nasarawa"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5 bg-white flex flex-col gap-1 border-t border-surface-container">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-bold">
                      Live Intake Open
                    </span>
                    <span className="text-outline font-medium">Application Cycle 04</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-on-surface mt-1">
                    Spin-Off &amp; Technical Fellowship
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Delivered in technical alliance with True-Blue Energy Services Ltd &amp; Transblue Energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TWO DISTINCT PATHWAYS (TRACK A vs TRACK B) */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary">
              Institutional Tracks
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface">
              Select Your Career Growth Pathway
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Whether you are an aspiring clean tech engineer looking for field mastery, or an academic
              researcher scaling patentable innovations, TCECEED hosts tailored career programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track A: Researchers & Postgrad Fellows */}
            <ScrollReveal delay={0.1}>
              <div
                onClick={() => setSelectedTrack('A')}
                className={`p-6 sm:p-8 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between h-full ${
                  selectedTrack === 'A'
                    ? 'bg-white border-primary shadow-md'
                    : 'bg-white border-surface-container hover:border-outline-variant shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary font-bold">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-secondary">
                      Track A &bull; Academic &amp; Applied
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-primary mt-0.5">
                      Researchers &amp; Research Fellows
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Designed for Higher National Diploma holders (Upper Credit/Distinction), B.Sc/B.Eng
                    recipients, and postgraduate scholars. Fellows conduct targeted investigation into
                    decentralized mini-grids, biomass fermentation, bio-fertilizer production, and
                    photovoltaic efficiency in sub-Saharan climates.
                  </p>
                  <ul className="space-y-2 text-xs text-on-surface pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Access to state-of-the-art TCECEED laboratory testing rigs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>TETFund research grant co-authorship &amp; publication assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Patent filing assistance for commercialized prototypes</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-surface-container flex items-center justify-between">
                  <span className="text-xs font-heading font-bold text-primary">
                    {selectedTrack === 'A' ? 'Selected Pathway' : 'Select Track A'}
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    {selectedTrack === 'A' ? 'radio_button_checked' : 'radio_button_unchecked'}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Track B: 6-Month Intensive Technical Internship */}
            <ScrollReveal delay={0.2}>
              <div
                onClick={() => setSelectedTrack('B')}
                className={`p-6 sm:p-8 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between h-full ${
                  selectedTrack === 'B'
                    ? 'bg-primary text-white border-primary shadow-xl'
                    : 'bg-white border-surface-container hover:border-outline-variant shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                    selectedTrack === 'B' ? 'bg-secondary-fixed text-primary' : 'bg-secondary-fixed text-secondary'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-[11px] font-heading font-bold uppercase tracking-wider ${
                      selectedTrack === 'B' ? 'text-secondary-fixed' : 'text-secondary'
                    }`}>
                      Track B &bull; Industry Immersion
                    </span>
                    <h3 className={`font-heading font-extrabold text-xl mt-0.5 ${
                      selectedTrack === 'B' ? 'text-white' : 'text-primary'
                    }`}>
                      6-Month Technical Internship
                    </h3>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    selectedTrack === 'B' ? 'text-white/90' : 'text-on-surface-variant'
                  }`}>
                    An intensive experiential programme tailored for ND, HND, and B.Eng engineering/science
                    graduates. Interns undergo modular certifications, participate in real-world microgrid
                    installations, fabricate biogas digesters, and receive direct supervisory mentorship.
                  </p>
                  <ul className={`space-y-2 text-xs pt-2 ${
                    selectedTrack === 'B' ? 'text-white/95' : 'text-on-surface'
                  }`}>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                        selectedTrack === 'B' ? 'text-secondary-fixed' : 'text-secondary'
                      }`} />
                      <span>Structured around certified industry short-courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                        selectedTrack === 'B' ? 'text-secondary-fixed' : 'text-secondary'
                      }`} />
                      <span>Monthly financial living stipend funded by TCECEED</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                        selectedTrack === 'B' ? 'text-secondary-fixed' : 'text-secondary'
                      }`} />
                      <span>Mandatory Capstone project presented before council panel</span>
                    </li>
                  </ul>
                </div>

                <div className={`pt-6 mt-4 border-t flex items-center justify-between ${
                  selectedTrack === 'B' ? 'border-white/20' : 'border-surface-container'
                }`}>
                  <span className={`text-xs font-heading font-bold ${
                    selectedTrack === 'B' ? 'text-secondary-fixed' : 'text-primary'
                  }`}>
                    {selectedTrack === 'B' ? 'Selected Pathway' : 'Select Track B'}
                  </span>
                  <span className="material-symbols-outlined">
                    {selectedTrack === 'B' ? 'radio_button_checked' : 'radio_button_unchecked'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROGRAMME FRAMEWORK (4 CARDS) */}
      <section className="py-16 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary">
                Operational Guidelines
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface mt-1">
                Internship Programme Framework
              </h2>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white border border-surface-container text-on-surface flex items-center gap-2 text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Center-Certified National Accreditation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-surface-container shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-sm text-on-surface">Maximum Period</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                The internship spans a continuous maximum duration of <strong>6 Months</strong> under
                full-time professional oversight from TCECEED engineers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-surface-container shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-sm text-on-surface">Eligibility Criteria</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Open strictly to recent graduates of <strong>ND</strong>, <strong>HND</strong>, and{' '}
                <strong>B.Sc / B.Eng</strong> in technical &amp; scientific disciplines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-surface-container shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-heading font-bold text-sm text-on-surface">Terms &amp; Allowances</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Interns receive hands-on modules, dedicated supervisor mentorship, a{' '}
                <strong>monthly financial stipend</strong>, and complete a capstone project.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-surface-container shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-sm text-on-surface">Selection Protocol</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Cohorts are publicized periodically. Selection is strictly merit-based, governed by aptitude
                reviews and vocational engineering potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE APPLICATION FORM */}
      <section className="py-16 lg:py-24 bg-surface" id="application-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-surface-container">
            <div className="border-b border-surface-container pb-6 mb-8 text-center sm:text-left">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-secondary">
                Official Intake Form &bull; Cohort 2025/2026
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface mt-1">
                TCECEED Fellowship &amp; Internship Application
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5">
                Please provide accurate academic credentials. All submissions are verified against the
                National Board for Technical Education (NBTE) and university registry databases.
              </p>
            </div>

            {submittedTicket ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-surface-container-low border border-secondary/30 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-primary">
                  Application Successfully Registered!
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your application for{' '}
                  <strong>Track {selectedTrack}</strong> has been logged into the TCECEED Secretariat
                  Database.
                </p>
                <div className="p-4 bg-white rounded-xl border border-surface-container inline-block text-xs font-mono font-bold text-primary">
                  Reference Ticket: {submittedTicket}
                </div>
                <p className="text-xs text-outline">
                  A verification email has been dispatched to <strong>{formData.email}</strong>. Shortlisted
                  candidates will be contacted for physical laboratory aptitude testing.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmittedTicket(null)}
                    className="px-5 py-2.5 rounded-lg bg-primary text-white text-xs font-heading font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                {/* Active Track Confirmation */}
                <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase text-outline">
                      Selected Track
                    </span>
                    <p className="font-heading font-bold text-primary">
                      Track {selectedTrack}:{' '}
                      {selectedTrack === 'A'
                        ? 'Researchers & Research Fellows'
                        : '6-Month Intensive Technical Internship'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTrack(selectedTrack === 'A' ? 'B' : 'A')}
                    className="text-xs font-semibold text-secondary hover:underline"
                  >
                    Change Track
                  </button>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-heading font-bold text-sm text-on-surface border-b border-surface-container pb-2">
                    1. Candidate Bio-Data
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        Full Name (Surname First) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Musa, Ibrahim Danladi"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="candidate@gmail.com"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        State of Origin *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.stateOfOrigin}
                        onChange={(e) => setFormData({ ...formData, stateOfOrigin: e.target.value })}
                        placeholder="e.g. Nasarawa, Plateau, FCT, Kaduna"
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="space-y-4 pt-2">
                  <h4 className="font-heading font-bold text-sm text-on-surface border-b border-surface-container pb-2">
                    2. Academic Background &amp; Discipline
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        Highest Qualification *
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      >
                        <option value="ND">National Diploma (ND)</option>
                        <option value="HND">Higher National Diploma (HND)</option>
                        <option value="BSc">B.Sc / B.Eng</option>
                        <option value="Postgraduate">M.Sc / Postgraduate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        Field of Study *
                      </label>
                      <select
                        value={formData.discipline}
                        onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      >
                        <option>Electrical/Electronic Engineering</option>
                        <option>Mechanical Engineering</option>
                        <option>Science Laboratory Technology (SLT)</option>
                        <option>Physics / Electronics</option>
                        <option>Chemical Engineering</option>
                        <option>Agricultural Engineering</option>
                        <option>Other Applied Science</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                        Year of Graduation *
                      </label>
                      <select
                        value={formData.graduationYear}
                        onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                        className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                      >
                        <option>2025</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>Earlier</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-semibold text-xs text-on-surface mb-1.5">
                      Graduating Tertiary Institution *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="e.g. The Federal Polytechnic Nasarawa / Nasarawa State University"
                      className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs"
                    />
                  </div>
                </div>

                {/* Statement of Motivation */}
                <div className="space-y-2 pt-2">
                  <label className="block font-heading font-semibold text-xs text-on-surface">
                    Brief Statement of Motivation &amp; Technical Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Describe your previous laboratory or field experience and what clean tech skills you intend to master at TCECEED..."
                    className="w-full p-3.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs resize-none"
                  />
                </div>

                {/* Upload Credentials Simulation */}
                <div className="p-4 rounded-xl border border-dashed border-outline-variant bg-surface-container-low flex flex-col items-center justify-center text-center space-y-2">
                  <Upload className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-xs font-heading font-semibold text-on-surface">
                      Attach CV &amp; Degree / Diploma Certificate (PDF)
                    </p>
                    <p className="text-[11px] text-outline">Max size: 5MB &bull; PDF / JPG format</p>
                  </div>
                  <input type="file" className="text-xs text-on-surface-variant file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark" />
                </div>

                {/* Submission Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-heading font-bold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Formal Application</span>
                  </button>

                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span>Protected by TETFund Governance Protocols</span>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
