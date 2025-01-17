import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'

export default App = () => {
  console.log(Platform)
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
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    // Platform.select overrides this fontSize
    // fontSize: 24,
    ...Platform.select({
      ios: { color: 'purple' },
      android: { color: 'midnightblue', fontStyle: 'italic', fontSize: 28 },
    }),
    // this fontSize overrides the one in Platform.select
    // fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
