import { View, StyleSheet } from 'react-native'

import Box from './components/Box'

export default function App() {
  return (
    // "flex: 1" to occupy all space
    // <View style={{ backgroundColor: 'plum', flex: 1 }}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'center' }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: '#1c4c56', alignSelf: 'flex-end' }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      {/* rest of boxes overflow */}
      <Box style={{ backgroundColor: '#6b0003' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',

    height: 300,

    // flex: 1, // border shows it takes up all space rather than only space occupied by children
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
})
