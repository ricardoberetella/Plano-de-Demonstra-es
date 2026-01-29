
export enum Category {
  Torneamento = "Torneamento",
  Fresamento = "Fresamento",
  Ajustagem = "Ajustagem",
  Furadeira = "Furadeira"
}

export interface OperationStep {
  task: string;
  keyPoints: string[];
}

export interface OperationPlan {
  id: string;
  name: string;
  category: Category;
  reference: string; // Número da operação (Op. Nº)
  taskNumber: string; // Referência da Tarefa (Ex: Tarefa 5)
  time: string;
  pieceName: string;
  volumePage: string;
  preparation: string;
  motivation: string;
  presentation: {
    sincrese: string;
    analise: string;
    sintese: string;
  };
  steps: OperationStep[];
  application: string;
  verification: string[];
}
