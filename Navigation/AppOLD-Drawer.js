import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SettingsScreen from './screens/SettingsScreen'
import DashboardScreen from './screens/DashboardScreen'

const Drawer = createDrawerNavigator()

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Your Dashboard',
            drawerLabel: 'Dashboard',

            drawerActiveTintColor: '#333',
            drawerActiveBackgroundColor: 'lightblue',

            drawerContentStyle: {
              backgroundColor: '#c6cbef',
            },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
