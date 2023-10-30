import styled from 'styled-components'
import Card from './components/Card'
import Footer from './components/Footer'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--pale-blue);
`

function App() {

  return (
    <Container>
      <Card />
      <Footer />
    </Container>
  )
}

export default App
