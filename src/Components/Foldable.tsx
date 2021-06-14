import React from 'react'
import {View} from 'react-native'
import {Pressable} from 'react-native-web-hover'
import {colors} from '../styles/colors'

export const Foldable = ({children, ...values}) => {
  return (
    <View
      style={{
        backgroundColor: colors.primaryLight,
        borderRadius: 20,
        paddingVertical: 10,
        width: '70%',
      }}
      {...values}>
      {children}
    </View>
  )
}

Foldable.Header = ({children, ...values}) => {
  return <Pressable {...values}>{children}</Pressable>
}

Foldable.Row = ({children, ...values}) => {
  return <Pressable {...values}>{children}</Pressable>
}

Foldable.Footer = ({children, ...values}) => {
  return <Pressable {...values}>{children}</Pressable>
}
