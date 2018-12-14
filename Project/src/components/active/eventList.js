import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';


const slideWidth = Dimensions.get('window').width * 0.9;

class EventList extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded:false,
            rateImage:[
                '../../images/Items/rate/6.png',
                '../../images/Items/rate/7.png',
                '../../images/Items/rate/8.png',
                '../../images/Items/rate/9.png',
                '../../images/Items/rate/10.png',
            ]
        }
        this.rate = this.rate.bind(this)
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
    rate(eventRating, fav_number){
        let index = parseInt(3 + (eventRating - 5) / 5 + (fav_number - 5) / 5);
        let strImage = this.state.rateImage[index];
        let str = '../../images/Items/rate/8.png';
        // alert(strImage === str)
        switch (index) {
            case 0:
                return require('../../images/Items/rate/6.png')
            case 1:
                return require('../../images/Items/rate/7.png')
            case 2:
                return require('../../images/Items/rate/8.png')
            case 3:
                return require('../../images/Items/rate/9.png')
            case 4:
                return require('../../images/Items/rate/10.png')
        }
    }
    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={{alignItems:'center',justifyContent:'center', marginTop: 20}}>
                {this.props.eventData.map((v, index)=>(
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ActiveDetail',{eventId:v.eventId, fav_number:this.fa_number(v.fav_number, v.eventId)})} style={styles.ItemBox} key={index}>
                        <Image style={styles.ItemImage} source={{uri:'http://www.sharegotech.com/shareGo/' + v.urlPath}}/>
                        <View style={styles.TextArea}>
                            <View style={{flex:.7, flexDirection: 'column',justifyContent: 'space-around',paddingLeft: 10}}>
                                <Text style={styles.TextContent}>{v.eventName}</Text>
                                <Text style={{fontSize: 12}}>{v.eventTime}</Text>
                            </View>
                            <View style={styles.separateLine}></View>
                            <View style={{flex:.3,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                                <View style={styles.ItemRightBox}>
                                    <Image style={styles.likeIcon} source={require('../../images/Items/like-3.svg.png')}/>
                                    <Text>{this.fa_number(v.fav_number, v.eventId)}</Text>
                                </View>
                                <View style={styles.ItemRightBox}>
                                    <Text>{v.eventPrice}</Text>
                                </View>
                                {/*<Image/>*/}
                                <Image style={styles.rateIcon} source={this.rate(v.eventRating, v.fav_number)}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

            </View>
        );
    }
}

export default EventList

const styles = StyleSheet.create({
    ItemBox:{
        height:300,
        width:slideWidth,
        backgroundColor:'white',
        borderWidth: 1,
        borderRadius:5,
        marginBottom: 20
    },
    ItemImage:{
        width:'100%',
        height:200
    },
    TextArea:{
        flex: 1,
        flexDirection: 'row',
        height:100
    },
    TextContent:{
        fontSize:16,
    },
    separateLine:{
        width:1,
        height:80,
        borderWidth: 0.5,
        alignSelf: 'center'
    },
    likeIcon:{
        width:15,
        height:15,
        marginRight: 5
    },
    rateIcon:{
        width:'80%',
        height:15,
        marginRight: 5,
        marginTop: 5,
        resizeMode: 'stretch'
    },
    ItemRightBox:{
        width:'70%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 5
    }

})