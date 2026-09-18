/*import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/constructionData.js';
import { ProjectModal } from './ProjectModel.jsx';
import { Eye, MapPin, Maximize2, ArrowUpRight } from 'lucide-react';

export const Projects = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Buttons /}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-amber-400" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Built Environments
            </h2>
            <p className="mt-3 text-stone-300 text-base max-w-xl">
              Inspect our landmark projects delivered across high-rise commercial, private residential estates, and heavy industrial sectors.
            </p>
          </div>

          {/* Filter Pills /}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-950 rounded-xl border border-stone-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-project-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid *}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image with hover zoom /}
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient from-stone-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-amber-400 border border-stone-800">
                    {project.type}
                  </div>

                  <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md px-2 py-1 rounded text-[11px] font-mono text-stone-300">
                    {project.year}
                  </div>

                  {/* Overlay Quick View Button /}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="inline-flex items-center space-x-2 bg-amber-500 text-stone-950 px-4 py-2 rounded-lg font-mono font-bold text-xs uppercase tracking-wider shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>View Specifications</span>
                    </span>
                  </button>
                </div>

                {/* Card Body /}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>

                  <div className="flex items-center space-x-4 mt-2 text-xs font-mono text-stone-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      {project.area}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-stone-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer /}
              <div className="px-6 pb-6 pt-2 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500">
                  Client: {project.client}
                </span>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal /}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuote={(projName) => onOpenQuote(projName)}
        />
      )}
    </section>
  );
};

export default Projects;*/
