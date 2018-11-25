import React,{Component} from 'react';
import {Image,Switch,Text,View} from 'react-native';
import styles from './styles'
import Bar from './Bar'

export default class MeusAudios extends Component {
    static navigationOptions = {
      drawerLabel: 'Meus áudios',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../img/chats-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
          <View>
            <Bar></Bar>
            <View style = {styles.centralizar}>

              <Text>Modo: Gravação</Text>
              <Text>Dispositivo: XXXXXXX</Text>
              <Image source={require('../img/noMicrofone.png')}/>
              <View style={{flexDirection:'row'}}>
                  <Text>Talk</Text>
                  <Switch  ></Switch>

              </View>
            </View>
          </View>
      );
    }
  }    