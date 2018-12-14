import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, WebView} from 'react-native';
import MyCarousel from './carousel'
import ContentHeader from './contentHeader'
import ContentBody from './contentBody'

class ActiveDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentCat:0,
            eventData:{},
            loaded:false
        }
    }
    componentWillMount(){
        fetch(`https://www.sharegotech.com/events/getevent_h5?eventId=${this.props.navigation.state.params.eventId}`,{
            method:'get',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    eventData:data.events
                })
                // alert(data.events.eventName)
            })
    }
    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <MyCarousel bannerData={this.state.eventData.image}/>
                    <ContentHeader eventData={this.state.eventData} fav_number = {this.props.navigation.state.params.fav_number}/>
                    <ContentBody eventData={this.state.eventData}/>
                </ScrollView>
            </View>
        );
    }
}

export default ActiveDetail

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    webView:{
        flex:1
    }
})