import React, { useState, useEffect, useMemo } from 'react';
import { ClassRoom, Student, Operation, DemonstrationStatus } from './types';
import { INITIAL_CLASSES, INITIAL_OPERATIONS } from './constants'; // Onde estarão as 36
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
  const [selectedOp, setSelectedOp] = useState<Operation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');

  // Sincronização com o banco de dados Supabase
  const fetchStudents = async () => {
    const { data, error } = await supabase.from('students').select('*');
    if (!error && data) setStudents(data);
  };

  useEffect(() => { fetchStudents(); }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] overflow-hidden shadow-2xl">
          <div className="bg-[#004B95] p-10 text-center">
            <div className="bg-[#E30613] inline-block px-6 py-2 skew-x-[-15deg] mb-6">
              <span className="text-white font-black text-3xl italic block skew-x-[15deg]">SENAI</span>
            </div>
            <h2 className="text-white font-black uppercase text-lg">Mecânico de Usinagem</h2>
          </div>
          <form className="p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); if(passwordInput === MASTER_PASSWORD) setIsAuthenticated(true); }}>
            <input 
              type="password" placeholder="DIGITE A SENHA" 
              className="w-full bg-slate-100 rounded-full py-4 px-6 text-center font-black outline-none focus:ring-2 focus:ring-[#004B95]"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button className="w-full bg-[#004B95] text-white font-black py-4 rounded-full uppercase shadow-lg">Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pb-10">
      <header className="bg-[#004B95] p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="bg-[#E30613] px-3 py-1 font-black italic skew-x-[-10deg]">SENAI</div>
        <div className="flex gap-4">
          <button onClick={() => setIsSummaryOpen(true)} className="bg-white text-[#004B95] px-4 py-1 rounded font-black text-[10px] uppercase">Resumo Geral</button>
          <button onClick={() => setIsAuthenticated(false)} className="bg-red-600 px-3 py-1 rounded font-black text-[10px] uppercase">Sair</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {operations.map(op => (
            <OperationCard 
              key={op.id} 
              operation={op} 
              totalStudents={students.length} 
              completedCount={students.filter(s => s.demonstrations?.[op.id]?.status === 'DONE').length}
              onClick={() => { setSelectedOp(op); setIsModalOpen(true); }}
            />
          ))}
        </div>
      </main>

      {isModalOpen && selectedOp && (
        <StudentChecklistModal 
          operation={selectedOp} 
          students={students} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
      {isSummaryOpen && (
        <GeneralSummaryModal 
          students={students} 
          operations={operations} 
          onClose={() => setIsSummaryOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
