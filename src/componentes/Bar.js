import React,{Component} from 'react';
import {Image,TouchableOpacity} from 'react-native';

export default class Bar extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer();} }>
              <Image style={{width:40,height:40}} source={require('../img/menu.png')} />
            </TouchableOpacity>
        ); 

    }
}
