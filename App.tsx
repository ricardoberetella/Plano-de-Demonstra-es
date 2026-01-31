import React, { useState } from 'react';

// --- COMPONENTES DE INTERFACE PADRONIZADOS ---

const Header: React.FC<{ onHome: () => void; onLogout: () => void }> = ({ onHome, onLogout }) => (
  <header className="bg-[#1e293b] border-b border-slate-700 p-4 sticky top-0 z-50">
    <div className="flex justify-between items-center max-w-4xl mx-auto">
      <div className="flex items-center gap-3" onClick={onHome}>
        <div className="bg-[#E30613] text-white px-3 py-1 font-black text-xl italic skew-x-[-12deg]">
          SENAI
        </div>
        <span className="text-white font-bold text-xs uppercase tracking-tight leading-none">
          Mecânico de <br/> Usinagem
        </span>
      </div>
      <button 
        onClick={onLogout}
        className="bg-slate-700/50 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
        </svg>
      </button>
    </div>
  </header>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Estilo de fundo idêntico ao print: Cinza Escuro Azulado
  const bgMain = "bg-[#0f172a]"; 

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen ${bgMain} flex flex-col items-center justify-center p-6 font-sans`}>
        <div className="w-full max-w-[320px] text-center">
          {/* Logo Centralizada */}
          <div className="inline-block bg-[#E30613] text-white px-6 py-2 font-black text-4xl italic skew-x-[-12deg] mb-8 shadow-2xl">
            SENAI
          </div>
          
          <h2 className="text-white text-lg font-bold mb-8 uppercase tracking-widest opacity-80">
            Login de Acesso
          </h2>

          <form 
            onSubmit={(e) => { e.preventDefault(); if(password.toUpperCase() === "SENAI123") setIsAuthenticated(true); }} 
            className="space-y-4"
          >
            <div className="relative">
              <input 
                type="password" 
                placeholder="Senha de Acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 text-white text-center py-4 px-6 rounded-full outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500 font-medium"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-full shadow-lg shadow-blue-900/20 transition-all active:scale-95 uppercase text-sm tracking-wider"
            >
              Entrar no Sistema
            </button>
          </form>

          <p className="mt-12 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
            Departamento de Metalmecânica
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgMain} text-slate-200 font-sans`}>
      <Header onHome={() => {}} onLogout={() => setIsAuthenticated(false)} />
      
      <main className="p-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-black text-white uppercase italic">
            Planos de <span className="text-blue-500">Demonstração</span>
          </h1>
          <div className="h-1 w-12 bg-blue-500 mt-1"></div>
        </div>

        {/* Busca idêntica ao padrão mobile moderno */}
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Pesquisar operação..." 
            className="w-full bg-slate-800/40 border border-slate-700 p-4 pl-12 rounded-2xl text-white outline-none focus:border-blue-500 transition-all shadow-inner"
          />
          <svg className="absolute left-4 top-4 h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Grid de Cards Otimizado para 7 polegadas */}
        <div className="grid grid-cols-1 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-2xl flex items-center justify-between active:bg-slate-700/40 transition-colors">
              <div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Operação 0{i}</span>
                <h3 className="text-white font-bold text-base uppercase leading-tight">Facear e Centrar</h3>
              </div>
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
