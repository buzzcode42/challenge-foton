import * as S from './hero.styles'

type HeroProps = {
  children: React.ReactNode
}

const Hero = ({ children }: HeroProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Hero
