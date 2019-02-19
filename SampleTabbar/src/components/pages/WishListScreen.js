import React, {Component} from 'react';
import { View,WebView,Text } from 'react-native';

export class WishListScreen extends Component {
  static navigationOptions = {
    title: 'WishList',
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
        <View style = {styles.viewStyle}>
          <Text style = {styles.textStyle}>WishList</Text>
          </View>
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
    },
   viewStyle: {
       backgroundColor : '#1e90ff',
       justifyContent : 'center',
       alignItems :  'center',
       height : 84,
       paddingTop : 20,
 
     },
     textStyle: {
         fontSize:20,
         color: 'white',
     },
  
 };
export default WishListScreen;
