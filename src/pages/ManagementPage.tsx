import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Building,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  FileText,
  Mail,
  Phone,
  Briefcase,
  ArrowRight,
  ArrowDown,
  Layers,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScrollReveal } from '../components/ScrollReveal';
import { TypewriterText } from '../components/TypewriterText';
import { LEADERSHIP_ROSTER, PORTAL_LOGOS } from '../data/portalData';

export const ManagementPage: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(0); // 0 = all, 1 = Tier 1, 2 = Tier 2, 3 = Tier 3

  return (
    <div className="w-full flex flex-col pt-4">
      {/* Top Governance Hero & Context Strip */}
      <section className="relative w-full bg-surface-container-low py-10 lg:py-14 border-b border-surface-container overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Management Structure & Governance' }]} />

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-heading font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Institutional Framework &amp; Audited Accountability
            </span>
            <span className="text-xs text-on-surface-variant font-medium">
              TETFund Centre of Excellence
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary mb-3">
                <TypewriterText
                  text="TCECEED Governance & Administrative Structure"
                  speed={28}
                  delay={120}
                  cursorClassName="w-[3px] h-[0.85em] bg-secondary ml-1 inline-block align-baseline animate-pulse"
                />
              </h1>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed">
                Established under the mandate of the Tertiary Education Trust Fund (TETFund) and The
                Federal Polytechnic Nasarawa, our governance model couples fiduciary compliance with
                agile research leadership, ensuring clean-tech innovations move seamlessly from
                polytechnic laboratories to commercial application.
              </p>
            </div>

            {/* Metric Snapshot */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="bg-white p-4 rounded-xl shadow-xs border border-surface-container flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-on-surface-variant">
                    Oversight Organs
                  </p>
                  <p className="font-heading font-extrabold text-2xl text-primary leading-none mt-1">
                    3 Tiers
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">account_balance</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-xs border border-surface-container flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-on-surface-variant">
                    Statutory Officers
                  </p>
                  <p className="font-heading font-extrabold text-2xl text-secondary leading-none mt-1">
                    07 Units
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-secondary-container/60 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">supervised_user_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: 3-TIER ORGANIZATIONAL ORGANOGRAM */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary block mb-1">
              Administrative Blueprint
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface">
              Integrated Organogram &amp; Reporting Lines
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
              From federal fiduciary trustees down to community technical apprentices, our hierarchy ensures
              uncompromising accountability, rapid decision-making, and technical excellence.
            </p>
          </div>

          {/* TIER 1: GOVERNING COUNCILS & QUALITY BOARDS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-primary text-white font-heading font-bold text-xs uppercase">
                Tier 01
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-on-surface">
                Governing Councils &amp; Quality Boards
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Board 1 */}
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-xl">policy</span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-on-surface mb-2">
                      Project Implementation Board (PIB)
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Presides over sovereign policy direction, multi-year grant disbursement approvals, capital
                      procurement compliance, and polytechnic council alignment.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      <span>Chaired by Rector / Council Rep</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Board 2 */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-secondary-container/60 flex items-center justify-center text-secondary mb-4">
                      <span className="material-symbols-outlined text-xl">fact_check</span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-on-surface mb-2">
                      TETFund Project Management &amp; Evaluation (PMEC)
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Quarterly technical milestones auditing, peer-review verification, energy prototype
                      performance benchmark testing, and federal reporting.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      <span>TETFund External Observers</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Board 3 */}
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-xl">hub</span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-on-surface mb-2">
                      Project Implementation Advisory Committee (PIAC)
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Industry-faculty coalition providing commercial intelligence, technology vetting, regional
                      energy gap assessments, and IP commercialization strategy.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      <span>Industry Advisory Group</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Accountability Divider Line */}
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-outline-variant" />
              <div className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface text-xs font-heading font-semibold flex items-center gap-1.5 border border-surface-container-high">
                <ArrowDown className="w-3.5 h-3.5 text-primary" />
                <span>Direct Accountability &amp; Statutory Governance Line</span>
              </div>
              <div className="w-0.5 h-6 bg-outline-variant" />
            </div>
          </div>

          {/* TIER 2: EXECUTIVE MANAGEMENT - THE CENTER DIRECTORATE */}
          <div className="space-y-6">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md border-2 border-primary/20 text-center">
              <span className="px-3 py-1 rounded bg-primary text-white font-heading font-bold text-xs uppercase mb-2 inline-block">
                Chief Executive Node
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-on-surface mt-1">
                Office of the Center Director
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 max-w-lg mx-auto leading-relaxed">
                Vested with administrative governance, research vision, statutory management, international
                partnership synthesis, and direct oversight over all functional directorates.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>TCECEED Executive Directorate &bull; Dr. Yusuf Abdullahi</span>
              </div>
            </div>

            {/* Subordinate Functional Officers Grid */}
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-md bg-secondary text-white font-heading font-bold text-xs uppercase">
                  Tier 02
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-on-surface">
                  Executive Functional Officers &amp; Programmatic Units
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. Technical / Research Officer */}
                <div className="bg-white p-5 rounded-xl shadow-xs border border-surface-container flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">solar_power</span>
                      </span>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                        Technical Directorate
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-on-surface">
                      Technical &amp; Research Officer
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Directs clean-energy laboratory testing, renewable energy pilot rigs, micro-grid hardware
                      prototyping, and scientific peer reviews.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-xs text-secondary">biotech</span>
                    <span>Laboratory &amp; Field Protocols</span>
                  </div>
                </div>

                {/* 2. Communication / Documentation */}
                <div className="bg-white p-5 rounded-xl shadow-xs border border-surface-container flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">campaign</span>
                      </span>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                        Public Affairs
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-on-surface">
                      Communication &amp; Documentation Officer
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Curates quarterly technical digests, media stakeholder communiqués, digital repository
                      archiving, and public innovation disclosures.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-xs text-secondary">menu_book</span>
                    <span>Press, Dissemination &amp; Web</span>
                  </div>
                </div>

                {/* 3. Registrar / Admin Officer */}
                <div className="bg-white p-5 rounded-xl shadow-xs border border-surface-container flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">badge</span>
                      </span>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                        Registry Wing
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-on-surface">
                      Registrar / Administrative Officer
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Administers student fellow admissions, operational staffing logs, contractual agreements,
                      and formal polytechnic departmental liaisons.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-xs text-secondary">folder_shared</span>
                    <span>Secretariat &amp; Legal Records</span>
                  </div>
                </div>

                {/* 4. Bursary / Account Officer */}
                <div className="bg-white p-5 rounded-xl shadow-xs border border-surface-container flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">payments</span>
                      </span>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                        Fiduciary Audit
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-on-surface">
                      Bursary - Account Officer
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Maintains dedicated TETFund grant accounting, procurement verification, researcher travel
                      grants, and quarterly fiscal statutory audits.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-xs text-secondary">account_balance_wallet</span>
                    <span>Statutory Treasury</span>
                  </div>
                </div>

                {/* 5. Head of Skill Acquisition */}
                <div className="bg-white p-5 rounded-xl shadow-xs border border-surface-container flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">construction</span>
                      </span>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                        Vocational Skilling
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-on-surface">
                      Head of Skill Acquisition
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Leads physical solar PV assembly, biogas digester fabrication, inverter servicing masterclasses,
                      and polytechnic artisan workshops.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-xs text-secondary">handyman</span>
                    <span>Hands-On Fabrication Labs</span>
                  </div>
                </div>

                {/* 6. Head of Entrepreneurship */}
                <div className="bg-white p-5 rounded-xl shadow-xs border border-surface-container flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">rocket_launch</span>
                      </span>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                        Commercial Incubation
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-on-surface">
                      Head of Entrepreneurship
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Oversees start-up enterprise incubation, pitch acceleration rounds, venture capital
                      linkages, clean-tech patenting, and commercialization.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-container text-[11px] text-on-surface-variant flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-xs text-secondary">storefront</span>
                    <span>Venture Seed Incubation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIER 3: STAKEHOLDER COHORTS */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-outline text-white font-heading font-bold text-xs uppercase">
                Tier 03
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-on-surface">
                Stakeholder Cohorts &amp; Execution Ecosystem
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-container-low p-5 rounded-xl border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-2">
                  <span className="material-symbols-outlined text-lg">corporate_fare</span>
                  <span>Industry Partners</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Commercial joint ventures including Transblue Energy Konsult and True-Blue Energy Services,
                  ensuring prototype industrial adoption.
                </p>
              </div>

              <div className="bg-surface-container-low p-5 rounded-xl border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-2">
                  <span className="material-symbols-outlined text-lg">school</span>
                  <span>Academic Supervisors</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Polytechnic senior lecturers, laboratory technologists, and departmental heads from
                  Electrical, Mechanical, and Chemical Engineering fields.
                </p>
              </div>

              <div className="bg-surface-container-low p-5 rounded-xl border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-2">
                  <span className="material-symbols-outlined text-lg">psychology</span>
                  <span>Student Fellows</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  ND/HND polytechnic innovators and postgraduate research interns deployed directly on
                  grant-supported solar projects and patent incubations.
                </p>
              </div>

              <div className="bg-surface-container-low p-5 rounded-xl border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-2">
                  <span className="material-symbols-outlined text-lg">engineering</span>
                  <span>Local Artisans</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Nasarawa community technicians receiving accredited solar PV installation, electrical
                  retrofitting, and clean biomass manufacturing certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PHOTO SPOTLIGHT - COHORT CERTIFICATION IN PROTOTYPE LAB */}
      <section className="w-full py-16 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-secondary uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary" /> Grassroots Capacity In Action
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface">
                Empowering the Frontline Clean-Tech Workforce
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Under the supervision of our Technical and Skill Acquisition Offices, cohorts receive
                hands-on training on actual off-grid solar hardware, microcontroller-managed pay-as-you-go
                solar boxes, and biomass equipment. Interns and technicians receive certification after
                finishing the Clean Energy Microgrid Assembly program.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Certification backed by Federal Polytechnic Nasarawa &amp; TETFund accreditation.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Integrated entrepreneurship incubator linkage for student micro-enterprises.</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/internship"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-xs font-heading font-semibold hover:bg-primary-dark transition-colors shadow-xs"
                >
                  <span>View Training Programmes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-3 rounded-2xl shadow-md border border-surface-container">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/assets/images/pv_training_cohort.png"
                    alt="Solar PV Assembly & Testing Cohort Class inside the prototyping laboratory"
                    className="w-full h-80 sm:h-96 object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base">verified</span>
                    <span>Solar PV Assembly &amp; Testing Cohort Class</span>
                  </div>
                  <span className="text-on-surface-variant font-medium">
                    TCECEED Physical Prototyping Laboratory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY LEADERSHIP PROFILES */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary block mb-1">
                Centre Leadership
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface">
                Executive Management Officers
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1">
                Academic authorities and technical professionals steering research initiatives, student
                development, and commercial sustainability at TCECEED.
              </p>
            </div>
            <span className="text-xs text-on-surface-variant font-semibold">
              Active Statutory Roster: 2024–2026 Session
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_ROSTER.map((leader, idx) => (
              <ScrollReveal key={leader.id} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="h-52 bg-surface-container relative overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 left-2 bg-primary text-white text-[11px] font-heading font-semibold px-2.5 py-0.5 rounded-md shadow-xs">
                        {leader.badge}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-heading font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-heading font-semibold text-secondary mt-0.5">
                        {leader.role}
                      </p>
                      <p className="text-[11px] text-outline font-medium mt-0.5">
                        {leader.credentials}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-3 leading-relaxed line-clamp-4">
                        {leader.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs text-on-surface-variant border-t border-surface-container pt-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Phone className="w-3.5 h-3.5 text-secondary" />
                      <span>{leader.extension}</span>
                    </span>
                    <span className="font-semibold text-primary text-[11px]">{leader.division}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OPERATIONAL CHARTER & REGULATORY BENCHMARKS */}
      <section className="w-full py-16 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary block">
                Accountability Protocols
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface">
                Operational Charter &amp; Regulatory Benchmarks
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                TCECEED operates under strict fiduciary mandates formulated in synergy with the Federal
                Ministry of Education, TETFund Intervention Guidelines, and Federal Polytechnic Nasarawa
                Academic Board statutes.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 bg-white rounded-xl shadow-xs border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-1.5">
                  <span className="material-symbols-outlined text-lg">gavel</span>
                  <span>Federal Statutory Adherence</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Every procurement over threshold values passes through the Project Implementation Board
                  under federal public procurement guidelines and open competitive bidding standards.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-xs border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-1.5">
                  <span className="material-symbols-outlined text-lg">published_with_changes</span>
                  <span>Bi-Annual Technical Evaluation</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Independent evaluation teams deployed by TETFund assess research milestones, student
                  enrollment ratios, patent filings, and prototype hardware production efficacy.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-xs border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-1.5">
                  <span className="material-symbols-outlined text-lg">copyright</span>
                  <span>Intellectual Property Protection</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Transparent revenue-sharing framework distributing patent royalties equitably between
                  student inventors, academic supervisors, and the Centre to incentivize indigenous research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

