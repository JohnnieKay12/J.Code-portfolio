import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, fadeInRight, staggerContainer } from '@/utils/animations';

const socialLinks = [
  { icon: Github, url: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available for new projects
                </span>
              </motion.div>

              {/* Title */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight">
                  Hi, I&apos;m{' '}
                  <span className="text-primary">Johnson</span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
                  Frontend-Focused{' '}
                  <span className="text-foreground font-medium">
                    Full-Stack Developer
                  </span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
              >
                I craft beautiful, performant, and user-centered digital 
                experiences. Transforming ideas into elegant, functional 
                web applications.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button size="lg" asChild className="group">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <span className="text-sm text-muted-foreground">Follow me:</span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-border animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-primary/20" />
                
                {/* Main content area */}
                <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary">JC</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-32 mx-auto bg-primary/30 rounded-full" />
                      <div className="h-2 w-24 mx-auto bg-primary/20 rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-primary">5+</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-4 -left-4 w-24 h-16 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
                >
                  <span className="text-sm font-medium">50+ Projects</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
