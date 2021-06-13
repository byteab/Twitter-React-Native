import React from 'react'
import {View, Text} from 'react-native'
import SearchSVG from '../assets/SVGs/Search'
import {colors} from '../styles/colors'

export const SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: colors.COLOR_BLACK_LIGHT_6,
        borderRadius: 100,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingStart: 15,
        width: 350,
        marginHorizontal: 10,
      }}>
      <SearchSVG fill={colors.COLOR_BLACK_LIGHT_4} width={20} height={20} />
      <Text
        style={{
          fontSize: 16,
          color: colors.COLOR_BLACK_LIGHT_4,
          marginHorizontal: 17,
        }}>
        Search Twitter
      </Text>
    </View>
  )
}
