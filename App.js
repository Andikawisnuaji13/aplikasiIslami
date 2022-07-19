import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import About from './src/screen/About';
import Setting from './src/screen/setting';
import Beranda from './src/screen/Beranda';
import JadwalShalat from './src/screen/JadwalShalat';
import Doa from './src/screen/Doa';
import DetailDoa from './src/screen/DetailDoa';
import Tasbih from './src/screen/Tasbih';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeNavigator ()
{
  return (
    <Stack.Navigator
      initialRouteName="BerandaNav"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BerandaNav" component={Beranda} />
      <Stack.Screen name="JadwalShalatNav" component={JadwalShalat} />
      <Stack.Screen name="DoaNav" component={Doa} />
      <Stack.Screen name="DetailDoaNav" component={DetailDoa} />
      <Stack.Screen name="TasbihNav" component={Tasbih} />
    </Stack.Navigator>
  );
}

function ListSuratNavigator ()
{
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeNav" component={Home} />
      <Stack.Screen name="DetailNav" component={Detail} />
      <Stack.Screen name="AboutNav" component={About} />
    </Stack.Navigator>
  )
}

function SettingNavigator ()
{
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingNav" component={Setting} />
    </Stack.Navigator>
  );
}


export default function App ()
{
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={( { route } ) => ( {
          tabBarIcon: ( { focused, color, size } ) =>
          {
            let iconName;

            if ( route.name === 'Home' )
            {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if ( route.name === 'Al-Quran' )
            {
              iconName = focused
                ? "book"
                : "book-outline";
            } else if ( route.name === 'Setting' )
            {
              iconName = focused
                ? "settings"
                : "settings-outline";
            }
            return <Ionicons name={iconName} size={26} color={color} />;
          }
        } )}
        activeColor='#00897b'
        barStyle={{ backgroundColor: 'white' }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator} />
        <Tab.Screen
          name="Al-Quran"
          component={ListSuratNavigator} />
        <Tab.Screen
          name="Setting"
          component={SettingNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
