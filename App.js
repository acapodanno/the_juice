
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Juice from './screen/Juice';
import Home from './screen/Home';
export default function App() {
  const [loaded] = useFonts({
    ManropeBold: require('./assets/fonts/Manrope-Bold.ttf'),
    ManropeMedium: require('./assets/fonts/Manrope-Medium.ttf'),
    ManropeRegular: require('./assets/fonts/Manrope-Regular.ttf'),
    ManropeSemiBold: require('./assets/fonts/Manrope-SemiBold.ttf'),

  });
  
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Juice" component={Juice} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
    );
}

