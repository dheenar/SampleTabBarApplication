
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Header from '../LoginModule/header';
export class AccountStatementScreen extends Component {
  static navigationOptions = {
    title: 'Account Statement',
    headerStyle: {
      backgroundColor: '#1e90ff',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
     
    },
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'white'}}>
      <Header/>
        <Text>Account Statement</Text>
      </View>
    );
  }
}
export default AccountStatementScreen;