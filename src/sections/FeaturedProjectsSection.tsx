import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/custom/SectionHeading';
import ProjectCard from '@/components/custom/ProjectCard';
import { featuredProjects } from '@/data/projects';
import { staggerContainer } from '@/utils/animations';

export default function FeaturedProjectsSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing my expertise in building modern web applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
