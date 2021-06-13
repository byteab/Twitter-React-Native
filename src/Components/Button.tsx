import React, {FC, useState} from 'react'
import {StyleProp} from 'react-native'
import {Pressable} from 'react-native-web-hover'
import {useMediaQuery} from 'react-responsive'
type ChildProps = {
  renderText: ({
    state,
  }: {
    state: 'desktop' | 'tablet'
  }) => React.ReactElement | null
  renderIcon: ({
    state,
  }: {
    state: 'desktop' | 'tablet'
  }) => React.ReactElement | null
  containerStyle: ({state}: {state: 'desktop' | 'tablet'}) => StyleProp<any>
}
export const Button: FC<ChildProps> = ({
  renderText,
  renderIcon,
  containerStyle,
}) => {
  const isDesktop = useMediaQuery({minWidth: 1266})
  const state = isDesktop ? 'desktop' : 'tablet'
  return (
    <Pressable style={containerStyle({state})}>
      {renderIcon ? renderIcon({state}) : null}
      {renderText ? renderText({state}) : null}
    </Pressable>
  )
}
