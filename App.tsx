import React, { useState } from 'react';

// O componente de login agora usa a senha solicitada: ianes662
// Os dados abaixo são exemplos baseados nos PDFs; você deve garantir que o array OPERATIONS 
// contenha todos os itens extraídos dos arquivos.

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedOp, setSelectedOp] = useState(null);

  // --- TELA DE LOGIN (CONFORME PRINT 2) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] overflow-hidden shadow-2xl">
          <div className="bg-[#004B95] p-10 text-center">
            <div className="bg-[#E30613] inline-block px-6 py-2 skew-x-[-15deg] mb-6 shadow-lg">
              <span className="text-white font-black text-3xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            <h2 className="text-white font-black uppercase text-lg leading-tight">MECÂNICO DE USINAGEM CONVENCIONAL</h2>
            <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">PLANOS DE DEMONSTRAÇÕES</p>
          </div>
          <form className="p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); if(password === "ianes662") setIsAuthenticated(true); }}>
            <input 
              type="password" 
              placeholder="DIGITE A SENHA" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-full py-4 px-6 text-center font-black text-slate-700 outline-none focus:ring-2 focus:ring-[#004B95]"
            />
            <button className="w-full bg-[#004B95] text-white font-black py-4 rounded-full uppercase text-sm tracking-widest shadow-lg active:scale-95 transition-all">
              Acessar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- TELA DE LISTAGEM ---
  if (!selectedOp) {
    return (
      <div className="min-h-screen bg-slate-100">
        <header className="bg-[#004B95] text-white p-6 shadow-md flex justify-between items-center">
          <div className="bg-[#E30613] px-4 py-1 skew-x-[-15deg]"><span className="italic font-black block skew-x-[15deg]">SENAI</span></div>
          <button onClick={() => setIsAuthenticated(false)} className="text-[10px] font-bold uppercase bg-red-600 px-4 py-2 rounded-lg">Sair</button>
        </header>
        <main className="p-4 grid gap-4 max-w-4xl mx-auto">
          {/* Mapeamento dos planos extraídos dos PDFs */}
          {DATA.map((op) => (
            <div key={op.id} onClick={() => setSelectedOp(op)} className="bg-white p-6 rounded-2xl shadow-sm border-2 border-slate-200 cursor-pointer active:scale-95 transition-all">
              <span className="text-[9px] font-black text-[#004B95] uppercase">{op.modulo}</span>
              <h3 className="font-black uppercase text-slate-800 text-lg">{op.name}</h3>
              <p className="text-[#E30613] font-bold text-xs mt-2 italic">Ref: {op.reference} →</p>
            </div>
          ))}
        </main>
      </div>
    );
  }

  // --- TELA DE DETALHES (ORDEM EXATA DOS PDFs) ---
  return (
    <div className="min-h-screen bg-slate-100 p-4 pb-20 font-sans">
      <button onClick={() => setSelectedOp(null)} className="mb-4 font-black text-[#004B95] uppercase flex items-center gap-2">← Voltar</button>
      
      <div className="max-w-5xl mx-auto space-y-6">
        {/* 1. Cabeçalho SENAI */}
        <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-md">
          <div className="flex border-b-2 border-black bg-slate-50">
            <div className="w-1/3 p-4 flex items-center justify-center border-r-2 border-black">
              <span className="text-[#E30613] font-black text-4xl italic skew-x-[-12deg]">SENAI</span>
            </div>
            <div className="w-2/3 p-3 text-center flex flex-col justify-center">
              <h1 className="text-xl font-black uppercase text-black">Plano de Demonstração</h1>
              <p className="text-[10px] font-bold uppercase text-slate-500 italic">Operação Nº {selectedOp.reference}</p>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[9px] font-black text-slate-400 uppercase">Nome da Operação</p>
            <h2 className="text-lg font-black uppercase text-[#004B95]">{selectedOp.name}</h2>
          </div>
        </div>

        {/* 2. Preparação (Máquinas/Ferramentas) */}
        <div className="bg-white border-2 border-black rounded-xl p-5">
          <h3 className="text-xs font-black uppercase text-[#E30613] mb-3 border-b border-slate-100 pb-1">Preparação</h3>
          <p className="text-sm font-medium whitespace-pre-line text-slate-700">{selectedOp.preparation}</p>
        </div>

        {/* 3. Motivação */}
        <div className="bg-black text-white rounded-xl p-6 shadow-xl">
           <h3 className="text-[9px] font-black uppercase text-[#E30613] mb-2 tracking-widest">Motivação</h3>
           <p className="text-xl font-black italic leading-tight">"{selectedOp.motivation}"</p>
        </div>

        {/* 4. Tabela de Passos e Pontos-Chave */}
        <div className="bg-white border-2 border-black rounded-xl overflow-hidden">
          <div className="grid grid-cols-2 bg-black text-white text-[10px] font-black uppercase p-3 text-center">
            <div>Passos da Operação</div>
            <div className="border-l border-white/30">Pontos-Chave</div>
          </div>
          <div className="divide-y-2 divide-black">
            {selectedOp.steps.map((step, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="p-4 border-r-2 border-black flex gap-3">
                  <span className="font-black text-slate-300">{i + 1}</span>
                  <p className="text-[11px] font-bold uppercase leading-tight">{step.task}</p>
                </div>
                <div className="p-4 bg-slate-50 space-y-2">
                  {step.keyPoints.map((kp, kpi) => (
                    <p key={kpi} className="text-[10px] font-bold text-slate-800 uppercase leading-tight">• {kp}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Perguntas de Verificação (Relacionar no mínimo 4) */}
        <div className="bg-slate-200 border-2 border-black rounded-xl p-6">
          <h3 className="text-xs font-black uppercase text-[#004B95] mb-4">Verificação (Perguntas)</h3>
          <div className="grid gap-3">
            {selectedOp.questions.map((q, i) => (
              <div key={i} className="bg-white p-3 rounded border-l-4 border-[#E30613] font-bold text-[11px] uppercase">
                {i + 1}. {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// OS DADOS ABAIXO DEVEM SER ALIMENTADOS COM TODO O CONTEÚDO DOS DOIS PDFs
const DATA = [
  {
    id: 1,
    modulo: "Torneamento - Vol 5",
    reference: "177",
    name: "Abrir Rosca Interna com Ferramenta no Torno",
    preparation: "• Torno mecânico\n• Ferramenta de roscar interna\n• Calibrador de rosca\n• Óleo de corte",
    motivation: "A execução correta da rosca interna garante a montagem precisa de componentes mecânicos e a resistência da união parafusada.",
    steps: [
      { task: "Preparar o torno e a ferramenta", keyPoints: ["Verificar o passo da rosca", "Alinhar a ferramenta a 90º"] },
      { task: "Ajustar a rotação e o avanço", keyPoints: ["O eixo árvore deve estar parado durante o ajuste"] }
    ],
    questions: [
      "Que instrumento utilizamos para verificar o passo?",
      "Por que devemos utilizar óleo de corte?",
      "Como se faz o controle da profundidade?",
      "Qual a importância de inverter a rotação ao final da rosca?"
    ]
  }
  // ... inserir aqui todos os outros planos dos volumes 5 e 6
];
