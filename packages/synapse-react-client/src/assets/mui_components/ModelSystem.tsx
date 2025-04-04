import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as ModelSystemSvg } from '../icons/modelSystem.svg'

const ModelSystem = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      sx={spreadSx(sx, {
        fill: 'none !important',
        // stroke: 'currentColor !important',
      })}
    >
      <ModelSystemSvg />
    </SvgIcon>
  )
}

export default ModelSystem
