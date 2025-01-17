import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native'

export default function App() {
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [isPosting, setIsPosting] = useState(false)

  const [formErrors, setFormErrors] = useState({})
  const [error, setError] = useState('')

  const fetchData = async (limit = 10) => {
    try {
      // delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      )
      const data = await resp.json()

      setPostList(data)
      // console.log(data)
      setIsLoading(false)

      setError('')
    } catch (error) {
      console.error('Error in GET: ', error)

      setIsLoading(false)
      setError('Failed to fetch posts')
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    fetchData(20).then((res) => {
      setIsRefreshing(false)
    })
  }

  const validate = () => {
    let formErrors = {}

    if (!postTitle) {
      formErrors.title = 'Title is required'
    }
    if (!postBody) {
      formErrors.body = 'Body is required'
    }

    setFormErrors(formErrors)

    return Object.keys(formErrors).length === 0
  }

  const addPost = async () => {
    setIsPosting(true)

    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: postTitle, body: postBody }),
      })
      const newPost = await resp.json()

      // add to bottom
      // setPostList([...postList, newPost])
      // add to top
      setPostList([newPost, ...postList])

      setPostTitle('')
      setPostBody('')

      setError('')
    } catch (error) {
      console.error('Error in POST: ', error)

      setError('Failed to create Post')
    }

    setIsPosting(false)
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
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            {formErrors.title ? (
              <Text style={styles.errorText}>{formErrors.title}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              placeholder="Post Body"
              value={postBody}
              onChangeText={setPostBody}
            />
            {formErrors.body ? (
              <Text style={styles.errorText}>{formErrors.body}</Text>
            ) : null}

            <Button
              title={isPosting ? 'Creating...' : 'Create'}
              disabled={isPosting}
              onPress={() => {
                if (validate()) {
                  addPost()
                }
              }}
            />
          </View>

          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View style={{ height: 16 }}></View>
              )}
              ListEmptyComponent={<Text>No Posts Found</Text>}
              ListHeaderComponent={
                <Text style={styles.headerText}>Post List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of List</Text>
              }
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
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

  inputContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },

  errorContainer: {
    backgroundColor: '#ffc0cb',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: '#d8000c',
    fontSize: 16,
    textAlign: 'center',
  },
})
