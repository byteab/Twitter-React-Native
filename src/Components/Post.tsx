import React from 'react'
import {View, Text, Image, StyleSheet, Linking, Platform} from 'react-native'
import {Pressable} from 'react-native-web-hover'
// extract urls out of a string
import getUrls from 'get-urls'
import HyperLinkIcon from '../assets/SVGs/HyperLinkIcon'
import {colors} from '../styles/colors'
import Comment from '../assets/SVGs/Comment'
import Retweet from '../assets/SVGs/Retweet'
import Love from '../assets/SVGs/Love'
import Share from '../assets/SVGs/Share'
import Anchor from '../assets/SVGs/HyperLinkIcon'

interface IData {
  image: string
  title: string
  description: string
}

interface IPost {
  profileUrl: string
  fullName: string
  userNameAndDate: string
  content: string
}
export const Post: React.FC<IPost> = ({
  profileUrl,
  fullName,
  userNameAndDate,
  content,
}) => {
  const urls = Array.from(getUrls(content))
  const [data, setData] = React.useState<IData | undefined>()
  React.useEffect(() => {
    if (urls.length) {
      ;(async () => {
        try {
          const link = urls[0].replace(/(^\w+:|^)\/\//, '')
          const res = await fetch(`http://localhost:5000/proxy`, {
            headers: {
              link,
            },
          })
          const body = await res.json()
          setData(body)
        } catch (error) {
          console.log('error is', error)
        }
      })()
    }
  }, [])
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
          {data?.image ? (
            <View style={styles.mediaBox}>
              <Image
                source={{uri: data.image}}
                style={styles.mediaImage}
                resizeMode="cover"
              />
              <View style={styles.threeTextsInsideMediaView}>
                <Text style={styles.mediaTitle}>{data.title}</Text>
                <Text style={styles.mediaDetails}>{data.description}</Text>
                {urls.length ? (
                  <View style={styles.linkContainer}>
                    <Anchor
                      fill={colors.COLOR_BLACK_LIGHT_4}
                      style={styles.anchor}
                    />
                    <Text
                      onPress={() => Linking.openURL(urls[0])}
                      style={styles.mediaIconLink}>
                      {urls[0]}
                    </Text>
                  </View>
                ) : null}
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
    marginBottom: 4,
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
    marginTop: 20,
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
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
})
