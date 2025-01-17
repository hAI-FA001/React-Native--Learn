import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({})

  const validate = () => {
    let errors = {}

    if (!username) errors.username = 'Username is required'
    if (!password) errors.password = 'Password is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 100}
    >
      <View style={styles.form}>
        <Image
          source={require('./assets/adaptive-icon.png')}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <Button
          title="Login"
          onPress={() => {
            validate()
          }}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },

  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },
})
