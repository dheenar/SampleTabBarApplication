
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Header from '../LoginModule/header';
 class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
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
        <Text>Home!</Text>
      </View>
    );
  }
}
export default HomeScreen;