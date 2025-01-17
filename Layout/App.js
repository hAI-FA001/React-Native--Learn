import { View, StyleSheet } from 'react-native'

import Box from './components/Box'

export default function App() {
  return (
    // "flex: 1" to occupy all space
    // <View style={{ backgroundColor: 'plum', flex: 1 }}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56', top: 75, left: 75 }}>Box 3</Box>
      <Box
        style={{
          backgroundColor: '#ab9156',
          top: 100,
          left: 100,
          position: 'absolute',
        }}
      >
        Box 4
      </Box>
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
    flex: 1,
  },
})
