import { usePostStore } from '@/store/post.store';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';

export default function BlogScreen() {

  const { posts } = usePostStore();
  const router = useRouter();


  return (
    <View className="flex-1 bg-gray-900 px-4 py-6">
      <Text className="text-white text-3xl mb-4 text-center">BLOG MENU</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/blog/${item.id}`)}
            className="border border-gray-400 rounded-md p-4 mb-3 bg-gray-800"
          >
            <Text className="text-white text-xl">{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}