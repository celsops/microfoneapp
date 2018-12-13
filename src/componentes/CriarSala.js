import React,{Component} from 'react'
import {View,Image,TouchableOpacity,Text,TextInput,ScrollView,Button} from 'react-native';
import Bar from './Bar'
import styles from './styles'
export default class CriarSala extends Component{
    constructor(props){
        super(props);
        this.state = {nomeSala:'',senhaSala:'',descricaoSala:''}
    }
    static navigationOptions = {
        drawerLabel: 'Criar sala',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../img/mais.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    };
    render(){
        return(
            <ScrollView>
                <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
                    <Bar/>
                </TouchableOpacity>
                
                <ScrollView  style={{marginTop:"5%"}}>
                    <View style={{flexDirection:"column"}}>
                        <Text style={styles.texto}>Nome:</Text>
                        <TextInput 
                        style = {styles.caixaTexto}
                        onChangeText={(text) => this.setState({nomeSala:text})} 
                        value = {this.state.nomeSala}
                        placeholder = "Nome da sala"
                        />
                    </View>
                    <View style={{flexDirection:"column"}}>
                        <Text style={styles.texto}>Senha:</Text>
                        <TextInput 
                        style = {styles.caixaTexto}
                        onChangeText={(text) => this.setState({senhaSala:text})} 
                        value = {this.state.senhaSala}
                        placeholder = "Senha da sala"
                        />
                    </View>
                    <View style={{flexDirection:"column"}}>
                        <Text style={[styles.texto,{marginLeft:"30%",marginTop:10}]}>Descrição:</Text>
                        <TextInput 
                        style = {styles.caixaTexto}
                        onChangeText={(text) => this.setState({descricaoSala:text})} 
                        value = {this.state.descricaoSala}
                        placeholder = "Descrição da sala"
                        multiline = {true}
                        numberOfLines = {4}
                        editable = {true}
                        maxLength = {10}
                        />
                    </View>
                    <View style={{flexDirection:"row",marginLeft:60,marginTop:30}} >
                        <View style={{padding:10}}>
                        <Button
                            title="Cancelar"
                            onPress={()=>{console.log("eu");}}
                            />
                        </View>
                        <View style={{padding:10}}>
                            <Button
                            title="Confirma"
                            onPress={()=>{console.log("eu");}}
                            />
                        </View>
                    </View>
                    
                </ScrollView>

            </ScrollView>
        );
    } 
}