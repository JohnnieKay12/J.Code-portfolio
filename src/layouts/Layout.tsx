import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 pt-16 md:pt-20"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
