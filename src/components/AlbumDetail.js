import React , {Component} from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'
const AlbumDetail  = (props)=>{
    return(
        <Card>
            <CardSection style={Styles.headerStyle}>
                <View>
                    <Image style={Styles.thumbNailStyle} source={{uri : props.album.thumbnail_image}}/>
                </View>
                <View style={Styles.headerStyle}>
                    <Text style={Styles.headerTextStyle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={{width : null,height : 300,flex : 1,borderRadius : 3}} source={{uri : props.album.image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(props.album.url)} text="Buy Now"/>
            </CardSection>
        </Card>
    );
};

const Styles = {
    headerStyle:{
        flexDirection : 'column',
        justifyContent : 'flex-start',
        padding : 5
    },
    headerTextStyle : {
        fontSize : 15,
        fontWeight : 'bold',
        color : '#252525'
    },
    thumbNailStyle : {
        width: 50, 
        height: 50,
        borderRadius : 3
    }

};

export default AlbumDetail;
