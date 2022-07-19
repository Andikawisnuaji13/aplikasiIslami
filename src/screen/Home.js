import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            ambilData: [],
            pencarian: ''
        };
    }
    componentDidMount ()
    {
        this.getSurat()
    }

    getSurat = async () =>
    {
        fetch( 'https://api.npoint.io/99c279bb173a6e28359c/data' )
            .then( ( response ) => response.json() )
            .then( ( json ) => this.setState( { ambilData: json } ) )
            .catch( ( err ) => console.log( err ) )
    }


    pencarian = () =>
    {
        let ambilData = this.state.ambilData;
        ambilData = ambilData.filter( item => item.nama.toLowerCase()
            .includes( this.state.pencarian.toLowerCase() ) );
        this.setState( { ambilData } )
    }

    render ()
    {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar backgroundColor={'#00796b'} />
                <View style={{
                    backgroundColor: '#00897b',
                    paddingVertical: 15,
                    elevation: 50,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    alignItems: 'center'
                }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>Al-Quran</Text>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate( 'AboutNav' ) }}>
                        <Icon style={{ marginRight: 10 }}
                            name="question-circle"
                            size={20}
                            color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <TextInput
                    value={this.state.pencarian}
                    onChangeText={( text ) => this.setState( { pencarian: text }, this.pencarian() )}
                    style={{
                        backgroundColor: '#FFFFFF',
                        marginHorizontal: 20,
                        marginTop: 10,
                        borderRadius: 50,
                        elevation: 8,
                        marginBottom: 20
                    }}
                    placeholder="Masukkan Kata Disini"
                />
                <FlatList
                    data={this.state.ambilData}
                    renderItem={( { item, index } ) => (
                        <TouchableOpacity style={{
                            marginVertical: 5,
                            marginHorizontal: 20,
                            padding: 10,
                            borderRadius: 5,
                            backgroundColor: '#eeeeee',
                            elevation: 3
                        }}
                            onPress={() =>
                            {
                                this.props.navigation.navigate( 'DetailNav', {
                                    id: item.nomor,
                                    ayat: item.nama
                                } )
                            }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: 'black'
                                    }}>{item.nomor}.</Text>
                                    <Text style={{
                                        color: 'black', marginLeft: 5
                                    }}>{item.nama}</Text>
                                </View>
                                <Text style={{
                                    color: 'black'
                                }}>{item.asma}</Text>
                            </View>
                            <Text style={{
                                color: 'black'
                            }}>{item.arti}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={( item ) => item.nomor}
                />

            </View>
        )
    }
}

export default Home;