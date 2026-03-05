import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/custom/SectionHeading';
import ProjectCard from '@/components/custom/ProjectCard';
import { getProjectsByCategory } from '@/data/projects';
import { cn } from '@/utils/helpers';
import { staggerContainer } from '@/utils/animations';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'ui-ux', label: 'UI/UX' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="w-full py-20 md:py-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my recent work, featuring web applications, design systems, and creative solutions."
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              )}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
