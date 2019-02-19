/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer ,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/components/pages/HomeScreen';
import ShopScreen from './src/components/pages/ShopScreen';
import AccountScreen from './src/components/pages/AccountScreen';
import WishListScreen from './src/components/pages/WishListScreen';
import MoreScreen from './src/components/pages/MoreScreen';
import LoginScreen from './src/components/LoginModule/login';
import ForgotpasswordScreen from './src/components/LoginModule/ForgotPasswordScreen';
import SupportScreen from './src/components/MoreModule/SupportScreen';
import ContactUsScreen from './src/components/MoreModule/ContactUsScreen';
import SettingsScreen from './src/components/MoreModule/SettingsScreen';
import TermsOfUseScreen from './src/components/MoreModule/TermsOfUseScreen';
import PrivacyPolicyScreen from './src/components/MoreModule/PrivacyPolicyScreen';

import AccountStatementScreen from './src/components/AccountModule/AccountStatementScreen';
import AccountSummaryScreen from './src/components/AccountModule/AccountSummaryScreen';
import OrderHistoryScreen from './src/components/AccountModule/OrderHistoryScreen';
import UpdateContactScreen from './src/components/AccountModule/UpdateContactScreen';
import UpdateEmailScreen from './src/components/AccountModule/UpdateEmailScreen';
import UpdatePasswordScreen from './src/components/AccountModule/UpdatePasswordScreen';
import UploadDocumentsScreen from './src/components/AccountModule/UploadDocumentsScreen';




const AccountNavigator = createStackNavigator(
  {
    Account: AccountScreen,
    AccountSummary: AccountSummaryScreen,
    AccountStatement: AccountStatementScreen,
    OrderHistory: OrderHistoryScreen,
    UpdateContact: UpdateContactScreen,
    UpdateEmail: UpdateEmailScreen,
    UpdatePassword: UpdatePasswordScreen,
    UploadDocuments: UploadDocumentsScreen,
  },
  {
    initialRouteName: 'Account',
  }
);

const MoreNavigator = createStackNavigator(
  {
    More: MoreScreen,
    Support: SupportScreen,
    ContactUs: ContactUsScreen,
    Settings: SettingsScreen,
    TermsOfUse: TermsOfUseScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
  },
  {
    initialRouteName: 'More',
  }
);

const tapBar = createBottomTabNavigator({
   Home: HomeScreen, 
   Shop: { screen: ShopScreen },
   Account: AccountNavigator,
   WishList: { screen: WishListScreen },
   More: MoreNavigator,
 });

 const LoginNavigator = createStackNavigator(
  {
    Home: {
      screen: LoginScreen
    },
    Forgotpassword: {
      screen: ForgotpasswordScreen
    }
  },
);



export default createAppContainer(createSwitchNavigator(
  {
    Login: LoginNavigator,
    App: tapBar,

  },
  {
    initialRouteName: 'Login',
  }
));
