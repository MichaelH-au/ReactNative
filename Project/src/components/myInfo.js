import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Navigator} from 'react-native';
import Bottom_nav from './bottom_nav'
class MyInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            word: ''
        }
        alert(this.props.navigation.state.params.url)
    }
    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{flex:.50}}>
                    <Text style={styles.text}>My info</Text>
                    <Text>{this.props.navigator}aa</Text>
                    <Text>{this.props.navigation.state.params.url}</Text>
                    {/*<Text onPress={()=> this.props.navigation.navigate('home')}>Go to home</Text>*/}
                </View>
                {/*<Button*/}
                {/*onPress={() => goBack()}*/}
                {/*title="Go to Brent's profile"*/}
                {/*/>*/}
                {/*<View style={{flex:.5}}>*/}
                    {/*<Bottom_nav navigation={this.props.navigation}></Bottom_nav>*/}
                {/*</View>*/}
            </View>
        );
    }
}

export default MyInfo

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize:20
    },

})