import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native'

export default function App() {
  const [val, setVal] = useState('')
  console.log(val)

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={val}
        onChangeText={setVal}
        placeholder="example@email.com"
        // secureTextEntry
        // keyboardType="numeric"
        autoCorrect={true}
        autoCapitalize="characters"
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="message"
        multiline
      />
      <Text style={styles.text}>You said: {val}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },

  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },

  text: { fontSize: 30, padding: 10 },

  multilineText: { minHeight: 100, textAlignVertical: 'top' },
})
