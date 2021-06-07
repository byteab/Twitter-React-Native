import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="prefix__r-18jsvk2 prefix__r-4qtqp9 prefix__r-yyyyoo prefix__r-lwhw9o prefix__r-dnmrzs prefix__r-bnwqim prefix__r-1plcrui prefix__r-lrvibr"
      {...props}>
      <Path d="M19.9 23.5a.755.755 0 01-.442-.144L12 17.928l-7.458 5.43a.75.75 0 01-1.192-.607V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15a.749.749 0 01-.75.75zM12 16.25a.74.74 0 01.44.144l6.71 4.883V5.6a.752.752 0 00-.75-.75H5.6a.752.752 0 00-.75.75v15.677l6.71-4.883a.74.74 0 01.44-.144z" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
