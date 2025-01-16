import { StyleSheet, Text, View } from "react-native"

export default App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 60, backgroundColor: "teal", },
  title: { fontSize: 20 }
})