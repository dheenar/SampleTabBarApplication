
import React, {Component} from 'react';
import { Text,View } from 'react-native';
import Header from '../LoginModule/header';
 export class AccountSummaryScreen extends Component {
  static navigationOptions = {
    title: 'Account Summary',
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
        <Text>Account Summary</Text>
      </View>
    );
  }
}
export default AccountSummaryScreen;