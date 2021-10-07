import * as S from './text.styles'

type TextProps = {
  title: string
  link: string
}

const Text = ({ title, link }: TextProps) => {
  return (
    <S.Wrapper>
      <h1 className="title">{title}</h1>
      <a href="#" className="link">
        {link}
      </a>
    </S.Wrapper>
  )
}

export default Text
