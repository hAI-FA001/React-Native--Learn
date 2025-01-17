import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
      />

      <View style={styles.typeContainer}>
        <Text style={styles.type}>{type}</Text>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.moves}>Moves: {moves.join(',')}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknesses}>
          Weaknesses: {weaknesses.join(',')}
        </Text>
      </View>
    </View>
  )
}
export default PokemonCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,

    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: { elevation: 5 },
    }),
  },

  nameContainer: {},
  name: {},
  hp: {},

  image: {},

  typeContainer: {},
  type: {},

  movesContainer: {},
  moves: {},

  weaknessContainer: {},
  weaknesses: {},
})
