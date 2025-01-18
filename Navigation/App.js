import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome Home',
            headerStyle: { backgroundColor: '#6a51ae' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },

            headerRight: () => (
              <Pressable
                onPress={() => {
                  console.log('Pressed menu')
                  alert('Menu Pressed')
                }}
              >
                <Text style={{ fontSize: 16, color: '#fff' }}>Menu</Text>
              </Pressable>
            ),

            contentStyle: { backgroundColor: '#e8e4f3' },
          }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: 'Default Value' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
