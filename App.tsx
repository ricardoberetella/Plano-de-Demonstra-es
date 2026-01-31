import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

// --- SUAS TELAS ORIGINAIS (RESTAURADAS) ---

const Header: React.FC<{ onHome: () => void; onLogout: () => void }> = ({ onHome, onLogout }) => (
  <header className="bg-[#004B95] text-white shadow-xl sticky top-0 z-50 print:hidden">
    <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
      <div className="flex items-center gap-4 cursor-pointer" onClick={onHome}>
        <div className="bg-[#E30613] text-white px-4 py-1.5 font-black text-2xl italic skew-x-[-12deg] shadow-lg">
          SENAI
        </div>
        <div className="hidden sm:block">
          <h1 className="text-sm font-black uppercase italic leading-none">Mecânico de Usinagem</h1>
          <p className="text-white/60 font-bold text-[9px] uppercase mt-1">Planos de Demonstrações</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={onHome} className="bg-white/10 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase">Início</button>
        <button onClick={onLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-lg">Sair</button>
      </div>
    </div>
  </header>
);

const OperationCard: React.FC<{ op: OperationPlan; onClick: (op: OperationPlan) => void }> = ({ op, onClick }) => (
  <div onClick={() => onClick(op)} className="bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm active:bg-slate-50 cursor-pointer">
    <div className="flex justify-between items-start mb-2">
      <span className="text-[8px] uppercase font-black px-2 py-1 rounded bg-[#004B95]/10 text-[#004B95]">{op.category}</span>
      <span className="text-[10px] text-slate-400 font-bold">Nº {op.reference}</span>
    </div>
    <h3 className="text-base font-black uppercase leading-tight mb-3">{op.name}</h3>
    <div className="mt-auto pt-2 border-t border-slate-100 flex justify-between items-center">
      <span className="text-[9px] font-bold text-slate-400 uppercase">{op.taskNumber}</span>
      <span className="text-[#E30613] font-black text-[10px] uppercase italic">Abrir</span>
    </div>
  </div>
);

const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => (
  <div className="pb-10 space-y-4 max-w-4xl mx-auto">
    {/* Layout original da folha de operação */}
    <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-md">
      <div className="flex border-b-2 border-black bg-slate-50">
        <div className="w-1/3 p-4 flex items-center justify-center border-r-2 border-black">
          <span className="text-[#E30613] font-black text-4xl italic skew-x-[-12deg]">SENAI</span>
        </div>
        <div className="w-2/3 p-3 text-center flex flex-col justify-center">
          <h1 className="text-xl font-black uppercase text-black leading-tight">Plano de Demonstração</h1>
          <p className="text-[9px] font-bold uppercase text-slate-500">Operação Nº {op.reference}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[8px] font-bold uppercase text-slate-400">Nome da Operação</p>
        <h2 className="text-lg font-black uppercase">{op.name}</h2>
      </div>
    </div>
    {/* ... restante da sua DetailView original ... */}
    <div className="bg-white border-2 border-black rounded-xl p-4 italic text-lg font-black">
       "{op.motivation}"
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);

  // NOVA TELA DE LOGIN (ESTILO PRINT 2)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] overflow-hidden shadow-2xl">
          <div className="bg-[#004B95] p-10 text-center">
            <div className="bg-[#E30613] inline-block px-6 py-2 skew-x-[-15deg] mb-6 shadow-lg">
              <span className="text-white font-black text-3xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            <h2 className="text-white font-black uppercase text-lg leading-tight">MECÂNICO DE USINAGEM CONVENCIONAL</h2>
            <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">PLANOS DE DEMONSTRAÇÕES</p>
          </div>
          <form className="p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); if(password === "ianes662") setIsAuthenticated(true); }}>
            <input 
              type="password" 
              placeholder="DIGITE A SENHA" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-full py-4 px-6 text-center font-black text-slate-700 outline-none focus:ring-2 focus:ring-[#004B95]"
            />
            <button className="w-full bg-[#004B95] text-white font-black py-4 rounded-full uppercase text-sm tracking-widest shadow-lg active:scale-95 transition-all">
              Acessar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // INTERFACE ORIGINAL (O QUE VOCÊ JÁ TINHA)
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <Header onHome={() => setSelectedOp(null)} onLogout={() => setIsAuthenticated(false)} />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {!selectedOp ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPERATIONS.map(op => (
              <OperationCard key={op.id} op={op} onClick={setSelectedOp} />
            ))}
          </div>
        ) : (
          <div>
            <button onClick={() => setSelectedOp(null)} className="mb-6 font-black text-[#004B95] uppercase flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              ← Voltar
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>
    </div>
  );
}
