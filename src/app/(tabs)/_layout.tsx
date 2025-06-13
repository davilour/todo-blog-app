import { Tabs } from 'expo-router'

export default function TabLayout() {
    return (
      <Tabs>
        <Tabs.Screen name="todo" options={{ title: 'Todo' }} />
        <Tabs.Screen name="post" options={{ title: 'Post' }} />
        <Tabs.Screen name="blog" options={{ title: 'Blog' }} />
      </Tabs>
    )
  }