import React, {Component} from 'react';
import { Text, View,TextInput,Switch, Button ,TouchableOpacity} from 'react-native';
  
export class Login extends Component {
    static navigationOptions = {
        title: 'Purchasing Power',
        headerStyle: {
          backgroundColor: '#1e90ff',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
         
        },
      };
    
    state = {
        username: '',
        password: ''
    };
loginButtonTapped = () => {
    this.props.navigation.navigate('App');
}
forgotButtonTapped = () => {
    this.props.navigation.navigate('Forgotpassword');
}
render() {
  return (
       <View style = {styles.mainViewStyle}>

          <Text style = {styles.titleStyle}> Log in to Purchasing Power</Text>
          <View style = {styles.fieldsViewStyle}>
              <Text style = {styles.textLabelsStyle}>Email</Text>
              <TextInput style = {styles.inputContainer} placeholder="Enter your email address" onChangeText={(value) => this.setState({username: value})}  value={this.state.username}/>
              <Text style = {[styles.textLabelsStyle,styles.passwordLabelsStyle]}>Password</Text>
              <TextInput style = {styles.inputContainer} placeholder=" purchasing Power password"/>
          </View>
          <View style = {styles.viewForRememberStyle}>
              <Text style = {styles.rememberLabelsStyle}>Remember email and password</Text>
              <Switch style = {styles.switchStyle}/>
              
          </View>
          <View style = {styles.viewForTouchIDStyle}>
              <Text style = {styles.rememberLabelsStyle}>Sign in with Touch ID</Text>
              <Switch style = {styles.switchStyle}/>
             
          </View>
          <View style = {styles.viewForLoginAndForgotPasswordStyle}>
              <TouchableOpacity title="Login"  color="blue" style = {styles.loginButtonStyle} onPress= {this.loginButtonTapped}><Text style = {styles.loginButtonTextStyle}>Login</Text></TouchableOpacity>
              <TouchableOpacity style = {styles.forgotButtonStyle}><Text style = {styles.forgotButtonTextStyle} onPress= {this.forgotButtonTapped}>Forgot email or password?</Text></TouchableOpacity>
    
          </View>
       </View>
      );
  }
};

const styles = {
    mainViewStyle : {
        flex : 1,
        backgroundColor : 'white',
    },
    titleStyle : {
        fontSize:20,
        //backgroundColor : 'green',
        paddingTop:20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems :  'center',
        height : 60,
        textAlign: 'center',
    },
    fieldsViewStyle : {
        //backgroundColor : 'red',
        height : 160,
        margin: 15,
        marginTop:20,
    },
    textLabelsStyle : {
        fontSize:16,
        //backgroundColor : 'yellow',
        paddingTop:0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height : 25,
        width: 100,
        textAlign: 'left',
        margin: 0,
        
    },
    passwordLabelsStyle : {
        
        marginTop:15,
        
    },
    inputContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius:5,
        height: 35,
        borderColor:'black',
        backgroundColor : 'white',
        editable: true,
        borderWidth: 2,
        borderColor: 'lightgrey', 
        paddingLeft: 10,

      },
      viewForRememberStyle: {
        height : 35,
        margin: 15,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginTop:0,
      },
      viewForTouchIDStyle: {
        height : 70,
        marginLeft: 15,
        marginRight: 15,
        marginTop:0,
        flexDirection: 'row',
      },
      rememberLabelsStyle : {
        fontSize:16,
        //backgroundColor : 'yellow',
        paddingTop:0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height : 35,
        textAlign: 'left',
        margin: 0,
        width: '80%',
        
    },
    switchStyle: {
       position: 'relative',
    },
    viewForLoginAndForgotPasswordStyle: {
        height : 80,
        marginLeft: 15,
        marginRight: 15,
        marginTop:0,
    },

    loginButtonStyle:{
        borderRadius:5,
        marginLeft: 0,
        marginRight: 0,
        height:40,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1e90ff',
       
    },
    forgotButtonStyle:{
        backgroundColor:'white',
        marginLeft: 0,
        marginRight: 0,
        marginTop:10,
        height:30,
        justifyContent:'center',
        alignItems:'center',

       
    },
    loginButtonTextStyle:{
        fontSize: 20,
        color : 'white',
    },
    forgotButtonTextStyle: {
        fontSize: 16,
        color : '#1e90ff',
        backgroundColor:'white',
    },
   
};

export default Login;