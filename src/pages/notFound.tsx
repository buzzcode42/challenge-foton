import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from 'styles/global'

const Wrapper = styled.div`
  align-items: center;
  background: ${theme.color.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  > h1 {
    color: #ffffff;
    font-weight: 700;
    line-height: ${theme.lines.extraLarge};
  }

  > p {
    color: #ffffff;
    font-size: 1.7rem;
    text-align: center;
    width: 300px;
  }

  > a {
    background: #ffffff;
    border-radius: 0.4rem;
    color: ${theme.color.dark};
    font-size: 1.75rem;
    margin-top: 1.5rem;
    padding: 1.2rem 2.75rem;
  }
`

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>Ooooops! Sorry this page do not exist. May the Force be with You 🖖</p>
      <Link to="/">Back to home</Link>
    </Wrapper>
  )
}

export default NotFound
