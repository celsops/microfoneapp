import { createAppContainer,createDrawerNavigator } from 'react-navigation'; 
import MeusAudios from './src/componentes/MeusAudios';
import Conectar from './src/componentes/Conectar';
import Teste from './src/componentes/Teste';
import Home from './src/componentes/Home';
import CriarSala from './src/componentes/CriarSala';

const MyDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:Home
  },
  CriarSala:{
    screen:CriarSala
  },
  Audios:{
    screen: MeusAudios,
  },
  Conectar:{
    screen: Conectar
  },
  Teste:{
    screen: Teste
  },

});

export default createAppContainer(MyDrawerNavigator);