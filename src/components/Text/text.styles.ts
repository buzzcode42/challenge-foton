import styled from 'styled-components'
import { theme } from 'styles/global'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;

  .title {
    color: ${theme.color.dark};
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    line-height: ${theme.lines.small};
  }

  .link {
    color: ${theme.color.blue};
    font-size: 1.6rem;
  }
`
