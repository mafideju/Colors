import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';
import FormScreen from './screens/FormScreen'
import BoxesScreen from './screens/BoxesScreen';

const navigator = createStackNavigator({
  Principal: HomeScreen,
  Cores: ColorScreen,
  Quadrados: SquareScreen,
  Formulário: FormScreen,
  Boxes: BoxesScreen
},{
  initialRouteName: 'Principal'
});


export default createAppContainer(navigator);