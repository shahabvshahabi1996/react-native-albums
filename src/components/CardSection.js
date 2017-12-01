import React , {Component} from 'react';
import {Text,View} from 'react-native';
const CardSection  = (props)=>{
    return(
        <View style={Styles.containerStyle}>
            {props.children}
        </View>
    );
};

const Styles = {
    containerStyle : {
        borderBottomWidth : 1,
        padding : 8,
        backgroundColor : '#fff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#ddd',
        position : 'relative'
    }
};

export default CardSection;
