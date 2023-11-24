type Todos = {
  id: string;
  content: string;
  isDone: boolean;
  isDeleted: boolean;
  onDelete: (id: string) => void; 
  toggleTodo: (id: string, isDone: boolean) => void;
};
