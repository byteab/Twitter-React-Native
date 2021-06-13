import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useMediaQuery} from 'react-responsive'
import {colors} from '../styles/colors'
import {SearchBar} from './SearchBar'

export function RightBar() {
  const isRightBarVisible = useMediaQuery({minWidth: 990})
  if (!isRightBarVisible) return null
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1.7,
    height: '100%',
    backgroundColor: '#fff',
    borderColor: colors.COLOR_BLACK_LIGHT_6,
    borderLeftWidth: 0.1,
    alignItems: 'flex-start',
    paddingTop: 7,
    paddingStart: 20,
  },
})
