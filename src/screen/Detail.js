import React, { Component } from 'react';
import {View, Text, StatusBar,  TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <View style={{flex: 1, backgroundColor:'grey'}}>
            <StatusBar backgroundColor={'#e64a19'}/>
                <View style={{
                    backgroundColor:'#ff5722', 
                    paddingVertical: 15, 
                    elevation: 5,
                    flexDirection:'row',
                    paddingHorizontal: 10,
                    alignItems: 'center'}}>

                    <TouchableOpacity onPress={() => {this.props.navigation.pop()}}>
                    <Icon style={{marginRight: 10}} 
                    name="chevron-left" 
                    size={20} 
                    color="#FFFFFF" />
                    </TouchableOpacity>

                    <Text style={{
                        color:'white', 
                        textAlign:'center', 
                        fontWeight:'bold', 
                        fontSize: 18}}>Detail</Text>
                </View>
                
                <Text style={{color:'#ffffff', textAlign:'center', fontSize: 18, fontWeight: 'bold', marginTop: 10}}>{this.props.route.params.judul}</Text>
                <Text style={{color:'#ffffff', textAlign:'center', fontSize: 15, fontWeight: 'bold'}}>{this.props.route.params.deskripsi}</Text>
            </View>
        )
    }
}

export default Detail;