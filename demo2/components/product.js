import React, {Component} from 'react';
import {Platform,Card, StyleSheet,Button, Text,Image, View} from 'react-native';

export default class Product extends Component{
    constructor(props){
    super();
    }
    render(){
        return(
            
              <View style={styles.container1}>
            <Text style={{fontSize:35,color:'blue',}}>iphone</Text>
            <Image style={styles.image} 
           source={{uri:'https://cdn.shopclues.com/images/thumbnails/80543/320/320/135167515-80543754-1520669663.jpg'}}
        />
        <Text style={{fontSize:25,color:'green',}}>Price:24,000</Text>
        {/* <Text style={{fontSize:20,color:'red',}}>Description</Text> */}
        <Text style={{fontSize:20,color:'black',}}>Apple sold 13 million iPhones in the device's first five quarters on the market.</Text>
        <Button
        title='Add to Cart' 
        style={{marginTop:30}}
        color='red'
        /> 
        <Button
        title='Remove' 
        style={{marginTop:30}}
        color='blue'
        /> 
         </View>   
        )
    }
}
const styles = StyleSheet.create({
    image: {
         width:350,
         height:350,
        //  margin:10,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    container1:{
        height:600,
        borderColor:'black',
        borderWidth:2,
        justifyContent: 'space-between',
        alignItems: 'center',
  
        
    },
    
   
});

