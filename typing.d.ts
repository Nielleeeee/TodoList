type Todos = {
  id: string;
  content: string;
  isDone: boolean;
  isDeleted: boolean;
  onDelete: (id: string) => void; 
  toggleTodo: (id: string, isDone: boolean) => void;
  updateTodo: (formData: FormData) => Promise<void>;
};

interface TodoListFormProps {
  addList: (formData: FormData) => Promise<void>;
}