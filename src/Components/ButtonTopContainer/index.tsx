import { useDispatch, useSelector } from 'react-redux'
import { ButtonContainer } from './styles'
import { type AppDispatch, type RootReducer } from '../../store'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { resetAuthState } from '../../store/reducers/auth'
import { useParams } from 'react-router-dom'
import { openSideBar } from '../../store/reducers/sideModal'

interface ButtonContainerProps {
  inLoginPage?: boolean
}

const ButtonTopContainer: React.FC<ButtonContainerProps> = ({
  inLoginPage
}) => {
  const { logged } = useSelector((state: RootReducer) => state.auth)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  const { type: page } = useParams()

  if (logged)
    return (
      <ButtonContainer>
        <div
          onClick={() => dispatch(openSideBar('cart'))}
          className="cart-wrapper pointer"
        >
          <FontAwesomeIcon icon={faCartShopping} />

          {items.length > 0 && (
            <span className="cart-badge">{items.length}</span>
          )}
        </div>
        <FontAwesomeIcon
          className="pointer"
          onClick={() => dispatch(openSideBar('profile'))}
          icon={faUser}
          size="lg"
        />
      </ButtonContainer>
    )

  return (
    <ButtonContainer>
      {!inLoginPage && (
        <>
          <Button
            className="pointer register"
            to="/auth/register"
            children="Registre-se"
            padding="big"
          />
          <Button
            className="pointer"
            to="/auth/login"
            children="Login"
            padding="big"
          />
        </>
      )}

      {inLoginPage && page == 'login' && (
        <Button
          className="pointer"
          onClick={() => dispatch(resetAuthState())}
          to="/auth/register"
          padding="big"
        >
          Registre-se
        </Button>
      )}

      {inLoginPage && page == 'register' && (
        <Button
          className="pointer"
          onClick={() => dispatch(resetAuthState())}
          to="/auth/login"
          padding="big"
        >
          Login
        </Button>
      )}
    </ButtonContainer>
  )
}

export default ButtonTopContainer
