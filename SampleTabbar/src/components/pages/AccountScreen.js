import React, {Component} from 'react';
import { StyleSheet, ListView ,View,Text,Alert,Image} from "react-native";


export class AccountScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2  });

    this.state = {
      dataSource: ds.cloneWithRows([
        "Account Summary",
        "Account Statement",
        "Order History",
        "Update Contact Information",
        "Update Email",
        "Update Password",
        "Upload Documents",
      ])
    };
  }
  static navigationOptions = {
    title: 'Account',
    headerStyle: {
      backgroundColor: '#1e90ff',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
     
    },
  };
  GetListViewItem = (rowData) => {
    Alert.alert(rowData);
    if (rowData == "Account Summary") {
      this.props.navigation.navigate('AccountSummary');
    } else if (rowData == "Account Statement") {
      this.props.navigation.navigate('AccountStatement');
    } else if (rowData == "Order History") {
      this.props.navigation.navigate('OrderHistory');
    } else if (rowData == "Update Contact Information") {
      this.props.navigation.navigate('UpdateContact');
    } else if (rowData == "Update Email") {
      this.props.navigation.navigate('UpdateEmail');
    } else if (rowData == "Update Password") {
      this.props.navigation.navigate('UpdatePassword');
    } else if (rowData == "Upload Documents") {
      this.props.navigation.navigate('UploadDocuments');
    } 
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ rowData => ( <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData)}>{rowData} </Text> )}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor : '#1e90ff',
  },
  textStyle: {
    fontSize:20,
    textAlign: 'left',
    backgroundColor : 'white',
    width : 84,
    marginLeft: 5,

},
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: "bold"
  },
  rowViewContainer:{
    fontSize: 18,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 0,
    color: 'white',
    marginLeft: 5,
    height : 44,
    
  },
  headerViewStyle: {
    backgroundColor : '#1e90ff',
    justifyContent : 'center',
    alignItems :  'center',
    height : 84,
    paddingTop : 20,

  },
});
export default AccountScreen;