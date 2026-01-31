import React, { useState, useEffect } from 'react';
import { ClassRoom, Student, Operation, DemonstrationStatus } from './types';
import { supabase } from './lib/supabaseClient';
// Importaremos os dados dos PDFs de um arquivo separado para não travar o editor
import { ALL_36_OPERATIONS } from './data_planos'; 

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedOp, setSelectedOp] = useState<Operation | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  
  // Senha que você definiu anteriormente
  const MASTER_PASSWORD = 'ianes662'; 

  // --- LÓGICA DE LOGIN ESTILO SENAI ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] overflow-hidden shadow-2xl">
          <div className="bg-[#004B95] p-10 text-center">
            <div className="bg-[#E30613] inline-block px-6 py-2 skew-x-[-15deg] mb-6 shadow-lg">
              <span className="text-white font-black text-3xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            <h2 className="text-white font-black uppercase text-lg leading-tight">Mecânico de Usinagem</h2>
            <p className="text-white/60 font-bold uppercase text-[10px] mt-2 tracking-widest">Gestão de Demonstrações</p>
          </div>
          <form className="p-8 space-y-4" onSubmit={(e) => {
            e.preventDefault();
            if(passwordInput === MASTER_PASSWORD) setIsAuthenticated(true);
            else alert("Senha Incorreta");
          }}>
            <input 
              type="password" 
              placeholder="SENHA DE ACESSO" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-full py-4 px-6 text-center font-black text-slate-700 outline-none focus:ring-2 focus:ring-[#004B95]"
            />
            <button className="w-full bg-[#004B95] text-white font-black py-4 rounded-full uppercase text-sm hover:bg-[#003a75] transition-all">
              Entrar no Sistema
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header Original Restaurado */}
      <header className="bg-[#004B95] text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#E30613] px-3 py-1 font-black italic skew-x-[-10deg]">SENAI</div>
            <span className="font-bold uppercase text-xs hidden md:block">Plano de Demonstrações (36 Operações)</span>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-[10px] bg-red-600 px-3 py-1 rounded font-black uppercase">Sair</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        {!selectedOp ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_36_OPERATIONS.map(op => (
              <div 
                key={op.id} 
                onClick={() => setSelectedOp(op)}
                className="bg-white p-5 rounded-2xl border-2 border-slate-200 hover:border-[#E30613] cursor-pointer transition-all group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase">Ref: {op.reference}</span>
                  <span className="bg-slate-100 text-[9px] px-2 py-1 rounded font-bold uppercase">{op.category}</span>
                </div>
                <h3 className="font-black text-slate-800 uppercase group-hover:text-[#004B95] transition-colors">{op.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <button onClick={() => setSelectedOp(null)} className="bg-white border px-4 py-2 rounded-lg font-black text-[#004B95] text-xs uppercase shadow-sm">
              ← Voltar para a lista
            </button>

            {/* AQUI ENTRA A ESTRUTURA COMPLETA QUE VOCÊ QUER (IGUAL AO PDF) */}
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
              
              {/* 1. CABEÇALHO TÉCNICO */}
              <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-md">
                <div className="flex border-b-2 border-black bg-slate-50">
                  <div className="w-1/3 p-4 flex items-center justify-center border-r-2 border-black">
                    <span className="text-[#E30613] font-black text-4xl italic skew-x-[-12deg]">SENAI</span>
                  </div>
                  <div className="w-2/3 p-4 text-center">
                    <h1 className="text-xl font-black uppercase">Plano de Demonstração</h1>
                    <p className="text-[10px] font-bold text-slate-500 italic uppercase">Referência: {selectedOp.reference}</p>
                  </div>
                </div>
                <div className="p-4"><h2 className="text-lg font-black uppercase text-[#004B95]">{selectedOp.name}</h2></div>
              </div>

              {/* 2. PREPARAÇÃO */}
              <div className="bg-white border-2 border-black rounded-xl p-4">
                <h3 className="text-[10px] font-black uppercase text-[#E30613] border-b mb-2">Preparação (Máquinas/Ferramentas)</h3>
                <div className="text-xs font-bold text-slate-700 whitespace-pre-line leading-relaxed">{selectedOp.preparation}</div>
              </div>

              {/* 3. MOTIVAÇÃO */}
              <div className="bg-black text-white p-5 rounded-xl italic">
                <span className="text-[#E30613] font-black text-[9px] uppercase block mb-1">Motivação</span>
                <p className="text-lg font-black">"{selectedOp.motivation}"</p>
              </div>

              {/* 4. TABELA DE PASSOS - O CORAÇÃO DO PLANO */}
              <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-2 bg-black text-white text-[9px] font-black uppercase p-2 text-center">
                  <div>Passos da Operação</div>
                  <div className="border-l border-white/20">Pontos-Chave</div>
                </div>
                {selectedOp.steps.map((step, idx) => (
                  <div key={idx} className="grid grid-cols-2 border-t-2 border-black">
                    <div className="p-3 border-r-2 border-black flex gap-2">
                      <span className="text-slate-300 font-black">{idx + 1}</span>
                      <p className="text-[10px] font-black uppercase">{step.task}</p>
                    </div>
                    <div className="p-3 bg-slate-50 space-y-1">
                      {step.keyPoints.map((kp, kidx) => (
                        <p key={kidx} className="text-[9px] font-bold uppercase text-slate-600">• {kp}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 5. PERGUNTAS DE VERIFICAÇÃO */}
              <div className="bg-[#f1f5f9] border-2 border-black rounded-xl p-5">
                <h3 className="text-[10px] font-black uppercase text-[#004B95] mb-4">Perguntas de Verificação</h3>
                <div className="grid gap-2">
                  {selectedOp.questions?.map((q, qidx) => (
                    <div key={qidx} className="bg-white p-3 rounded border-l-4 border-[#E30613] text-[10px] font-black uppercase">
                      {qidx + 1}. {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. CHECKLIST DE ALUNOS (SISTEMA ORIGINAL) */}
              <div className="bg-white border-2 border-blue-800 rounded-xl p-5 shadow-xl">
                 <h3 className="text-xs font-black uppercase text-blue-800 mb-4">Controle de Execução - Alunos</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Aqui entra a lógica de mapear os alunos e marcar como "Concluído" */}
                    <p className="text-[10px] italic text-slate-400">Selecione a turma para carregar os alunos...</p>
                 </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
