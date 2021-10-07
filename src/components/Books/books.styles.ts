import styled from 'styled-components'

export const Wrapper = styled.main`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .book {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;

    > img {
      height: 125px;
      width: 185px;
    }

    > span {
      font-size: 1.5rem;
      margin-top: 0.45rem;
    }
  }
`
