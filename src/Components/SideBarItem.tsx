import React from 'react'
import {View, Text} from 'react-native'
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
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 35,
      }}>
      <Icon iconName={iconName} width={30} height={30} />
      {isFullSideBar ? <Text style={{marginStart: 20}}>{title}</Text> : null}
    </View>
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
