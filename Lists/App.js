import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native'

import pokeList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokeList.map((p) => (
          <View key={p.id}>
            <Text>{p.type}</Text>
            <Text>{p.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',

    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    paddingHorizontal: 16,
  },
})
