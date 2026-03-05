import { motion } from 'framer-motion';
import {
  Code2,
  FileType,
  Globe,
  Palette,
  Layers,
  Sparkles,
  Server,
  Terminal,
  Database,
  Share2,
  Zap,
  GitBranch,
  Container,
  Cloud,
  Repeat,
  Figma,
  Rocket,
} from 'lucide-react';
import { type SkillCategory } from '@/data/skills';
import { staggerItem } from '@/utils/animations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  FileType,
  Globe,
  Palette,
  Layers,
  Sparkles,
  Server,
  Terminal,
  Database,
  Share2,
  Zap,
  GitBranch,
  Container,
  Cloud,
  Repeat,
  Figma,
  Rocket,
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
        <p className="text-muted-foreground text-sm">{category.description}</p>
      </div>

      {/* Skills Grid */}
      <div className="space-y-4">
        {category.skills.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Code2;
          return (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-accent rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
