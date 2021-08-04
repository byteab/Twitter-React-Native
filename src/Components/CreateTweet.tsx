import React from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  ViewStyle,
  TextInput,
  Platform,
} from 'react-native'
import {Pressable} from 'react-native-web-hover'
import ImageSvg from '../assets/SVGs/ImageSvg'
import GifSvg from '../assets/SVGs/GifSvg'
import ChartIcon from '../assets/SVGs/SleepingChart'
import Face from '../assets/SVGs/HappyFace'
import CalenderIcon from '../assets/SVGs/Calender'
import Star from '../assets/SVGs/Star'
import {colors} from '../styles/colors'
import {useState} from 'react'
import {useStore} from '../store/store'

interface Props {
  style?: ViewStyle
}

export const CreateTweetTopRow: React.FC<Props> = ({}) => {
  return (
    <View style={styles.topRow}>
      <Text style={styles.topRowText}>Home</Text>

      <Pressable
        style={({hovered}) => [
          styles.startContainer,
          hovered
            ? {
                backgroundColor: colors.COLOR_BLACK_LIGHT_6,
              }
            : {},
        ]}>
        <Star style={styles.commonSvgStyle} />
      </Pressable>
    </View>
  )
}
export const CreateTweet: React.FC<Props> = ({style}) => {
  const [data, setData] = useState('')
  const storeTweet = useStore((state) => state.addPost)
  const onChange = (text: string) => {
    setData(text)
  }
  const tweet = () => {
    if (data) {
      storeTweet({
        fullName: 'Ehsan Sarshar',
        userNameAndDate: '@TheEhsanSarshar . 10m',
        profileUrl:
          'https://pbs.twimg.com/profile_images/1389235685345959942/B1yoUQGj_400x400.jpg',
        content: data,
      })
    }
  }
  return (
    <View style={[styles.container, style]}>
      <View style={styles.middleRow}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1389235685345959942/B1yoUQGj_400x400.jpg',
          }}
        />
        <TextInput
          style={styles.middleRowText}
          placeholder="What's happening?"
          value={data}
          multiline={true}
          onChangeText={onChange}
        />
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.iconsContainer}>
          <Pressable
            style={({hovered}) => [
              styles.svgWrapper,
              hovered
                ? {
                    backgroundColor: colors.primaryLight_1,
                  }
                : {},
            ]}>
            <ImageSvg
              fill={colors.primaryColor}
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
            <GifSvg fill={colors.primaryColor} style={styles.commonSvgStyle} />
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
            <ChartIcon
              fill={colors.primaryColor}
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
            <Face fill={colors.primaryColor} style={styles.commonSvgStyle} />
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
            <CalenderIcon
              fill={colors.primaryColor}
              style={styles.commonSvgStyle}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={tweet}
          style={data ? styles.button : styles.buttonDisabled}>
          <Text style={styles.buttonText}>Tweet</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.01,
    paddingHorizontal: 15,
    borderBottomColor: colors.COLOR_BLACK_LIGHT_6,
    paddingVertical: 5,
    ...Platform.select({
      web: {
        position: 'sticky',
      },
    }),
    top: 0,
    backgroundColor: '#fff',
    zIndex: 100,
  } as ViewStyle,
  topRowText: {
    fontSize: 20,
    color: colors.COLOR_BLACK_LIGHT_4,
    fontWeight: '800',
    paddingStart: 1,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  middleRowText: {
    fontSize: 20,
    color: colors.COLOR_BLACK_LIGHT_4,
    fontWeight: '500',
    paddingTop: 5,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    // ...Platform.select({
    //   web: {
    //     input: {
    //       outline: 'none',
    //     },
    //   },
    // }),
  },
  // bottomRow: {
  //   flexDirection: 'row',
  //   paddingHorizontal: 15,
  // },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginEnd: 15,
  },
  commonSvgStyle: {
    width: 23,
    height: 23,
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingStart: 65,
    justifyContent: 'space-around',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 6,
  },
  button: {
    borderRadius: 100,
    backgroundColor: colors.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginEnd: 15,
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  buttonDisabled: {
    borderRadius: 100,
    backgroundColor: colors.primaryColor,
    opacity: 0.5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginEnd: 15,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  svgWrapper: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  startContainer: {
    borderRadius: 100,
    padding: 10,
  },
})
