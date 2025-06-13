import { create } from 'zustand';

type TodoStore = {
    id: string | number;
    posts: string[];
    addTodo: (text: string) => void;
}

export const usePostStore = create<TodoStore>((set) => ({
    id: Date.now(),
    posts: [],
    addTodo: (text: string) => set((state) => ({ 
        posts: [...state.posts, text] , id: Date.now()
    })),
}))