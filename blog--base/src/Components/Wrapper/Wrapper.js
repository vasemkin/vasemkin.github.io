import styled from 'styled-components'

export const Wrapper = styled.div`
  display : flex;
  justify-content : start;
  height: 100vh
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`