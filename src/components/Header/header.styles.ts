import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 1rem;
  margin-right: 34rem;
`
export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const MenuOptions = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 8rem;

  > a {
    cursor: pointer;
    font-size: 1.2rem;
    text-decoration: none;
  }

  > svg {
    color: #000000;
    cursor: pointer;
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
  }
`
