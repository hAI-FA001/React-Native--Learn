import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello world</Text>
      </View>
    </View>
  )
}

const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: winWidth > 500 ? '70%' : '90%',
    height: winHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: winWidth > 500 ? 50 : 24,
  },
})
