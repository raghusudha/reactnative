import React, {Component} from 'react';
import { TextInput} from 'react-native';

export default class TextBox extends Component{
    constructor(props){
        super();
        this.state={
            textInputValue:'Hello World'
        };
        this.handleChangeText=this.handleChangeText.bind(this);
    }
    handleChangeText(e){
        let x=this.state;
        x.textInputValue=e;
        this.setState(x);

    }
    render(){
        return(
            <TextInput style={{height:40,margin:8,borderColor:'blue',borderWidth:4,alignItems:'center'}} value={this.state.textInputValue}
            onChangeText={this.handleChangeText}
        />
        )
    }
}