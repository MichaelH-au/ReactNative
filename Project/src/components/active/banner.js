import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, BVLinearGradientr} from 'react-native';
import Carousel from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient'


const horizontalMargin = 20;
const slideWidth = Dimensions.get('window').width;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth;
const itemHeight = 250;
class Banner extends Component {
    constructor(props){
        super(props)
    }
    _renderItem ({item, index}) {
        return (
            <View style={{justifyContent: 'center'}}>
                <View style={styles.bannerText}>
                    <Text style={styles.bannerTitle}>{item.eventName}</Text>
                    <Text style={{fontSize:12, color:'white', marginTop: 10}}>{item.eventTime}</Text>
                    <Text style={{fontSize:14, color:'white', marginTop: 5}}>{item.eventLocation}</Text>
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .7)']}
                    style={styles.bannerBg}>
                </LinearGradient>
                {/*<View style={styles.bannerBg}></View>*/}
                <Image style={{width:sliderWidth,height:itemHeight}} source={{uri:item.eventImageUrl}}/>
            </View>
        )
    }

    static navigationOptions = ()=>{
        return {
            title: 'active'
        }
    };
    render() {
        return (
                <Carousel
                    data={this.props.bannerData}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
        );
    }
}

export default Banner

const styles = StyleSheet.create({
    bannerBox:{
        width: '100%',
        height: 300,
        backgroundColor:'lightgrey'
    },
    bannerBlock:{
        width:'auto',
        height:'100%',
        overflow:'hidden',
        flexDirection: 'column',
    },
    bannerItem:{
        height:'100%',
        backgroundColor:'red'
    },
    slide: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
        // other styles for the inner container
    },
    bannerText:{
        position: 'absolute',
        width:sliderWidth,
        top:130,
        zIndex: 3,
        color: 'white',
        paddingHorizontal: 20
    },
    bannerTitle:{
        fontSize:20,
        color:'white'
    },
    bannerBg:{
        position:'absolute',
        width:sliderWidth,
        height:itemHeight,
        zIndex: 2

    }

})