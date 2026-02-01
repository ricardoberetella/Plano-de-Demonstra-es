import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

// Componente de Detalhes (Original, sem mudanças de layout)
const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-gray-900 p-8 text-white">
      <div className="flex justify-between items-start mb-6">
        <span className="bg-[#ba1c1c] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
          {op.category}
        </span>
        <div className="text-right">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Tempo Estimado</p>
          <p className="text-3xl font-black text-[#ba1c1c]">{op.time}</p>
        </div>
      </div>
      <h2 className="text-4xl font-black uppercase leading-none tracking-tighter mb-4">{op.name}</h2>
      <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
        <span>{op.taskNumber}</span>
        <span>•</span>
        <span>Ref: {op.reference}</span>
      </div>
    </div>

    <div className="p-8 space-y-12">
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-200">
          <h3 className="text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">Peça / Exercício</h3>
          <p className="font-bold text-gray-800 uppercase text-lg">{op.pieceName}</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-200">
          <h3 className="text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">Volume / Página</h3>
          <p className="font-bold text-gray-800 text-lg">{op.volumePage}</p>
        </div>
      </section>

      <section>
        <h3 className="flex items-center gap-3 text-lg font-black text-gray-800 uppercase mb-6 tracking-tighter">
          <span className="w-2.5 h-8 bg-[#ba1c1c] rounded-full"></span>
          Preparação (Máquinas, Ferramentas e Instrumentos)
        </h3>
        <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-100 text-lg font-medium text-gray-700 leading-relaxed shadow-sm">
          {op.preparation}
        </div>
      </section>

      <section>
        <h3 className="flex items-center gap-3 text-lg font-black text-gray-800 uppercase mb-6 tracking-tighter">
          <span className="w-2.5 h-8 bg-gray-800 rounded-full"></span>
          Motivação
        </h3>
        <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl italic font-medium leading-relaxed relative overflow-hidden text-lg">
          <div className="relative z-10 font-serif">"{op.motivation}"</div>
          <div className="absolute -right-8 -bottom-8 text-white/5 text-[12rem] font-black font-serif italic">"</div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-black text-gray-800 uppercase mb-6 tracking-tighter flex items-center gap-3">
          <span className="w-2.5 h-8 bg-[#ba1c1c] rounded-full"></span>
          Apresentação
        </h3>
        <div className="grid gap-4">
          {[
            { label: 'Síncrese', text: op.presentation.sincrese, color: 'bg-blue-50 border-blue-100' },
            { label: 'Análise', text: op.presentation.analise, color: 'bg-orange-50 border-orange-100' },
            { label: 'Síntese', text: op.presentation.sintese, color: 'bg-green-50 border-green-100' }
          ].map((item) => (
            <div key={item.label} className={`${item.color} p-6 rounded-2xl border-2 flex gap-6 items-start`}>
              <span className="font-black uppercase text-[10px] mt-1.5 tracking-[0.2em] w-20 shrink-0">{item.label}</span>
              <p className="text-lg font-bold text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="print:break-before-page">
        <h3 className="text-lg font-black text-gray-800 uppercase mb-8 tracking-tighter flex items-center gap-3">
          <span className="w-2.5 h-8 bg-gray-800 rounded-full"></span>
          Passos da Operação
        </h3>
        <div className="space-y-6">
          {op.steps.map((step, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-sm">
              <div className="flex items-stretch">
                <div className="bg-gray-100 w-16 flex items-center justify-center font-black text-gray-400 border-r-2 border-gray-200 text-xl">
                  {idx + 1}
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-xl font-bold text-gray-800 mb-4">{step.task}</p>
                  <div className="space-y-2">
                    {step.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs text-[#ba1c1c] font-black uppercase tracking-tight">
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

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h3 className="text-lg font-black text-gray-800 uppercase mb-6 tracking-tighter">Aplicação</h3>
          <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100 text-lg font-bold text-gray-600 leading-relaxed">
            {op.application}
          </div>
        </section>
        <section>
          <h3 className="text-lg font-black text-gray-800 uppercase mb-6 tracking-tighter">Verificação</h3>
          <div className="space-y-4">
            {op.verification.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-gray-100 text-lg font-bold text-gray-700 flex gap-4 italic">
                <span className="text-[#ba1c1c] not-italic font-black">?</span>
                {v}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') {
      setIsAuthenticated(true);
    }
  };

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
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-1 ml-1 tracking-widest">Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#ba1c1c] outline-none transition-all font-bold text-center text-xl tracking-widest"
                placeholder="••••"
              />
            </div>
            <button className="w-full bg-[#ba1c1c] hover:bg-[#8e1515] text-white font-black py-4 rounded-xl shadow-lg transition-all uppercase tracking-widest text-sm">
              SENHA
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#ba1c1c] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#8e1515] print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6 cursor-pointer" onClick={() => setSelectedOp(null)}>
            <div className="bg-white p-2 rounded transform -rotate-1 shadow-md">
              <span className="text-[#ba1c1c] font-black text-3xl px-1 tracking-tighter">SENAI</span>
            </div>
            <div>
                <h1 className="text-xl font-bold leading-none uppercase tracking-tighter">MECÂNICO DE USINAGEM CONVENCIONAL</h1>
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mt-1">PLANOS DE DEMONSTRAÇÕES</p>
            </div>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-[10px] bg-black/20 px-4 py-2 rounded font-bold uppercase border border-white/20">Sair</button>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full p-6">
        {!selectedOp ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPERATIONS.map(op => (
              <div key={op.id} onClick={() => setSelectedOp(op)} className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-[#ba1c1c] cursor-pointer transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black bg-gray-100 px-3 py-1 rounded text-gray-500 uppercase">{op.category}</span>
                  <span className="text-[10px] font-bold text-[#ba1c1c]">{op.time}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight mb-4">{op.name}</h3>
                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>{op.taskNumber}</span>
                  <span>•</span>
                  <span>Ref: {op.reference}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button onClick={() => setSelectedOp(null)} className="flex items-center gap-3 text-gray-400 hover:text-[#ba1c1c] font-black text-[10px] uppercase transition-all mb-8 bg-white px-6 py-4 rounded-xl border-2 border-gray-100 shadow-sm">
              ← Menu Principal
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-12 px-6 mt-10 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-white font-black text-5xl tracking-tighter">SENAI</span>
            <p className="text-gray-600 font-bold uppercase tracking-[0.4em] text-[10px] mt-1">MECÂNICO DE USINAGEM CONVENCIONAL</p>
            <p className="text-gray-700 text-[8px] mt-4 uppercase tracking-widest">PLANOS DE DEMONSTRAÇÕES</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
