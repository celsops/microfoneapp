import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import styles from './styles';
export default class Opcoes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.gravando){
            return(
                <View style={{flexDirection:'row',width:100,height:100}}>
                    <Image style={styles.opcao} source={require('../img/cancel-blue.png')} />
                    <Image style={styles.opcao} source={require('../img/pause-blue.png')} />
                </View>
            );
        }
        else{
            return(
                <View></View>
            );
        }
    }
}