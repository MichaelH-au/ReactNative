import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, TabBarBottom, getActiveChildNavigationOptions } from 'react-navigation'
import Active from './components/active/active'
import Location from './components/Location/location'
import MyInfo from "./components/myInfo";
import TabBarItem from "./widget/TabBarItem"
import ActiveDetail from './components/activeDetail/activeDetail'

const Nav = createBottomTabNavigator({
    active:{
        screen:Active,
        navigationOptions: () => ({
            // title:'Active',
            tabBarLabel: ({focused})=>(<Text style={{color:focused?'black':'white'}}>Event</Text>),
            headerBackTitle: null,
            tabBarIcon:({focused, tintColor})=>(
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./images/footer/event_w.png')}
                    selectedImage={require('./images/footer/event_b.png')}
                />
            )
        }),
    },
    location:{
        screen:Location,
        navigationOptions: () => ({
            title:'Location',
            tabBarLabel: ({focused})=>(<Text style={{color:focused?'black':'white'}}>Location</Text>),
            headerBackTitle: null,
            activeTintColor: '#ffffff',
            tabBarIcon:({focused, tintColor})=>(
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./images/footer/discovery_w.png')}
                    selectedImage={require('./images/footer/discovery_icon.png')}
                />

            )
        }),
    },
    myInfo:{
        screen:MyInfo,
        navigationOptions: () => ({
            title: 'MyInfo',
            tabBarLabel: ({focused})=>(<Text style={{color:focused?'black':'white'}}>MyInfo</Text>),
            headerBackTitle: null,
            tintColor: 'red',
            tabBarIcon:({focused, tintColor})=>(
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./images/footer/me_w.png')}
                    selectedImage={require('./images/footer/me_b.png')}
                />
            )
        }),


    }
},{
    initialRouteName: "active",
    tabBarOptions: {
        title:'test',
        // activeTintColor: '#e91e63',
        // activeTintColor: 'black',
        activeTintColor:'white',
        inactiveTintColor:'#D3D3D3',
        labelStyle: {
            fontSize: 14,
            color:'white',
            padding: 0
        },
        style: {
            backgroundColor: 'lightblue',
            height:35,
            padding: 0,
            top:0,
        },
        tabStyle:{
            height:50,
            marginTop: 5

        }

    }
})

Nav.navigationOptions = ({ navigation, screenProps }) => {
    const childOptions = getActiveChildNavigationOptions(navigation, screenProps);
    return {
        title: childOptions.title,
    };
};

const Navigator = createStackNavigator({
    Tab:{
        screen:Nav,
        navigationOptions: {
            headerBackTitle: null,
            headerStyle:{backgroundColor: 'lightblue'}
        },
    },
    WebScene:{screen:MyInfo},
    ActiveDetail:{screen:ActiveDetail}
},{
    navigationOptions:{
        headerTintColor: 'red',
        headerBackTitle:null
    }
})

const App = createAppContainer(Navigator);
export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon_img:{
        width:30,
        height:30
    }
})
