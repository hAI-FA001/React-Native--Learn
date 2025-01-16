import { StyleSheet, Text, View } from 'react-native'

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxStyleA}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.boxStyleB}>
        <Text>Box 2</Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 60, backgroundColor: 'teal' },
  boxStyleA: {
    backgroundColor: 'lightgreen',
    width: 100,
    height: 100,
    padding: 10,
  },
  boxStyleB: {
    backgroundColor: 'lightblue',
    width: 100,
    height: 100,
    padding: 10,
  },
})
