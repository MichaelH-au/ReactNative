import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, Linking} from 'react-native';


const sliderWidth = Dimensions.get('window').width;

class contentBody extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let {eventVicinity, eventRequirement, eventPrice, eventRegisterLink, eventDressCode, eventOtherInfo} = this.props.eventData
        let inforList = []
        let eventDetail = ''
        if (eventVicinity){
            // eventVicinity = eventVicinity.replace(/<</g, '<Image source={{uri:')
            // eventVicinity = eventVicinity.replace(/>>/g, '}}/><')
            inforList = eventVicinity.split(/<<|>>/)
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>活动详情</Text>
                {inforList.map((ele,index)=>(
                    ele.startsWith('http')?<Image style={styles.contentImage} key={index} source={{uri:ele}}/>:<Text style={styles.content} key={index}>{ele}</Text>
                ))}
                <Text style={styles.title}>活动须知</Text>
                <Text style={styles.content}>{eventRequirement}</Text>
                <Text style={styles.title}>活动票价</Text>
                <Text style={styles.content}>{eventPrice}</Text>
                <Text style={styles.title}>活动着装</Text>
                <Text style={styles.content}>{eventDressCode}</Text>
                <Text style={styles.title}>活动链接</Text>
                <Text style={[styles.content,{color: 'blue'}]}
                      onPress={() => Linking.openURL(eventRegisterLink)}>
                    {eventRegisterLink}
                </Text>
                <Text style={styles.title}>其他信息</Text>
                <Text style={styles.content}>{eventOtherInfo}</Text>

            </View>
        );
    }
}

export default contentBody

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:sliderWidth,
        marginTop: 20,
        padding: 30
    },
    title:{
        fontSize:16,
        fontWeight: 'bold',
        marginTop: 20
    },
    content:{
        fontSize: 16,
        marginTop:10,
    },
    contentImage:{
        flex: 1,
        height:200
    }
})