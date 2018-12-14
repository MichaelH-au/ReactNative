import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';


const sliderWidth = Dimensions.get('window').width;

class contentHeader extends Component {
    constructor(props){
        super(props)
    }
    fa_number(fav_num, eventId){
        if (fav_num <= 10){
            return parseInt(15 * Math.sqrt(fav_num + 1) + parseInt(eventId) % 5);
        }else if(fav_num <= 100){
            return parseInt(25 * Math.sqrt(fav_num + 1) + parseInt(eventId) % 5);
        }else {
            return parseInt(30 * Math.sqrt(fav_num + 1) + parseInt(eventId) % 5);
        }
    }
    render() {
        let {eventName, eventAddress, eventTime, eventId, fav_number} = this.props.eventData
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:.7, flexDirection: 'column',justifyContent: 'space-around',paddingLeft: 10}}>
                        <Text style={styles.TextContent}>{eventName}</Text>
                    </View>
                    <View style={styles.separateLine}></View>
                    <View style={{flex:.3,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <View style={styles.ItemRightBox}>
                            <Image style={styles.likeIcon} source={require('../../images/Items/like-3.svg.png')}/>
                            <Text>{this.props.fav_number}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon} source={require('../../images/Items/myplace.png')}/>
                    <Text>{eventAddress}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon} source={require('../../images/Items/myfeedback.png')}/>
                    <Text>{eventTime}</Text>
                </View>
            </View>
        );
    }
}

export default contentHeader

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 20
    },
    TextContent:{
        fontSize:20,
        fontWeight: 'bold'
    },
    separateLine:{
        width:1,
        height:70,
        borderWidth: 0.5,
        alignSelf: 'center'
    },
    likeIcon:{
        width:15,
        height:15,
        marginRight: 5
    },
    ItemRightBox:{
        width:'70%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom: 5,
        paddingTop: 5
    },
    icon:{
        width:25,
        height:25,
        marginRight: 25
    },
    infoBox:{
        flex:1,
        flexDirection:'row',
        // justifyContent: 'space-around',
        paddingLeft: 30,
        marginTop: 20
    }
})