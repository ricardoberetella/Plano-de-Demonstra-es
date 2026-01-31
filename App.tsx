import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

const Header: React.FC<{ onHome: () => void; onLogout: () => void }> = ({ onHome, onLogout }) => (
  <header className="bg-[#004B95] text-white shadow-xl sticky top-0 z-50 print:hidden">
    <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
      <div className="flex items-center gap-6 cursor-pointer" onClick={onHome}>
        <div className="bg-[#E30613] text-white px-6 py-2 font-black text-3xl italic skew-x-[-12deg] shadow-xl">
          SENAI
        </div>
        <div className="hidden md:block">
          <h1 className="text-xl font-black uppercase italic leading-none">Mecânico de Usinagem Convencional</h1>
          <p className="text-white/60 font-bold text-[10px] uppercase mt-1">Planos de Demonstrações</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button 
          onClick={onHome}
          className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg font-black text-[10px] uppercase transition-all"
        >
          Início
        </button>
        <button 
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-lg transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

const OperationCard: React.FC<{ op: OperationPlan; onClick: (op: OperationPlan) => void }> = ({ op, onClick }) => (
  <div 
    onClick={() => onClick(op)}
    className="bg-white border-2 border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-[#004B95] transition-all cursor-pointer group flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-3">
      <span className="text-[9px] uppercase font-black px-2 py-1 rounded bg-slate-100 text-slate-500">
        {op.category}
      </span>
      <span className="text-[10px] text-slate-400 font-bold uppercase">Nº {op.reference}</span>
    </div>
    
    <h3 className="text-lg font-black group-hover:text-[#004B95] transition-colors mb-4 uppercase leading-tight flex-grow">
      {op.name}
    </h3>
    
    <div className="mt-auto pt-3 border-t border-slate-50 flex justify-between items-center">
      <span className="text-[10px] font-bold text-slate-400 uppercase">{op.taskNumber}</span>
      <span className="text-[#E30613] font-black text-[10px] uppercase italic">Visualizar</span>
    </div>
  </div>
);

// ... Componente DetailView permanece o mesmo para manter a estrutura do Plano ...
const DetailView: React.FC<{ op: OperationPlan }> = ({ op }) => {
  return (
    <div className="animate-in fade-in duration-300 pb-20 max-w-5xl mx-auto space-y-6">
      <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg">
        <div className="flex border-b-2 border-black">
          <div className="w-1/4 p-6 flex items-center justify-center border-r-2 border-black bg-gray-50">
            <span className="text-[#E30613] font-black text-6xl italic skew-x-[-12deg]">SENAI</span>
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
        
        {/* Restante dos detalhes... */}
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
        <div className="p-6 bg-white">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613] mb-3">Preparação</h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium whitespace-pre-line">{op.preparation}</p>
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
    if (password.toUpperCase() === "SENAI123") {
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

  // LOGIN IGUAL AO PRINT 2
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden text-center">
          <div className="bg-[#004B95] p-10">
            <div className="bg-[#E30613] text-white px-6 py-2 font-black text-4xl italic skew-x-[-12deg] shadow-xl inline-block">
              SENAI
            </div>
            <div className="mt-8">
              <h1 className="text-white font-black text-xl uppercase italic">Mecânico de Usinagem Convencional</h1>
              <p className="text-white/70 font-bold text-xs uppercase mt-2 tracking-widest">Planos de Demonstrações</p>
            </div>
          </div>
          <form onSubmit={handleLogin} className="p-8">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-slate-100 border-2 rounded-xl p-4 text-center font-bold text-2xl outline-none transition-all ${
                loginError ? 'border-red-500' : 'border-transparent focus:border-[#004B95]'
              }`}
              placeholder="SENHA"
            />
            {loginError && <p className="text-red-600 text-[10px] font-black uppercase mt-2">Acesso Negado</p>}
            <button type="submit" className="w-full bg-[#004B95] text-white font-black py-5 rounded-xl mt-6 uppercase shadow-lg hover:bg-[#003a75] transition-all">
              Entrar no Sistema
            </button>
          </form>
          <div className="pb-6">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Série Metódica Ocupacional</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header 
        onHome={() => setSelectedOp(null)} 
        onLogout={() => {
          setIsAuthenticated(false);
          setPassword("");
          setSelectedOp(null);
        }}
      />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {!selectedOp ? (
          <div className="animate-in fade-in duration-500">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl font-black uppercase italic text-[#004B95]">
                  Planos de <span className="text-[#E30613]">Demonstração</span>
                </h1>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">
                  Série Metódica Ocupacional • SMO
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-3">
              <input 
                type="text" 
                placeholder="PESQUISAR OPERAÇÃO..." 
                className="md:col-span-2 px-5 py-3 bg-white border-2 border-slate-200 rounded-xl outline-none focus:border-[#004B95] font-bold text-sm uppercase"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select 
                onChange={(e) => setFilter(e.target.value as any)}
                className="px-5 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-sm uppercase outline-none"
              >
                <option value="Todos">Todas as Categorias</option>
                {Object.values(Category).map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {finalOps.map(op => <OperationCard key={op.id} op={op} onClick={setSelectedOp} />)}
            </div>
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedOp(null)} 
              className="flex items-center gap-2 text-[#004B95] font-black text-xs uppercase mb-6 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100"
            >
              ← Voltar ao Menu
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>

      <footer className="bg-[#004B95] text-white py-10 px-6 print:hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
           <div className="bg-white/10 p-4 rounded-xl">
              <span className="font-black text-2xl italic">SENAI</span>
           </div>
           <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 text-right">
             Material Didático • Uso Exclusivo
           </p>
        </div>
      </footer>
    </div>
  );
}
