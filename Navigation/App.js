import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from './screens/SettingsScreen'
import ProfileScreen from './screens/ProfileScreen'
import CourseListScreen from './screens/CourseListScreen'

const Tab = createBottomTabNavigator()

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="CourseList" component={CourseListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
