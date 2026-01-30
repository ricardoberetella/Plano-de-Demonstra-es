import React, { useState, useEffect, useMemo } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data'; // Corrigido de 'constants' para 'data'
// Se você ainda não criou os componentes abaixo, comente as linhas para o deploy passar
// import OperationCard from './components/OperationCard';
// import StudentChecklistModal from './components/StudentChecklistModal';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const MASTER_PASSWORD = 'senai123'; 

  const [operations] = useState<OperationPlan[]>(OPERATIONS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOperations = useMemo(() => {
    return operations.filter(op => 
      op.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.reference.includes(searchTerm)
    );
  }, [searchTerm, operations]);

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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleLogin} className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#E30613]">
          <h1 className="mb-6 text-2xl font-black text-center text-gray-800">SISTEMA SENAI</h1>
          <input 
            type="password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4 outline-none focus:border-[#E30613]"
            placeholder="Digite a senha mestra"
          />
          <button type="submit" className="w-full bg-[#E30613] text-white p-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
            ACESSAR PLANOS
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-6 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-black text-[#E30613]">GUIA DE APRENDIZAGEM - USINAGEM</h1>
          <input 
            type="text"
            placeholder="Buscar operação ou número..."
            className="p-2 border rounded-md w-full md:w-64"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOperations.map(op => (
            <div key={op.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{op.category} - Op. {op.reference}</span>
              <h3 className="text-lg font-bold mt-1 text-gray-900">{op.name}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{op.motivation}</p>
              <div className="mt-4 pt-4 border-t flex justify-between items-center text-xs font-semibold text-gray-500">
                <span>{op.taskNumber}</span>
                <span>{op.time}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
