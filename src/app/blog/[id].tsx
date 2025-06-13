import { usePostStore } from "@/store/post.store";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { posts, removePost, editPost } = usePostStore();
  const router = useRouter();

  const post = posts.find((p) => p.id === id);
  const postTitle = post?.title;
  const postContent = post?.content;

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(postTitle);
  const [editContent, setEditContent] = useState(postContent);

  const HandleRemove = (id: string) => {
    removePost(id);
  };

  const HandleEdit = () => {
    if (!editTitle?.trim() || !editContent?.trim()) return;
    editPost(post?.id, editTitle, editContent);
    setIsEditing(false);
  };

  if (!post) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-white text-xl">Post not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black px-4 py-6">
      <View className="flex-row gap-20">
        <Pressable
          onPress={router.back}
          className="mb-6 bg-gray-700 px-4 py-2 rounded-lg self-start"
        >
          <Text className="text-white text-base">← Back</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            if (isEditing) {
              HandleEdit();
            } else {
              setIsEditing(true);
            }
          }}
          className="mb-6 bg-sky-600 px-4 py-2 rounded-lg self-start"
        >
          <Text className="text-white text-base">
            {isEditing ? "Save" : "Edit"}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            HandleRemove(post.id);
            router.back();
          }}
          className="mb-6 bg-red-700 px-4 py-2 rounded-lg self-start"
        >
          <Text className="text-white text-base">Remove</Text>
        </Pressable>
      </View>

      {isEditing ? (
        <>
          <TextInput
            className="text-3xl text-white mb-4"
            value={editTitle}
            multiline
            onChangeText={setEditTitle}
          />
          <TextInput
            className="text-lg text-gray-300"
            multiline
            value={editContent}
            onChangeText={setEditContent}
          />
        </>
      ) : (
        <>
          <Text className="text-3xl text-white mb-4">
            {post.title}
          </Text>
          <Text className="text-lg text-gray-300">
            {post.content}
          </Text>
        </>
      )}
    </SafeAreaView>
  );
}
