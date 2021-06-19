import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {CreateTweet, CreateTweetTopRow} from '../Components/CreateTweet'
import {Post} from '../Components/Post'
import {colors} from '../styles/colors'

export function Center() {
  const data = [
    {
      fullName: 'Ehsan Sarshar',
      userNameAndDate: '@TheEhsanSarshar . 10m',
      profileUrl:
        'https://pbs.twimg.com/profile_images/1389235685345959942/B1yoUQGj_400x400.jpg',
      content: 'Javascript is every where here is a post about it',
    },
  ]

  const renderItem = React.useCallback(({item}) => <Post {...item} />, [])
  return (
    <View style={styles.container}>
      <CreateTweetTopRow />
      <CreateTweet style={styles.createTweet} />
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.flatListStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2.2,
  },
  createTweet: {
    marginBottom: 15,
    borderBottomWidth: 0.01,
    borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
  },
  flatListStyle: {
    borderBottomWidth: 0.01,
    borderTopWidth: 0.01,
    borderColor: colors.COLOR_BLACK_LIGHT_6,
  },
})
