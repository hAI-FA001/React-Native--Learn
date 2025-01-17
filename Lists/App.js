import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native'

import pokeList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={pokeList}
          renderItem={(p) => {
            // only loads when in view, more performant
            console.log(p.item.id)
            return (
              <View key={p.item.id} style={styles.card}>
                <Text style={styles.cardText}>{p.item.type}</Text>
                <Text style={styles.cardText}>{p.item.name}</Text>
              </View>
            )
          }}
          // horizontal // horizontal list
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
        />
      </View>
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

  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
})
