import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl" />
          <div className="absolute inset-0 bg-card/50 backdrop-blur-sm rounded-3xl border border-primary/20" />

          {/* Content */}
          <div className="relative px-6 py-16 md:py-20 md:px-12 text-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Have a project in mind? I&apos;m always open to discussing new 
                opportunities and interesting collaborations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild className="group">
                  <Link to="/contact">
                    <Mail className="mr-2 w-4 h-4" />
                    Get in Touch
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
