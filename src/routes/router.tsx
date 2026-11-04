import React from 'react';
import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
  useLocation,
} from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppWidget } from '../components/WhatsAppWidget';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ResearchPage } from '../pages/ResearchPage';
import { InternshipPage } from '../pages/InternshipPage';
import { ManagementPage } from '../pages/ManagementPage';
import { NewsPage } from '../pages/NewsPage';
import { ContactPage } from '../pages/ContactPage';

// Root layout with Header, Main with motion transitions, and Footer
const RootComponent: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header />
      <main className="flex-1 pt-24 sm:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      {/* Floating WhatsApp Action Widget at Right Corner */}
      <WhatsAppWidget />
    </div>
  );
};

const rootRoute = createRootRoute({
  component: RootComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const researchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/research',
  component: ResearchPage,
});

const internshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/internship',
  component: InternshipPage,
});

const managementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/management',
  component: ManagementPage,
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/news',
  component: NewsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  researchRoute,
  internshipRoute,
  managementRoute,
  newsRoute,
  contactRoute,
]);

// Create TanStack Router instance
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

