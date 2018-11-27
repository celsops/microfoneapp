import React,{Component} from 'react';
import {Image,Switch,Text,View,TouchableOpacity,Picker} from 'react-native';
import styles from './styles'
import Bar from './Bar'
import Opcoes from './Opcoes'

export default class MeusAudios extends Component {
  constructor(){
    super();
    this.state = {switch:false,gravando:false,modo:''}
  }

  static navigationOptions = {
    drawerLabel: 'Meus áudios',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/myFiles.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  gravar(){
    let s = this.state.switch
    let g = this.state.gravando
    this.setState({switch:!s,gravando:!g})
  }
  render() {
    return (
        <View>
          <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
            <Bar/>
          </TouchableOpacity>
          
          <View style = {styles.centralizar}>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.titulo, {marginBottom:-20}]}>Modo:</Text>
              <Picker 
              selectedValue={this.state.modo}
              style={{ height: 50, width: 200 }}
              onValueChange={(itemValue) => this.setState({modo: itemValue})}>

                  <Picker.Item label="Gravação" value="gravacao" />
                  <Picker.Item label="Enviar diretamente" value="transmisao" />
              </Picker>

            </View>

            <Text style={[styles.titulo, {marginBottom:10}]}>Dispositivo: XXXXXXX</Text>
            <Image style={[styles.imagem, {marginBottom:20}]} 
              source={this.state.gravando==false ? require('../img/microfoneOff.png') : require('../img/microfoneOn.png')}/>
            <View style={{flexDirection:'row',width:100}}>
                <Text style={styles.texto}>Falar</Text>
                <Switch  
                style={[styles.botaoSwitch,{flex:1}]}

                onValueChange = {this.gravar.bind(this)}
                value={this.state.switch}
                />
            </View>
            <Opcoes gravando={this.state.gravando} />
          </View>
        </View>
    );
  }
}    