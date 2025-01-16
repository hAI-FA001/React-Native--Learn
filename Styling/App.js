import { StyleSheet, Text, View } from 'react-native'

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightGreen]}>
        {/* borderRadius on Text only works on Android */}
        <Text style={{ backgroundColor: 'red', borderRadius: 5 }}>Box 1</Text>
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
    width: '50%',
    height: '25%',
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,

    marginVertical: 10,

    borderWidth: 2,
    borderColor: 'purple',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  lightGreen: {
    backgroundColor: 'lightgreen',
  },

  lightBlue: {
    backgroundColor: 'lightblue',
  },
})
