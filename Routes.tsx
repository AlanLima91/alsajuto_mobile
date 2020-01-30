import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SignUp from './views/signUpView';
import SignIn from './views/signInView';
import RecoverAccount from './views/recoverAccountView';


import { TransitionConfiguration } from './TransitionsApp';
import MatcherView from './views/matcherView';
import SettingsView from './views/settings/settingsView';
import ProposalsView from './views/proposalsView';
import NotificationsView from './views/notificationsView';
import prefsView from './views/settings/prefView';
import paramsView from './views/settings/paramsView';
import displayedParamsView from './views/settings/displayedView';
// import WheelOfFortune from './components/WheelOfFortune'

const ProfileNavigator = createStackNavigator(
  {
    Profile: { screen: SettingsView },
    DisplayedParams: { screen: displayedParamsView },
    Params: { screen: paramsView },
    Prefs: { screen: prefsView },
  },
  {
    initialRouteName: 'Profile',
    transitionConfig: TransitionConfiguration,
    defaultNavigationOptions: {
      headerShown: false
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Matcher: { screen: MatcherView },
    Settings: { screen: ProfileNavigator },
    Proposals: { screen: ProposalsView },
    Notifications: { screen: NotificationsView },
    // WheelOfFortune: { screen: WheelOfFortune},
  },
  {
    initialRouteName: 'Matcher',
    drawerType: 'back',
    navigationOptions: {
      headerLeft: withNavigation(({ navigation }) => (<Text onPress={() => { navigation.toggleDrawer() }} style={{ color: 'black' }}>Menu</Text>)),
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    RecoverPwd: { screen: RecoverAccount },
    LogIn: { screen: DrawerNavigator },
  },
  {
    initialRouteName: 'SignIn',
    transitionConfig: TransitionConfiguration,
  }
);

export const SignInContainer = createAppContainer(AppNavigator);

