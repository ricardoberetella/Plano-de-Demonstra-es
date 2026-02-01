import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

// --- COMPONENTES AUXILIARES ---

const Header: React.FC<{ onHome: () => void; onLogout: () => void }> = ({ onHome, onLogout }) => (
  <header className="bg-[#ba1c1c] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#8e1515] print:hidden">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer" onClick={onHome}>
        <div className="bg-white p-1.5 rounded transform -rotate-1 shadow-md shrink-0">
          <span className="text-[#ba1c1c] font-black text-xl px-1 tracking-tighter">SENAI</span>
        </div>
        <div>
          <h1 className="text-[13px] sm:text-lg font-black leading-none uppercase tracking-tighter">
            MECÂNICO DE USINAGEM CONVENCIONAL
          </h1>
          <p className="text-[9px] sm:text-xs font-bold opacity-90 uppercase tracking-[0.1em] mt-0.5">
            PLANOS DE DEMONSTRAÇÕES
          </p>
        </div>
      </div>
      <button 
        onClick={onLogout}
        className="text-[10px] bg-black/20 hover:bg-black/40 transition-all px-3 py-2 rounded font-bold uppercase border border-white/20 active:scale-95"
      >
        Sair
      </button>
    </div>
  </header>
);

const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Cabeçalho do Card de Detalhes */}
    <div className="bg-gray-900 p-6 text-white">
      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
        <span className="bg-[#ba1c1c] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          {op.category}
        </span>
        <div className="text-right">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Tempo Estimado</p>
          <p className="text-xl font-black text-[#ba1c1c]">{op.time}</p>
        </div>
      </div>
      <h2 className="text-2xl font-black uppercase leading-tight tracking-tight mb-2">{op.name}</h2>
      <div className="flex gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span>{op.taskNumber}</span>
        <span>•</span>
        <span>Ref: {op.reference}</span>
      </div>
    </div>

    <div className="p-6 space-y-8">
      {/* Informações Gerais */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-gray-300">
          <h3 className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Peça / Exercício</h3>
          <p className="font-bold text-gray-800 uppercase text-sm">{op.pieceName}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-gray-300">
          <h3 className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Volume / Página</h3>
          <p className="font-bold text-gray-800 text-sm">{op.volumePage}</p>
        </div>
      </section>

      {/* Preparação */}
      <section>
        <h3 className="flex items-center gap-2 text-sm font-black text-gray-800 uppercase mb-4 tracking-tight">
          <span className="w-2 h-6 bg-[#ba1c1c] rounded-full"></span>
          Preparação (Máquinas, Ferramentas e Instrumentos)
        </h3>
        <div className="bg-red-50 p-5 rounded-2xl border-2 border-red-100 text-sm font-medium text-gray-700 leading-relaxed shadow-sm">
          {op.preparation}
        </div>
      </section>

      {/* Motivação */}
      <section>
        <h3 className="flex items-center gap-2 text-sm font-black text-gray-800 uppercase mb-4 tracking-tight text-red-600">
          <span className="w-2 h-6 bg-gray-800 rounded-full"></span>
          Motivação
        </h3>
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg italic font-medium leading-relaxed relative overflow-hidden text-sm">
          <div className="relative z-10 font-serif">"{op.motivation}"</div>
          <div className="absolute -right-4 -bottom-4 text-white/5 text-8xl font-black font-serif italic">"</div>
        </div>
      </section>

      {/* Apresentação (Síncrese, Análise, Síntese) */}
      <section>
        <h3 className="text-sm font-black text-gray-800 uppercase mb-4 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-[#ba1c1c] rounded-full"></span>
          Apresentação
        </h3>
        <div className="grid gap-3">
          {[
            { label: 'Síncrese', text: op.presentation.sincrese, color: 'bg-blue-50 border-blue-100' },
            { label: 'Análise', text: op.presentation.analise, color: 'bg-orange-50 border-orange-100' },
            { label: 'Síntese', text: op.presentation.sintese, color: 'bg-green-50 border-green-100' }
          ].map((item) => (
            <div key={item.label} className={`${item.color} p-4 rounded-xl border-2 flex gap-4 items-start`}>
              <span className="font-black uppercase text-[10px] mt-1 tracking-widest w-16">{item.label}</span>
              <p className="text-sm font-bold text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Passos da Operação */}
      <section className="print:break-before-page">
        <h3 className="text-sm font-black text-gray-800 uppercase mb-6 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-gray-800 rounded-full"></span>
          Passos da Operação
        </h3>
        <div className="space-y-4">
          {op.steps.map((step, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex items-stretch">
                <div className="bg-gray-100 w-12 flex items-center justify-center font-black text-gray-400 border-r-2 border-gray-200">
                  {idx + 1}
                </div>
                <div className="p-4 flex-grow">
                  <p className="font-bold text-gray-800 mb-3 text-sm">{step.task}</p>
                  <div className="space-y-1.5">
                    {step.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-[#ba1c1c] font-black uppercase tracking-tight">
                        <span className="mt-1">●</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aplicação e Verificação */}
      <div className="grid md:grid-cols-2 gap-6">
        <section>
          <h3 className="text-sm font-black text-gray-800 uppercase mb-4 tracking-tight">Aplicação</h3>
          <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100 text-sm font-bold text-gray-600">
            {op.application}
          </div>
        </section>
        <section>
          <h3 className="text-sm font-black text-gray-800 uppercase mb-4 tracking-tight">Verificação</h3>
          <div className="space-y-3">
            {op.verification.map((v, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border-2 border-gray-100 text-sm font-bold text-gray-700 flex gap-3 italic">
                <span className="text-[#ba1c1c] not-italic">?</span>
                {v}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha padrão conforme sua necessidade ou lógica anterior
    if (password === '1234') { 
      setIsAuthenticated(true);
    }
  };

  // TELA DE LOGIN (Tablet-Optimized)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm border-t-8 border-[#ba1c1c]">
          <div className="text-center mb-10">
            <span className="text-[#ba1c1c] font-black text-6xl tracking-tighter">SENAI</span>
            <div className="mt-6">
              <h2 className="text-lg font-black uppercase tracking-tight text-gray-800 leading-tight">
                MECÂNICO DE USINAGEM CONVENCIONAL
              </h2>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">
                PLANOS DE DEMONSTRAÇÕES
              </p>
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-1 tracking-widest">
                Senha de Acesso
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#ba1c1c] outline-none transition-all font-bold text-center text-2xl tracking-[0.5em]"
                placeholder="••••"
                autoFocus
              />
            </div>
            <button className="w-full bg-[#ba1c1c] hover:bg-[#8e1515] text-white font-black py-4 rounded-xl shadow-lg shadow-red-100 transition-all uppercase tracking-widest text-sm active:scale-95">
              SENHA
            </button>
          </form>
        </div>
      </div>
    );
  }

  // TELA PRINCIPAL (Tablet-Optimized)
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      <Header onHome={() => setSelectedOp(null)} onLogout={() => setIsAuthenticated(false)} />
      
      <main className="flex-grow max-w-7xl mx-auto w-full p-4 sm:p-6">
        {!selectedOp ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OPERATIONS.map(op => (
              <div 
                key={op.id}
                onClick={() => setSelectedOp(op)}
                className="bg-white p-5 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-[#ba1c1c] hover:shadow-md cursor-pointer transition-all active:scale-95 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-black bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase tracking-widest group-hover:bg-red-50 group-hover:text-[#ba1c1c] transition-colors">
                    {op.category}
                  </span>
                  <span className="text-[10px] font-black text-[#ba1c1c]">{op.time}</span>
                </div>
                <h3 className="font-bold text-gray-800 leading-tight mb-4 text-sm group-hover:text-[#ba1c1c] transition-colors line-clamp-2">
                  {op.name}
                </h3>
                <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-tighter">
                  <span>{op.taskNumber}</span>
                  <span className="text-gray-200">•</span>
                  <span>Ref: {op.reference}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedOp(null)} 
              className="group flex items-center gap-3 text-gray-500 hover:text-[#ba1c1c] font-black text-[10px] uppercase transition-all mb-6 bg-white px-5 py-3 rounded-xl border-2 border-gray-100 shadow-sm active:scale-95"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao Menu
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-10 px-6 mt-10 print:hidden text-center">
        <div className="flex flex-col items-center">
          <span className="text-white font-black text-4xl tracking-tighter">SENAI</span>
          <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[9px] mt-2">
            MECÂNICO DE USINAGEM CONVENCIONAL
          </p>
          <div className="w-10 h-1 bg-[#ba1c1c] my-4 rounded-full"></div>
          <p className="text-gray-500 font-bold text-[8px] uppercase tracking-widest">
            PLANOS DE DEMONSTRAÇÕES © 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
