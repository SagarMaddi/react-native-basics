import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextBase, View } from 'react-native'
import Profile from './Profile'
import Test from './Test'
import AgeCounter from './AgeCounter'
import Show from './Show'



function App() {
  return (
    <SafeAreaView style ={{flex: 1,justifyContent: "center",alignItems: "center"}}>
      <Show></Show>
    </SafeAreaView>
  )
}

export default App