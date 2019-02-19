import React, {Component} from 'react';
import { WebView, View } from 'react-native';
export class UpdatePasswordScreen extends Component {
    static navigationOptions = {
      title: 'Update Password',
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
          <View style = {styles.mainViewStyle}>
            <WebView source={{uri: 'https://github.com/facebook/react-native'}} style={styles.webViewStyle}/>
          </View>
        );
      }
    };
  
    const styles = {
      mainViewStyle: {
          flex : 1,
          backgroundColor : 'white',
      },
      webViewStyle: {
          flex : 1,
          backgroundColor : 'white',
          margin : 0,
      }
  };
export default UpdatePasswordScreen;