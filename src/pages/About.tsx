import { motion } from 'framer-motion';
import { Download, Code2, Sparkles, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/custom/SectionHeading';
import ExperienceCard from '@/components/custom/ExperienceCard';
import { skillCategories, experiences } from '@/data/skills';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/utils/animations';

const stats = [
  { value: '5+', label: 'Years Experience', icon: Code2 },
  { value: '50+', label: 'Projects Completed', icon: Sparkles },
  { value: '30+', label: 'Happy Clients', icon: Users },
  { value: '100%', label: 'Commitment', icon: Lightbulb },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <span className="text-8xl font-bold text-primary">JC</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-48 mx-auto bg-primary/30 rounded-full" />
                      <div className="h-3 w-32 mx-auto bg-primary/20 rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <span className="text-primary font-medium">About Me</span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                    Passionate Developer & Creative Problem Solver
                  </h1>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I&apos;m a frontend-focused full-stack developer with over 5 years 
                    of experience building modern web applications. My journey in 
                    software development started with a curiosity for how things work 
                    on the web, which evolved into a deep passion for creating 
                    exceptional user experiences.
                  </p>
                  <p>
                    I specialize in React, TypeScript, and Node.js, with a strong 
                    focus on performance, accessibility, and clean code. I believe 
                    that great software is not just about functionality—it&apos;s about 
                    creating experiences that users love.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                    contributing to open-source projects, or sharing my knowledge 
                    through blog posts and mentoring.
                  </p>
                </div>

                <Button size="lg" className="group" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-20 md:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Work Experience"
              subtitle="My professional journey and the amazing teams I've had the privilege to work with."
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="w-full py-20 md:py-32 bg-muted/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <SectionHeading
            title="Tech Stack Overview"
            subtitle="The technologies and tools I use to bring ideas to life."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg bg-accent text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
