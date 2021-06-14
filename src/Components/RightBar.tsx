import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useMediaQuery} from 'react-responsive'
import {colors} from '../styles/colors'
import {Ionicons} from '@expo/vector-icons'
import {Button} from './Button'
import {Foldable} from './Foldable'
import {SearchBar} from './SearchBar'
import {Pressable, ScrollView} from 'react-native-web-hover'

export function RightBar() {
  const isRightBarVisible = useMediaQuery({minWidth: 990})
  if (!isRightBarVisible) return null
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView style={{paddingTop: 45, width: '100%'}}>
        <Foldable
          style={{
            backgroundColor: colors.primaryLight,
            borderRadius: 15,
            marginHorizontal: 10,
            width: '77%',
            marginVertical: 20,
            overflow: 'hidden',
          }}>
          <Foldable.Header
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderBottomWidth: 0.01,
              borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Trends for you
            </Text>
            <Button
              containerStyle={({state}) => ({})}
              renderIcon={() => (
                <Ionicons style={{fontSize: 20}} name="settings" />
              )}
            />
          </Foldable.Header>
          <Foldable.Row>
            {Array(4)
              .fill(0)
              .map(() => {
                return (
                  <TrendComponent
                    topHeader="Politics · Trending"
                    mainTitle="War in Afghanistan"
                    numberOfTweets="40.8K tweets"
                  />
                )
              })}
          </Foldable.Row>
          <Foldable.Footer>
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
                },
              ]}>
              <Text style={{fontSize: 15, color: colors.primaryColor}}>
                Show more
              </Text>
            </Pressable>
          </Foldable.Footer>
        </Foldable>
      </ScrollView>
    </View>
  )
}

const TrendComponent = ({topHeader, mainTitle, numberOfTweets}) => {
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
          paddingVertical: 10,
          borderBottomWidth: 0.01,
          borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
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
