import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { staggerItem } from '@/utils/animations';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
      </div>

      {/* Content */}
      <div className="bg-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 transition-colors">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">{experience.role}</h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4">{experience.description}</p>

        {/* Achievements */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
