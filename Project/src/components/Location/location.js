import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Navigator, ScrollView} from 'react-native';
import Bottom_nav from '../bottom_nav'
import Category from '../active/category'
import LocationList from './locationList'

class Location extends Component {
    constructor(props){
        super(props)
        this.state = {
            category:['所有地点', '推荐特惠', '美景奇观', '运动娱乐', '网红小店', '集市展览', '夜夜夜夜'],
            locationData:[]
        }
    }
    componentWillMount(){
        fetch('https://www.sharegotech.com/locations/getLocations',{
            method:'get',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    locationData:data,
                    loaded:true
                })
            })

    }
    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Category category={this.state.category}/>
                <ScrollView>
                    <LocationList locationData={this.state.locationData}/>
                </ScrollView>

                    {/*<Text>Location</Text>*/}
                    {/*/!*<Text>{this.props.navigator}aa</Text>*!/*/}
                    {/*<Text onPress={()=> this.props.navigation.navigate('WebScene', {url:'www.baidu.com'})}>Go to home</Text>*/}
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
        alignItems: 'center',
        backgroundColor:'white'
    },
    text:{
        fontSize:20
    },

})