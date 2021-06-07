import * as React from 'react'
import Svg, {SvgProps, Circle, Path} from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="prefix__r-18jsvk2 prefix__r-4qtqp9 prefix__r-yyyyoo prefix__r-lwhw9o prefix__r-dnmrzs prefix__r-bnwqim prefix__r-1plcrui prefix__r-lrvibr"
      {...props}>
      <Circle cx={17} cy={12} r={1.5} />
      <Circle cx={12} cy={12} r={1.5} />
      <Circle cx={7} cy={12} r={1.5} />
      <Path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
