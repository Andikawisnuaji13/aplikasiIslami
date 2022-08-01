import React, { Component, useState, useContext } from 'react';
import {View, Text, StatusBar, TouchableOpacity, Switch} from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import Icon from 'react-native-vector-icons/FontAwesome5';
import themeContext from './themeContext';

const Setting = () => {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);

         return(
            <View style={{flex: 1, backgroundColor:theme.background}}>
            <StatusBar backgroundColor={'#00796b'}/>
                <View style={{
                    backgroundColor:'#00897b', 
                    paddingVertical: 15, 
                    elevation: 5,
                    flexDirection:'row'}}>
                <TouchableOpacity 
                style={{marginLeft: 20}} 
                onPress={() => {}}>
                    {/* <Icon
                    name='chevron-left'
                    size={20}
                    color='#ffffff'
                    /> */}
                </TouchableOpacity>
                <View style={{flex: 1}}>
                <Text style={{
                    color:'white', 
                    textAlign:'center', 
                    fontWeight:'bold', 
                    fontSize: 18,
                    marginRight: 20}}>Setting</Text>
                </View>
                </View>
                <View>
                    <Text style={{marginHorizontal: 10, color: theme.color, marginTop: 10, fontWeight: 'bold', fontSize: 20}}>
                        Umum
                    </Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 10, paddingVertical: 20, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: theme.color, alignItems:'center' }}>
                    <Text style={{color:theme.color, fontSize: 15}}>
                        Mode Gelap/Terang
                    </Text>
                    <Switch 
                    value={mode} 
                    onValueChange={
                        (value) => setMode((value), 
                        EventRegister.emit("changeTheme", mode))}/>
                    </View>
                </View>
            </View>
        )
    }

export default Setting;