import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Pressable} from 'react-native-web-hover'
import HyperLinkIcon from '../assets/SVGs/HyperLinkIcon'
import {colors} from '../styles/colors'
import Comment from '../assets/SVGs/Comment'
import Retweet from '../assets/SVGs/Retweet'
import Love from '../assets/SVGs/Love'
import Share from '../assets/SVGs/Share'
import Anchor from '../assets/SVGs/HyperLinkIcon'

export const Post = ({profileUrl, fullName, userNameAndDate, content}) => {
  // TODO: analyze content
  // grab the links out of content
  // if there is a link create a box at the bottom
  // render image, title and details
  const image =
    'https://pbs.twimg.com/card_img/1405268166406705160/ram-yQ8t?format=jpg&name=small'
  const title = 'Accessible design: How much motion is too much motion?'
  const details =
    'A process breakdown of how to create Accessibility compliant interaction design within a framework.'
  const linkItself = 'uxdesign.cc'
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{uri: profileUrl}} />
      <View style={styles.allContent}>
        <View style={styles.postAuthorInfoContainer}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.userNameAndTime}>{userNameAndDate}</Text>
        </View>
        <View style={styles.actualContent}>
          <Text style={styles.contentText}>{content}</Text>
          {image ? (
            <View style={styles.mediaBox}>
              <Image
                source={{uri: image}}
                style={styles.mediaImage}
                resizeMode="cover"
              />
              <View style={styles.threeTextsInsideMediaView}>
                <Text style={styles.mediaTitle}>{title}</Text>
                <Text style={styles.mediaDetails}>{details}</Text>
                <View style={styles.linkContainer}>
                  <Anchor
                    fill={colors.COLOR_BLACK_LIGHT_4}
                    style={styles.anchor}
                  />
                  <Text style={styles.mediaIconLink}>{linkItself}</Text>
                </View>
              </View>
            </View>
          ) : null}
        </View>
        <View style={styles.actionListContainer}>
          <Pressable
            style={({hovered}) => [
              styles.svgWrapper,
              hovered
                ? {
                    backgroundColor: colors.primaryLight_1,
                  }
                : {},
            ]}>
            <Comment
              fill={colors.COLOR_BLACK_LIGHT_5}
              style={styles.commonSvgStyle}
            />
          </Pressable>
          <Pressable
            style={({hovered}) => [
              styles.svgWrapper,
              hovered
                ? {
                    backgroundColor: colors.primaryLight_1,
                  }
                : {},
            ]}>
            <Retweet
              fill={colors.COLOR_BLACK_LIGHT_5}
              style={styles.commonSvgStyle}
            />
          </Pressable>
          <Pressable
            style={({hovered}) => [
              styles.svgWrapper,
              hovered
                ? {
                    backgroundColor: colors.primaryLight_1,
                  }
                : {},
            ]}>
            <Love
              fill={colors.COLOR_BLACK_LIGHT_5}
              style={styles.commonSvgStyle}
            />
          </Pressable>
          <Pressable
            style={({hovered}) => [
              styles.svgWrapper,
              hovered
                ? {
                    backgroundColor: colors.primaryLight_1,
                  }
                : {},
            ]}>
            <Share
              fill={colors.COLOR_BLACK_LIGHT_5}
              style={styles.commonSvgStyle}
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const LinkContent = () => {
  return (
    <View style={styles.linkContent}>
      <Image style={styles.linkContentImage} />
      <Text style={styles.linkContentTitle}>Link title</Text>
      <View style={styles.linkContentLink}>
        <Text style={styles.linkContentLinkText}>link address</Text>
        <HyperLinkIcon style={styles.linkContentSvg} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingStart: 20,
    paddingEnd: 15,
    paddingTop: 15,
    flexDirection: 'row',
  },
  allContent: {
    paddingStart: 10,
    width: '100%',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  postAuthorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullName: {
    fontSize: 18,
    fontWeight: '500',
  },
  userNameAndTime: {
    color: colors.COLOR_BLACK_LIGHT_4,
    paddingStart: 7,
  },
  actualContent: {
    paddingTop: 5,
  },
  contentText: {
    fontWeight: '400',
    fontSize: 15,
  },
  linkContent: {},
  linkContentImage: {},
  linkContentTitle: {},
  linkContentLink: {},
  linkContentLinkText: {},
  linkContentSvg: {},
  svgWrapper: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginEnd: '16%',
  },
  commonSvgStyle: {
    width: 23,
    height: 23,
  },
  actionListContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'flex-start',
    marginLeft: '-1%',
  },
  threeTextsInsideMediaView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 15,
  },
  anchor: {
    width: 34,
    height: 20,
    marginStart: -5,
  },
  mediaImage: {
    marginStart: 'auto',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: 222,
  },
  mediaBox: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
  },
  mediaTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  mediaDetails: {
    fontSize: 15,
    marginBottom: 5,
    color: colors.COLOR_BLACK_LIGHT_4,
  },
  mediaIconLink: {
    color: colors.COLOR_BLACK_LIGHT_3,
  },
})
