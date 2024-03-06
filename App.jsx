import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

//screens
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import Profile from './src/screens/Profile';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>

      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

