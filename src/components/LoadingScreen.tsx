import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const BOOT_MESSAGES = [
  
  '[    0.000000] Linux version 6.1.0-18-amd64 (debian-kernel@lists.debian.org)',
  '[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz root=UUID=...',
  '[    0.045330] DMI: Ahmed Awm/Portfolio-Board, BIOS 1.0.0',
  '[    0.100911] smpboot: Allowing 8 CPUs',
  '[    0.201011] ACPI: Core revision 20220331',
  '[    0.250320] Loading Ahmed Awm Profile module...',
  '[    0.312948] [ OK ] Started Skill Daemon.',
  '[    0.419020] [ OK ] Reached target Basic System.',
  '[    0.501928] Mounting Project Filesystem...',
  '[    0.699102] [ OK ] Mounted Project Filesystem.',
  '[    0.803920] Starting User Interface...',
  '[    0.912304] Warning: Experience Overflow detected.',
  '[    1.100234] [ OK ] UI Modules loaded successfully.',
  '[    0.000000] Linux version 6.1.0-18-amd64 (debian-kernel@lists.debian.org)',
  '[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz root=UUID=...',
  '[    0.045330] DMI: Ahmed Awm/Portfolio-Board, BIOS 1.0.0',
  '[    0.100911] smpboot: Allowing 8 CPUs',
  '[    0.201011] ACPI: Core revision 20220331',
  '[    0.250320] Loading Ahmed Awm Profile module...',
  '[    0.312948] [ OK ] Started Skill Daemon.',
  '[    0.419020] [ OK ] Reached target Basic System.',
  '[    0.501928] Mounting Project Filesystem...',
  '[    0.699102] [ OK ] Mounted Project Filesystem.',
  '[    0.803920] Starting User Interface...',
  '[    0.912304] Warning: Experience Overflow detected.',
  '[    1.100234] [ OK ] UI Modules loaded successfully.',
  '[    0.000000] Linux version 6.1.0-18-amd64 (debian-kernel@lists.debian.org)',
  '[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz root=UUID=...',
  '[    0.045330] DMI: Ahmed Awm/Portfolio-Board, BIOS 1.0.0',
  '[    0.100911] smpboot: Allowing 8 CPUs',
  '[    0.201011] ACPI: Core revision 20220331',
  '[    0.250320] Loading Ahmed Awm Profile module...',
  '[    0.312948] [ OK ] Started Skill Daemon.',
  '[    0.419020] [ OK ] Reached target Basic System.',
  '[    0.501928] Mounting Project Filesystem...',
  '[    0.699102] [ OK ] Mounted Project Filesystem.',
  '[    0.250320] Loading Ahmed Awm Profile module...',
  '[    0.312948] [ OK ] Started Skill Daemon.',
  '[    0.419020] [ OK ] Reached target Basic System.',
  '[    0.501928] Mounting Project Filesystem...',
  '[    0.699102] [ OK ] Mounted Project Filesystem.',
  '[    0.803920] Starting User Interface...',
  '[    0.912304] Warning: Experience Overflow detected.',
  '[    1.100234] [ OK ] UI Modules loaded successfully.',
  '[    1.250912] System Ready. Booting complete.'
];

export function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (!started) return;


    let currentIndex = 0;

    const addMessage = () => {
      if (currentIndex < BOOT_MESSAGES.length) {
        setMessages((prev) => [...prev, BOOT_MESSAGES[currentIndex]]);
        currentIndex++;

        const delay = Math.random() * 80 + 10;
        setTimeout(addMessage, delay);
      } else {
        setTimeout(() => setShowLogo(true), 800);
      }
    };

    addMessage();

 
  }, [started]);

  useEffect(() => {
    if (showLogo) {
      setTimeout(() => {
        onComplete();
      }, 3500);
    }
  }, [showLogo, onComplete]);

  if (!started) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
<button
  onClick={() => {
    const audio = new Audio('/sound.mp3');
    audio.volume = 1;
    audio.play().catch(() => {});

    setStarted(true);
  }}
  className="relative px-10 py-4 text-green-300 font-mono text-xl tracking-[0.35em] border border-green-900 bg-black overflow-hidden group"
>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

  <span className="absolute inset-0 border border-green-500/40 group-hover:border-green-400/80" />

  <span className="relative z-10">
     Start
  </span>
</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-green-500 font-mono p-4 sm:p-6 overflow-hidden flex flex-col justify-end relative">
      <AnimatePresence>
        {!showLogo && (
          <motion.div exit={{ opacity: 0 }} className="flex flex-col gap-1 z-10">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="text-xs sm:text-sm md:text-base whitespace-pre-wrap break-all"
              >
                {msg}
              </div>
            ))}

            {messages.length < BOOT_MESSAGES.length && (
              <div className="w-2 h-4 sm:h-5 bg-green-500 animate-pulse mt-1" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20 bg-[#050505]"
          >
          <motion.div
  initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  transition={{
    duration: 1.2,
    ease: "easeOut"
  }}
  className="text-[14vw] font-black tracking-[-0.05em]"
  style={{
    fontFamily: "'Orbitron', 'Segoe UI', sans-serif",
  }}
>
  <span
    className="bg-gradient-to-b from-white via-gray-200 to-white bg-clip-text text-transparent"
    style={{
      textShadow: "0 0 25px rgba(255,255,255,0.08)",
    }}
  >
    AWM
  </span>
</motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}