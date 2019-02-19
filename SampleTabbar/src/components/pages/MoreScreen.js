import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { StyleSheet, ListView,Alert } from "react-native";


export class MoreScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2  });

    this.state = {
      dataSource: ds.cloneWithRows([
        "Support",
        "Conatct Us",
        "Settings",
        "Terms Of Use",
        "Privacy Policy",
        "Sign Out",
      ])
    };
  }
  static navigationOptions = {
    title: 'More',
    headerStyle: {
      backgroundColor: '#1e90ff',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'left',
     
    },
  };
  GetListViewItem = (rowData) => {
    Alert.alert(rowData);
    if (rowData == "Support") {
      this.props.navigation.navigate('Support');
    } else if (rowData == "Terms Of Use") {
      this.props.navigation.navigate('TermsOfUse');
    } else if (rowData == "Privacy Policy") {
      this.props.navigation.navigate('PrivacyPolicy');
    } else if (rowData == "Settings") {
      this.props.navigation.navigate('Settings');
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
  headerText: {
    fontSize: 20,
    textAlign: "center",
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
export default MoreScreen;