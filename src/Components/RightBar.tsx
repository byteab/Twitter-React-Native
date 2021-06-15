import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {useMediaQuery} from 'react-responsive'
import {colors} from '../styles/colors'
import {Ionicons} from '@expo/vector-icons'
import {SearchBar} from './SearchBar'
import {Pressable, ScrollView} from 'react-native-web-hover'

export function RightBar() {
  const isRightBarVisible = useMediaQuery({minWidth: 990})
  if (!isRightBarVisible) return null
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView style={{paddingTop: 45, width: '100%'}}>
        <Trends />
        <SuggestedFriends />
      </ScrollView>
    </View>
  )
}

function Trends() {
  return (
    <View
      style={{
        backgroundColor: colors.primaryLight,
        borderRadius: 15,
        marginHorizontal: 10,
        width: '77%',
        marginVertical: 20,
        overflow: 'hidden',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderBottomWidth: 0.01,
          borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trends for you</Text>
        <Ionicons style={{fontSize: 20}} name="settings" />
      </View>
      <View>
        {Array(4)
          .fill(0)
          .map(() => {
            return (
              <TrendComponent
                topHeader="Politics · Trending"
                mainTitle="#Stop War"
                numberOfTweets="40.8K tweets"
              />
            )
          })}
      </View>
      <View>
        <Pressable
          style={({hovered}) => [
            hovered
              ? {
                  backgroundColor: colors.COLOR_BLACK_LIGHT_6,
                }
              : {},
            {
              paddingVertical: 20,
              paddingHorizontal: 14,
              cursor: 'pointer',
            },
          ]}>
          <Text style={{fontSize: 15, color: colors.primaryColor}}>
            Show more
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

function SuggestedFriends() {
  return (
    <View
      style={{
        backgroundColor: colors.primaryLight,
        borderRadius: 15,
        marginHorizontal: 10,
        width: '77%',
        marginVertical: 20,
        overflow: 'hidden',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderBottomWidth: 0.01,
          borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Who to follow</Text>
      </View>
      <View>
        {Array(4)
          .fill(0)
          .map(() => {
            return <FollowRowComponent />
          })}
      </View>
      <View>
        <Pressable
          style={({hovered}) => [
            hovered
              ? {
                  backgroundColor: colors.COLOR_BLACK_LIGHT_6,
                }
              : {},
            {
              paddingVertical: 20,
              paddingHorizontal: 14,
              cursor: 'pointer',
            },
          ]}>
          <Text style={{fontSize: 15, color: colors.primaryColor}}>
            Show more
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
const FollowRowComponent = () => {
  return (
    <Pressable
      style={({hovered}) => [
        hovered
          ? {
              backgroundColor: colors.COLOR_BLACK_LIGHT_6,
            }
          : {},
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 0.01,
          borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
          paddingVertical: 13,
          paddingHorizontal: 15,
          cursor: 'pointer',
        },
      ]}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 100,
          backgroundColor: 'gray',
        }}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1384599492440334340/yYCUVR8k_400x400.jpg',
        }}
      />
      <View
        style={{
          marginRight: 'auto',
          marginLeft: 13,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Nader Ξ Dabit</Text>
        <Text style={{color: colors.COLOR_BLACK_LIGHT_4, paddingTop: 4}}>
          @dabit3
        </Text>
      </View>
      <Pressable
        style={({hovered}) => [
          hovered ? {backgroundColor: colors.primaryLight_1} : {},
          {
            borderRadius: 100,
            borderColor: colors.primaryColor,
            borderWidth: 1.5,
            paddingVertical: 5,
            paddingHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={{color: colors.primaryColor, fontWeight: 'bold'}}>
          Follow
        </Text>
      </Pressable>
    </Pressable>
  )
}
const TrendComponent = ({
  topHeader,
  mainTitle,
  numberOfTweets,
}: {
  topHeader: string
  mainTitle: string
  numberOfTweets: string
}) => {
  return (
    <Pressable
      style={({hovered}) => [
        hovered
          ? {
              backgroundColor: colors.COLOR_BLACK_LIGHT_6,
            }
          : {},
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 13,
          borderBottomWidth: 0.01,
          borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
          cursor: 'pointer',
        },
      ]}>
      <View
        style={{
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 13, color: colors.COLOR_BLACK_LIGHT_4}}>
          {topHeader}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', paddingVertical: 3}}>
          {mainTitle}
        </Text>
        <Text style={{fontSize: 14, color: colors.COLOR_BLACK_LIGHT_4}}>
          {numberOfTweets}
        </Text>
      </View>
      <Pressable
        style={({hovered}) => [
          hovered
            ? {
                backgroundColor: colors.COLOR_BLACK_LIGHT_6,
              }
            : {},
          {
            borderRadius: 100,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -20,
          },
        ]}>
        <Ionicons
          name="ellipsis-horizontal"
          style={{
            fontSize: 20,
            color: colors.COLOR_BLACK_LIGHT_5,
          }}
        />
      </Pressable>
    </Pressable>
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
    marginTop: 30,
    paddingStart: 20,
  },
})
