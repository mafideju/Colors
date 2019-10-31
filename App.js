import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListOne from './src/screens/ListScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import FormScreen from './src/screens/FormScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListOne,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Form: FormScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Box',
    defaultNavigationOptions: {
      title: 'Mafideju Software Co.'
    }
  }
);

export default createAppContainer(navigator);
