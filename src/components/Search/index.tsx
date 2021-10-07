import { FiSearch } from 'react-icons/fi'
import * as S from './search.styles'

const SearchInput = () => {
  return (
    <S.Wrapper>
      <FiSearch />
      <input type="text" name="search" id="search" placeholder="Search book" />
    </S.Wrapper>
  )
}

export default SearchInput
