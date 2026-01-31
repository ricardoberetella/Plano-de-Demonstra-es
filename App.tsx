import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

// --- COMPONENTES ORIGINAIS (RESTAURADOS COM TODOS OS DADOS) ---

const Header: React.FC<{ onHome: () => void; onLogout: () => void }> = ({ onHome, onLogout }) => (
  <header className="bg-[#004B95] text-white shadow-xl sticky top-0 z-50 print:hidden">
    <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
      <div className="flex items-center gap-4 cursor-pointer" onClick={onHome}>
        <div className="bg-[#E30613] text-white px-4 py-1.5 font-black text-2xl italic skew-x-[-12deg] shadow-lg">
          SENAI
        </div>
        <div>
          <h1 className="text-sm font-black uppercase italic leading-none">Mecânico de Usinagem</h1>
          <p className="text-white/60 font-bold text-[9px] uppercase mt-1">Planos de Demonstrações</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={onHome} className="bg-white/10 px-4 py-2 rounded-lg font-bold text-xs uppercase hover:bg-white/20">Início</button>
        <button onClick={onLogout} className="bg-red-600 px-4 py-2 rounded-lg font-bold text-xs uppercase shadow-lg">Sair</button>
      </div>
    </div>
  </header>
);

const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => (
  <div className="animate-in fade-in duration-300 pb-10 space-y-6">
    {/* Cabeçalho do Plano */}
    <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-md">
      <div className="flex border-b-2 border-black bg-slate-50">
        <div className="w-1/3 p-6 flex items-center justify-center border-r-2 border-black">
          <span className="text-[#E30613] font-black text-5xl italic skew-x-[-12deg]">SENAI</span>
        </div>
        <div className="w-2/3 p-4 text-center flex flex-col justify-center">
          <h1 className="text-2xl font-black uppercase text-black leading-tight">Plano de Demonstração</h1>
          <p className="text-xs font-bold uppercase text-slate-500 tracking-widest">Operação Nº {op.reference}</p>
        </div>
      </div>
      <div className="p-6 grid grid-cols-2 gap-8">
        <div>
          <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Nome da Operação</p>
          <h2 className="text-xl font-black uppercase text-[#004B95]">{op.name}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Referência</p>
            <p className="font-bold text-base">{op.taskNumber}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Tempo</p>
            <p className="font-bold text-base">{op.time}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Preparação e Motivação */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border-2 border-black rounded-xl p-6 shadow-sm">
        <h3 className="text-xs font-black uppercase text-[#E30613] mb-3 border-b border-slate-100 pb-2">Preparação (Máquinas/Ferramentas)</h3>
        <p className="text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-line">{op.preparation}</p>
      </div>
      <div className="bg-black text-white rounded-xl p-6 shadow-xl flex flex-col justify-center">
        <h3 className="text-[10px] font-black uppercase text-[#E30613] mb-2 tracking-widest">Motivação</h3>
        <p className="text-xl font-black leading-tight italic">"{op.motivation}"</p>
      </div>
    </div>

    {/* TABELA DE PASSOS - AQUI ESTÃO AS INFORMAÇÕES QUE FALTAVAM */}
    <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-2 bg-black text-white text-xs font-black uppercase p-3 text-center">
        <div>Passos da Operação</div>
        <div className="border-l border-white/30">Pontos-Chave</div>
      </div>
      <div className="divide-y-2 divide-black">
        {op.steps.map((step, i) => (
          <div key={i} className="grid grid-cols-2 min-h-[100px]">
            <div className="p-4 border-r-2 border-black flex gap-4">
              <span className="text-2xl font-black text-slate-200">{i + 1}</span>
              <p className="text-xs font-black uppercase leading-normal pt-1">{step.task}</p>
            </div>
            <div className="p-4 bg-slate-50 flex flex-col justify-center space-y-2">
              {step.keyPoints.map((point, pi) => (
                <div key={pi} className="flex gap-2 text-[11px] font-bold text-slate-800 uppercase leading-tight">
                  <span className="text-[#E30613] text-lg leading-none">•</span> {point}
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
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);

  // LOGIN PADRÃO PRINT 2 (SENHA: ianes662)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] overflow-hidden shadow-2xl">
          <div className="bg-[#004B95] p-10 text-center">
            <div className="bg-[#E30613] inline-block px-6 py-2 skew-x-[-15deg] mb-6">
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
            <button className="w-full bg-[#004B95] text-white font-black py-4 rounded-full uppercase text-sm tracking-widest active:scale-95 transition-all">Acessar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <Header onHome={() => setSelectedOp(null)} onLogout={() => { setIsAuthenticated(false); setPassword(""); }} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedOp ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPERATIONS.map(op => (
              <div key={op.id} onClick={() => setSelectedOp(op)} className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm cursor-pointer active:scale-95 transition-all">
                <span className="text-[9px] font-black px-2 py-1 rounded bg-[#004B95]/10 text-[#004B95] uppercase">{op.category}</span>
                <h3 className="text-lg font-black uppercase mt-3 mb-4">{op.name}</h3>
                <div className="pt-3 border-t flex justify-between items-center text-[#E30613] font-black text-xs italic uppercase">
                  <span>Ref: {op.reference}</span>
                  <span>Ver Detalhes →</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button onClick={() => setSelectedOp(null)} className="mb-8 font-black text-[#004B95] uppercase flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-md border border-slate-200">
              ← Voltar ao Menu
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>
    </div>
  );
}
