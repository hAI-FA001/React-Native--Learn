import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from './screens/SettingsScreen'
import ProfileScreen from './screens/ProfileScreen'
import CourseListScreen from './screens/CourseListScreen'

import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'midnightblue',
        }}
      >
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'My Profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="CourseList" component={CourseListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
