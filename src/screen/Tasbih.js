import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import themeContext from "./themeContext";

const Tasbih = ( props ) =>
{
    const [ angka, setAngka ] = useState( 0 );
    const theme = useContext(themeContext);

    const counterNumber = () =>
    {
        if ( angka > -1 )
        {
            setAngka( angka => angka + 1 )
        }
        if ( angka > 32 )
        {
            setAngka( 0 );
        }
    }

    const Reset = () => {
        setAngka(0)
    }
    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <View style={{
                backgroundColor: '#00897b', paddingVertical: 15, elevation: 5,
                flexDirection: 'row',
                marginBottom: 20,
                paddingHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity onPress={() => {props.navigation.pop() }} style={{ marginLeft: 10 }}>
                    <Icon
                        name="chevron-left"
                        size={20}
                        color={'white'} />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        color: 'white', textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18, marginRight: 40
                    }}>Tasbih</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity onPress={counterNumber} style={{ borderWidth: 8, borderColor: '#e0e0e0', height: 300, width: 300, borderRadius: 150, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: theme.color }}>{angka}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.color }}>/33</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Reset} style={{paddingVertical: 20, backgroundColor:'#00897b', paddingHorizontal: 50, marginTop: 30, borderRadius: 10}}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Tasbih;