import React , {Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import axios from 'axios';
const Albums = require('../albums.json');
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component{
    get renderAlbums(){        
       return Albums.map((album , key) => <AlbumDetail key={key} album={album} /> )
    }
    render(){
        return(
            <ScrollView>
                {this.renderAlbums}
            </ScrollView>
        );
    }
};

const Styles = {
};

export default AlbumList;
