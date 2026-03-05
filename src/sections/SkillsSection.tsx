import { motion } from 'framer-motion';
import SectionHeading from '@/components/custom/SectionHeading';
import SkillCard from '@/components/custom/SkillCard';
import { skillCategories } from '@/data/skills';
import { staggerContainer } from '@/utils/animations';

export default function SkillsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          title="My Skills"
          subtitle="A comprehensive toolkit built over years of crafting digital experiences across the full development stack."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
