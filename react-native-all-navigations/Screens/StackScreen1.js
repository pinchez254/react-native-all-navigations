import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
    } from "react-native";

class StackScreen1 extends Component{
 static navigationOptions = {
    title: 'Home',
  };

    render(){
        return (
            <View style={styles.container}>

                <Text>StackScreen1</Text>
                <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('stack2')}
        />
            </View>
        );
    }
}
export default StackScreen1;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});