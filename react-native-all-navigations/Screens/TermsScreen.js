import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class TermsScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>TermsScreen</Text>
            </View>
        );
    }
}
export default TermsScreen;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});