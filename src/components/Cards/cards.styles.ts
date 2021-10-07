import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
  overflow: none;
  width: 300px;
`
export const Card = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  .card {
    background: #00173d;
    border-radius: 0.4rem;
    box-shadow: 0px 3px 45px 0px #798d431d;

    height: 125px;
    padding: 2rem;
    width: 275px;

    > h1 {
      color: #ffffff;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    > span {
      color: #ffffff;
      font-size: 1.25rem;
    }
  }
`
