import { Container } from '../../styles'
import { HeroContainer, HeroTitle } from './styles'

const Hero = () => (
  <HeroContainer>
    <Container>
      <HeroTitle as="h2">
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </HeroContainer>
)

export default Hero
