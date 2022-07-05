import React, { Component } from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {judul: 'Apel', deskripsi: 'Apel adalah sebuah buah'},
                {judul: 'Jeruk', deskripsi:'Jeruk adalah sebuah buah'},
                {judul: 'Melon', deskripsi:'Melon adalah sebuah buah'},
                {judul: 'Nanas', deskripsi:'Nanas adalah sebuah buah'},
                {judul: 'Semangka', deskripsi:'Semangka adalah sebuah buah'},
                {judul: 'Pisang', deskripsi:'Pisang adalah sebuah buah'},
                {judul: 'Salak', deskripsi:'Salak adalah sebuah buah'},
                {judul: 'Durian', deskripsi:'Durian adalah sebuah buah'},
                {judul: 'Pear', deskripsi:'Pear adalah sebuah buah'},
                {judul: 'Strawberry', deskripsi:'Strawberry adalah sebuah buah'},
            ],
            dataTampil:[
                {judul: 'Apel', deskripsi: 'Apel adalah sebuah buah'},
                {judul: 'Jeruk', deskripsi:'Jeruk adalah sebuah buah'},
                {judul: 'Melon', deskripsi:'Melon adalah sebuah buah'},
                {judul: 'Nanas', deskripsi:'Nanas adalah sebuah buah'},
                {judul: 'Semangka', deskripsi:'Semangka adalah sebuah buah'},
                {judul: 'Pisang', deskripsi:'Pisang adalah sebuah buah'},
                {judul: 'Salak', deskripsi:'Salak adalah sebuah buah'},
                {judul: 'Durian', deskripsi:'Durian adalah sebuah buah'},
                {judul: 'Pear', deskripsi:'Pear adalah sebuah buah'},
                {judul: 'Strawberry', deskripsi:'Strawberry adalah sebuah buah'},
            ],
            pencarian : ''
        };
    }

    pencarian = () => {
        let data = this.state.data;

        data = data.filter(item => item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()));

        this.setState({dataTampil: data})
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
                    <View style={{flex: 1}}>
                     <Text style={{
                        color:'white', 
                        textAlign:'center', 
                        fontWeight:'bold', 
                        fontSize: 18}}>Home</Text>
                    </View>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('About')}}>
                    <Icon style={{marginRight: 10}} 
                    name="question-circle" 
                    size={20} 
                    color="#FFFFFF" />
                    </TouchableOpacity>
                   

                </View>

                <TextInput
                value={this.state.pencarian}
                onChangeText={(text) => this.setState({pencarian: text}, this.pencarian())}
                style={{
                    backgroundColor:'#FFFFFF', 
                    marginHorizontal: 20, 
                    marginTop: 10, 
                    borderRadius: 50, 
                    marginBottom: 20}}
                    placeholder="Masukkan Kata Disini"
                />
                
                <FlatList
                data={this.state.dataTampil}
                renderItem={({item, index}) => (
                <TouchableOpacity style={{
                    marginVertical: 10, 
                    marginHorizontal: 20, 
                    padding: 10, 
                    borderRadius: 5, 
                    backgroundColor:'#ff5722', 
                    elevation: 3}}
                    onPress={() => {this.props.navigation.navigate('Detail', {
                        judul : item.judul,
                        deskripsi : item.deskripsi
                    })}}>
                    <Text style={{
                        color:'#FFFFFF'}}>{item.judul}</Text>
                    <Text style={{
                        color:'#FFFFFF'}}>{item.deskripsi}</Text>
                </TouchableOpacity>
                )}
                keyExtractor={(item) => item.judul}
                />
            </View>
        )
    }
}

export default Home;