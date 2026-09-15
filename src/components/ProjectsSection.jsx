import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectsSection({
  projects,
  setIsFullscreenPreviewOpen,
}) {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Web Architecture', 'UI/UX Systems', 'Venture Engineering', 'Media Growth'];

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedTag || p.tag.toLowerCase().includes(selectedTag.toLowerCase()));

  return (
    <section id="work" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-white border-t border-black/[0.06]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-blue/[0.04] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-gold/[0.03] rounded-full blur-[120px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 border-b border-black/[0.08] pb-10 sm:pb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
              Act II · Real Projects We Built
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
              Real projects that deliver.
            </h2>
          </div>
          <p className="text-zinc-600 max-w-md text-sm sm:text-base leading-relaxed">
            A showcase of super fast websites, digital products, and growth systems engineered by Essenziat Digital.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-black/20 hover:shadow-apple-lg overflow-hidden shadow-apple"
            >
              {/* Top meta */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                  {`0${index + 1}`} · {project.discipline || 'Digital Product'}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 border border-black/[0.06] text-zinc-700">
                  {project.tag}
                </span>
              </div>

              {/* Visual Frame */}
              <div
                onClick={() => setIsFullscreenPreviewOpen && setIsFullscreenPreviewOpen(project)}
                className="relative w-full h-56 sm:h-72 mb-6 rounded-2xl overflow-hidden border border-black/[0.08] bg-zinc-100 cursor-pointer shadow-inner"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.alt || project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl border border-black/10 bg-white flex items-center justify-center text-zinc-900 font-bold text-lg mb-2 shadow-sm">
                      {project.title.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-zinc-800 tracking-wide">{project.title}</span>
                    <span className="text-xs text-zinc-500 mt-1">Platform Architecture</span>
                  </div>
                )}
                {/* Subtle vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Narrative Content */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  {project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blueDark transition-colors shrink-0"
                    >
                      <span>Visit Live</span>
                      <span className="text-xs">→</span>
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>

                {/* Outcome metrics bar */}
                {project.metric && (
                  <div className="pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-xs text-zinc-500">
                    <span>Key Result:</span>
                    <span className="font-semibold text-zinc-800 tracking-tight">{project.metric}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
