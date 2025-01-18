import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      <Text style={styles.text}>{route.params?.result}</Text>

      <Button
        title="Go To About"
        onPress={() =>
          navigation.navigate(
            'About'
            // { name: 'Test Data' }
          )
        }
      />
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
