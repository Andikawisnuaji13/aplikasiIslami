import React, { Component } from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

class Beranda extends Component {
    constructor(props){
        super(props)
        this.state={currentTime: null, currentDay: null }
        this.daysArray=['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
    }

    componentWillUnmount() {
        this.getCurrentTime();
      }
    
      getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = 'pm';
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        if (hour > 12) {
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12) {
          am_pm = 'am';
        }
    
        this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });
    
        this.daysArray.map((item, key) => {
          if (key == new Date().getDay()) {
            this.setState({ currentDay: item.toUpperCase() });
          }
        })
      }
    
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      componentDidMount() {
        this.timer = setInterval(() => {
          this.getCurrentTime();
        }, 1000);
      }
    
    render() {
        return(
            <ScrollView style={{flex: 1, backgroundColor:'#00897b'}}>
                <View style={{backgroundColor:'#00897b', height: 200, justifyContent:'space-between', flexDirection: 'row', alignItems:'center'}}>
                    <View style={{paddingLeft: 20,flex: 1, height: 200, justifyContent:'center' }}>
                        <Text style={{color:'white', fontSize: 40, fontWeight:'bold'}}>{this.state.currentTime}</Text>
                        <Text style={{color:'white', fontSize: 20, fontWeight:'bold'}}>{this.state.currentDay}</Text>
                    </View>
                    <Image source={require('../assets/bg.png')} style={{height: 200, width: 200,}}/>
                </View>
                <View style={{flex: 1, borderBottomWidth: 10, backgroundColor:'white', borderBottomColor:'#eeeeee', justifyContent:'center', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                    <View style={{flexDirection:'row',  height: 100, justifyContent:'space-around', marginBottom: 30, marginTop: 30}}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('DoaNav')}}>
                        <View style={{backgroundColor:'#00897b', alignItems:'center', justifyContent:'center', borderRadius: 50, width: 80, height: 80 , marginHorizontal: 10}}>
                            <Image source={require('../assets/doa.png')} style={{height: 65, width: 65, marginHorizontal: 50}}/>
                        </View>
                        <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}> Wirid dan Doa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('JadwalShalatNav')}}>
                        <View style={{backgroundColor:'#00897b', alignItems:'center', justifyContent:'center', borderRadius: 50, width: 80, height: 80 , marginHorizontal: 10}}>
                            <Image source={require('../assets/clock.png')} style={{height: 65, width: 65, marginHorizontal: 50}}/>  
                        </View>
                        <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Jadwal Shalat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',  height: 100, justifyContent: 'space-around', alignItems:'center', marginBottom: 20}}> 
                        <TouchableOpacity>
                            <View style={{backgroundColor:'#00897b', alignItems:'center', justifyContent:'center', borderRadius: 50, width: 80, height: 80 , marginHorizontal: 10}}>
                                <Image source={require('../assets/islam.png')} style={{height: 65, width: 65, }}/>
                            </View>
                            <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Dzikir/Tahlil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('TasbihNav')}}>
                            <View style={{backgroundColor:'#00897b', alignItems:'center', justifyContent:'center', borderRadius: 50, width: 80, height: 80 , marginHorizontal: 10}}>
                                <Image source={require('../assets/tasbih.png')} style={{height: 55, width: 65, marginHorizontal: 50}}/> 
                            </View>
                            <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Tasbih</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{flex: 1, backgroundColor:'white'}}>
                    <View style={{borderBottomWidth: 1, borderBottomColor:'#eeeeee', padding: 10}}>
                        <Text style={{fontSize: 17}}>Portal Berita Terkini</Text>
                    </View>
                    <View style={{height: 150, backgroundColor:'#e0e0e0', marginTop: 10, borderRadius: 20, marginHorizontal: 10}}></View>
                    <View style={{height: 150, backgroundColor:'#e0e0e0', marginTop: 10, borderRadius: 20, marginHorizontal: 10}}></View>
                    <View style={{height: 150, backgroundColor:'#e0e0e0', marginTop: 10, borderRadius: 20, marginHorizontal: 10}}></View>
                    <View style={{height: 150, backgroundColor:'#e0e0e0', marginTop: 10, borderRadius: 20, marginHorizontal: 10}}></View>
                </View>
            </ScrollView>
        );
    }
}

export default Beranda;