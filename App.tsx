import React, { useState } from 'react';
import { Category, OperationPlan } from './types';
import { OPERATIONS } from './data';

// Componente de Header original
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

  // --- TELA DE LOGIN CORRIGIDA PARA TABLET 7" ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#ba1c1c] flex items-center justify-center p-4">
        <div className="w-full max-w-[420px] bg-white rounded-[35px] p-10 flex flex-col items-center shadow-2xl">
          
          {/* Logo SENAI - Caixa Vermelha */}
          <div className="bg-[#ba1c1c] rounded-2xl px-10 py-4 mb-8 shadow-lg">
            <span className="text-white font-black text-5xl italic tracking-tighter">SENAI</span>
          </div>

          {/* Hierarquia de Textos Solicitada */}
          <div className="text-center mb-10">
            <h1 className="text-[#2D2D2D] font-black text-xl leading-tight uppercase">
              MECÂNICO DE USINAGEM CONVENCIONAL
            </h1>
            <h2 className="text-[#2D2D2D] font-bold text-lg leading-tight uppercase mt-1">
              PLANOS DE DEMONSTRAÇÕES
            </h2>
          </div>

          {/* Formulário de Acesso */}
          <form 
            className="w-full space-y-5" 
            onSubmit={(e) => {
              e.preventDefault();
              if(password === 'ianes662') setIsAuthenticated(true);
              else alert("Senha Incorreta");
            }}
          >
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 ml-4 uppercase tracking-widest">Senha de Acesso</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F5F5F5] border-none rounded-2xl py-5 px-6 text-center font-bold text-gray-700 text-xl outline-none focus:ring-2 focus:ring-[#ba1c1c]"
              />
            </div>

            <button className="w-full bg-[#ba1c1c] text-white font-black py-5 rounded-2xl uppercase text-lg hover:opacity-95 transition-all shadow-xl active:scale-95">
              ENTRAR NO SISTEMA
            </button>
          </form>
          
          <p className="mt-10 text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] text-center">
            SOMENTE PESSOAL AUTORIZADO • SMO V5 & V6
          </p>
        </div>
      </div>
    );
  }

  // --- RESTANTE DO SEU CÓDIGO ORIGINAL (LOGICA DE NAVEGAÇÃO) ---
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onHome={() => setSelectedOp(null)} onLogout={() => setIsAuthenticated(false)} />
      
      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        {!selectedOp ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aqui você deve manter o seu mapeamento original de OPERATIONS */}
            {OPERATIONS.map((op) => (
              <div 
                key={op.id}
                onClick={() => setSelectedOp(op)}
                className="bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 cursor-pointer hover:border-[#ba1c1c] transition-all"
              >
                <h3 className="font-black text-gray-800 uppercase">{op.title}</h3>
                <p className="text-xs text-gray-500 mt-2 font-bold uppercase">{op.category}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedOp(null)} 
              className="mb-6 flex items-center gap-2 font-black text-xs uppercase text-gray-400 hover:text-[#ba1c1c]"
            >
              ← Voltar ao Menu
            </button>
            {/* Componente de visualização do plano (ajuste para o seu componente DetailView se existir) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-gray-100">
               <h2 className="text-3xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">{selectedOp.title}</h2>
               {/* Conteúdo do Plano aqui */}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-12 px-6 mt-10 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black text-5xl tracking-tighter italic">SENAI</span>
            <p className="text-gray-600 font-bold uppercase tracking-[0.4em] text-[10px] mt-1">Série Metódica Ocupacional</p>
          </div>
          <div className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">
            © 2025 SENAI-SP • SMO V5 & V6
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
