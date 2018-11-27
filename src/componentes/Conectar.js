import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import Bar from './Bar'
export default class Conectar extends Component{
    static navigationOptions = {
        drawerLabel: 'Conectar',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/conect.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    }
    render(){
        return (
            <View>
                <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
                    <Bar/>
                </TouchableOpacity>
                <View style={styles.centralizar}>
                    <Text style={styles.titulo}>Formas de conexão:</Text>
                    <Image style={[styles.imagem, {marginTop:30}]} source={require('../img/wifiBlue.png')} />
                    <Image style={[styles.imagem, {marginTop:10, width:150}]} source={require('../img/bluetooth2.png')} />
                </View>
            </View>
        );
    }
}