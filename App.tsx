import React, { useState, useEffect, useMemo } from 'react';
import { ClassRoom, Student, Operation, DemonstrationStatus } from './types';
import { INITIAL_CLASSES, INITIAL_OPERATIONS } from './constants';
import { supabase } from './lib/supabaseClient';
import OperationCard from './components/OperationCard';
import StudentChecklistModal from './components/StudentChecklistModal';
import GeneralSummaryModal from './components/GeneralSummaryModal';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const MASTER_PASSWORD = 'ianes662'; 

  const [classes] = useState<ClassRoom[]>(INITIAL_CLASSES);
  const [activeClassId, setActiveClassId] = useState<string>(INITIAL_CLASSES[0].id);
  const [operations] = useState<Operation[]>(INITIAL_OPERATIONS);
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [selectedOp, setSelectedOp] = useState<Operation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');

  const fetchStudents = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from('students').select('*');
    if (error) console.error("Erro Supabase:", error.message);
    else if (data) setStudents(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const activeClass = useMemo(() => 
    classes.find(c => c.id === activeClassId), 
    [activeClassId, classes]
  );

  const classStudents = useMemo(() => 
    students.filter(s => s.class_id === activeClassId),
    [students, activeClassId]
  );

  // --- ALTERAÇÃO SOLICITADA: TELA DE LOGIN PARA TABLET 7" ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#B21F1F] flex items-center justify-center p-4">
        {/* Container Central Branco Arredondado */}
        <div className="w-full max-w-[400px] bg-white rounded-[30px] p-8 flex flex-col items-center shadow-2xl">
          
          {/* Logo SENAI - Caixa Vermelha Arredondada */}
          <div className="bg-[#B21F1F] rounded-2xl px-8 py-3 mb-8 shadow-sm">
            <span className="text-white font-black text-4xl italic tracking-tighter">SENAI</span>
          </div>

          {/* Textos conforme solicitado */}
          <div className="text-center mb-8">
            <h1 className="text-[#333] font-black text-lg leading-tight uppercase">
              MECÂNICO DE USINAGEM CONVENCIONAL
            </h1>
            <h2 className="text-[#333] font-bold text-md leading-tight uppercase">
              PLANOS DE DEMONSTRAÇÕES
            </h2>
          </div>

          {/* Campos de Entrada */}
          <form 
            className="w-full space-y-4" 
            onSubmit={(e) => {
              e.preventDefault();
              if(passwordInput === MASTER_PASSWORD) setIsAuthenticated(true);
              else alert("Senha Incorreta");
            }}
          >
            <div className="text-left">
              <label className="text-[10px] font-bold text-slate-400 ml-2 uppercase">Senha de Acesso</label>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-[#F2F2F2] border-none rounded-xl py-4 px-6 text-center font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#B21F1F]"
              />
            </div>

            <button className="w-full bg-[#B21F1F] text-white font-black py-4 rounded-xl uppercase text-lg hover:opacity-90 transition-all shadow-md">
              ENTRAR NO SISTEMA
            </button>
          </form>
          
          <p className="mt-8 text-[9px] font-bold text-slate-300 uppercase tracking-widest text-center">
            SOMENTE PESSOAL AUTORIZADO • SMO V5 & V6
          </p>
        </div>
      </div>
    );
  }

  // --- LÓGICA E RESTANTE DO CÓDIGO (CONGELADO/NÃO MEXIDO) ---
  const handleUpdateStatus = async (studentId: string, operationId: string) => {
    const student = students.find(s => s.id === studentId);
    if (!student) return;
    const currentStatus = student.demonstrations[operationId]?.status || DemonstrationStatus.PENDING;
    const newStatus = currentStatus === DemonstrationStatus.DONE ? DemonstrationStatus.PENDING : DemonstrationStatus.DONE;
    const newDemos = { ...student.demonstrations, [operationId]: { status: newStatus, updatedAt: new Date().toISOString() } };
    const { error } = await supabase.from('students').update({ demonstrations: newDemos }).eq('id', studentId);
    if (!error) setStudents(prev => prev.map(s => s.id === studentId ? { ...s, demonstrations: newDemos } : s));
  };

  const onAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;
    const newStudent = { name: newStudentName.trim(), class_id: activeClassId, demonstrations: {} };
    const { data, error } = await supabase.from('students').insert([newStudent]).select();
    if (!error && data) { setStudents(prev => [...prev, data[0]]); setNewStudentName(''); }
  };

  const onDeleteStudent = async (id: string) => {
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (!error) setStudents(prev => prev.filter(s => s.id !== id));
  };

  const onUpdateStudentName = async (id: string, name: string) => {
    const { error } = await supabase.from('students').update({ name }).eq('id', id);
    if (!error) setStudents(prev => prev.map(s => s.id === id ? { ...s, name } : s));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-[#004B95] text-white p-4 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#E30613] px-4 py-1 font-black italic skew-x-[-12deg] shadow-md">
              <span className="inline-block skew-x-[12deg] text-xl text-white">SENAI</span>
            </div>
            <div className="h-8 w-[2px] bg-white/20 hidden sm:block"></div>
            <div>
              <h1 className="font-black text-sm leading-tight uppercase italic tracking-tighter">Mecânico de Usinagem</h1>
              <p className="text-[9px] font-bold text-blue-200 uppercase tracking-[0.2em]">Gestão de Demonstrações</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <select 
              value={activeClassId} 
              onChange={(e) => setActiveClassId(e.target.value)}
              className="bg-[#003a75] text-white border-2 border-white/20 rounded-xl px-4 py-2 font-black text-xs uppercase outline-none"
            >
              {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <button onClick={() => setIsSummaryOpen(true)} className="bg-white text-[#004B95] px-5 py-2 rounded-xl font-black text-[10px] uppercase shadow-lg hover:bg-blue-50 transition-colors">Resumo</button>
            <button onClick={() => setIsAuthenticated(false)} className="bg-red-600 text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase shadow-lg">Sair</button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-64 font-black text-slate-400 animate-pulse uppercase tracking-widest">Carregando...</div>
        ) : (
          <>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-xs font-black text-slate-400 uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E30613] rounded-full"></span> Adicionar Aluno
              </h2>
              <form onSubmit={onAddStudent} className="flex flex-wrap gap-3">
                <input type="text" value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} placeholder="NOME DO ALUNO" className="flex-1 min-w-[280px] bg-slate-50 border-2 border-slate-100 px-6 py-3 rounded-xl text-xs font-black uppercase focus:border-[#E30613] outline-none" />
                <button type="submit" className="bg-[#E30613] text-white px-8 py-3 rounded-xl font-black text-xs uppercase shadow-lg">ADICIONAR</button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {operations.map(op => (
                <OperationCard 
                  key={op.id} 
                  operation={op} 
                  totalStudents={classStudents.length} 
                  completedCount={classStudents.filter(s => s.demonstrations[op.id]?.status === DemonstrationStatus.DONE).length}
                  onClick={() => { setSelectedOp(op); setIsModalOpen(true); }}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {isModalOpen && selectedOp && (
        <StudentChecklistModal operation={selectedOp} students={classStudents} onClose={() => setIsModalOpen(false)} onToggleStatus={(id) => handleUpdateStatus(id, selectedOp.id)} onDeleteStudent={onDeleteStudent} onUpdateStudentName={onUpdateStudentName} />
      )}
      {isSummaryOpen && (
        <GeneralSummaryModal activeClass={activeClass!} students={classStudents} operations={operations} onClose={() => setIsSummaryOpen(false)} onDeleteStudent={onDeleteStudent} onUpdateStudentName={onUpdateStudentName} />
      )}
    </div>
  );
};

export default App;
