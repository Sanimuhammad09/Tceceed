import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Award,
  Users,
  Compass,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  School,
  Building,
  GraduationCap,
} from 'lucide-react';
import {
  HERO_SLIDES,
  STAT_COUNTERS,
  STRATEGIC_GOALS,
  FEATURED_PROGRAMMES,
  NEWS_DISPATCHES,
  PORTAL_LOGOS,
} from '../data/portalData';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO SLIDER WITH FRAMER MOTION */}
      <section
        className="relative w-full overflow-hidden bg-primary text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Ambient Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000 ease-out"
              style={{ backgroundImage: `url('${HERO_SLIDES[currentSlide].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/90 to-primary/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Slide Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* National Status Badge */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/30 backdrop-blur-md border border-secondary-fixed/40 text-secondary-fixed mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
              <span className="text-xs font-heading font-bold uppercase tracking-wider">
                {HERO_SLIDES[currentSlide].badge}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-5 text-white"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl font-light"
            >
              {HERO_SLIDES[currentSlide].description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to={HERO_SLIDES[currentSlide].primaryCtaLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-white font-heading font-semibold text-sm hover:bg-secondary-emerald transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>{HERO_SLIDES[currentSlide].primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to={HERO_SLIDES[currentSlide].secondaryCtaLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-heading font-semibold text-sm border border-white/20 transition-all hover:-translate-y-0.5"
              >
                <span>{HERO_SLIDES[currentSlide].secondaryCtaText}</span>
                <Sparkles className="w-4 h-4 text-secondary-fixed" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators & Next/Prev Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2.5">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-10 bg-secondary-fixed'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Direction Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/30 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/30 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STAT COUNTER CARDS (ELEVATED BENTO) */}
      <section className="w-full relative z-20 -mt-8 sm:-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-surface-container p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {STAT_COUNTERS.map((stat, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                  <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container hover:border-secondary/40 transition-all group flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-2xl sm:text-3xl text-primary leading-none mb-1">
                        <AnimatedCounter
                          value={stat.value}
                          target={stat.numericTarget}
                          suffix={stat.suffix}
                        />
                      </div>
                      <p className="font-heading font-bold text-xs uppercase tracking-wider text-on-surface">
                        {stat.label}
                      </p>
                      <p className="text-[11px] text-on-surface-variant mt-1 leading-tight">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TCECEED EXECUTIVE OVERVIEW & MANDATE */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Academic Directive & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary font-heading font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-secondary" />
                  <span>Presidential &amp; Ministerial Mandate</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight">
                  Tackling Nigeria’s Energy Deficit Through Groundbreaking Applied Science
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <p className="text-base text-on-surface leading-relaxed">
                  The TETFund Centre of Excellence for Clean Energy and Entrepreneurship Development
                  (TCECEED) at The Federal Polytechnic Nasarawa was established under the approval of
                  the Presidency and the Federal Ministry of Education to confront Nigeria's persistent
                  power sector crises.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  With national grid connectivity hovering below 50% in major cities and plummeting
                  under 10% across rural agrarian communities, TCECEED translates clean energy research
                  into affordable, commercially viable hardware. We engineer practical off-grid solar
                  kits, agricultural biogas digesters, and clean heating technologies while fostering
                  high-growth clean-tech enterprises.
                </p>
              </ScrollReveal>

              {/* Bento Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <ScrollReveal delay={0.4}>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container shadow-xs">
                    <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-1">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span>Decentralized Energy Access</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Deploying smart solar mini-grids for sub-urban and rural clusters across Nasarawa State
                      and the North Central agro-corridors.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container shadow-xs">
                    <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm mb-1">
                      <Compass className="w-4 h-4 text-secondary" />
                      <span>Youth Entrepreneurship</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Spinning out graduate-led commercial ventures in solar inverter assembly, battery
                      diagnostics, and organic bio-fertilizer production.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.6}>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-primary font-heading font-bold text-sm hover:text-secondary transition-colors group"
                  >
                    <span>Read Centre Charter &amp; Director's Welcome</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Actual Workshop Photo Mosaic */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <ScrollReveal direction="right" delay={0.2} className="flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md bg-surface-container h-56 relative group">
                  <img
                    src="/assets/images/pv_training_cohort.png"
                    alt="TCECEED laboratory practical test bench"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-primary/85 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-lg text-[11px] font-medium truncate">
                    Photovoltaic PV Lab Session
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-primary text-white flex flex-col justify-center shadow-md">
                  <span className="font-heading font-bold text-xl mb-1">100% Practical</span>
                  <p className="text-xs text-white/85 leading-relaxed">
                    Every cohort builds functional electrical and renewable prototypes before graduation.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3} className="flex flex-col gap-4 pt-6 sm:pt-8">
                <div className="p-5 rounded-2xl bg-secondary text-white flex flex-col justify-center shadow-md">
                  <Award className="w-6 h-6 text-secondary-fixed mb-2" />
                  <span className="font-heading font-bold text-xl mb-1">Industry Certified</span>
                  <p className="text-xs text-white/85 leading-relaxed">
                    Accredited skill pathways endorsed by Transblue Energy Konsult.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md bg-surface-container h-56 relative group">
                  <img
                    src="/assets/images/workshop_fabrication_hall.png"
                    alt="Technical trainees in clean energy practical setting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-primary/85 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-lg text-[11px] font-medium truncate">
                    Clean Tech Fabrication Hall
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC FOCUS AREAS & CENTRE GOALS */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-3">
              Core Strategic Pillars
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary">
              Strategic Focus Areas &amp; Centre Goals
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-2xl mx-auto">
              Structured under the TETFund Centre of Excellence Charter to propel renewable infrastructure,
              train technical specialists, and inform national energy policy frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_GOALS.map((goal, idx) => (
              <ScrollReveal key={goal.id} delay={idx * 0.1}>
                <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md border border-surface-container hover:border-secondary transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">{goal.icon}</span>
                    </div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-secondary">
                      Goal {goal.number}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-on-surface mt-1 mb-3 group-hover:text-primary transition-colors">
                      {goal.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-surface-container flex items-center justify-between text-xs font-semibold text-primary">
                    <span>{goal.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PROGRAMMES & REAL COHORT GALLERY */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary font-heading font-bold text-xs uppercase tracking-wider mb-2">
                Applied Skilling &amp; Prototypes
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary">
                Featured Programmes &amp; Cohort Impact
              </h2>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm text-primary hover:text-secondary transition-colors"
            >
              <span>View All R&amp;D Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURED_PROGRAMMES.map((prog, idx) => (
              <ScrollReveal key={prog.id} delay={idx * 0.15}>
                <div className="rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg border border-surface-container transition-all flex flex-col h-full group">
                  <div className="relative h-60 w-full overflow-hidden bg-surface-container">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-heading font-semibold px-3 py-1 rounded-full shadow-sm">
                      {prog.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-on-surface">
                      {prog.cohort}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {prog.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-on-surface-variant">{prog.metricLabel}</span>
                        <span className="text-primary font-bold">{prog.metricValue}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${prog.progressPercent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-secondary rounded-full"
                        />
                      </div>
                      <Link
                        to={prog.link}
                        className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs text-primary hover:text-secondary transition-colors pt-2"
                      >
                        <span>Learn More Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LATEST DISPATCHES & PUBLICATIONS */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-2">
                Stay Informed
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary">
                News, Publications &amp; Announcements
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm text-primary hover:text-secondary transition-colors"
            >
              <span>Read All News &amp; Notices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_DISPATCHES.slice(0, 3).map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 0.1}>
                <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between text-xs text-on-surface-variant mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold">
                        {item.categoryLabel}
                      </span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-base text-on-surface mb-2.5 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs text-primary hover:text-secondary transition-colors pt-2 border-t border-surface-container"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: STRATEGIC CALL TO ACTION (CTA) */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-primary-dark">
            {/* Background Decorative Rings */}
            <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
            <div className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 w-80 h-80 rounded-full bg-secondary-fixed/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-white font-heading font-bold text-xs uppercase tracking-wider">
                  Calling All Science, Technology &amp; Engineering Diplomates
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                  Ready to Accelerate Your Career in Clean Energy &amp; Commercial Spin-Offs?
                </h2>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl font-light">
                  Are you an ND, HND, or B.Sc/B.Eng graduate in Electrical, Mechanical, Science Laboratory
                  Technology, or Renewable Energy? Join TCECEED's intensive training cohorts and become a
                  certified solar installer and clean-tech entrepreneur.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                <Link
                  to="/internship"
                  className="w-full py-3.5 px-6 rounded-xl bg-secondary text-white hover:bg-secondary-emerald font-heading font-bold text-sm text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for Internship</span>
                </Link>

                <a
                  href="https://wa.me/2348036363090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-heading font-semibold text-sm text-center border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>WhatsApp: +234 803 636 3090</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
