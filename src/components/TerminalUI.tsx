import React, { useState, useEffect, useRef } from 'react';
import { Monitor } from 'lucide-react';
import { PORTFOLIO_DATA, t, parseReqLevel } from '../data';

type CommandRecord = {
  command: string;
  output: React.ReactNode;
};

export function TerminalUI({ onSwitchToVisual }: { onSwitchToVisual: () => void }) {
  const [history, setHistory] = useState<CommandRecord[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial boot message sequence
    setHistory([
      {
        command: '',
        output: (
          <div className="text-[#666] text-[11px] mb-5 leading-loose">
            [  OK  ] Found device: Awm_Portfolio_v1.0<br/>
            [  OK  ] Started User Login Management Service.<br/>
            [  OK  ] Loading CLI Interface...<br/>
            Last login: {new Date().toDateString()} on ttys001
          </div>
        )
      }
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let output: React.ReactNode = null;
    const lowerCmd = trimmed.toLowerCase();

    if (lowerCmd === 'help') {
      output = (
        <div className="text-white opacity-80 ml-5 leading-relaxed">
          <ul className="list-none space-y-1">
            <li>&gt; <span className="text-[#00FF41]">open projects</span>  - View my portfolio projects</li>
            <li>&gt; <span className="text-[#00FF41]">open skills</span>    - View my technical skills</li>
            <li>&gt; <span className="text-[#00FF41]">about ahmed awm</span> - Learn more about me</li>
            <li>&gt; <span className="text-[#00FF41]">clear</span>          - Clear the terminal</li>
            <li>&gt; <span className="text-[#00FF41]">exit</span>           - Switch to visual UI</li>
          </ul>
        </div>
      );
    } else if (lowerCmd === 'open skills') {
      output = (
        <div className="text-white opacity-80 mx-5 leading-relaxed grid grid-cols-2 md:grid-cols-3 gap-y-1">
          {PORTFOLIO_DATA.skills.map(skill => (
            <div key={skill.key}>&gt; {t(skill.key)} ({skill.level}%)</div>
          ))}
        </div>
      );
    } else if (lowerCmd === 'open projects') {
      const allProjects = [...PORTFOLIO_DATA.projectGroups, ...PORTFOLIO_DATA.reactGroups].flatMap(g => g.items);

      output = (
        <div className="text-white opacity-80 ml-5 space-y-3 leading-relaxed">
          <div>&gt; Scanning disk sections...</div>
          <div>&gt; Accessing /home/awm/dev/projects</div>
          <div>&gt; Found {allProjects.length} active entries.</div>
          <div className="pt-2 space-y-4">
            {allProjects.map(proj => (
              <div key={proj.titleKey}>
                <div className="text-[#00FF41] font-bold">&gt; {t(proj.titleKey)} [{parseReqLevel(proj.levelKey)}]</div>
                <div className="pl-4">  {t(proj.descKey)}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lowerCmd === 'about ahmed awm' || lowerCmd === 'about ahmed om') {
      output = (
        <div className="text-white opacity-80 ml-5 leading-relaxed space-y-1">
          <div>&gt; Name: Ahmed Awm</div>
          <div>&gt; Role: Full Stack Developer</div>
          <div>&gt; Focus: Terminal-driven development & UI Design</div>
        </div>
      );
    } else if (lowerCmd === 'clear') {
      setHistory([]);
      return;
    } else if (lowerCmd === 'exit') {
      onSwitchToVisual();
      return;
    } else {
      output = <div className="text-red-400 ml-5 leading-relaxed">&gt; Command not found: {trimmed}. Type 'help' for a list of commands.</div>;
    }

    setHistory(prev => [...prev, { command: trimmed, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] font-mono p-6 flex flex-col text-[#00FF41] text-[13px] leading-[1.5] border-l-2 border-[#222]">
      
      {/* Terminal Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-[6px]">
          <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onSwitchToVisual} 
            className="flex items-center gap-2 text-xs hover:opacity-70 transition-opacity text-[#888] hover:text-[#00FF41]"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline uppercase tracking-widest text-[10px]">Return to UI</span>
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto terminal-scroll pb-24">
        {history.map((item, idx) => (
          <div key={idx} className="mb-4">
            {item.command && (
              <div className="mb-2">
                <span className="text-[#888] mr-2">ahmed-awm@portfolio:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="mt-1">
              {item.output}
            </div>
          </div>
        ))}
        
        <div className="flex items-center mb-2">
          <span className="text-[#888] mr-2 shrink-0">ahmed-awm@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-[#00FF41] caret-[#00FF41] p-0"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>

      <div className="absolute bottom-6 left-6 text-[#444] text-[10px] uppercase">
        SYSTEM: IDLE | MEM: 4.2GB / 16GB
      </div>
    </div>
  );
}
