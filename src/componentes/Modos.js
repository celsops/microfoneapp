import React,{Component} from 'react';
import { View, Text,Image,Picker } from 'react-native';
import styles from './styles'

export default class Modos extends Component {
    constructor(){
        super();
        this.state = {language:""}
    }
    static navigationOptions = {
      drawerLabel: 'Modos',
      drawerIcon: () => (
        <Image
          source={require('../img/notif-icon.png')}
          style={styles.icon}
        />
      ),
    };
    render() {
      return (
        <View>
            <Text>Modo atual:</Text>
            <View>
            <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>

                <Picker.Item label="Gravação" value="gravacao" />
                <Picker.Item label="Enviar diretamente" value="transmisao" />
            </Picker>
            </View>
            <Text>Microfone</Text>
        </View>

      );
    }
  }
  