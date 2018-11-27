import React,{Component} from 'react';
import {Image,TouchableOpacity,View} from 'react-native';

export default class Bar extends Component{

    render(){
        return(
            <View>
                <Image style={{width:40,height:40}} source={require('../img/menu.png')} />
            </View>
        ); 

    }
}
