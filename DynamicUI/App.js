import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello world</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'teal',
  },
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  box: {
    padding: 20,
  },
  text: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
})
