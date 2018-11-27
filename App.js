import { createAppContainer,createDrawerNavigator } from 'react-navigation'; 
import MeusAudios from './src/componentes/MeusAudios';
import Conectar from './src/componentes/Conectar'


const MyDrawerNavigator = createDrawerNavigator({
  Audios:{
    screen: MeusAudios,
    
  },
  Conectar:{
    screen: Conectar
  },
  
});

export default createAppContainer(MyDrawerNavigator);