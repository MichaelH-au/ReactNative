import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import Active from "./active/active";

class Bottom_nav extends Component {
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
                        renderIcon={() => <Image style={styles.icon_img} source={require('../images/footer/event_w.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon_img} source={require('../images/footer/event_b.png')} />}
                        // badgeText="1"
                        onPress={()=> this.props.navigation.navigate('active')}>
                        {/*{homeView}*/}
                        {/*{Active}*/}
                        <View style={styles.page}><Text>haha</Text></View>
                        {/*<Active/>*/}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'location'}
                        selectedTitleStyle={{color:'black'}}
                        title="精选地点"
                        renderIcon={() => <Image style={styles.icon_img}  source={require('../images/footer/discovery_w.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon_img}  source={require('../images/footer/discovery_icon.png')} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={()=> {
                            this.props.navigation.navigate('location')
                            this.setState({ selectedTab: 'location' })
                        }}>
                        {/*{profileView}*/}
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'my_info'}
                        selectedTitleStyle={{color:'black'}}
                        title="我的信息"
                        renderIcon={() => <Image style={styles.icon_img}  source={require('../images/footer/me_w.png')} />}
                        renderSelectedIcon={() => <Image style={styles.icon_img}  source={require('../images/footer/me_b.png')} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'my_info' })}>
                        {/*{profileView}*/}
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                </TabNavigator>
                {/*<View>*/}
                    {/*<Image style={styles.icon_img} source={require('../images/footer/event_w.png')} />*/}
                    {/*<Text>aaa</Text>*/}
                {/*</View>*/}
                {/*<View><Text>aaa</Text></View>*/}
                {/*<View><Text>aaa</Text></View>*/}

            </View>
        );
    }
}

export default Bottom_nav

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
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
})