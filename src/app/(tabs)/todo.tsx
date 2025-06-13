import { useTodoStore } from "@/store/todo.store";
import { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function TodoScreen() {
  const [text, setText] = useState("");
  const { addTodo, posts, removeTodo } = useTodoStore();

  const HandleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  const HandleRemove = (id: string) => {
    removeTodo(id);
  };

  return (
    <View className="flex-1 p-4 bg-gray-900">
      <Text className="text-3xl font-bold text-gray-200 mb-4">Todo List</Text>
      <TextInput
        className="bg-white p-4 rounded-xl shadow-md mb-4 "
        placeholder="Add new to-do"
        placeholderTextColor="#aaa"
        value={text}
        onChangeText={setText}
      />
      <Pressable 
        className="bg-blue-600 p-3 rounded-full mb-6 items-center justify-center" 
        onPress={HandleAdd}
      >
        <Text className="text-white font-semibold">Add</Text>
      </Pressable>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between bg-slate-300 p-4 rounded-xl shadow-slate-500 mb-4 opacity-{}">
            <Text className="text-base text-gray-800">{item.content}</Text>
            <Pressable
              className="bg-red-500 rounded-3xl p-3"
              onPress={() => HandleRemove(item.id)}
            >
              <Text className="text-white text-md">X</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
