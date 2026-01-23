import React, { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

const Konami: React.FC = () => {
  const [input, setInput] = useState<string[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = [...input, e.key];
      if (newInput.length > KONAMI_CODE.length) {
        newInput.shift();
      }
      setInput(newInput);

      if (newInput.join('') === KONAMI_CODE.join('')) {
        setActive(true);
        console.log("%c SYSTEM UNLOCKED: AI MANIFEST REVEALED", "color: #0f0; background: #000; font-size: 20px; padding: 10px;");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur text-green-500 font-mono p-10" onClick={() => setActive(false)}>
      <div className="max-w-2xl border border-green-500 p-8 rounded shadow-[0_0_50px_rgba(0,255,0,0.3)]">
        <h2 className="text-3xl font-bold mb-4 glitch-text">AI MANIFEST // SECRET</h2>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ideation:</strong> Gemini 2.5 Flash for brainstorming diorama concepts.</li>
            <li><strong>Code Gen:</strong> React component scaffolding generated via AI.</li>
            <li><strong>Optimization:</strong> 3D Particle logic refined by AI suggestions.</li>
            <li><strong>Workflow:</strong> 40% faster Time-to-Deploy using AI pairing.</li>
        </ul>
        <p className="mt-6 text-sm opacity-70 animate-pulse">Press anywhere to return to simulation...</p>
      </div>
    </div>
  );
};

export default Konami;