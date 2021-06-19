import styled from 'styled-components'

import { config } from '../../config'
const { subtitleColor, subtitleColorDark } = config.header

export const HeaderSubtitle = styled.h1`
  font-weight: 400;
  color: ${(props) => props.theme.mode === "light" ? subtitleColor : subtitleColorDark};
  line-height: 1.15;
  margin:   0;
  font-size: 1em;

  @media only screen and (max-width: 768px) {
    font-size: 2em;
  }
`