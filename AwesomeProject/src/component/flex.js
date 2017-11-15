import React, { Component } from 'react';
import { Text, View } from 'react-native';

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{height:300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text>a</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}>
          <Text>b</Text>
        </View>
        <View style={{height: 30, backgroundColor: 'steelblue'}}>
          <Text>c</Text>
        </View>
      </View>
    );
  }
};

export default FlexDimensionsBasics