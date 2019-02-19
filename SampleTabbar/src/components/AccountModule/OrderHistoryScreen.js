
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Header from '../LoginModule/header';
export class OrderHistoryScreen extends Component {
  static navigationOptions = {
    title: 'Order History',
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
        <Text>Order History</Text>
      </View>
    );
  }
}
export default OrderHistoryScreen;