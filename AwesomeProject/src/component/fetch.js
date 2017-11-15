import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class testFetch extends Component {
  constructor(props){
    super(props)
    this.state = {
      fetchData:null
    }
    this.fetchData.bind(this)
  }
  componentWillMount(){
    this.fetchData()
  }
  async fetchData(){
    try{
      let response = await fetch('https://www.f-road.com.cn/api/site/vCardQrcode/queryAllBank')
      let result = await response.json()
      this.setState({
        fetchData:result.resultCode
      })
    }
    catch(error){
      console.error(error)
    }
  }
  render(){
    return (
      <Text>{ this.state.fetchData }</Text>
    )
  }
}