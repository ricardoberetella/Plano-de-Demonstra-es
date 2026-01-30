import React, { useState, useMemo } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOp, setSelectedOp] = useState<OperationPlan | null>(null);
  
  const MASTER_PASSWORD = 'senai123'; 

  const filteredOperations = useMemo(() => {
    return OPERATIONS.filter(op => 
      op.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.reference.includes(searchTerm)
    );
  }, [searchTerm]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === MASTER_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border-t-8 border-[#E30613]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-gray-800 tracking-tighter">SENAI</h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-2">Plano de Demonstração de Manuseio</p>
          </div>
          <input 
            type="password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full p-4 border-2 rounded-xl mb-4 outline-none focus:border-[#E30613] transition-all"
            placeholder="Senha de Acesso"
          />
          <button type="submit" className="w-full bg-[#E30613] text-white p-4 rounded-xl font-black hover:bg-red-700 transition-colors shadow-lg uppercase text-sm">
            Entrar no Sistema
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#E30613] text-white font-black px-3 py-1 rounded text-xl italic">SENAI</div>
            <h1 className="text-lg font-bold text-gray-800 hidden sm:block">Guia de Aprendizagem</h1>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input 
              type="text"
              placeholder="Pesquisar operação (ex: Facear)..."
              className="p-3 border rounded-xl flex-grow md:w-80 outline-none focus:ring-2 focus:ring-red-100 text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setIsAuthenticated(false)} className="text-gray-400 hover:text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOperations.map((op) => (
            <div 
              key={op.id} 
              onClick={() => setSelectedOp(op)}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#E30613] hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-red-50 text-[#E30613] text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">
                    {op.category}
                  </span>
                  <span className="text-gray-400 font-bold text-xs bg-gray-50 px-2 py-1 rounded">Op. {op.reference}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 leading-tight mb-3 group-hover:text-[#E30613] transition-colors">
                  {op.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed italic">
                  "{op.motivation}"
                </p>
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 border-t pt-4">
                   <div className="flex flex-col">
                     <span className="text-gray-300 uppercase">Tempo Est.</span>
                     <span className="text-gray-700">{op.time}</span>
                   </div>
                   <div className="flex flex-col text-right">
                     <span className="text-gray-300 uppercase">Pág. Guia</span>
                     <span className="text-gray-700">{op.volumePage}</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DE DETALHES - Igual ao da URL que você gosta */}
      {selectedOp && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="bg-[#E30613] p-6 text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black opacity-80 uppercase tracking-[0.2em]">Plano de Demonstração - {selectedOp.reference}</p>
                <h2 className="text-2xl font-black">{selectedOp.name}</h2>
              </div>
              <button onClick={() => setSelectedOp(null)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="overflow-y-auto p-8 space-y-8">
              <section>
                <h4 className="text-[#E30613] font-black uppercase text-xs tracking-widest mb-3">Preparação Necessária</h4>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-xl border-l-4 border-gray-200 leading-relaxed font-medium">
                  {selectedOp.preparation}
                </p>
              </section>

              <section>
                <h4 className="text-[#E30613] font-black uppercase text-xs tracking-widest mb-3">Etapas da Operação</h4>
                <div className="space-y-4">
                  {selectedOp.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border rounded-xl hover:bg-red-50/30 transition-colors">
                      <div className="bg-gray-100 text-gray-500 font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">{idx + 1}</div>
                      <div>
                        <p className="font-bold text-gray-800">{step.task}</p>
                        {step.keyPoints.map((kp, kidx) => (
                          <p key={kidx} className="text-sm text-red-600 mt-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> {kp}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
