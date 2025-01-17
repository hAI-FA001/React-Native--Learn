import { StyleSheet, Text, View, ScrollView } from 'react-native'

import pokeList from './data.json'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {pokeList.map((p) => (
          <View key={p.id}>
            <Text>{p.type}</Text>
            <Text>{p.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
