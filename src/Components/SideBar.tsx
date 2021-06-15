import React from 'react'
import {Dimensions, Text, View} from 'react-native'
import {useMediaQuery} from 'react-responsive'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {SideBarItem} from './SideBarItem'
import TwitterIcon from '../assets/SVGs/Twitter'
import {colors} from '../styles/colors'
import {Button} from './Button'
import Profile from '../assets/SVGs/Profile'
import {Pressable} from 'react-native-web-hover'
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
    title: 'More',
    iconName: 'threeDots',
  },
  // {
  //   title: 'Profile',
  //   iconName: 'profile',
  // },
]

export function SideBar() {
  const isSideBarVisible = useMediaQuery({minWidth: 500})
  const isFullSideBar = useMediaQuery({minWidth: 1266})

  if (!isSideBarVisible) return null

  if (isSideBarVisible) {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          height: WindowHeight,
          // width: '30%',
          // paddingHorizontal: 5,
          flex: isFullSideBar ? 1.4 : 0.45,
          // alignItems: isFullSideBar ? 'flex-end' : 'center',
          alignItems: 'flex-end',
          borderColor: colors.COLOR_BLACK_LIGHT_6,
          borderRightWidth: 0.1,
          paddingEnd: !isFullSideBar ? 10 : 0,
        }}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            alignItems: 'flex-start',
          }}>
          <Pressable
            style={({hovered}) => [
              {
                borderRadius: 100,
                marginStart: 4,
                marginTop: 5,
                cursor: 'pointer',
              },
              hovered
                ? {
                    backgroundColor: colors.COLOR_BLACK_LIGHT_6,
                  }
                : {},
            ]}>
            <TwitterIcon
              fill={colors.primaryColor}
              style={{
                // paddingVertical: 20,
                // marginBottom: 7,
                width: 30,
                height: 30,
                padding: 10,
                borderRadius: 100,
              }}
            />
          </Pressable>
          {sideBarData.map(({title, iconName}) => {
            return <SideBarItem iconName={iconName} title={title} />
          })}
          <Button
            renderText={({state}) =>
              state === 'desktop' ? (
                <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
                  Tweet
                </Text>
              ) : null
            }
            renderIcon={({state}) =>
              state === 'tablet' ? (
                <Profile fill="#fff" width={25} height={25} />
              ) : null
            }
            containerStyle={({state}) => ({
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primaryColor,
              borderRadius: 100,
              height: state === 'desktop' ? 47 : 50,
              width: state === 'desktop' ? 220 : 50,
              shadowColor: colors.primaryColor,
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.2,
              shadowRadius: 16.0,
              ...(state === 'desktop'
                ? {}
                : {
                    alignSelf: 'center',
                  }),
            })}
          />
        </View>
      </View>
    )
  } else {
    return null
  }
}
