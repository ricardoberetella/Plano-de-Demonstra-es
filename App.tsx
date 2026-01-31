import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

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
        <button 
          onClick={onHome}
          className="bg-white/10 text-white px-4 py-3 rounded-xl font-black text-[11px] uppercase active:scale-95 transition-all"
        >
          Início
        </button>
        <button 
          onClick={onLogout}
          className="bg-red-600 text-white px-4 py-3 rounded-xl active:scale-95 transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

const OperationCard: React.FC<{ op: OperationPlan; onClick: (op: OperationPlan) => void }> = ({ op, onClick }) => (
  <div 
    onClick={() => onClick(op)}
    className="bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm active:bg-slate-50 transition-all cursor-pointer flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-2">
      <span className="text-[8px] uppercase font-black px-2 py-1 rounded bg-[#004B95]/10 text-[#004B95]">
        {op.category}
      </span>
      <span className="text-[10px] text-slate-400 font-bold">Nº {op.reference}</span>
    </div>
    <h3 className="text-base font-black uppercase leading-tight flex-grow mb-3">
      {op.name}
    </h3>
    <div className="mt-auto pt-2 border-t border-slate-100 flex justify-between items-center">
      <span className="text-[9px] font-bold text-slate-400 uppercase">{op.taskNumber}</span>
      <span className="text-[#E30613] font-black text-[10px] uppercase italic">Abrir</span>
    </div>
  </div>
);

const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => (
  <div className="animate-in fade-in duration-300 pb-10 space-y-4">
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
      <div className="p-4 space-y-3">
        <div>
          <p className="text-[8px] font-bold uppercase text-slate-400">Nome da Operação</p>
          <h2 className="text-lg font-black uppercase leading-tight">{op.name}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <p className="text-[8px] font-bold uppercase text-slate-400">Referência</p>
            <p className="font-bold text-sm">{op.taskNumber}</p>
          </div>
          <div>
            <p className="text-[8px] font-bold uppercase text-slate-400">Tempo Estimado</p>
            <p className="font-bold text-sm">{op.time}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white border-2 border-black rounded-xl p-4">
      <h3 className="text-[10px] font-black uppercase text-[#E30613] mb-2">Preparação</h3>
      <p className="text-sm text-slate-700 leading-snug font-medium">{op.preparation}</p>
    </div>

    <div className="bg-black text-white rounded-xl p-4 italic">
      <h3 className="text-[9px] font-black uppercase text-[#E30613] mb-1">Motivação</h3>
      <p className="text-lg font-black leading-tight">"{op.motivation}"</p>
    </div>

    <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-2 bg-black text-white text-[9px] font-black uppercase p-2 text-center tracking-tighter">
        <div>Passos da Operação</div>
        <div className="border-l border-white/30">Pontos-Chave</div>
      </div>
      <div className="divide-y-2 divide-black">
        {op.steps.map((step, i) => (
          <div key={i} className="grid grid-cols-2 min-h-[80px]">
            <div className="p-3 border-r-2 border-black flex gap-2">
              <span className="text-lg font-black text-slate-200">{i + 1}</span>
              <p className="text-[11px] font-black uppercase leading-tight">{step.task}</p>
            </div>
            <div className="p-3 bg-slate-50 flex flex-col justify-center">
              {step.keyPoints.map((point, pi) => (
                <div key={pi} className="flex gap-1.5 text-[10px] font-bold text-slate-700 uppercase mb-1 last:mb-0">
                  <span className="text-[#E30613]">•</span> {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === "SENAI123") {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#004B95] flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-[340px] rounded-[40px] shadow-2xl overflow-hidden flex flex-col items-center pb-10">
          <div className="w-full bg-[#004B95] pt-12 pb-8 flex flex-col items-center">
            <div className="bg-[#E30613] text-white px-8 py-2 font-black text-5xl italic skew-x-[-12deg] shadow-2xl mb-6">
              SENAI
            </div>
            <h1 className="text-white font-black text-lg uppercase italic tracking-tighter">Mecânico de Usinagem</h1>
            <p className="text-white/60 font-bold text-[10px] uppercase mt-1 tracking-widest">Planos de Demonstrações</p>
          </div>
          
          <form onSubmit={handleLogin} className="w-full px-8 mt-10 space-y-6">
            <div className="relative">
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-slate-100 border-b-4 rounded-2xl p-5 text-center font-black text-3xl outline-none transition-all ${
                  loginError ? 'border-red-500 text-red-600' : 'border-slate-300 focus:border-[#E30613]'
                }`}
                placeholder="SENHA"
              />
              {loginError && <p className="text-red-600 text-[10px] font-black uppercase mt-2 text-center">Acesso Negado</p>}
            </div>
            
            <button type="submit" className="w-full bg-[#004B95] text-white font-black py-5 rounded-2xl text-sm uppercase shadow-xl active:translate-y-1 transition-all">
              Acessar Sistema
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredOps = OPERATIONS.filter(op => 
    op.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    op.reference.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <Header 
        onHome={() => setSelectedOp(null)} 
        onLogout={() => { setIsAuthenticated(false); setPassword(""); setSelectedOp(null); }} 
      />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        {!selectedOp ? (
          <>
            <div className="mb-6">
              <h1 className="text-3xl font-black uppercase italic text-[#004B95] leading-none">
                Planos de <span className="text-[#E30613]">Demonstrações</span>
              </h1>
            </div>

            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Buscar operação..." 
                className="w-full p-4 bg-white border-2 border-slate-200 rounded-2xl font-bold uppercase text-sm shadow-sm outline-none focus:border-[#004B95]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredOps.map(op => <OperationCard key={op.id} op={op} onClick={setSelectedOp} />)}
            </div>
          </>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedOp(null)} 
              className="flex items-center gap-2 text-[#004B95] font-black text-[11px] uppercase mb-6 bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200"
            >
              ← Voltar ao Menu
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>
    </div>
  );
}
