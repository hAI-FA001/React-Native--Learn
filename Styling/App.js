import { StyleSheet, Text, View } from 'react-native'

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightGreen]}>
        <Text>Box 1</Text>
      </View>
      <View style={[styles.box, styles.lightBlue]}>
        <Text>Box 2</Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 60, backgroundColor: 'teal' },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightGreen: {
    backgroundColor: 'lightgreen',
  },

  lightBlue: {
    backgroundColor: 'lightblue',
  },
})
