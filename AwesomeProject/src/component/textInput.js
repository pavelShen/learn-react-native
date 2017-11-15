import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

class InputBind extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:''
    }
    this.changeText.bind(this)
  }

  changeText(text){
    this.setState({
      text
    })
  }

  render(){
    return (
    <View>
      <TextInput
        style = {{ height:30 }}
        placeholder = "enter something"
        onChangeText = { (text) => this.changeText(text) }
      />
      <Text>{ this.state.text }1</Text>
    </View>
    )
  }
}

export default InputBind