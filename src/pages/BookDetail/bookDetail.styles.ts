import styled from 'styled-components'
import { theme } from 'styles/global'

export const Wrapper = styled.div`
  background: hsla(39, 100%, 95%, 1);
  height: 40vh;
`
export const WrapperText = styled.main`
  margin-top: 7rem;

  .title {
    color: #36383a;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: ${theme.lines.small};
  }

  .author {
    color: ${theme.color.primary};
    font-size: 1.5rem;
  }

  .text {
    color: #313131;
    font-size: 1rem;
    letter-spacing: 0.2px;
    line-height: 20px;
  }
`
export const Navigation = styled.nav`
  align-items: center;
  background: #ffffff;
  border-radius: 0.4rem;
  box-shadow: 3px 3px 23px 0px #6b674620;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding: 1rem;

  > ul li {
    align-items: center;
    display: flex;

    > svg {
      color: #cfcbd2;
      font-size: 2.5rem;
    }

    > a {
      color: #3f4043;
      font-size: 1.3rem;
      margin-left: 0.5rem;
    }
  }
`
