import React,{Component} from 'react'
import {View,Image,TouchableOpacity,Text} from 'react-native';
import Bar from './Bar'
import styles from './styles'
export default class Home extends Component{
    
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    };
    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
                    <Bar/>
                </TouchableOpacity>
                <View style={{alignItems:'center',marginTop:"20%"}}>
                    <Text style={styles.titulo}>Bem vindo ao nosso aplicativo!</Text>
                    <Image style={styles.imagem} source={require('../img/tapete-microfone-logo-empresa-4-10467.jpg')} />

                </View>
            </View>
        );
    }
}