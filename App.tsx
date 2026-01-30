import React, { useState, useEffect } from 'react';
import { ClassRoom, Student, Operation, DemonstrationStatus, Category } from './types';
// Importante: Verifique se esses arquivos existem ou comente-os para testar o build
import { OPERATIONS } from './data'; 
import { supabase } from './lib/supabaseClient';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const MASTER_PASSWORD = 'senai123'; 

  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Exemplo de busca de dados com tratamento de erro para o Vercel
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from('students').select('*');
        if (error) throw error;
        if (data) setStudents(data);
      } catch (err) {
        console.error("Erro ao carregar estudantes:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchStudents();
    }
  }, [isAuthenticated]);

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
        <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-md">
          <h1 className="mb-4 text-xl font-bold text-center">Acesso Restrito</h1>
          <input 
            type="password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Senha"
          />
          <button type="submit" className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black text-[#E30613]">SENAI - GESTÃO DE DEMONSTRAÇÕES</h1>
        <button onClick={() => setIsAuthenticated(false)} className="text-sm text-gray-500 underline">Sair</button>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Aqui você deve renderizar seus cards ou lista de operações */}
          <p className="col-span-full">Sistema carregado com sucesso. {students.length} alunos encontrados.</p>
        </div>
      </main>
    </div>
  );
};

export default App;
