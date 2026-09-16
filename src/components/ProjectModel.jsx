import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Maximize2, ShieldCheck, UserCheck } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onOpenQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl text-stone-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Project Specification
            </span>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="relative rounded-xl overflow-hidden border border-stone-800 h-64 sm:h-80">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono text-amber-400 border border-stone-700">
              {project.type}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{project.name}</h3>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                {project.area}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                Completed {project.year}
              </span>
              <span className="flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                {project.client}
              </span>
            </div>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Structural & Engineering Highlights
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-stone-300">
              {project.highlights.map((hl, i) => (
                <div key={i} className="p-2.5 rounded bg-stone-900 border border-stone-800">
                  {hl}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-400 font-mono">
            Want similar architecture and engineering precision?
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-bold font-mono uppercase tracking-wider"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(project.name);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black font-mono uppercase tracking-wider shadow-md"
            >
              Inquire Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
