import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class Tab2Screen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Tab2Screen</Text>
            </View>
        );
    }
}
export default Tab2Screen;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});