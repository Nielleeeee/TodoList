type Todos = {
  id: string;
  content: string;
  isDone: boolean;
  toggleTodo: (id: string, isDone: boolean) => void
};
