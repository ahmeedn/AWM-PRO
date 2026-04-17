import { motion } from 'motion/react';
import { Mail, ExternalLink, TerminalSquare,  } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA, t, parseReqLevel } from '../data';

export function VisualUI({ onSwitchToTerminal }: { onSwitchToTerminal: () => void }) {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark') || 
           (!document.documentElement.classList.contains('light') && true); // Default to dark conceptually
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans flex flex-col">
      <header className="h-[60px] px-6 sm:px-10 flex items-center justify-between border-b border-border bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <a href="#home" className="font-bold tracking-tight text-[20px] uppercase" data-i18n="logo">
          Ahmed Awm
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium" id="navMenu">
          <a href="#home" className="opacity-70 hover:opacity-100 transition-opacity" data-i18n="navHome">Home</a>
          <a href="#skills" className="opacity-70 hover:opacity-100 transition-opacity" data-i18n="navSkills">Skills</a>
          <a href="#projects" className="opacity-70 hover:opacity-100 transition-opacity" data-i18n="navProjects">Projects</a>
          <a href="./index2.html" className="opacity-70 hover:opacity-100 transition-opacity" data-i18n="contactBtn">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="bg-foreground text-background px-[14px] py-[6px] rounded-full text-[11px] uppercase tracking-[1px] font-semibold transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? 'Dark Mode On' : 'Dark Mode Off'}
          </button>
          <button
            onClick={onSwitchToTerminal}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            title="Terminal View"
          >
            <TerminalSquare className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main id="home" className="flex-1 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 p-6 sm:p-10 scroll-mt-20">
        
        {/* Profile Card (Left Side) */}
        <section id="contact" className="flex flex-col gap-5 scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full aspect-square rounded-[12px] overflow-hidden border border-border bg-primary flex items-center justify-center text-white text-6xl font-extralight"
          >
            <img src="./A5S.jpg" alt="awm" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col flex-1"
          >
            <div className="mb-6">
              <h2 className="text-[12px] uppercase opacity-50 mb-2 font-semibold">About Ahmed Awm</h2>
              <p className="text-[14px] leading-[1.6]">
                I build robust applications with a focus on seamless user experiences. 
                Bridging the gap between design and deep technical implementations is what I do best.
              </p>
            </div>
            
            <div className="mt-auto">
              <h2 className="text-[10px] uppercase opacity-50 font-semibold mb-1">Location</h2>
              <p className="text-[13px] mb-6">Global / Remote</p>

              <div className="flex gap-4">
                <a href="mailto:alkoleahmed6@gmail.com" className="hover:opacity-70 transition-opacity">
                  <Mail className="w-5 h-5" />
                </a>
               
                <a href="./index2.html" className="hover:opacity-70 transition-opacity">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content Area (Right Side) */}
        <div className="flex flex-col gap-[30px]">
          
          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <h1 className="text-[32px] font-light mb-4">Expertise</h1>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.skills.map((skill, i) => (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={skill.key} 
                  className="px-[12px] py-[6px] bg-card text-[13px] border border-border rounded-[6px]"
                >
                  {t(skill.key)} <span className="opacity-50 ml-1">{skill.level}%</span>
                </motion.span>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col gap-10 scroll-mt-24">
            <h1 className="text-[32px] font-light">Selected Projects</h1>
            
            {[...PORTFOLIO_DATA.projectGroups, ...PORTFOLIO_DATA.reactGroups].map((group, groupIdx) => (
              <div key={group.titleKey + groupIdx}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold">{t(group.titleKey)}</h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border rounded font-medium bg-card">
                    {t(group.badgeKey)}
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.items.map((proj, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
                      key={proj.titleKey} 
                      className="bg-card p-4 rounded-[10px] border border-border hover:border-primary/50 transition-colors flex flex-col"
                    >
                      <div className="w-full h-32 mb-4 bg-muted rounded overflow-hidden">
                        <img 
                          src={proj.image} 
                          alt={t(proj.titleKey)} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                          onError={(e) => e.currentTarget.style.display='none'} 
                        />
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-[14px] font-bold">{t(proj.titleKey)}</h4>
                        <a href={proj.href} target={(proj as any).external ? "_blank" : undefined} rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-[12px] opacity-70 mb-4 flex-1">{t(proj.descKey)}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 border border-border rounded font-medium">
                          {parseReqLevel(proj.levelKey)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Footer */}
          <footer className="mt-auto py-5 border-t border-border flex justify-between items-center text-[12px] opacity-70">
            <div>Ahmed AWM</div>
       
            <div>&copy; {new Date().getFullYear()}</div>
          </footer>
        </div>

      </main>
    </div>
  );
}
