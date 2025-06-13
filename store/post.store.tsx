import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type PostBlog = {
  id: string;
  title: string;
  content: string;
};

interface PostStore {
  posts: PostBlog[];
  addPost: (title: string, content: string) => void;
  editPost: (id: string, title: string, content: string) => void;
  removePost: (id: string) => void;

}

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: [],
      addPost: (title: string, content: string) =>
        set((state) => ({
          posts: [...state.posts, { 
            id: Date.now().toString(),
            title, 
            content 
          }],
      })),
      removePost: (id: string) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
      })),
      editPost: (id: string, title: string, content: string) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, title, content } : post
          ),
        }))
    }),
    {
      name: "post-blog-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);


// editPost: (id: string, title: string, content: string) =>
//   set((state) => ({
//     posts: state.posts.map((post) =>
//       post.id === id ? { ...post, title, content } : post
//     ),
// })),
