import { Link } from 'react-router-dom'

import menuData from 'resources'
import { Container } from 'components'
import * as S from './header.styles'

const Menu = () => {
  return (
    <S.Header>
      <Container>
        <S.Navigation>
          {menuData.map(({ name, id, icon, url }) => (
            <S.MenuOptions key={id}>
              {icon}
              <Link to={url}>{name}</Link>
            </S.MenuOptions>
          ))}
        </S.Navigation>
      </Container>
    </S.Header>
  )
}

export default Menu
