import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

class Bananas extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const { navigate } = this.props.navigation;
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Text>1</Text>
        <TouchableHighlight onPress={() => navigate('Details')}>
          <Image source={pic} style={{width: 193, height: 110}} />
        </TouchableHighlight>
        <Text>2</Text>
        <TouchableOpacity onPress={() => navigate('Details')}>
          <Image source={pic} style={{width: 193, height: 110}} />
        </TouchableOpacity>
        <Text>3</Text>
        <Button
          onPress={() => navigate('Details')}
          title="Chats with Lucy"
        />
      </View>
    );
  }
}

export default Bananas