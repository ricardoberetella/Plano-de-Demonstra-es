import React, { useState, useMemo } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data'; // Importação correta conforme seu arquivo data.ts

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const MASTER_PASSWORD = 'senai123'; 

  // Filtro de busca
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

  // TELA DE LOGIN
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border-t-8 border-[#E30613]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-gray-800">SENAI</h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">Gestão de Demonstrações</p>
          </div>
          <input 
            type="password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full p-4 border-2 rounded-xl mb-4 outline-none focus:border-[#E30613] transition-all"
            placeholder="Senha Mestra"
          />
          <button type="submit" className="w-full bg-[#E30613] text-white p-4 rounded-xl font-black hover:bg-red-700 transition-colors shadow-lg">
            ACESSAR SISTEMA
          </button>
        </form>
      </div>
    );
  }

  // TELA PRINCIPAL
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-black text-[#E30613] tracking-tighter">GUIA DE APRENDIZAGEM</h1>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="text"
              placeholder="Buscar operação..."
              className="p-2 border rounded-lg flex-grow md:w-64 outline-none focus:ring-2 focus:ring-red-200"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setIsAuthenticated(false)} className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-red-600">Sair</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOperations.map((op) => (
            <div key={op.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                    {op.category}
                  </span>
                  <span className="text-gray-400 font-bold text-xs">Op. {op.reference}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{op.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4">{op.motivation}</p>
                
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 pt-4 border-t">
                  <div className="flex flex-col">
                    <span className="uppercase text-[9px]">Tarefa</span>
                    <span className="text-gray-700">{op.taskNumber}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[9px]">Tempo</span>
                    <span className="text-gray-700">{op.time}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[9px]">Página</span>
                    <span className="text-gray-700">{op.volumePage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
