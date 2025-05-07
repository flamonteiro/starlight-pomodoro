import { createContext, useContext, useState } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

// tipo a ser recebido nos parametros do createContext
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// valor default do contexto
const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

// cria o contexto e define seu valor default
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

// tipo das props do provider
type TaskContextProviderProps = {
  children: React.ReactNode;
};

// componente para facilitar uso do Provider
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  // passa um state dentro do provider para acessar o estado das Tasks
  const [state, setState] = useState(initialTaskState);

  return (
    // passa o state criado como value do Provider para que os filhos utilizem
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

// criando um hook personalizado para usar o context que acessa a task
export function useTaskContext() {
  return useContext(TaskContext);
}
