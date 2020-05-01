import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';


const navigator = createStackNavigator({
  Principal: HomeScreen,
  Cores: ColorScreen,
  Quadrados: SquareScreen
},{
  initialRouteName: 'Principal'
});


export default createAppContainer(navigator);