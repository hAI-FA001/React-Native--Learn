import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({ route }) => {
  const navigation = useNavigation()
  const { name } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen - {name}</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}
export default AboutScreen

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
