import React, { useState } from 'react';

// Mock de dados para as telas internas
const OPERATIONS = [
  { id: 1, name: "Plano de Demonstração", ref: "Ref 2540", category: "Usinagem", time: "20 min" },
  { id: 2, name: "Planos de Demonstrações", ref: "Ref 2541", category: "Usinagem", time: "15 min" },
  { id: 3, name: "Operação de Torno", ref: "Ref 2542", category: "Usinagem", time: "30 min" },
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // --- TELA DE LOGIN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] overflow-hidden shadow-2xl">
          <div className="bg-[#004B95] p-10 text-center relative">
            {/* Logo SENAI Inclinado */}
            <div className="bg-[#E30613] inline-block px-6 py-2 skew-x-[-15deg] mb-6 shadow-lg border-l-4 border-white/20">
              <span className="text-white font-black text-3xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            
            {/* Textos solicitados substituindo "Acesso ao Sistema" */}
            <h2 className="text-white font-black uppercase tracking-tight text-lg leading-tight">
              MECÂNICO DE USINAGEM CONVENCIONAL
            </h2>
            <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">
              PLANOS DE DEMONSTRAÇÕES
            </p>
          </div>

          <form 
            className="p-8 space-y-4" 
            onSubmit={(e) => { 
              e.preventDefault(); 
              if(password.toUpperCase() === "SENAI123") setIsAuthenticated(true); 
            }}
          >
            <div className="relative">
              <input 
                type="password" 
                placeholder="DIGITE A SENHA" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-100 border-none rounded-full py-4 px-6 text-center font-black text-slate-700 outline-none focus:ring-2 focus:ring-[#004B95] placeholder:text-slate-400"
              />
            </div>
            <button className="w-full bg-[#004B95] text-white font-black py-4 rounded-full uppercase text-sm tracking-widest shadow-lg active:scale-95 transition-all">
              Acessar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- TELA PRINCIPAL (PÓS-LOGIN) ---
  return (
    <div className="min-h-screen bg-[#0a192f] p-4 font-sans">
      <div className="max-w-md mx-auto bg-[#f8fafc] rounded-[40px] overflow-hidden shadow-2xl min-h-[90vh] flex flex-col">
        
        {/* Header Azul Arredondado igual ao print 2 */}
        <div className="bg-[#004B95] p-6 pb-12 rounded-b-[40px] relative">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-[#E30613] px-4 py-1 skew-x-[-15deg] shadow-md">
              <span className="text-white font-black text-xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            <button onClick={() => setIsAuthenticated(false)} className="bg-white/10 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Imagem da peça igual ao print */}
            <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-inner flex items-center justify-center overflow-hidden border-2 border-slate-300">
               <div className="w-full h-full bg-slate-200 rounded-full border-4 border-slate-300 flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                  <div className="absolute inset-0 border-t-2 border-slate-400/30 rounded-full"></div>
               </div>
            </div>
            <div>
              <h1 className="text-white font-black text-base leading-tight uppercase">Mecânico de Usinagem<br/>Convencional</h1>
              <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mt-1">Planos de Demonstrações</p>
            </div>
          </div>
        </div>

        {/* Lista de Operações */}
        <div className="px-4 -mt-6 flex-grow">
          <div className="grid grid-cols-1 gap-3">
            {OPERATIONS.map((op) => (
              <div key={op.id} className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-slate-100 text-slate-500 text-[8px] font-black px-2 py-0.5 rounded uppercase">
                    {op.category}
                  </span>
                  <span className="text-slate-300 text-[9px] font-bold tracking-tighter">{op.ref}</span>
                </div>
                
                <h3 className="text-slate-800 font-black text-sm uppercase leading-tight">
                  {op.name}
                </h3>

                <div className="flex justify-between items-end mt-4 pt-3 border-t border-slate-50">
                  <div>
                    <p className="text-slate-400 font-bold uppercase text-[8px] italic">Tempo Estimado</p>
                    <p className="font-black text-[#004B95] uppercase italic text-xs leading-none">{op.time}</p>
                  </div>
                  <button className="bg-[#004B95] hover:bg-[#003d7a] text-white text-[10px] font-black px-8 py-2.5 rounded-full uppercase italic shadow-lg transition-transform active:scale-90">
                    Abrir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Barra de navegação inferior sutil */}
        <footer className="p-4 flex justify-center">
          <div className="w-16 h-1.5 bg-slate-300 rounded-full opacity-30"></div>
        </footer>
      </div>
    </div>
  );
}
