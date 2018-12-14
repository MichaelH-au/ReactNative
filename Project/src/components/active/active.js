import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, BVLinearGradientr} from 'react-native';
import Bottom_nav from '../bottom_nav'
import Category from './category'
import Banner from './banner'
import EventList from './eventList'

class Active extends Component {
    constructor(props){
        super(props)
        this.state = {
            category:['所有活动', '璀璨圣诞', '清新文艺', '美食集市', '户外体验', '职业发展'],
            bannerData:[],
            eventData:[],
            loaded:false

        }
    }
    componentWillMount(){
        fetch('https://www.sharegotech.com/events/getUpcommingEvents_H5',{
            method:'get',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    bannerData:data.banner,
                    eventData:data.events,
                    loaded:true
                })
            })

    }
    static navigationOptions = ()=>{
        return {
            title: 'active'
        }
    };
    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                {/*catogory list*/}
                <Category category={this.state.category}/>
                <ScrollView>
                    <Banner bannerData={this.state.bannerData}/>
                    <EventList navigation={this.props.navigation} thi eventData={this.state.eventData}/>
                </ScrollView>
            </View>
        );
    }
}

export default Active

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        // justifyContent: 'start',
        alignItems: 'center'
    },
    text:{
        fontSize:20
    },
})