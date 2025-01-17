import { View, Text, StyleSheet } from 'react-native'

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box]}>
        <Text style={{}}>Hello world</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
