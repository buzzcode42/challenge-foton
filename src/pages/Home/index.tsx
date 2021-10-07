import { Card, Container, Hero, Menu, Search, Text } from 'components'
const Home = () => {
  return (
    <Container>
      <Search />
      <Hero>
        <h1>
          Hi, <span>Mehmed Ai Fatih</span> 👋
        </h1>
      </Hero>
      <div>
        <Text title="Discover new book" link="More" />
        <Card>
          <h1>Hooked</h1>
          <span>Nir Eyal</span>
        </Card>
      </div>
      <div>
        <Text title="Currently" link="All" />
        <Card>
          <h1>Originals</h1>
          <span>Adam Grant</span>
        </Card>
      </div>
      <div>
        <Text title="Reviews of The Days" link="All Video" />
        <Card>
          <h1>Don&apos;t make me think</h1>
          <span>Steve Krug</span>
        </Card>
      </div>
      <Menu />
    </Container>
  )
}

export default Home
