import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export function Center() {
  return (
    <View style={styles.container}>
      <Text>Center part</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
