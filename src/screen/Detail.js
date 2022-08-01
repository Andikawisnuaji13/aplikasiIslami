import React, { Component } from 'react';
import {View, Text, StatusBar,  TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ambilData:[],
        };
    }

    componentDidMount() { 
        this.getAyat()
     }
    getAyat = async () => {
        const params = this.props.route.params
        console.log(params)
        fetch('https://api.npoint.io/99c279bb173a6e28359c/surat/' + params.id ) 
        .then((response) => response.json())
        .then((json) => this.setState({ambilData: json}))
        .catch((err) => console.log(err))
    }



    render(){
        return(
            <View style={{flex: 1}}>
            <StatusBar backgroundColor={'#00796b'}/>
                <View style={{
                    backgroundColor:'#00897b', 
                    paddingVertical: 15, 
                    elevation: 5,
                    flexDirection:'row',
                    marginBottom: 20,
                    paddingHorizontal: 10,
                    alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {this.props.navigation.pop()}} style={{
                        flexDirection: 'row'
                    }}>
                    <Icon style={{marginRight: 10}} 
                    name="chevron-left" 
                    size={20} 
                    color="#FFFFFF" />
                    <Text style={{
                        color:'white', 
                        textAlign:'center', 
                        fontWeight:'bold', 
                        fontSize: 18}}>{this.props.route.params.ayat}</Text>
                    </TouchableOpacity>

                </View>
                
                <FlatList
                data={this.state.ambilData}
                renderItem={({item, index}) => (
                <TouchableOpacity style={{
                    marginHorizontal: 20, 
                    padding: 10,
                    backgroundColor:'#eeeeee'}}
                    onPress={() => {}}>
                    <Text style={{color:'black', fontSize: 15}}>{item.nomor}</Text>
                    <Text style={{
                        color:'black', fontSize: 20}}>{item.ar}</Text>
                    {/* <Text style={{
                        color:'black'}}>{item.tr}</Text> */}
                </TouchableOpacity>
                )}
                keyExtractor={(item) => item.ar}
                />
            </View>
        )
    }
}

export default Detail;