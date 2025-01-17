import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}></View>
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
