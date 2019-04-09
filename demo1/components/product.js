import React, {Component} from 'react';
import { StyleSheet,View, Text,Image} from 'react-native';
import TextBox from './textBox';

export default class Product extends Component {
    constructor(props){
        super();
    }
    render() {
    return( 
    
    <View>
        <TextBox/>
        <Image source={require('../assets/a1.jpg')}/>
        
        <Image style={{width:150,height:150}}
        source={{uri:'https://www.slickwraps.com/media/catalog/category/galaxyS7.jpg'}}
        />
        </View>)
    }
}
