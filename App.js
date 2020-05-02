import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import DetailScreen from './screen/DetailScreen';
import COLORS from './utils/COLORS';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Detail: DetailScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Restaurantee',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: COLORS.primary2,
    },
    headerTintColor: COLORS.white1,
  }
});

export default createAppContainer(navigator);