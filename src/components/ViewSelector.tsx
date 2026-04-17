import { Monitor, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export function ViewSelector({ onSelect }: { onSelect: (view: 'visual' | 'terminal') => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4 font-sans text-zinc-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Interface</h1>
          <p className="text-zinc-400">Select how you want to experience Ahmed Om's portfolio.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => onSelect('visual')}
            className="group relative flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Monitor className="w-16 h-16 mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl font-semibold mb-2">Visual UI</h2>
            <p className="text-sm text-zinc-400 text-center">A calm, modern, and pleasant visual experience.</p>
          </button>

          <button
            onClick={() => onSelect('terminal')}
            className="group relative flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-800/80 transition-all text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Terminal className="w-16 h-16 mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl font-semibold mb-2">Terminal CLI</h2>
            <p className="text-sm text-zinc-400 text-center">For the developers. A command-line driven experience.</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
