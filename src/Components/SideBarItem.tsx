import React from 'react'
import {View, Text} from 'react-native'
import {Pressable} from 'react-native-web-hover'
import Twitter from '../assets/SVGs/Twitter'
import Bell from '../assets/SVGs/Bell'
import Book from '../assets/SVGs/Book'
import Feather from '../assets/SVGs/Feather'
import Flag from '../assets/SVGs/Flag'
import Home from '../assets/SVGs/Home'
import Message from '../assets/SVGs/Message'
import Profile from '../assets/SVGs/Profile'
import Search from '../assets/SVGs/Search'
import ThreeDots from '../assets/SVGs/ThreeDots'
import {useMediaQuery} from 'react-responsive'
import {colors} from '../styles/colors'

enum iconNames {
  'twitter',
  'bell',
  'book',
  'feather',
  'flag',
  'home',
  'message',
  'profile',
  'search',
  'threeDots',
}

export function SideBarItem({
  iconName,
  title,
}: {
  iconName: iconNames
  title: string
}) {
  const isFullSideBar = useMediaQuery({minWidth: 1266})
  return (
    <Pressable
      style={({pressed, hovered}) => [
        hovered ? {backgroundColor: colors.COLOR_BLACK_LIGHT_6} : {},
        {
          flexDirection: 'row',
          alignItems: 'center',
          width: 'fit-content',
          marginBottom: 10,
          marginEnd: isFullSideBar ? 70 : 0,
          borderRadius: 100,
          paddingVertical: 15,
          paddingHorizontal: 15,
          paddingEnd: isFullSideBar ? 30 : 15,
          cursor: 'pointer',
          // borderWidth: 0.2,
        },
      ]}>
      <Icon iconName={iconName} width={27} height={27} />
      {isFullSideBar ? (
        <Text style={{marginStart: 20, fontSize: 20}}>{title}</Text>
      ) : null}
    </Pressable>
  )
}

const Icon = ({iconName, ...args}) => {
  switch (iconName) {
    case 'twitter':
      return <Twitter {...args} />
    case 'bell':
      return <Bell {...args} />
    case 'book':
      return <Book {...args} />
    case 'flag':
      return <Flag {...args} />
    case 'feather':
      return <Feather {...args} />
    case 'home':
      return <Home {...args} />
    case 'search':
      return <Search {...args} />
    case 'threeDots':
      return <ThreeDots {...args} />
    case 'profile':
      return <Profile {...args} />
    case 'message':
      return <Message {...args} />
    default:
      return null
  }
}
