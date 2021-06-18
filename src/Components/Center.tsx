import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {CreateTweet} from '../Components/CreateTweet'

export function Center() {
  return (
    <View style={styles.container}>
      <CreateTweet style={styles.createTweet} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createTweet: {},
})
