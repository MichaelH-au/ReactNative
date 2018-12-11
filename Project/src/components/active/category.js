import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';

class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentCat:0,
        }
    }
    render() {
        // const {goBack} = this.props.navigation;
        return (
            <View style={styles.category}>
                <ScrollView horizontal={true}>
                    {this.props.category.map((v,index)=>(
                        <Text style={[styles.categoryItem, this.state.currentCat == index?styles.categoryActive:null]} key={index}>{v}</Text>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default Category

const styles = StyleSheet.create({
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
})