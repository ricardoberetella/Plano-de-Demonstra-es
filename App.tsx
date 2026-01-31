import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';
import DetailView from './components/DetailView';

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
          className="text-[10px] bg-black text-white hover:bg-gray-900 transition-all px-4 md:px-6 py-2.5 rounded-lg font-black uppercase shadow-md"
        >
          Sair
        </button>
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border-t-8 border-[#ba1c1c]">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#ba1c1c] p-3 rounded-xl mb-6 shadow-lg transform -rotate-2">
              <span className="text-white font-black text-4xl tracking-tighter px-2">SENAI</span>
            </div>
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Acesso ao Guia</h2>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2 text-center">Planos de Demonstrações</p>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            if (password === 'ianes662') setIsAuthenticated(true);
            else alert('Senha incorreta');
          }} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Senha do Instrutor</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#ba1c1c] focus:bg-white outline-none transition-all font-bold text-center text-xl tracking-widest"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ba1c1c] text-white font-black py-5 rounded-2xl hover:bg-[#a11818] transition-all shadow-lg shadow-red-100 uppercase tracking-widest text-sm active:scale-95"
            >
              Entrar no Sistema
            </button>
          </form>
          
          <p className="text-center mt-10 text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em]">
            Série Metódica Ocupacional
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onHome={() => setSelectedOp(null)} onLogout={() => setIsAuthenticated(false)} />
      
      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        {!selectedOp ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPERATIONS.map((op) => (
              <div 
                key={op.id}
                onClick={() => setSelectedOp(op)}
                className="bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 cursor-pointer hover:border-[#ba1c1c] group transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{op.category}</span>
                  <span className="bg-gray-50 text-gray-400 group-hover:bg-[#ba1c1c] group-hover:text-white p-2 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-lg font-black text-gray-800 uppercase leading-tight group-hover:text-[#ba1c1c] transition-colors">
                  {op.title}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedOp(null)} 
              className="group flex items-center gap-3 text-gray-400 hover:text-[#ba1c1c] font-black text-[10px] uppercase transition-all mb-8 bg-white px-6 py-4 rounded-xl border-2 border-gray-100 shadow-sm"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
              </svg>
              Menu Principal
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-12 px-6 mt-10 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black text-5xl tracking-tighter italic">SENAI</span>
            <p className="text-gray-600 font-bold uppercase tracking-[0.4em] text-[10px] mt-1">Série Metódica Ocupacional</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">© 2025 SENAI-SP • SMO V5 & V6</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
