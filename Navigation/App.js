import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
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
          headerStyle: { backgroundColor: '#6a51ae' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome Home',
          }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: 'Default Value' }}
          // options={({ route }) => ({ title: route.params?.name })}
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
