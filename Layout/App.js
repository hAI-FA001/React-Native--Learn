import { View, StyleSheet } from 'react-native'

import Box from './components/Box'

export default function App() {
  return (
    // "flex: 1" to occupy all space
    // <View style={{ backgroundColor: 'plum', flex: 1 }}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56', flexBasis: 100, flex: 1 }}>
        Box 3
      </Box>
      {/* height doesn't take into account distributed spacing, so this box is smaller */}
      <Box style={{ backgroundColor: '#ab9156', height: 140 }}>Box 4</Box>
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

    // height: 300,

    flex: 1, // border shows it takes up all space rather than only space occupied by children
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // flexWrap: 'wrap',
    // alignContent: 'center',

    // rowGap: 10,
    // columnGap: 20,
    // gap: 20,
  },
})
