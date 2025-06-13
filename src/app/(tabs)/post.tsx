import { usePostStore } from "@/store/post.store";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function PostScreen() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const { addPost } = usePostStore();

  const HandleAdd = () => {
    if (!title.trim()) return;
    if (!content.trim()) return;
    setTitle("");
    setContent("");
    addPost(title, content);
  };

  return (
    <View className="flex-1 justify-start bg-gray-900 p-4">
      <View className="mb-4">
        <Text className="text-3xl text-white font-bold">Post your content in blog!</Text>
      </View>
      
      <View className="mb-4">
        <TextInput
          className="border border-gray-400 rounded-md px-4 py-2 text-white bg-gray-800"
          placeholder="Add a title for your post"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View className="mb-4">
        <TextInput
          className="border border-gray-400 rounded-md px-4 py-4 text-white bg-gray-800"
          placeholder="Add the content for your post"
          placeholderTextColor="#aaa"
          value={content}
          onChangeText={setContent}
        />
      </View>

      <View>
        <Pressable className="bg-blue-600 py-2 px-6 rounded-lg" onPress={HandleAdd}>
          <Text className="text-white text-center">Add Post</Text>
        </Pressable>
      </View>
    </View>
  );
}
