import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  FileText,
  Download,
  Share2,
  X,
  ChevronRight,
  Tag,
  BookOpen,
  Filter,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ScrollReveal } from '../components/ScrollReveal';
import { TypewriterText } from '../components/TypewriterText';
import { SEOHead } from '../components/SEOHead';
import { NEWS_DISPATCHES, NewsArticle } from '../data/portalData';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  const filteredArticles = NEWS_DISPATCHES.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.year.toString() === selectedYear;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredStory = NEWS_DISPATCHES.find((a) => a.featured) || NEWS_DISPATCHES[0];

  return (
    <div className="w-full flex flex-col pt-4">
      <SEOHead
        title="News, Research Publications & Academic Dispatches | TCECEED"
        description="Read recent breakthroughs, peer-reviewed publications, technical workshop milestones, and official dispatches from the TETFund Centre of Excellence for Clean Energy."
        canonicalPath="/news"
        keywords="TCECEED News, Renewable Energy Research Papers, Clean Energy Workshop Milestones, Federal Polytechnic Nasarawa News, Biogas Research Publications"
        ogImage="/assets/images/workshop_fabrication_hall.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'News & Publications', path: '/news' },
        ]}
      />

      {/* SECTION 1: HEADER & LIVE FILTER TOOLBAR */}
      <section className="w-full bg-surface-container-low py-10 lg:py-14 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'News & Publications' }]} />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-heading font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span>Centre Dispatches &amp; Academic Repository</span>
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-tight">
                <TypewriterText
                  text="News, Research Publications & Centre Dispatches"
                  speed={28}
                  delay={120}
                  cursorClassName="w-[3px] h-[0.85em] bg-primary ml-1 inline-block align-baseline animate-pulse"
                />
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Stay informed on breakthrough clean energy research, community workshop programmes,
                institutional MoUs, peer-reviewed journals, and statutory annual reports from TCECEED
                Federal Polytechnic Nasarawa.
              </p>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl shadow-xs border border-surface-container shrink-0">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-on-surface">38+ Publications</p>
                <p className="text-[11px] text-on-surface-variant">TETFund Indexed (2022–2024)</p>
              </div>
            </div>
          </div>

          {/* Search & Filtration Control Panel */}
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-surface-container flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 items-center">
              {[
                { id: 'all', label: 'All Dispatches' },
                { id: 'general', label: 'General News' },
                { id: 'programmes', label: 'Hosted Programmes' },
                { id: 'research', label: 'Research & Books' },
                { id: 'reports', label: 'Annual Reports' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input & Year Dropdown */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword, title..."
                  className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg text-xs text-on-surface placeholder:text-outline border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="relative w-full sm:w-36">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none pl-3 pr-8 py-2 bg-surface-container-low rounded-lg text-xs text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                >
                  <option value="all">All Years</option>
                  <option value="2024">2024 (Active)</option>
                  <option value="2023">2023 Archive</option>
                  <option value="2022">2022 Archive</option>
                </select>
                <Filter className="w-3.5 h-3.5 text-outline absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL LEAD STORY */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="w-full py-12 lg:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-md border border-surface-container grid grid-cols-1 lg:grid-cols-12 items-stretch group">
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] overflow-hidden bg-surface-container">
                  <img
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full font-heading font-semibold">
                      Federal Poly Nasarawa Workshop Complex
                    </span>
                    <span className="opacity-90 font-medium">Lead Archive Story</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-surface-container-low">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-heading font-bold">
                        {featuredStory.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{featuredStory.date}</span>
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredStory.readTime}</span>
                      </span>
                    </div>

                    <h2
                      onClick={() => setReadingArticle(featuredStory)}
                      className="font-heading font-extrabold text-xl sm:text-2xl text-on-surface hover:text-primary transition-colors cursor-pointer leading-snug"
                    >
                      {featuredStory.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {featuredStory.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredStory.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-surface-container text-[11px] text-on-surface-variant font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-surface-container flex items-center gap-3">
                    <button
                      onClick={() => setReadingArticle(featuredStory)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-xs font-heading font-semibold hover:bg-primary-dark transition-colors shadow-xs"
                    >
                      <span>Read Full Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* SECTION 3: ALL DISPATCHES GRID */}
      <section className="w-full py-12 lg:py-16 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-on-surface">
              Archived Reports &amp; Field Updates ({filteredArticles.length})
            </h2>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-surface-container p-8">
              <BookOpen className="w-12 h-12 text-outline-variant mx-auto mb-3" />
              <p className="font-heading font-bold text-base text-on-surface">No publications match your criteria</p>
              <p className="text-xs text-on-surface-variant mt-1">Try resetting the category filter or searching another term.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setSelectedYear('all'); }}
                className="mt-4 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, idx) => (
                <ScrollReveal key={article.id} delay={idx * 0.08}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-surface-container transition-all flex flex-col justify-between h-full group">
                    <div>
                      {article.image && (
                        <div className="relative h-48 overflow-hidden bg-surface-container">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-0.5 rounded-full bg-primary/90 text-white text-[10px] font-heading font-bold shadow-xs">
                              {article.categoryLabel}
                            </span>
                          </div>
                          <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm text-on-surface text-[10px] font-semibold">
                            {article.date}
                          </span>
                        </div>
                      )}

                      <div className="p-5">
                        <div className="flex items-center justify-between text-[11px] text-on-surface-variant mb-2">
                          <span className="font-semibold text-secondary">{article.author || 'TCECEED Dispatch'}</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3
                          onClick={() => setReadingArticle(article)}
                          className="font-heading font-bold text-sm sm:text-base text-on-surface mb-2 group-hover:text-primary transition-colors cursor-pointer line-clamp-2"
                        >
                          {article.title}
                        </h3>

                        <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0 border-t border-surface-container pt-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] text-outline font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setReadingArticle(article)}
                        className="text-xs font-heading font-semibold text-primary hover:text-secondary inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      <AnimatePresence>
        {readingArticle && (
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
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-surface-container my-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-heading font-bold">
                  {readingArticle.categoryLabel}
                </span>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="p-1 rounded-lg text-outline hover:text-on-surface"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {readingArticle.image && (
                <div className="mt-4 rounded-xl overflow-hidden h-64 w-full bg-surface-container">
                  <img
                    src={readingArticle.image}
                    alt={readingArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                  <span>Date: <strong>{readingArticle.date}</strong></span>
                  <span>&bull;</span>
                  <span>Author: <strong>{readingArticle.author || 'TCECEED Secretariat'}</strong></span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-on-surface leading-snug">
                  {readingArticle.title}
                </h3>

                <div className="text-xs sm:text-sm text-on-surface-variant space-y-3 leading-relaxed border-t border-surface-container pt-4">
                  <p>{readingArticle.summary}</p>
                  <p>
                    The research initiative represents part of the core statutory interventions funded
                    under the Tertiary Education Trust Fund (TETFund) Centre of Excellence grant at The
                    Federal Polytechnic Nasarawa. Faculty teams worked alongside polytechnic apprentices to
                    benchmark practical output against international renewable standards.
                  </p>
                  <p>
                    Full documentation, experimental raw datasets, and blueprint CAD files have been archived
                    into the TCECEED physical repository for public research scrutiny and academic replication.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {readingArticle.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-surface-container-low text-xs font-medium text-on-surface-variant"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-surface-container flex items-center justify-between">
                <button
                  onClick={() => {
                    alert(`Starting download for article: ${readingArticle.title}`);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-primary"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Publication PDF</span>
                </button>

                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-5 py-2 rounded-lg bg-primary text-white text-xs font-heading font-semibold hover:bg-primary-dark"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

