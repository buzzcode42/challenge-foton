import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Hero } from 'components'
import data from 'resources/data'

import book from 'assets/images/book3.png'
import * as S from './bookDetail.styles'

const BookDetail = () => {
  return (
    <S.Wrapper>
      <Container>
        <Hero>
          <div className="grouped">
            <Link to="/">
              <FiArrowLeft />
            </Link>
            <div className="image">
              <img src={book} alt="Book" />
            </div>
          </div>
        </Hero>
        <S.WrapperText>
          <h1 className="title">Hooked: How to Build Habit-Forming Products</h1>
          <span className="author">Nir Eyal</span>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
            harum culpa eligendi veritatis cumque vel totam ad odit eius ex
            amet, rerum soluta aliquam aperiam non quidem eveniet voluptas!
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
            harum culpa eligendi veritatis cumque vel totam ad odit eius ex
            amet, rerum soluta aliquam aperiam non quidem eveniet voluptas!
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
            harum culpa eligendi veritatis cumque vel totam ad odit eius ex
            amet, rerum soluta aliquam aperiam non quidem eveniet voluptas!
          </p>
        </S.WrapperText>
        <S.Navigation>
          {data.map(({ name, icon, id, url }) => (
            <ul key={id}>
              <li>
                {icon}
                <Link to={url}>{name}</Link>
              </li>
            </ul>
          ))}
        </S.Navigation>
      </Container>
    </S.Wrapper>
  )
}

export default BookDetail
