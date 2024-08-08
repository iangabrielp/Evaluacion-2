import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      
    </Stack.Navigator>
  );
}