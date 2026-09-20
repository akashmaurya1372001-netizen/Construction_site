import React from 'react';
import { Target, Users, HardHat, Compass, FileCheck, Building } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-5xl mx-auto font-black sm:text-5xl  tracking-tight m-auto mb-9 text-center underline underline-offset-5'>Construction contractor varanasi </div>
        {/* Section Header */}
        <div className=" mb-16 items-center justify-center">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-mono  uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-amber-400" />
            <span>OUR PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-center">
            Quality Construction, Trusted Since 1999
          </h2>
       
          <p className="mt-4 px-9  text-stone-300 text-lg leading-relaxed text-center tracking-tight ">
           We are serving construction work in varanasi since 1999 with a simple goal: to help people in Varanasi build reliable homes without the stress. We are not a massive corporation; we are a dedicated local team that believes in hard work and direct relationships.Over the last two decades, we have built a reputation for honesty and solid brick-and-mortar quality. When you work with us, you deal directly with the people who handle the bricks and cement, ensuring your peace of mind from start to finish.
            </p>
       
</div>
        

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-stone-800/40 border border-stone-700/60">
                <Users className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="font-bold text-white text-base">In-House Engineering</h4>
    
              </div>

              <div className="p-5 rounded-xl bg-stone-800/40 border border-stone-700/60">
                <FileCheck className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="font-bold text-white text-base">Transparent Budgeting</h4>
                
              </div>
            </div>
          </div>

          {/* Right Imagery */}
         {/* <div className="lg:col-span-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                alt="Engineers reviewing blueprints on jobsite"
                className="rounded-2xl border-2 border-stone-700 shadow-xl w-full h-440px object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-stone-950 p-5 rounded-xl shadow-xl font-mono hidden sm:block border-2 border-amber-400">
                <div className="text-2xl font-black">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider">Certified Code Compliance</div>
                <div className="text-[11px] text-stone-900 mt-0.5">Across all 50 US States</div>
              </div>
            </div>
          </div>*/} 

        

      
    </section>
  );
};

export default About;
