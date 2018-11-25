import { createAppContainer,createDrawerNavigator } from 'react-navigation'; 
import MeusAudios from './src/componentes/MeusAudios';
import Modos from './src/componentes/Modos'
import Conectar from './src/componentes/Conectar'
import Bar from './src/componentes/Bar'
const MyDrawerNavigator = createDrawerNavigator({
  Bar:{
    screen:Bar
  },

  Audios:{
    screen: MeusAudios
  },
  Conectar:{
    screen: Conectar
  },
  Modos: {
    screen: Modos,
  },
});

export default createAppContainer(MyDrawerNavigator);