import { View, Text, StyleSheet } from 'react-native'

export default App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
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
})
