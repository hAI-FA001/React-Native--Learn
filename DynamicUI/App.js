import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'

export default App = () => {
  const { width, height } = useWindowDimensions()
  console.log(useWindowDimensions())

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: width > 500 ? '70%' : '90%',
            height: height > 600 ? '60%' : '90%',
          },
        ]}
      >
        <Text style={{ fontSize: width > 500 ? 50 : 24 }}>Hello world</Text>
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
