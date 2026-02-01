import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => (
  <div className="bg-[#0f1115] rounded-3xl shadow-[0_0_50px_rgba(186,28,28,0.15)] overflow-hidden border border-white/10 animate-in fade-in zoom-in duration-500">
    {/* Header do Card - Estilo Futurista */}
    <div className="relative p-10 bg-gradient-to-br from-[#1a1d23] to-[#0f1115] border-b border-white/5">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <span className="text-9xl font-black italic select-none">{op.reference}</span>
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <span className="bg-[#ba1c1c] text-white text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.3em] shadow-[0_0_15px_rgba(186,28,28,0.5)]">
            {op.category}
          </span>
          <div className="text-right">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Carga Horária Est.</p>
            <p className="text-4xl font-black text-white tracking-tighter">{op.time}</p>
          </div>
        </div>
        <h2 className="text-5xl font-black uppercase leading-none tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          {op.name}
        </h2>
        <div className="flex gap-6 text-[11px] font-bold text-[#ba1c1c] uppercase tracking-[0.2em]">
          <span className="bg-white/5 px-3 py-1 rounded-md">{op.taskNumber}</span>
          <span className="bg-white/5 px-3 py-1 rounded-md">ID: {op.reference}</span>
        </div>
      </div>
    </div>

    <div className="p-10 space-y-16 bg-[#0f1115]">
      {/* Grid de Informações Técnicas */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          <h3 className="text-[10px] font-black text-gray-500 uppercase mb-4 tracking-widest">Peça / Exercício</h3>
          <p className="font-bold text-white uppercase text-xl">{op.pieceName}</p>
        </div>
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          <h3 className="text-[10px] font-black text-gray-500 uppercase mb-4 tracking-widest">Localização Técnica</h3>
          <p className="font-bold text-white text-xl">VOL {op.volumePage}</p>
        </div>
      </section>

      {/* Preparação com Glassmorphism */}
      <section>
        <h3 className="flex items-center gap-4 text-xl font-black text-white uppercase mb-8 tracking-tight">
          <span className="w-8 h-[2px] bg-[#ba1c1c]"></span>
          Interface de Preparação
        </h3>
        <div className="bg-gradient-to-r from-[#ba1c1c]/10 to-transparent p-8 rounded-3xl border border-[#ba1c1c]/20 text-lg font-medium text-gray-300 leading-relaxed">
          {op.preparation}
        </div>
      </section>

      {/* Motivação - Estilo Terminal */}
      <section>
        <div className="bg-black border-2 border-[#ba1c1c]/30 p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#ba1c1c] animate-pulse"></div>
          <h3 className="text-[10px] font-black text-[#ba1c1c] uppercase mb-6 tracking-[0.5em]">System_Motivation_Log</h3>
          <div className="relative z-10 font-mono text-xl text-gray-300 italic leading-relaxed">
            <span className="text-[#ba1c1c] mr-2 text-2xl">"</span>
            {op.motivation}
            <span className="text-[#ba1c1c] ml-2 text-2xl">"</span>
          </div>
        </div>
      </section>

      {/* Apresentação - Cards de Status */}
      <section>
        <h3 className="text-xl font-black text-white uppercase mb-8 tracking-tight flex items-center gap-4">
          <span className="w-8 h-[2px] bg-white/20"></span>
          Protocolo de Apresentação
        </h3>
        <div className="grid gap-6">
          {[
            { label: 'Síncrese', text: op.presentation.sincrese, color: 'border-blue-500/30 bg-blue-500/5' },
            { label: 'Análise', text: op.presentation.analise, color: 'border-orange-500/30 bg-orange-500/5' },
            { label: 'Síntese', text: op.presentation.sintese, color: 'border-green-500/30 bg-green-500/5' }
          ].map((item) => (
            <div key={item.label} className={`${item.color} p-8 rounded-2xl border flex gap-8 items-center transition-all hover:bg-white/5`}>
              <span className="font-black uppercase text-[10px] tracking-[0.3em] w-24 text-white opacity-50">{item.label}</span>
              <p className="text-lg font-bold text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Passos da Operação - Estilo Timeline Digital */}
      <section className="print:break-before-page">
        <h3 className="text-xl font-black text-white uppercase mb-10 tracking-tight flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[#ba1c1c]"></span>
          Sequência Operacional
        </h3>
        <div className="space-y-8">
          {op.steps.map((step, idx) => (
            <div key={idx} className="group relative pl-12 border-l-2 border-white/5 hover:border-[#ba1c1c] transition-colors">
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#0f1115] border-2 border-white/20 rounded-full group-hover:border-[#ba1c1c] transition-colors"></div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <p className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{step.task}</p>
                <div className="flex flex-wrap gap-3">
                  {step.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="bg-[#ba1c1c]/10 px-4 py-2 rounded-lg border border-[#ba1c1c]/20 text-[10px] text-[#ff4d4d] font-black uppercase tracking-widest">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ianes662') {
      setIsAuthenticated(true);
    }
  };

  // --- TELA DE LOGIN (MANTIDA ORIGINAL CONFORME PEDIDO) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm border-t-8 border-[#ba1c1c]">
          <div className="text-center mb-8">
            <span className="text-[#ba1c1c] font-black text-6xl tracking-tighter">SENAI</span>
            <h2 className="text-lg font-black mt-4 uppercase tracking-tight text-gray-800">
              MECÂNICO DE USINAGEM CONVENCIONAL
            </h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              PLANOS DE DEMONSTRAÇÕES
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-1 ml-1 tracking-widest">Senha de Acesso</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#ba1c1c] outline-none transition-all font-bold text-center text-xl tracking-widest"
                placeholder="••••"
              />
            </div>
            <button className="w-full bg-[#ba1c1c] hover:bg-[#8e1515] text-white font-black py-4 rounded-xl shadow-lg transition-all uppercase tracking-widest text-sm active:scale-95">
              SENHA
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- TELAS INTERNAS (ESTILO FUTURISTA) ---
  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-400 flex flex-col font-sans selection:bg-[#ba1c1c] selection:text-white">
      <header className="bg-black/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-6 cursor-pointer group" onClick={() => setSelectedOp(null)}>
            <div className="bg-[#ba1c1c] p-2 rounded-sm shadow-[0_0_20px_rgba(186,28,28,0.4)] transition-transform group-hover:scale-110">
              <span className="text-white font-black text-2xl px-1 tracking-tighter">SENAI</span>
            </div>
            <div>
              <h1 className="text-white text-lg font-black leading-none uppercase tracking-tighter group-hover:text-[#ba1c1c] transition-colors">Usinagem_Digital v2.0</h1>
              <p className="text-[9px] font-bold opacity-40 uppercase tracking-[0.3em] mt-1">Planos de Demonstração Técnico</p>
            </div>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-[10px] bg-white/5 hover:bg-[#ba1c1c] hover:text-white px-6 py-2 rounded-full font-black uppercase border border-white/10 transition-all active:scale-95">Disconnect</button>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full p-6">
        {!selectedOp ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {OPERATIONS.map(op => (
              <div 
                key={op.id} 
                onClick={() => setSelectedOp(op)} 
                className="group relative bg-[#111419] p-8 rounded-3xl border border-white/5 hover:border-[#ba1c1c]/50 transition-all cursor-pointer overflow-hidden shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ba1c1c] opacity-[0.02] rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] font-black text-gray-500 border border-white/10 px-3 py-1 rounded-full uppercase group-hover:text-[#ba1c1c] group-hover:border-[#ba1c1c]/30">{op.category}</span>
                  <span className="text-[10px] font-black text-[#ba1c1c] group-hover:scale-110 transition-transform">{op.time}</span>
                </div>
                
                <h3 className="text-2xl font-black text-white leading-tight mb-6 group-hover:text-gray-200 uppercase tracking-tighter">{op.name}</h3>
                
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{op.taskNumber}</span>
                    <span className="text-[9px] font-bold text-[#ba1c1c] uppercase tracking-[0.2em]">Ref: {op.reference}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ba1c1c] group-hover:border-transparent transition-all">
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <button 
              onClick={() => setSelectedOp(null)} 
              className="flex items-center gap-3 text-white/40 hover:text-white font-black text-[10px] uppercase transition-all mb-10 bg-white/5 px-8 py-4 rounded-2xl border border-white/5 shadow-xl active:scale-95"
            >
              <span className="text-lg">←</span> Terminal de Operações
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>

      <footer className="bg-black/50 border-t border-white/5 py-16 px-6 mt-20 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="opacity-20 mb-6">
            <span className="text-white font-black text-7xl tracking-tighter">SENAI</span>
          </div>
          <p className="text-gray-600 font-bold uppercase tracking-[0.8em] text-[10px]">Usinagem de Precisão</p>
          <div className="flex gap-4 mt-8 opacity-30">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
