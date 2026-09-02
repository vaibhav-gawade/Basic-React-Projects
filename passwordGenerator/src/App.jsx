import { useState, useCallback, useEffect } from 'react';

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [angle, setAngle] = useState(-70);
        
  const [strengthText, setStrengthText] = useState("Weak");
  const [crackTime, setCrackTime] = useState("Instantly");
  const [copied, setCopied] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) str += "!@#$%^&*()";
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);

    let score = 0;
    if (length >= 12) score += 2;
    else if (length >= 8) score += 1;

    if (numberAllowed) score += 1;
    if (charAllowed) score += 1;

    if (score <= 1) {
      setStrengthText("Weak");
      setAngle(-70);
      setCrackTime("Instantly");
    } else if (score === 2) {
      setStrengthText("Medium");
      setAngle(-20);
      setCrackTime("A few hours");
    } else if (score === 3) {
      setStrengthText("Strong");
      setAngle(30);
      setCrackTime("A few months");
    } else {
      setStrengthText("Very Strong");
      setAngle(70);
      setCrackTime("Years");
    }
  }, [length, charAllowed, numberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, generatePassword]);

  const getStrengthColor = () => {
    if (strengthText === "Weak") return "text-red-500";
    if (strengthText === "Medium") return "text-orange-500";
    if (strengthText === "Strong") return "text-yellow-500";
    return "text-green-500";
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <div className="relative w-screen h-screen flex justify-center items-center flex-col bg-slate-950">
        <h1 className="font-bold font-sans text-shadow-lg text-3xl text-slate-100 mb-6">
          PASSWORD GENERATOR
        </h1>
                
        {/* FIXED BOX SIZE CONTAINER */}
        <div className="w-450px h-600px flex justify-between items-center flex-col rounded-3xl shadow-lg p-8 bg-white box-border">
          
          <div className="w-full flex flex-col items-center">
            <h3 className="text-center font-bold text-slate-700 mb-2 uppercase tracking-wider text-sm">
              Password Strength
            </h3>

            {/* METER */}
            <div className="w-full flex justify-center items-center mb-2">
              <svg width="240" height="130" viewBox="0 0 200 110">
                <defs>
                  <linearGradient id="strengthGradient">
                    <stop offset="0%" stopColor="red" />
                    <stop offset="33%" stopColor="orange" />
                    <stop offset="66%" stopColor="yellow" />
                    <stop offset="100%" stopColor="green" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 20 100 A 80 80 0 0 1 180 100" 
                  fill="none" 
                  stroke="url(#strengthGradient)" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                />
                <polygon 
                  points="97,100 100,35 103,100" 
                  fill="#1e293b" 
                  className="transition-transform duration-300 ease-out" 
                  style={{ transform: `rotate(${angle}deg)`, transformOrigin: '100px 100px' }} 
                />
                <circle cx="100" cy="100" r="4" fill="#1e293b" />
              </svg>
            </div>

            {/* SPLIT BREAKDOWN */}
            <div className="flex w-full justify-between items-start border-b border-slate-200 pb-2 mb-1">
              <div className="w-1/2 flex flex-col items-start pr-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Current Security
                </span>
                <h2 className={`text-xl font-black uppercase tracking-wide transition-colors duration-300 ${getStrengthColor()}`}>
                  {strengthText}
                </h2>
                <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                  Est. Crack Time: 
                  <span className="font-bold text-slate-700 text-xs">{crackTime}</span>
                </p>
              </div>

              <div className="w-1/2 pl-4 border-l border-slate-200 flex flex-col space-y-2 text-[11px]">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Requirements
                </span>
                <div className={`flex items-center gap-1.5 transition-colors duration-300 ${length >= 12 ? "text-green-600 font-semibold" : "text-slate-400"}`}>
                  <span className="text-xs">{length >= 12 ? "✓" : "○"}</span> Length (12+ chars)
                </div>
                <div className={`flex items-center gap-1.5 transition-colors duration-300 ${numberAllowed ? "text-green-600 font-semibold" : "text-slate-400"}`}>
                  <span className="text-xs">{numberAllowed ? "✓" : "○"}</span> Contains Numbers
                </div>
                <div className={`flex items-center gap-1.5 transition-colors duration-300 ${charAllowed ? "text-green-600 font-semibold" : "text-slate-400"}`}>
                  <span className="text-xs">{charAllowed ? "✓" : "○"}</span> Contains Symbols
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            {/* INPUT LINE */}
            <div className="w-full flex bg-slate-50 p-2.5 rounded-xl mb-5 items-center justify-between border border-slate-200">
              <input 
                type="text" 
                value={password} 
                className="bg-transparent outline-none font-mono text-sm w-full text-slate-800 tracking-wider font-bold select-all" 
                readOnly 
              />
              <div className="flex items-center gap-1 shrink-0 ml-2">
                <button 
                  onClick={generatePassword} 
                  title="Regenerate Password" 
                  className="p-1.5 rounded-lg hover:bg-slate-200 transition-colors duration-200 text-slate-500 hover:text-slate-800 cursor-pointer flex items-center justify-center"
                >
                  <svg 
                    xmlns="http://w3.org" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`transition-transform duration-500 ease-out ${isRotating ? "rotate-360deg" : "rotate-0"}`}
                  >
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 16h5v5" />
                  </svg>
                </button>
                <button 
                  onClick={copyToClipboard} 
                  className={`text-white px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="w-full space-y-4 text-xs text-slate-600">
              <div className="flex justify-between items-center bg-slate-50 p-2 rounded-xl border border-slate-100">
                <label className="font-semibold text-slate-700">
                  Password Length: <span className="text-blue-600 font-bold">{length}</span>
                </label>
                <input 
                  type="range" 
                  min={6} 
                  max={20} 
                  value={length} 
                  onChange={(e) => setLength(Number(e.target.value))} 
                  className="cursor-pointer h-1 bg-slate-200 rounded-lg appearance-none accent-blue-600" 
                />
              </div>
              <div className="flex gap-4 justify-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700 select-none">
                  <input 
                    type="checkbox" 
                    checked={numberAllowed} 
                    onChange={() => setNumberAllowed(prev => !prev)} 
                    className="cursor-pointer rounded text-blue-600 focus:ring-blue-500 h-3.5 w-3.5" 
                  />
                  Include Numbers
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700 select-none">
                  <input 
                    type="checkbox" 
                    checked={charAllowed} 
                    onChange={() => setCharAllowed(prev => !prev)} 
                    className="cursor-pointer rounded text-blue-600 focus:ring-blue-500 h-3.5 w-3.5" 
                  />
                  Include Symbols
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;