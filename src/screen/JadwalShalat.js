// https://documenter.getpostman.com/view/841292/Tz5p7yHS#395bca83-517d-4c41-8e03-7cc265070ab4
// https://api.myquran.com/v1/sholat/jadwal/1434/2022/07

import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class JadwalShalat extends Component {
    constructor (props) {
        super (props) 
        this.state = {
            dataJadwal:[],
        }
    }

    componentDidMount(){
        this.AmbilDataJadwal()
    }

    AmbilDataJadwal = async () => {
        fetch('https://api.myquran.com/v1/sholat/jadwal/1434/2022/07')
        .then((response) => response.json())
        .then((json) => this.setState({dataJadwal:json.data.jadwal}))
        .catch((err) => console.log(err))
    }
    render() {
        return(
            <View style={{flex: 1, backgroundColor:'white'}}>
                <View style={{backgroundColor:'#00897b', paddingVertical: 15, elevation: 5, alignItems:"center", flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.props.navigation.pop()}} style={{marginLeft: 10}}>
                    <Icon
                    name="chevron-left"
                    size={20}
                    color={'white'}/>
                </TouchableOpacity>
                <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight:'bold', color:'white', marginRight: 40}}>Jadwal Shalat</Text>
                </View>
                </View>
                <FlatList
                    data={this.state.dataJadwal}
                    renderItem={({item, index}) => (
                        <View style={{marginVertical: 20}}>
                            <View style={{paddingHorizontal: 50}}>
                                <View style={{backgroundColor:'white', elevation: 5, paddingVertical: 10, alignItems:'center', justifyContent:'center'}}>
                                    <Text>{item.tanggal}</Text>
                                </View>
                            </View>
                            <View style={{flex: 1, paddingHorizontal: 50, paddingVertical: 20}}>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Imsak</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.imsak}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Subuh</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.subuh}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Terbit</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.terbit}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Dhuha</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.dhuha}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Dzuhur</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.dzuhur}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Ashar</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.ashar}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Maghrib</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.maghrib}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 10}}>
                                    <Text>Isya</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight: 15}}>{item.isya}</Text>
                                        <Icon
                                        name="volume-up"
                                        size={15}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.tanggal}
                />
            </View>
        )
    }
}

export default JadwalShalat;