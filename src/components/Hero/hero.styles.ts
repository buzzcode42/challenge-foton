import styled from 'styled-components'
import { theme } from 'styles/global'

export const Wrapper = styled.div`
  > h1 {
    color: ${theme.color.gray};
    font-size: 1.8rem;
    font-weight: 400;
    line-height: ${theme.lines.small};

    > span {
      color: ${theme.color.primary};
    }
  }

  .grouped {
    padding-top: 3.3rem;

    > a {
      cursor: pointer;

      > svg {
        color: #000000;
        font-size: 2.4rem;
      }
    }
  }

  .image {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`
