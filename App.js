import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import About from './src/screen/About';

const Stack = createNativeStackNavigator();

function App () {
  return(
  <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Detail" component={Detail}/>
      <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;