//Created on Wednesday 02 June 2021 10∶10∶10 AM
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';

import {
    DetailsScreen,
    Home,
    OnBoardScreen
} from './app';

const Router = createStackNavigator(
    {
        DetailsScreen,
        Home,
        OnBoardScreen
    },
    {
        initialRouteName: 'OnBoardScreen',
        headerMode: 'none',
        defaultNavigationOptions: {
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }
    }
);

export default createAppContainer(Router);