import Header from "../../Components/Header"
import Login from "../../Components/Login"
import { ContainerAuth } from "./styles"

const Auth = () => {
  return (
    <>
    <Header />
      <ContainerAuth className="container">
        <Login />
      </ContainerAuth>
    </>
  )
}

export default Auth
