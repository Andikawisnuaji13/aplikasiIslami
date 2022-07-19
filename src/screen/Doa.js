// https://doa-doa-api-ahmadramadhan.fly.dev/api
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


class Doa extends Component
{
    constructor ()
    {
        super()
        this.state = {
            DataDoa: []
        }
    }
    componentDidMount ()
    {
        this.AmbilDataDoa()
    }

    AmbilDataDoa = async () =>
    {
        fetch( 'https://doa-doa-api-ahmadramadhan.fly.dev/api' )
            .then( ( response ) => response.json() )
            .then( ( json ) => this.setState( { DataDoa: json } ) )
            .catch( ( err ) => console.log( err ) )
    }

    render ()
    {
        return (
            <View>
                <View style={{
                    backgroundColor: '#00897b', paddingVertical: 15, elevation: 5,
                    flexDirection: 'row',
                    marginBottom: 20,
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.pop() }} style={{ marginLeft: 10 }}>
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
                        }}>Wirid dan Doa</Text>
                    </View>
                </View>
                <FlatList
                    data={this.state.DataDoa}
                    renderItem={( { item, index } ) => (
                        <TouchableOpacity onPress={() =>
                        {
                            this.props.navigation.navigate( 'DetailDoaNav', {
                                ayatnya: item.ayat,
                                latinnya: item.latin,
                                arti: item.artinya,
                                namanya: item.doa
                            } )
                        }} style={{ flexDirection: 'row', marginBottom: 15, marginHorizontal: 15, backgroundColor: 'white', borderRadius: 8, height: 60, alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#00897b', paddingHorizontal: 10, height: 30, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>{item.id}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginLeft: 15 }}>{item.doa}</Text>
                            </View>
                            <Icon name='chevron-right' size={20} color="#00897b" style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={() => this.state.doa}
                />
            </View>
        )
    }
}

export default Doa;