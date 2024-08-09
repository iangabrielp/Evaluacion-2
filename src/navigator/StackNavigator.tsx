import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screens } from '../screens/Pantalla1Screens';
import { Pantalla2Screens } from '../screens/Pantalla2Screens';
import { Pantalla3Screens } from '../screens/Pantalla3Screens';
import { Pantalla4Screens } from '../screens/Pantalla4Screens';
import { Pantalla5Screens } from '../screens/Pantalla5Screens';

const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: '#010534'
      }
    }}>
      <Stack.Screen name="Pantalla1" options={{ headerShown: false }} component={Pantalla1Screens} />
      <Stack.Screen name="Pantalla2" options={{ title: 'imagen1' }} component={Pantalla2Screens} />
      <Stack.Screen name="Pantalla3" options={{ title: 'imagen2' }} component={Pantalla3Screens} />
      <Stack.Screen name="Pantalla4" options={{ title: 'formulario1' }} component={Pantalla4Screens} />
      <Stack.Screen name="Pantalla5" options={{ title: 'formulario2' }} component={Pantalla5Screens} />
      
    
    </Stack.Navigator>
  );
}