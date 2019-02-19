
import React, {Component} from 'react';
import { Text, View } from 'react-native';


export class ShopScreen extends Component {
  static navigationOptions = {
    title: 'Shop',
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
        <Text>Shop!</Text>
      </View>
    );
  }
}
export default ShopScreen;