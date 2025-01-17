import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Text,
} from 'react-native'

export default function App() {
  const [postList, setPostList] = useState([])

  const fetchData = async (limit = 10) => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    const data = await resp.json()

    setPostList(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
})
