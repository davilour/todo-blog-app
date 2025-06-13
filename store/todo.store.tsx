import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Todo = {
  id: string ;
  content: string;
};

type TodoStore = {
  posts: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string | number) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      posts: [],
      addTodo: (text: string) =>
        set((state) => ({
          posts: [...state.posts, { id: Date.now().toString(), content: text }],
        })),
      removeTodo: (id: string | number) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
    }),
    {
      name: "todo-list-storage",
      storage: createJSONStorage(() => (AsyncStorage)),
    }
  )
);
