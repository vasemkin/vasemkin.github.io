import styled from 'styled-components'

import { config } from '../../../config'
const { titleColor, titleColorDark } = config.header

export const CardTitle = styled.h2`
  font-size: 25px;
  color: ${(props) => props.theme.mode === "light" ? titleColor : titleColorDark};
  
`