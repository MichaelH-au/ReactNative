import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, BVLinearGradientr} from 'react-native';
import Carousel from 'react-native-snap-carousel'


const horizontalMargin = 20;
const slideWidth = Dimensions.get('window').width;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth;
const itemHeight = 250;

class MyCarousel extends Component {
    constructor(props){
        super(props)
    }
    _renderItem ({item, index}) {
        return (
            <View style={{justifyContent: 'center'}}>
                <Image style={{width:sliderWidth,height:itemHeight}} source={{uri:'http://www.sharegotech.com/shareGo/' + item.urlPath}}/>
            </View>
        )
    }

    // static navigationOptions = ()=>{
    //     return {
    //         title: 'active'
    //     }
    // };
    render() {
        if(!this.props.bannerData){
            return (<View></View>)
        }
        return (
            <View>
                <Carousel
                    data={this.props.bannerData}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </View>
        );
    }
}

export default MyCarousel

const styles = StyleSheet.create({
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
})