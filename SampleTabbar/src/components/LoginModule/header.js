import React, {Component} from 'react';
import {View} from 'react-native';

const Header = (ss) => {
    return (
         <View style = {styles.viewStyle}>
          {/* <Text>Home</Text> */}
        </View>
        );

};

const styles = {
     viewStyle: {
      backgroundColor : '#1e90ff',
      justifyContent : 'center',
      alignItems :  'center',
      height : 84,
      paddingTop : 20,

    },
    textStyle: {
        fontSize:20
    },
    logoImageStyle:{
        height:44,
        width:130,
        marginTop: 20,
       
    },
};

export default Header;