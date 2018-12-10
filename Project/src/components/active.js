import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel'
import Bottom_nav from './bottom_nav'
class Active extends Component {
    constructor(props){
        super(props)
        this.state = {
            category:['所有活动', '璀璨圣诞', '清新文艺', '美食集市', '户外体验', '职业发展'],
            bannerInfo:'',
            bannerImages:'',
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
                    bannerInfo: data.banner,
                    bannerImages: data.events,
                    loaded:true
                })
                alert(this.state.bannerInfo[1].eventName)

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

                <View style={styles.bannerBox}>
                    <Text>{this.state.bannerInfo[1].eventName}</Text>
                </View>
                {/*<Carousel*/}
                    {/*ref={(c) => { this._carousel = c; }}*/}
                    {/*data={this.state.}*/}
                    {/*renderItem={this._renderItem}*/}
                    {/*sliderWidth={sliderWidth}*/}
                    {/*itemWidth={itemWidth}*/}
                {/*/>*/}


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

})