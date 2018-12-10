import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Navigator} from 'react-native';

const NAVBAR_HEIGHT_ANDROID = 50;
const NAVBAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

class NavigationBar extends Component {
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
                <View style={{flex:.50}}>
                    <Text style={styles.text}>I am boy</Text>
                    <Text>{this.props.navigator}aa</Text>
                    <Text onPress={()=> this.props.navigation.navigate('home')}>Go to home</Text>
                </View>
                {/*<Button*/}
                {/*onPress={() => goBack()}*/}
                {/*title="Go to Brent's profile"*/}
                {/*/>*/}
                <View style={{flex:.5}}>
                    <Bottom_nav navigation={this.props.navigation}></Bottom_nav>
                </View>
            </View>
        );
    }
}

export default Active

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray'
    },
    text:{
        fontSize:20
    },

})