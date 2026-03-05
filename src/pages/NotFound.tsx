import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-8xl md:text-9xl font-bold text-primary/20"
            >
              404
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold">404</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
