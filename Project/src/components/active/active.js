import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, BVLinearGradientr} from 'react-native';
import Carousel from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient'
import Bottom_nav from './bottom_nav'


const horizontalMargin = 20;
const slideWidth = 380;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth;
const itemHeight = 250;
class Active extends Component {
    constructor(props){
        super(props)
        this.state = {
            category:['所有活动', '璀璨圣诞', '清新文艺', '美食集市', '户外体验', '职业发展'],
            bannerInfo:'',
            bannerImages:'',
            bannerData:'',
            currentCat:0,
            loaded:false

        }
    }
    // _renderItem ({item, index}) {
    //     return (
    //         <View style={styles.slide}>
    //             <Text style={styles.title}>{ item.title }</Text>
    //         </View>
    //     );
    // }
    _renderItem ({item, index}) {
        return (
            <View style={{justifyContent: 'center'}}>
                <View style={styles.bannerText}>
                    <Text style={styles.bannerTitle}>{item.eventName}</Text>
                    <Text style={{fontSize:12, color:'white', marginTop: 10}}>{item.eventTime}</Text>
                    <Text style={{fontSize:14, color:'white', marginTop: 5}}>{item.eventLocation}</Text>
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .5)']}
                    style={styles.bannerBg}>
                </LinearGradient>
                {/*<View style={styles.bannerBg}></View>*/}
                <Image style={{width:sliderWidth,height:itemHeight}} source={{uri:'http://www.sharegotech.com/shareGo/' + item.urlPath}}/>
            </View>
        )
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
                let newData = []
                for (let i in data.events){
                    newData.push({...data.events[i],...data.banner[i]})
                }
                this.setState({
                    bannerData:newData,
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
        if(!this.state.loaded){
            return (<View><Text>Loading</Text></View>)
        }
        return (
            <View style={styles.container}>
                {/*catogory list*/}
                <View style={styles.category}>
                    <ScrollView horizontal={true}>
                        {this.state.category.map((v,index)=>(
                            <Text style={[styles.categoryItem, this.state.currentCat == index?styles.categoryActive:null]} key={index}>{v}</Text>
                        ))}
                    </ScrollView>
                </View>

                {/*<View style={styles.bannerBox}>*/}
                {/*<View style={styles.bannerBlock}>*/}
                {/*<View style={styles.bannerItem}></View>*/}
                {/*<View style={styles.bannerItem}><Text>aaa</Text></View>*/}
                {/*</View>*/}
                {/*</View>*/}
                {/*<Carousel*/}
                {/*ref={(c) => { this._carousel = c; }}*/}
                {/*data={this.state.}*/}
                {/*renderItem={this._renderItem}*/}
                {/*sliderWidth={sliderWidth}*/}
                {/*itemWidth={itemWidth}*/}
                {/*/>*/}

                <Carousel
                    data={this.state.bannerData}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    // slideStyle={{ flex: 1 }}
                />
                <View style={{flex:.50}}>
                    <Text style={styles.text}>active</Text>
                    <Text>{this.props.navigator}aa</Text>
                    {/*<Text onPress={()=> this.props.navigation.navigate('home')}>Go to home</Text>*/}
                </View>
            </View>
        );
    }
}

export default Active

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        // justifyContent: 'start',
        alignItems: 'center'
    },
    text:{
        fontSize:20
    },
    category: {
        flexDirection: 'row',
        height:50,
        // alignItems: 'flex-start'
        // alignItems:'center',
        backgroundColor: 'white'
    },
    categoryItem:{
        width:80,
        fontSize: 15,
        lineHeight:50
    },
    categoryActive:{
        color:'lightblue',
        fontWeight: 'bold',
        marginLeft: 20
    },
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