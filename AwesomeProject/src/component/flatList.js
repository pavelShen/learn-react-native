import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

class flatList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ],
    }
  }
  componentDidMount(){
    this.setState({
      list:[{key:'123'}]
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
        >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default flatList