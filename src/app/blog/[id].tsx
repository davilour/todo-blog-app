import { usePostStore } from '@/store/post.store';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { posts } = usePostStore();
  const router = useRouter();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-white text-xl">Post not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black px-4 py-6">
      <Pressable
        onPress={router.back}
        className="mb-6 bg-gray-700 px-4 py-2 rounded-lg self-start"
      >
        <Text className="text-white text-base">← Back</Text>
      </Pressable>
      <Text className="text-3xl text-white mb-4">{post.title}</Text>
      <Text className="text-lg text-gray-300">{post.content}</Text>
    </SafeAreaView>
  );
}
