import '@expo/match-media'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SideBar} from './src/Components/SideBar'
import {useWidth} from './src/Hooks/useWidth'

export default function App() {
  const width = useWidth()
  return (
    <View style={styles.container}>
      <SideBar />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
