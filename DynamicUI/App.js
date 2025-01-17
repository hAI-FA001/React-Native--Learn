import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default App = () => {
  const [dims, setDims] = useState({ window: Dimensions.get('window') })
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', (window) => {
      setDims({ window })
    })
    return () => subscription?.remove()
  })

  const { window } = dims
  const { width, height } = window

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: winWidth > 500 ? '70%' : '90%',
            height: winHeight > 600 ? '60%' : '90%',
          },
        ]}
      >
        <Text style={{ fontSize: width > 500 ? 50 : 24 }}>Hello world</Text>
      </View>
    </View>
  )
}

// const winWidth = Dimensions.get('window').width
// const winHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: winWidth > 500 ? '70%' : '90%',
    // height: winHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: winWidth > 500 ? 50 : 24,
  // },
})
