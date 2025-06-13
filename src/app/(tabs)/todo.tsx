import { Text, View } from 'react-native'
import { usePostStore } from '../../../store/todo.store'

export default function TodoScreen() {

  const { posts, addPost } = usePostStore()
  return (
    <View>
      <Text>TODO screen</Text>
      <Text> {posts}</Text>
      <Text>{addPost}</Text>
    </View>
  )
}