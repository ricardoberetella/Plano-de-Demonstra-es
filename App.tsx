import React, { useState, useEffect, useMemo } from 'react';
import { ClassRoom, Student, Operation, DemonstrationStatus } from './types';
import { INITIAL_CLASSES, INITIAL_OPERATIONS } from './constants';
import { supabase } from './supabaseClient'; // Importando a conexão
import OperationCard from './components/OperationCard';
import StudentChecklistModal from './components/StudentChecklistModal';
import GeneralSummaryModal from './components/GeneralSummaryModal';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const MASTER_PASSWORD = 'senai123'; 

  const [classes] = useState<ClassRoom[]>(INITIAL_CLASSES);
  const [activeClassId, setActiveClassId] = useState<string>(INITIAL_CLASSES[0].id);
  const [operations] = useState<Operation[]>(INITIAL_OPERATIONS);
  const [students, setStudents] = useState<Student[]>([]);
  
  const [selectedOp, setSelectedOp] = useState<Operation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');

  // FUNÇÃO PARA CARREGAR DO SUPABASE
  const fetchStudents = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from('students').select('*');
    if (!error && data) {
      setStudents(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchStudents();
    }
  }, [isAuthenticated]);

  const classStudents = useMemo(() => {
    return students.filter(s => s.classId === activeClassId)
                   .sort((a, b) => a.name.localeCompare(b.name));
  }, [students, activeClassId]);

  const activeClass = useMemo(() => classes.find(c => c.id === activeClassId), [activeClassId, classes]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === MASTER_PASSWORD) setIsAuthenticated(true);
    else { alert('Senha incorreta!'); setPasswordInput(''); }
  };

  // ATUALIZAR STATUS NO SUPABASE
  const handleUpdateStatus = async (studentId: string, opId: string) => {
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}`;
    
    const student = students.find(s => s.id === studentId);
    if (!student) return;

    const isDone = student.demonstrations[opId]?.status === DemonstrationStatus.DONE;
    const newDemos = {
      ...student.demonstrations,
      [opId]: { 
        status: isDone ? DemonstrationStatus.PENDING : DemonstrationStatus.DONE, 
        date: isDone ? null : formattedDate 
      }
    };

    // Salva no banco
    const { error } = await supabase.from('students').update({ demonstrations: newDemos }).eq('id', studentId);
    
    if (!error) {
      setStudents(prev => prev.map(s => s.id === studentId ? { ...s, demonstrations: newDemos } : s));
    }
  };

  // ADICIONAR ALUNO NO SUPABASE
  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = newStudentName.trim().toUpperCase();
    if (!name) return;

    const newStudent = {
      id: `std-${Date.now()}`,
      name: name,
      classId: activeClassId,
      demonstrations: {}
    };

    const { error } = await supabase.from('students').insert([newStudent]);
    
    if (!error) {
      setStudents(prev => [...prev, newStudent]);
      setNewStudentName('');
    }
  };

  const onDeleteStudent = async (id: string) => {
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (!error) setStudents(prev => prev.filter(s => s.id !== id));
  };

  const onUpdateStudentName = async (id: string, newName: string) => {
    const { error } = await supabase.from('students').update({ name: newName.toUpperCase() }).eq('id', id);
    if (!error) setStudents(prev => prev.map(s => s.id === id ? { ...s, name: newName.toUpperCase() } : s));
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-[#b91c1c] flex flex-col items-center justify-center p-4 z-[9999]">
        <div className="bg-white p-10 rounded-[40px] shadow-2xl w-full max-w-md text-center">
          <div className="bg-[#cc1d1d] text-white px-6 py-2 inline-block font-black text-3xl italic skew-x-[-12deg] mb-8 shadow-md">SENAI</div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">Acesso Restrito</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-10">Controle de Demonstrações</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="password" placeholder="DIGITE A SENHA" className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl px-6 text-center text-xl font-bold focus:outline-none" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} autoFocus />
            <button type="submit" className="w-full h-16 bg-[#cc1d1d] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg">Entrar no Sistema</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 font-sans pb-20">
      <header className="bg-[#004B95] h-24 flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="bg-[#E30613] text-white px-4 py-1 font-black text-xl italic shadow-lg">SENAI</div>
        <div className="flex bg-black/20 p-1 rounded-xl gap-1">
          {classes.map(c => (
            <button key={c.id} onClick={() => setActiveClassId(c.id)} className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase ${activeClassId === c.id ? 'bg-white text-[#004B95]' : 'text-white/60'}`}>{c.name}</button>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {isLoading ? (
          <div className="text-center py-20 font-black text-slate-400 animate-pulse">CARREGANDO DADOS DA NUVEM...</div>
        ) : (
          <>
            <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-2 border-slate-200 pb-8">
              <div>
                <h2 className="text-4xl font-black text-slate-900 uppercase italic mb-4">{activeClass?.name}</h2>
                <div className="flex gap-2">
                  <button onClick={() => setIsSummaryOpen(true)} className="bg-[#004B95] text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase">Painel Analítico</button>
                  <button onClick={() => setIsAuthenticated(false)} className="bg-slate-300 text-slate-700 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase">Sair</button>
                </div>
              </div>
              <form onSubmit={handleAddStudent} className="flex gap-2">
                <input type="text" value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} placeholder="NOME DO NOVO ALUNO..." className="bg-white border-2 border-slate-200 px-6 py-3 rounded-xl text-xs font-black uppercase w-64 focus:border-[#E30613] outline-none shadow-sm" />
                <button type="submit" className="bg-[#E30613] text-white px-6 rounded-xl font-black text-xs uppercase shadow-lg">ADICIONAR</button>
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
        <StudentChecklistModal operation={selectedOp} students={classStudents} onClose={() => setIsModalOpen(false)} onToggleStatus={handleUpdateStatus} onDeleteStudent={onDeleteStudent} onUpdateStudentName={onUpdateStudentName} />
      )}
      {isSummaryOpen && (
        <GeneralSummaryModal activeClass={activeClass!} students={classStudents} operations={operations} onClose={() => setIsSummaryOpen(false)} onDeleteStudent={onDeleteStudent} onUpdateStudentName={onUpdateStudentName} />
      )}
    </div>
  );
};

export default App;
