import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native'

export default function App() {
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchData = async (limit = 10) => {
    // delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    const data = await resp.json()

    setPostList(data)
    // console.log(data)
    setIsLoading(false)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    fetchData(20).then((res) => {
      setIsRefreshing(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'#0000ff'} />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
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

  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: { fontSize: 30 },
  bodyText: { fontSize: 24, color: '#666' },

  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
})
