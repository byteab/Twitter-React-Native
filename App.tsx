import '@expo/match-media'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SideBar} from './src/Components/SideBar'
import {Center} from './src/Components/Center'
import {RightBar} from './src/Components/RightBar'

export default function App() {
  return (
    <View style={styles.container}>
      <SideBar />
      <Center />
      <RightBar />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})
