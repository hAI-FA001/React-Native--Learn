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
          // data={[]}
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
          ListEmptyComponent={
            <Text style={styles.noItemsText}>No items found</Text>
          }
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
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

  noItemsText: {
    fontSize: 22,
    textAlign: 'center',
  },

  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
})
