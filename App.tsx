import React, { useState } from 'react';

// Mock de dados baseado no print
const OPERATIONS = [
  { id: 1, name: "Plano de Demonstração", ref: "Ref 2540", category: "Usinagem", time: "20 min" },
  { id: 2, name: "Planos de Demonstrações", ref: "Ref 2541", category: "Usinagem", time: "15 min" },
  { id: 3, name: "Operação de Torno", ref: "Ref 2542", category: "Usinagem", time: "30 min" },
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] overflow-hidden shadow-2xl">
          <div className="bg-[#004B95] p-10 text-center relative">
            <div className="bg-[#E30613] inline-block px-6 py-2 skew-x-[-15deg] mb-4 shadow-lg">
              <span className="text-white font-black text-3xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            <h2 className="text-white font-bold uppercase tracking-tighter text-sm">Acesso ao Sistema</h2>
          </div>
          <form 
            className="p-8 space-y-4" 
            onSubmit={(e) => { e.preventDefault(); if(password.toUpperCase()==="SENAI123") setIsAuthenticated(true); }}
          >
            <input 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 border-none rounded-full py-4 px-6 text-center font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#004B95]"
            />
            <button className="w-full bg-[#004B95] text-white font-black py-4 rounded-full uppercase text-sm tracking-widest shadow-lg active:scale-95 transition-all">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] p-4 font-sans">
      <div className="max-w-md mx-auto bg-[#f8fafc] rounded-[40px] overflow-hidden shadow-2xl min-h-[90vh] flex flex-col">
        
        {/* Header Azul Arredondado igual ao print */}
        <div className="bg-[#004B95] p-6 pb-12 rounded-b-[40px] relative">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-[#E30613] px-4 py-1 skew-x-[-15deg] shadow-md">
              <span className="text-white font-black text-xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            <button onClick={() => setIsAuthenticated(false)} className="text-white/50 font-bold text-[10px] uppercase">Sair</button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-inner flex items-center justify-center overflow-hidden border-2 border-slate-300">
               {/* Simulação da imagem da peça que está no seu print */}
               <div className="w-full h-full bg-slate-200 rounded-full border-4 border-slate-300 flex items-center justify-center">
                  <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
               </div>
            </div>
            <div>
              <h1 className="text-white font-black text-lg leading-tight uppercase">Mecânico de Usinagem<br/>Convencional</h1>
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">Planos de Demonstrações</p>
            </div>
          </div>
        </div>

        {/* Área de Conteúdo */}
        <div className="px-4 -mt-6 flex-grow">
          <div className="grid grid-cols-1 gap-4">
            {OPERATIONS.map((op) => (
              <div key={op.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="bg-blue-100 text-[#004B95] text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                    {op.category}
                  </span>
                  <span className="text-slate-400 text-[9px] font-bold">{op.ref}</span>
                </div>
                
                <h3 className="text-slate-800 font-black text-sm uppercase leading-tight mt-1">
                  {op.name}
                </h3>

                <div className="flex justify-between items-end mt-2 pt-2 border-t border-slate-50">
                  <div className="text-[9px]">
                    <p className="text-slate-400 font-bold uppercase italic">Tempo Estimado</p>
                    <p className="font-black text-slate-700 uppercase italic leading-none">{op.time}</p>
                  </div>
                  <button className="bg-[#004B95] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase italic shadow-md active:scale-95">
                    Abrir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer sutil */}
        <footer className="p-6 text-center">
          <div className="w-12 h-1 bg-slate-300 mx-auto rounded-full opacity-50"></div>
        </footer>
      </div>
    </div>
  );
}
