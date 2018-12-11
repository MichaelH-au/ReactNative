/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Active from './src/components/active/active'
import Location from './src/components/Location/location'
import Bottom_nav from './src/components/bottom_nav'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});





type Props = {};
class Home extends Component<Props> {
    constructor(props){
        super(props)
        this.state = {
            selectedTab:'active'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
                {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
                {/*<Text style={styles.instructions}>{instructions}</Text>*/}
                <Text onPress={()=> this.props.navigation.navigate('active')}>Go to active  v</Text>
                {/*<Bottom_nav/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    page:{
        flex:1,
        backgroundColor: 'red'
    },
    page1:{
        flex:1,
        backgroundColor: 'blue'
    },
    icon_img:{
        width:30,
        height:30
    }
});

const RootStack = createStackNavigator({
    home:{
        screen:Home
    },
    active:{
        screen:Active
    },
    location:{
        screen:Location
    }
},{
    initialRouteName: "home"
})
const App = createAppContainer(RootStack);
export default App