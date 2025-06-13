// src/app/index.tsx
import { Redirect } from 'expo-router'
import "../../globals.css"

export default function Index() {
  return <Redirect href="/(tabs)/todo"/>
}
