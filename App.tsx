
import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

const Header: React.FC<{ onHome: () => void; onLogout: () => void }> = ({ onHome, onLogout }) => (
  <header className="bg-[#ba1c1c] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#8e1515] print:hidden">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-6 cursor-pointer" onClick={onHome}>
        <div className="bg-white p-2 rounded transform -rotate-1 shadow-md">
          <span className="text-[#ba1c1c] font-black text-3xl px-1 tracking-tighter">SENAI</span>
        </div>
        <h1 className="text-2xl font-bold leading-none uppercase tracking-tighter hidden md:block">Guia de Aprendizagem Profissional</h1>
      </div>
      <div className="flex gap-3">
        <button 
          onClick={onHome}
          className="text-[10px] bg-white text-[#ba1c1c] hover:bg-gray-100 transition-all px-4 md:px-8 py-2.5 rounded-lg font-black uppercase shadow-md border-b-2 border-gray-300"
        >
          Menu Principal
        </button>
        <button 
          onClick={onLogout}
          className="text-[10px] bg-black text-white hover:bg-gray-800 transition-all px-4 py-2.5 rounded-lg font-black uppercase shadow-md border-b-2 border-gray-700"
        >
          Sair
        </button>
      </div>
    </div>
  </header>
);

const OperationCard: React.FC<{ op: OperationPlan; onClick: (op: OperationPlan) => void }> = ({ op, onClick }) => (
  <div 
    onClick={() => onClick(op)}
    className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl hover:border-[#ba1c1c] transition-all cursor-pointer group flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-3">
      <span className={`text-[9px] uppercase font-black px-2.5 py-1 rounded border ${
        op.category === Category.Torneamento ? 'bg-blue-50 text-blue-700 border-blue-200' : 
        op.category === Category.Fresamento ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
        'bg-orange-50 text-orange-700 border-orange-200'
      }`}>
        {op.category}
      </span>
      <span className="text-[10px] text-gray-400 font-bold uppercase">Op. {op.reference}</span>
    </div>
    
    <h3 className="text-lg font-black group-hover:text-[#ba1c1c] transition-colors mb-4 uppercase leading-tight flex-grow">
      {op.name}
    </h3>
    
    <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">{op.taskNumber}</span>
      <span className="text-[#ba1c1c] font-black text-[10px] uppercase flex items-center gap-1">
        Abrir Plano 
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </div>
  </div>
);

const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => {
  return (
    <div className="animate-in fade-in duration-300 pb-20 max-w-5xl mx-auto space-y-6">
      <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg">
        <div className="flex border-b-2 border-black">
          <div className="w-1/4 p-6 flex items-center justify-center border-r-2 border-black bg-gray-50">
            <span className="text-[#ba1c1c] font-black text-6xl tracking-tighter">SENAI</span>
          </div>
          <div className="w-2/4 p-4 text-center border-r-2 border-black flex flex-col justify-center gap-1">
            <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest leading-none">Fundamentos da Usinagem</p>
            <h1 className="text-3xl font-black uppercase text-black leading-none">Plano de Demonstração</h1>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest leading-none">Op. Nº</span>
            <span className="text-5xl font-black text-black">{op.reference}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 border-b-2 border-black">
          <div className="col-span-2 p-4 border-r-2 border-black">
            <p className="text-[9px] font-bold uppercase text-gray-400 tracking-widest mb-1">Operação</p>
            <h2 className="text-xl font-black uppercase text-black">{op.name}</h2>
          </div>
          <div className="p-4">
            <p className="text-[9px] font-bold uppercase text-gray-400 tracking-widest mb-1">Referência</p>
            <h2 className="text-xl font-black uppercase text-black">{op.taskNumber}</h2>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="p-4 border-r-2 border-black">
            <p className="text-[9px] font-bold uppercase text-gray-400 tracking-widest mb-1">Volume / Pág</p>
            <p className="text-lg font-bold text-black">{op.volumePage}</p>
          </div>
          <div className="p-4 border-r-2 border-black">
            <p className="text-[9px] font-bold uppercase text-gray-400 tracking-widest mb-1">Peça</p>
            <p className="text-lg font-bold text-black uppercase">{op.pieceName}</p>
          </div>
          <div className="p-4">
            <p className="text-[9px] font-bold uppercase text-gray-400 tracking-widest mb-1">Tempo</p>
            <p className="text-lg font-bold text-black">{op.time}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-black rounded-lg p-6 shadow-sm">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ba1c1c] mb-3">Preparação</h3>
        <p className="text-base text-gray-700 leading-relaxed font-medium whitespace-pre-line">{op.preparation}</p>
      </div>

      <div className="bg-gray-50 border-2 border-black rounded-lg p-6 relative overflow-hidden group">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ba1c1c] mb-3 italic">Motivação</h3>
        <p className="text-xl font-black text-black leading-tight uppercase italic">"{op.motivation}"</p>
      </div>

      <div className="bg-white border-2 border-black rounded-lg p-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ba1c1c] mb-4">Apresentação</h3>
        <ul className="space-y-2 text-sm font-bold text-gray-600 uppercase">
          <li>a) Síncrese: {op.presentation.sincrese}</li>
          <li>b) Análise: {op.presentation.analise}</li>
          <li>c) Síntese: {op.presentation.sintese}</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-md">
        <div className="grid grid-cols-2 bg-black text-white text-center py-3 text-[10px] font-black uppercase tracking-widest">
          <div>Passos da Operação</div>
          <div className="border-l border-white">Pontos-Chave</div>
        </div>
        <div className="divide-y-2 divide-black">
          {op.steps.map((step, i) => (
            <div key={i} className="grid grid-cols-2">
              <div className="p-5 border-r-2 border-black bg-white flex gap-4">
                <span className="text-2xl font-black text-gray-200">{i + 1}</span>
                <p className="text-base font-black text-black uppercase leading-tight">{step.task}</p>
              </div>
              <div className="p-5 bg-blue-50/30">
                <ul className="space-y-3">
                  {step.keyPoints.map((point, pi) => (
                    <li key={pi} className="flex gap-2 text-sm font-bold text-blue-900 leading-tight uppercase">
                      <span className="text-[#ba1c1c]">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-black rounded-lg p-6 col-span-1">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ba1c1c] mb-4">Aplicação</h3>
          <p className="text-sm font-bold text-gray-700 leading-relaxed uppercase">{op.application}</p>
        </div>
        <div className="bg-[#ba1c1c] text-white rounded-lg p-6 col-span-2">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-200 mb-4">Verificação</h3>
          <ul className="space-y-4">
            {op.verification.map((v, i) => (
              <li key={i} className="flex gap-3 items-start border-b border-red-800 pb-2 last:border-0">
                <span className="text-red-300 font-black">•</span>
                <span className="text-sm font-black leading-tight uppercase">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<Category | "Todos">("Todos");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === "ma662") {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const filteredOps = OPERATIONS
    .filter(op => {
      const term = searchTerm.toLowerCase();
      return op.name.toLowerCase().includes(term) || 
             op.taskNumber.toLowerCase().includes(term) ||
             op.reference.includes(term);
    })
    .sort((a, b) => parseInt(a.reference) - parseInt(b.reference));

  const finalOps = filter === "Todos" ? filteredOps : filteredOps.filter(o => o.category === filter);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ba1c1c] p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 transform transition-all hover:scale-[1.01]">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-[#ba1c1c] p-4 rounded-2xl mb-6 shadow-xl transform -rotate-2">
              <span className="text-white font-black text-5xl tracking-tighter">SENAI</span>
            </div>
            <h2 className="text-2xl font-black text-black uppercase tracking-tighter text-center">
              Acesso Restrito
            </h2>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-2">
              Guia de Aprendizagem Profissional
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 px-1">
                Senha de Acesso
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:bg-white outline-none transition-all text-xl font-bold ${
                  loginError ? 'border-red-500 text-red-600' : 'border-gray-100 focus:border-[#ba1c1c]'
                }`}
              />
              {loginError && (
                <p className="text-red-600 text-[10px] font-black uppercase mt-2 px-1">
                  Senha incorreta. Tente novamente.
                </p>
              )}
            </div>
            <button 
              type="submit"
              className="w-full bg-[#ba1c1c] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[#8e1515] transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Entrar no Sistema
            </button>
          </form>

          <p className="mt-10 text-center text-[9px] text-gray-300 font-bold uppercase tracking-widest leading-relaxed">
            Somente Pessoal Autorizado • SMO v5 & v6
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd] text-gray-900 font-sans selection:bg-[#ba1c1c] selection:text-white">
      <Header 
        onHome={() => setSelectedOp(null)} 
        onLogout={() => {
          setIsAuthenticated(false);
          setPassword("");
          setSelectedOp(null);
        }}
      />
      
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10 w-full">
        {!selectedOp ? (
          <div className="animate-in fade-in duration-500">
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">
                Planos de <span className="text-[#ba1c1c]">Demonstração</span>
              </h1>
              <p className="text-lg font-bold uppercase tracking-[0.4em] text-gray-400 mt-4">
                Série Metódica Ocupacional • Operações 01 a 36
              </p>
            </div>

            <div className="mb-10 flex flex-col lg:flex-row gap-3 bg-white p-3 rounded-2xl border-2 border-gray-100 shadow-xl">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Pesquisar por operação ou tarefa..." 
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#ba1c1c] outline-none transition-all text-lg font-bold uppercase placeholder:text-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-hide">
                {["Todos", ...Object.values(Category)].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`whitespace-nowrap px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      filter === cat ? 'bg-[#ba1c1c] text-white shadow-lg' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {finalOps.map(op => <OperationCard key={op.id} op={op} onClick={setSelectedOp} />)}
            </div>
            
            {finalOps.length === 0 && (
              <div className="text-center py-32 border-2 border-dashed border-gray-200 rounded-3xl">
                <p className="text-3xl font-black text-gray-300 uppercase tracking-tighter">Operação não localizada</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedOp(null)} 
              className="group flex items-center gap-3 text-gray-400 hover:text-[#ba1c1c] font-black text-[10px] uppercase transition-all mb-8 bg-white px-6 py-4 rounded-xl border-2 border-gray-100 shadow-sm"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" /></svg>
              Menu Principal
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-12 px-6 mt-10 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black text-5xl tracking-tighter">SENAI</span>
            <p className="text-gray-600 font-bold uppercase tracking-[0.4em] text-[10px] mt-1">Série Metódica Ocupacional</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
              Volumes 5 & 6 • Fundamentos da Usinagem
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
