import book from 'assets/images/book3.png'
import * as S from './books.styles'

const Books = () => {
  return (
    <S.Wrapper>
      <div className="book">
        <img src={book} alt="Book" />
        <span>Hooke</span>
      </div>
      <div className="book">
        <img src={book} alt="Book" />
        <span>Hooke</span>
      </div>
      <div className="book">
        <img src={book} alt="Book" />
        <span>Hooke</span>
      </div>
      <div className="book">
        <img src={book} alt="Book" />
        <span>Hooke</span>
      </div>
      <div className="book">
        <img src={book} alt="Book" />
        <span>Hooke</span>
      </div>
      <div className="book">
        <img src={book} alt="Book" />
        <span>Hooke</span>
      </div>
      <div className="book">
        <img src={book} alt="Book" />
        <span>Hooke</span>
      </div>
    </S.Wrapper>
  )
}

export default Books
