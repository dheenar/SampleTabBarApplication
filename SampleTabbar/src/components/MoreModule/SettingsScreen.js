import React, {Component} from 'react';
import { Text, View } from 'react-native';
 export class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
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
        <Text>Settings!</Text>
      </View>
    );
  }
}
export default SettingsScreen;