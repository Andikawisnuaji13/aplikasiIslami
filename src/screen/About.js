import React, { Component } from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor:'grey'}}>
            <StatusBar backgroundColor={'#e64a19'}/>
                <View style={{
                    backgroundColor:'#ff5722', 
                    paddingVertical: 15, 
                    elevation: 5,
                    flexDirection:'row'}}>
                <TouchableOpacity 
                style={{marginLeft: 20}} 
                onPress={() => {this.props.navigation.pop()}}>
                    <Icon
                    name='chevron-left'
                    size={20}
                    color='#ffffff'
                    />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                <Text style={{
                    color:'white', 
                    textAlign:'center', 
                    fontWeight:'bold', 
                    fontSize: 18,
                    marginRight: 20}}>About</Text>
                </View>
                </View>
            </View>
        )
    }
}

export default About;