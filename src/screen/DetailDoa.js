import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import Icon from 'react-native-vector-icons/FontAwesome5';

class DetailDoa extends Component {
    constructor () {
        super ()
        this.state = {}
    }
    render () {
        return (
            <View style={{backgroundColor:'white', flex: 1}}>
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
                        }}>{this.props.route.params.namanya}</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                <Text style={Gaya.Text}>{this.props.route.params.ayatnya}</Text>
                <Text style={Gaya.Text}>{this.props.route.params.latinnya}</Text>
                <Text style={Gaya.Text}>{this.props.route.params.arti}</Text>
                </View>
            </View>
        )
    }
}

const Gaya = StyleSheet.create ({
    Text : {marginBottom: 20, fontSize: 20}
})

export default DetailDoa;