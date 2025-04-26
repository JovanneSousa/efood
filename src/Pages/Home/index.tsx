import { GlobalStyle } from '../../GlobalStyle'
import Header from '../../Components/Header'
import RestauranteList from '../../Components/RestauranteList'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RestauranteList />
      <Footer />
    </>
  )
}

export default Home
