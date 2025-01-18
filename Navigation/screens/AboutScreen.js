import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({ route }) => {
  const navigation = useNavigation()
  const { name } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({ title: name })
  }, [navigation, name])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen - {name}</Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Go To Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Update Param"
          onPress={() => navigation.setParams({ name: `Updated - ${name} ` })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Send Data Back"
          onPress={() =>
            navigation.navigate('Home', { result: 'Data from About' })
          }
        />
      </View>
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

  buttonContainer: {
    marginVertical: 4,
  },
})
