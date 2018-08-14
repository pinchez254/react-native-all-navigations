import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class StackScreen2 extends Component{
  static navigationOptions = {
    title: 'StackScreen2',
  };
    render(){
        return (
            <View style={styles.container}>
                <Text>StackScreen2</Text>
            </View>
        );
    }
}
export default StackScreen2;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});