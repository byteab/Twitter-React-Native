import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useMediaQuery} from 'react-responsive'

export function RightBar() {
  const isRightBarVisible = useMediaQuery({minWidth: 990})
  if (!isRightBarVisible) return null
  return (
    <View style={styles.container}>
      <Text>RightBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
})
