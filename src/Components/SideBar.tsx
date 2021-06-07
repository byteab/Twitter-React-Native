import React from 'react'
import {Dimensions, Text, View} from 'react-native'
import {useMediaQuery} from 'react-responsive'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {SideBarItem} from './SideBarItem'
import TwitterIcon from '../assets/SVGs/Twitter'
import {colors} from '../styles/colors'
const WindowHeight = Dimensions.get('window').height
const sideBarData = [
  {
    title: 'Home',
    iconName: 'home',
  },
  {
    title: 'Explore',
    iconName: 'search',
  },
  {
    title: 'Notifications',
    iconName: 'bell',
  },
  {
    title: 'Messages',
    iconName: 'message',
  },
  {
    title: 'Bookmarks',
    iconName: 'flag',
  },
  {
    title: 'Lists',
    iconName: 'book',
  },
  {
    title: 'Profile',
    iconName: 'profile',
  },
  {
    title: 'More',
    iconName: 'threeDots',
  },
]

export function SideBar() {
  const isSideBarVisible = useMediaQuery({minWidth: 500})
  const isFullSideBar = useMediaQuery({minWidth: 1266})

  if (!isSideBarVisible) return null

  if (isSideBarVisible) {
    return (
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.05)',
          height: WindowHeight,
          // width: '30%',
          paddingHorizontal: 20,
        }}>
        <TwitterIcon
          width={30}
          height={30}
          fill={colors.primaryColor}
          style={{
            paddingVertical: 20,
          }}
        />
        {sideBarData.map(({title, iconName}) => {
          return <SideBarItem iconName={iconName} title={title} />
        })}
      </View>
    )
  } else {
    return null
  }
}
