import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Navigator} from 'react-native';
import Bottom_nav from './bottom_nav'
class Location extends Component {
    constructor(props){
        super(props)
        this.state = {
            word: ''
        }
    }
    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                    <Text>Location</Text>
                    {/*<Text>{this.props.navigator}aa</Text>*/}
                    <Text onPress={()=> this.props.navigation.navigate('WebScene', {url:'www.baidu.com'})}>Go to home</Text>
                {/*<Button*/}
                {/*onPress={() => goBack()}*/}
                {/*title="Go to Brent's profile"*/}
                {/*/>*/}
                {/*<View style={{flex:0}}>*/}
                    {/*<Bottom_nav navigation={this.props.navigation}></Bottom_nav>*/}
                {/*</View>*/}
            </View>
        );
    }
}

export default Location

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray'
    },
    text:{
        fontSize:20
    },

})