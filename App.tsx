import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

const Header: React.FC<{ onHome: () => void; onLogout: () => void }> = ({ onHome, onLogout }) => (
  <header className="bg-[#ba1c1c] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#8e1515] print:hidden">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4 cursor-pointer" onClick={onHome}>
        <div className="bg-white p-1.5 rounded transform -rotate-1 shadow-md">
          <span className="text-[#ba1c1c] font-black text-2xl px-1 tracking-tighter">SENAI</span>
        </div>
        <div>
          <h1 className="text-sm md:text-xl font-black leading-tight uppercase tracking-tighter">
            Mecânico de Usinagem Convencional
          </h1>
          <p className="text-[10px] md:text-xs font-bold opacity-90 uppercase tracking-widest">
            Planos de Demonstrações
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={onLogout}
          className="text-[9px] bg-black/20 hover:bg-black/40 transition-all px-3 py-2 rounded font-bold uppercase border border-white/20"
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') { // Senha padrão exemplo
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
              Mecânico de Usinagem Convencional
            </h2>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              Planos de Demonstrações
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-1 ml-1">Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#ba1c1c] outline-none transition-all font-bold text-center text-xl tracking-widest"
                placeholder="••••"
              />
            </div>
            <button className="w-full bg-[#ba1c1c] hover:bg-[#8e1515] text-white font-black py-4 rounded-xl shadow-lg shadow-red-200 transition-all uppercase tracking-widest text-sm">
              Senha
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ... resto do componente (DetailView e Menu) mantendo a lógica de tablet
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onHome={() => setSelectedOp(null)} onLogout={() => setIsAuthenticated(false)} />
      
      <main className="flex-grow max-w-7xl mx-auto w-full p-4 md:p-6">
        {!selectedOp ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Aqui vai o mapeamento das OPERAÇÕES que já existe no seu arquivo original */}
            {OPERATIONS.map(op => (
              <div 
                key={op.id}
                onClick={() => setSelectedOp(op)}
                className="bg-white p-5 rounded-xl border-2 border-gray-100 shadow-sm hover:border-[#ba1c1c] cursor-pointer transition-all active:scale-95"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">{op.category}</span>
                  <span className="text-[10px] font-bold text-[#ba1c1c]">{op.time}</span>
                </div>
                <h3 className="font-bold text-gray-800 leading-tight mb-2">{op.name}</h3>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                  <span>{op.taskNumber}</span>
                  <span>•</span>
                  <span>Ref: {op.reference}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedOp(null)} 
              className="group flex items-center gap-3 text-gray-500 hover:text-[#ba1c1c] font-black text-[10px] uppercase transition-all mb-6 bg-white px-5 py-3 rounded-lg border-2 border-gray-100 shadow-sm active:bg-gray-50"
            >
              ← Voltar ao Menu
            </button>
            <DetailView op={selectedOp} />
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-8 px-6 mt-10 print:hidden text-center">
        <span className="text-white font-black text-3xl tracking-tighter">SENAI</span>
        <p className="text-gray-600 font-bold uppercase tracking-[0.2em] text-[8px] mt-1">
          Mecânico de Usinagem Convencional
        </p>
      </footer>
    </div>
  );
};

// Mantenha o DetailView conforme o original, apenas ajustando paddings para o tablet se necessário.
