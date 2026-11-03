import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Eye,
  Rocket,
  Award,
  CheckCircle2,
  Building2,
  Sun,
  Flame,
  Cpu,
  ShieldCheck,
  FileText,
  ChevronRight,
  ExternalLink,
  BookOpen,
  X,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PORTAL_LOGOS } from '../data/portalData';

export const AboutPage: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col pt-4">
      {/* Top Academic Context Header & Breadcrumbs */}
      <section className="w-full bg-surface-container-low py-10 lg:py-14 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About TCECEED' }]} />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-2">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-heading font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span>Institutional Charter &amp; Strategic Mandate</span>
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-on-surface leading-tight">
                Driving Sustainable Renewable Energy &amp; Entrepreneurship in Nigeria
              </h1>
              <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
                Established under the statutory authority of TETFund and the Federal Ministry of Education
                at The Federal Polytechnic Nasarawa to pioneer clean energy autonomy and technical excellence.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-heading font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Factsheet (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: EXECUTIVE ORIGIN & THE DECENTRALIZED ENERGY PARADOX */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Narrative Analysis */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-2 text-secondary font-heading font-bold text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-secondary" />
                  <span>Executive Charter &amp; Origin</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface leading-snug">
                  Established by Presidential Directive to Solve Nigeria's Decentralized Energy Paradox
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  The TETFund Centre of Excellence for Clean Energy and Entrepreneurship Development
                  (TCECEED) at The Federal Polytechnic Nasarawa was founded under the auspices of the
                  Federal Ministry of Education and the Tertiary Education Trust Fund (TETFund). Established
                  to serve as a beacon of academic rigor and technological autonomy, the Centre answers the
                  urgent call to decentralize clean electricity generation.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Nigeria faces an acute structural energy challenge: frequent national grid collapses,
                  urban power access lingering under 50%, and rural access dropping below 10%. TCECEED acts as
                  the strategic catalyst bridge—translating advanced research in photovoltaic systems, organic
                  biomass, and hybrid storage into commercial prototypes and market-ready enterprise incubations.
                </p>
              </ScrollReveal>

              {/* Precision Metrics Bento */}
              <ScrollReveal delay={0.4}>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex flex-col">
                    <span className="font-heading font-extrabold text-2xl text-primary leading-none">
                      &lt;10%
                    </span>
                    <span className="text-xs font-heading font-bold text-on-surface mt-2">
                      Rural Access
                    </span>
                    <span className="text-[11px] text-on-surface-variant">National Baseline</span>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex flex-col">
                    <span className="font-heading font-extrabold text-2xl text-secondary leading-none">
                      <AnimatedCounter value="12+" target={12} suffix="+" />
                    </span>
                    <span className="text-xs font-heading font-bold text-on-surface mt-2">
                      Active Patents
                    </span>
                    <span className="text-[11px] text-on-surface-variant">Clean Tech R&amp;D</span>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex flex-col">
                    <span className="font-heading font-extrabold text-2xl text-primary leading-none">
                      <AnimatedCounter value="1,400+" target={1400} suffix="+" />
                    </span>
                    <span className="text-xs font-heading font-bold text-on-surface mt-2">
                      Trained Fellows
                    </span>
                    <span className="text-[11px] text-on-surface-variant">Vocational Cohorts</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Certified Fellows Showcase Photo */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container group border border-surface-container">
                  <img
                    src="/assets/images/graduates_alumni_group.png"
                    alt="TCECEED fellows and certified trainees displaying diplomas and micro solar prototypes"
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary text-white text-[10px] font-bold uppercase tracking-wider">
                        Class of Certified Practitioners
                      </span>
                      <span className="text-xs text-white/80 font-medium">TETFund Cohort</span>
                    </div>
                    <p className="font-heading font-bold text-base text-white">
                      Empowering Next-Gen Energy Engineers
                    </p>
                    <p className="text-xs text-white/80 mt-1">
                      Graduates receiving specialized certifications in solar PV installation and modular
                      distribution at Federal Polytechnic Nasarawa.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISION, MISSION & CORE VALUES PILLARS */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-primary">
              Our Guiding Matrix
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface mt-1">
              Foundations of Institutional Excellence
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
              Structured to anchor sustainable research, foster entrepreneurial resilience, and create
              verifiable societal impact across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Vision Card */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-primary">
                    Aspiration
                  </span>
                  <h3 className="font-heading font-bold text-xl text-on-surface mt-1 mb-3">
                    Our Vision
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed italic">
                    “To create a pool of internationally recognized and certified experts in clean energy
                    research and development mechanisms.”
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-surface-container flex items-center gap-2 text-primary text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Global Competency Target</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-transform">
                    <Rocket className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-secondary">
                    Purpose
                  </span>
                  <h3 className="font-heading font-bold text-xl text-on-surface mt-1 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed italic">
                    “To provide a national and international Centre for innovation in the rapidly growing area
                    of clean and sustainable energy in the context of environmentally sustainable energy
                    solutions.”
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-surface-container flex items-center gap-2 text-secondary text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Sustainable Solutions First</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Values Card */}
            <ScrollReveal delay={0.3}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-6 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-tertiary" />
                  </div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-tertiary">
                    Ethos
                  </span>
                  <h3 className="font-heading font-bold text-xl text-on-surface mt-1 mb-3">
                    Core Values
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed italic">
                    “TCECEED strives for excellence and better quality of services in all activities of the
                    centre beyond the expectations of stakeholders and the general public.”
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-surface-container flex items-center gap-2 text-tertiary text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-tertiary" />
                  <span>Uncompromising Quality</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 4 MANDATORY STATUTORY GOALS */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-secondary">
                Mandate Pillars
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface mt-1">
                The 4 Statutory Centre Goals
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-md">
              Defined under the TETFund Operational Code to stimulate Nigerian industrialisation, rural
              electrification, and energy security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Goal 1 */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between h-full hover:bg-surface-container-high transition-colors">
                <div>
                  <span className="font-heading font-black text-3xl text-outline-variant">01</span>
                  <h3 className="font-heading font-bold text-base text-on-surface mt-2 mb-2">
                    Capacity &amp; Workshops
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Host intensive technical energy workshops, certified installer clinics, and entrepreneurial
                    masterclasses for technicians and youth builders.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-surface-container-highest flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Continuous Pedagogy</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Goal 2 */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between h-full hover:bg-surface-container-high transition-colors">
                <div>
                  <span className="font-heading font-black text-3xl text-outline-variant">02</span>
                  <h3 className="font-heading font-bold text-base text-on-surface mt-2 mb-2">
                    Rigorous R&amp;D Delivery
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Build institutional capacity to deliver high-quality research involving seasoned technical
                    experts for productive, investable clean energy capital.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-surface-container-highest flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Applied Research</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Goal 3 */}
            <ScrollReveal delay={0.3}>
              <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between h-full hover:bg-surface-container-high transition-colors">
                <div>
                  <span className="font-heading font-black text-3xl text-outline-variant">03</span>
                  <h3 className="font-heading font-bold text-base text-on-surface mt-2 mb-2">
                    Innovation Predisposition
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Promote entrepreneurial instincts and rapid prototype testing in the domestic renewable
                    sector to birth commercially viable startups.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-surface-container-highest flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Commercial Spin-outs</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Goal 4 */}
            <ScrollReveal delay={0.4}>
              <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between h-full hover:bg-surface-container-high transition-colors">
                <div>
                  <span className="font-heading font-black text-3xl text-outline-variant">04</span>
                  <h3 className="font-heading font-bold text-base text-on-surface mt-2 mb-2">
                    Policy &amp; National Growth
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Engage key government ministries, regulatory bodies, and industry stakeholders to advance
                    evidence-based energy policy for national growth.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-surface-container-highest flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>Policy Leadership</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: FACILITIES & DEMONSTRATION INFRASTRUCTURE */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual: Real Lab Test Bench Photo */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-surface-container group">
                  <img
                    src="/assets/images/circuit_inverter_assembly.png"
                    alt="Hands-on electrical wiring and distribution panel training at TCECEED lab bench"
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-5 flex items-center justify-between border-t border-surface-container">
                    <div>
                      <p className="font-heading font-bold text-sm text-on-surface">
                        Advanced Circuit Testing &amp; Solar Inverter Rig
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Federal Polytechnic Nasarawa Engineering Complex
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-2xl">electric_bolt</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Infrastructure Specs */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="right">
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-primary">
                  Physical Capacity
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface mt-1">
                  World-Class Laboratories &amp; Demonstration Grounds
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-2">
                  The Centre hosts an array of specialized fabrication rooms and measurement laboratories
                  designed to simulate Nigerian climate conditions and high-temperature stress tests on
                  renewable systems.
                </p>
              </ScrollReveal>

              <div className="space-y-3 pt-2">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-surface-container shadow-xs">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <Sun className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-on-surface">
                        Solar Photovoltaic Calibration Lab
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                        IV-curve tracing, irradiance characterization, and battery degradation cycle
                        chambers under sub-Saharan tropical temperature profiles.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-surface-container shadow-xs">
                    <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-on-surface">
                        Biomass Gasification &amp; Biogas Test Plant
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                        Converting agricultural husks and organic municipal waste into clean cooking gas,
                        pressurized biomethane, and synthetic agricultural fertilizers.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.3}>
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-surface-container shadow-xs">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-on-surface">
                        Microgrid Control &amp; Simulation Center
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                        Real-time digital simulation and SCADA monitoring for decentralized off-grid hybrid
                        power distribution systems.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: STRATEGIC LINKAGES & FUNDING PARTNERS */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-secondary">
              Institutional Ecosystem
            </span>
            <h3 className="font-heading font-bold text-xl text-on-surface mt-1">
              Strategic Alliances &amp; Funding Partners
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col items-center text-center justify-center">
              <img src={PORTAL_LOGOS.logo1.src} alt="TETFund" className="h-12 w-auto object-contain mb-3" />
              <span className="font-heading font-bold text-sm text-on-surface">TETFund</span>
              <span className="text-[11px] text-on-surface-variant">Tertiary Education Trust Fund</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col items-center text-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">account_balance</span>
              <span className="font-heading font-bold text-sm text-on-surface">FME Nigeria</span>
              <span className="text-[11px] text-on-surface-variant">Federal Ministry of Education</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col items-center text-center justify-center">
              <img src={PORTAL_LOGOS.logo2.src} alt="FedPoly Nasarawa" className="h-12 w-auto object-contain mb-3" />
              <span className="font-heading font-bold text-sm text-on-surface">FedPoly Nasarawa</span>
              <span className="text-[11px] text-on-surface-variant">Host Academic Institution</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col items-center text-center justify-center">
              <img src={PORTAL_LOGOS.logo3.src} alt="TCECEED" className="h-12 w-auto object-contain mb-3" />
              <span className="font-heading font-bold text-sm text-on-surface">Transblue Energy</span>
              <span className="text-[11px] text-on-surface-variant">Corporate Venture Alliances</span>
            </div>
          </div>
        </div>
      </section>

      {/* Factsheet Download Modal */}
      <AnimatePresence>
        {downloadModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-surface-container"
            >
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-heading font-bold text-sm text-on-surface">
                    Official Centre Factsheet (2025/2026)
                  </span>
                </div>
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="p-1 rounded-lg text-outline hover:text-on-surface"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs text-on-surface-variant">
                <p>
                  The official TCECEED Factsheet provides executive statistics, grant governance
                  codes, laboratory inventory, and training schedules.
                </p>
                <div className="p-3 rounded-lg bg-surface-container-low space-y-1">
                  <p><strong>Document ID:</strong> TCECEED-FS-2025-V2</p>
                  <p><strong>Issued By:</strong> Secretariat Directorate, Federal Poly Nasarawa</p>
                  <p><strong>File Size:</strong> 2.4 MB &bull; PDF Format</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-on-surface"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Factsheet download initiated. Reference: TCECEED-FS-2025');
                    setDownloadModalOpen(false);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-primary text-white text-xs font-heading font-semibold hover:bg-primary-dark transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Start Download</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

