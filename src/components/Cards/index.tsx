import * as S from './cards.styles'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <S.Wrapper>
      <S.Card>
        <div className="card">{children}</div>
      </S.Card>
    </S.Wrapper>
  )
}

export default Card
