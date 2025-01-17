import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
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
