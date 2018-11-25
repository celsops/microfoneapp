import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import styles from './styles'
export default class Conectar extends Component{
    render(){
        return (
            <View style={styles.centralizar}>
                <Text>Formas de conexão:</Text>
                <Image style={styles.imagem} source={require('../img/wifi.png')} />
                <Image style={styles.imagem} source={require('../img/bluetooth.png')} />
            </View>
        );
    }
}