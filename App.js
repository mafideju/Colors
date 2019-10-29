import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListOne from './src/screens/ListScreen';
import CounterScreen from './src/screens/CounterScreen';
// import { FlatList } from 'react-native-gesture-handler';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListOne,
    Image: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Mafideju Software Co.'
    }
  }
);

export default createAppContainer(navigator);
