import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Flame,
  Wind,
  Layers,
  CheckCircle2,
  Download,
  FileText,
  Send,
  X,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { RESEARCH_STREAMS } from '../data/portalData';

export const ResearchPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'solar' | 'biogas' | 'wind' | 'hybrid'>('all');
  const [conceptNoteModalOpen, setConceptNoteModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredStreams = activeCategory === 'all'
    ? RESEARCH_STREAMS
    : RESEARCH_STREAMS.filter((s) => s.category === activeCategory);

  const handleConceptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setConceptNoteModalOpen(false);
    }, 2500);
  };

  return (
    <div className="w-full flex flex-col pt-4">
      {/* Top Academic Context Header & Impact Stats */}
      <section className="w-full bg-surface-container-low py-10 lg:py-14 border-b border-surface-container overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Research & Innovation Projects' }]} />

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-heading font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              TETFund Centre of Excellence Directorate
            </span>
            <span className="text-outline text-xs">/</span>
            <span className="text-xs text-on-surface-variant font-medium">R&amp;D Division</span>
            <span className="text-outline text-xs">/</span>
            <span className="text-xs text-primary font-bold">Translational Research Portfolio</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-tight mb-4">
                Translational Clean Energy <br className="hidden sm:inline" />
                <span className="text-primary">Research &amp; Innovation</span> Projects
              </h1>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed mb-6">
                Engineering sustainable, decentralized, and commercially viable renewable energy
                technologies. From indigenous fabrication of charge controllers to community-scale
                agro-biogas digesters, TCECEED bridges polytechnic vocational mastery with industrial power
                solutions for Nigeria.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setConceptNoteModalOpen(true)}
                  className="px-5 py-3 rounded-lg bg-primary text-white font-heading font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow-xs flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Submit Joint Concept Note</span>
                </button>
                <a
                  href="#research-streams"
                  className="px-5 py-3 rounded-lg bg-white border border-surface-container hover:bg-surface-container text-on-surface font-heading font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-secondary" />
                  <span>Explore Active Streams</span>
                </a>
              </div>
            </div>

            {/* Metric Badges & Snapshot Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-secondary mb-1">
                  <span className="material-symbols-outlined text-xl">solar_power</span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-outline">
                    TRL Level
                  </span>
                </div>
                <div className="font-heading font-extrabold text-2xl text-primary">6-8</div>
                <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">
                  Prototypes deployed in operational field trials
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-secondary mb-1">
                  <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-outline">
                    Patents
                  </span>
                </div>
                <div className="font-heading font-extrabold text-2xl text-primary">
                  <AnimatedCounter value="14+" target={14} suffix="+" />
                </div>
                <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">
                  Registered technical designs &amp; fabrications
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-secondary mb-1">
                  <span className="material-symbols-outlined text-xl">groups</span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-outline">
                    Fellows
                  </span>
                </div>
                <div className="font-heading font-extrabold text-2xl text-primary">
                  <AnimatedCounter value="120+" target={120} suffix="+" />
                </div>
                <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">
                  Apprentices &amp; faculty research investigators
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-surface-container shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-secondary mb-1">
                  <span className="material-symbols-outlined text-xl">bolt</span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-outline">
                    Capacity
                  </span>
                </div>
                <div className="font-heading font-extrabold text-2xl text-primary">45 kW</div>
                <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">
                  Decentralized off-grid generation deployed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FOCAL RESEARCH STREAMS (WITH FILTER TABS) */}
      <section className="w-full py-16 lg:py-24 bg-surface" id="research-streams">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-secondary">
                Indigenous Innovation Pipeline
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-on-surface mt-1">
                Core Focus Research Streams
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mt-1.5">
                Prioritizing low-cost locally procurable components, durability under tropical climate
                stress, and vocational ease of local replication.
              </p>
            </div>

            {/* Research Stream Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-surface-container rounded-xl self-start md:self-auto border border-surface-container-high">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'
                }`}
              >
                All Streams
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('solar')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all ${
                  activeCategory === 'solar'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'
                }`}
              >
                Solar PV &amp; Storage
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('biogas')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all ${
                  activeCategory === 'biogas'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'
                }`}
              >
                Biogas &amp; Agro-Waste
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('wind')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all ${
                  activeCategory === 'wind'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'
                }`}
              >
                Mechanical &amp; Wind
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('hybrid')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all ${
                  activeCategory === 'hybrid'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'
                }`}
              >
                Hybrid Mobile Units
              </button>
            </div>
          </div>

          {/* Research Streams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStreams.map((stream, idx) => (
              <ScrollReveal key={stream.id} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-surface-container transition-all flex flex-col justify-between h-full group">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-surface-container">
                    <img
                      src={stream.image}
                      alt={stream.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-[11px] font-heading font-bold shadow-xs">
                        {stream.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/90 text-on-surface text-[11px] font-heading font-semibold">
                        {stream.trl}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider opacity-90 text-secondary-fixed">
                        {stream.streamNumber} &bull; {stream.unit}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white mt-1 leading-snug">
                        {stream.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {stream.description}
                      </p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-surface-container-low rounded-xl border border-surface-container mt-4">
                        {stream.specs.map((spec, sIdx) => (
                          <div key={sIdx}>
                            <span className="text-[10px] font-heading font-bold text-outline uppercase block">
                              {spec.label}
                            </span>
                            <span className="font-heading font-bold text-xs sm:text-sm text-primary">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-surface-container">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                        <span className="text-xs text-on-surface font-medium">
                          {stream.leadInvestigator}
                        </span>
                      </div>
                      <button
                        onClick={() => setConceptNoteModalOpen(true)}
                        className="text-xs font-heading font-semibold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1"
                      >
                        <span>Collaborate</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Note Submission Modal */}
      <AnimatePresence>
        {conceptNoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-surface-container my-8"
            >
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-heading font-bold text-base text-on-surface">
                    Submit Joint Concept Note
                  </span>
                </div>
                <button
                  onClick={() => setConceptNoteModalOpen(false)}
                  className="p-1 rounded-lg text-outline hover:text-on-surface"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-secondary flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-on-surface">
                    Concept Note Transmitted
                  </h4>
                  <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                    Your joint research inquiry has been logged with the Directorate of Research. Reference
                    ticket: <strong>TCECEED-RND-{Math.floor(1000 + Math.random() * 9000)}</strong>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConceptSubmit} className="py-4 space-y-4 text-xs">
                  <div>
                    <label className="block font-heading font-bold text-on-surface mb-1">
                      Lead Researcher / Institution Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Aminu Bello / ABC Renewables Ltd"
                      className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-heading font-bold text-on-surface mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="researcher@univ.edu.ng"
                        className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-on-surface mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-bold text-on-surface mb-1">
                      Target Research Stream
                    </label>
                    <select className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Solar Photovoltaic &amp; Storage</option>
                      <option>Biomass Gasification &amp; Biogas</option>
                      <option>Mechanical Fabrication &amp; Wind Turbines</option>
                      <option>Hybrid Mobile Inverter Carts</option>
                      <option>Other Renewable Technology</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-heading font-bold text-on-surface mb-1">
                      Concept Brief &amp; Proposed Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Summarize project objectives, expected prototype deliverables, and equipment requirements..."
                      className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setConceptNoteModalOpen(false)}
                      className="px-4 py-2 font-semibold text-on-surface-variant hover:text-on-surface"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-lg bg-primary text-white font-heading font-semibold hover:bg-primary-dark transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Concept Note</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
