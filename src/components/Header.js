import React , {Component} from 'react';
import {Text,View} from 'react-native';


const Header = (props)=>{
    return(
        <View style={Styles.headerContainer}>
            <Text style={Styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const Styles = {
    textStyle : {
        fontSize : 20,
        color : '#252525'
    },
    headerContainer : {
        backgroundColor : '#f8f8f8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        paddingBottom : 15,
        borderBottomColor : 'rgba(0, 0, 0,0.2)',
        borderBottomWidth : 1,
        elevation : 2,
        position : 'relative'
    }
};

export default Header;
