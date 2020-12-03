import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1181468Navigator from '../features/BlankScreen1181468/navigator';
import OnboardingSlideScreen1181450Navigator from '../features/OnboardingSlideScreen1181450/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1181468: { screen: BlankScreen1181468Navigator },
OnboardingSlideScreen1181450: { screen: OnboardingSlideScreen1181450Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu, 
    initialRouteName: "OnboardingSlideScreen1181450",
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
