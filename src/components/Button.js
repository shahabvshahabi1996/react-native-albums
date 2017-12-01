import React , {Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
const Button  = (props)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={Styles.buttonStyle}>
            <Text style={Styles.buttonTextStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const Styles = {
    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#007aff',
        marginLeft : 5,
        marginRight : 5
    },
    buttonTextStyle : {
        alignSelf : 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        padding : 10
    }
};

export default Button;
