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


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
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
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'active'}
                        selectedTitleStyle={{color:'black'}}
                        title="热门活动"
                        renderIcon={() => <Image style={styles.icon_img} source={require('./src/images/footer/event_w.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon_img} source={require('./src/images/footer/event_b.png')} />}
                        // badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'active' })}>
                        {/*{homeView}*/}
                        <View style={styles.page}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'location'}
                        selectedTitleStyle={{color:'black'}}
                        title="精选地点"
                        renderIcon={() => <Image style={styles.icon_img}  source={require('./src/images/footer/discovery_w.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon_img}  source={require('./src/images/footer/discovery_icon.png')} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'location' })}>
                        {/*{profileView}*/}
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'my_info'}
                        selectedTitleStyle={{color:'black'}}
                        title="我的信息"
                        renderIcon={() => <Image style={styles.icon_img}  source={require('./src/images/footer/me_w.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon_img}  source={require('./src/images/footer/me_b.png')} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'my_info' })}>
                        {/*{profileView}*/}
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                </TabNavigator>

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
