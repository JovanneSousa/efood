import { useDispatch, useSelector } from 'react-redux'
import { ButtonContainer } from './styles'
import { type AppDispatch, type RootReducer } from '../../store'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { logout, resetState } from '../../store/reducers/auth'
import { useParams } from 'react-router-dom'

interface ButtonContainerProps {
  inLoginPage?: boolean
  onClick?: () => void
}

const ButtonTopContainer: React.FC<ButtonContainerProps> = ({
  inLoginPage,
  onClick
}) => {
  const { logged } = useSelector((state: RootReducer) => state.auth)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  const { type: page } = useParams()

  if (logged)
    return (
      <ButtonContainer>
        <div onClick={onClick} className="cart-wrapper pointer">
          <FontAwesomeIcon icon={faCartShopping} />

          {items.length > 0 && (
            <span className="cart-badge">{items.length}</span>
          )}
        </div>
        <FontAwesomeIcon
          onClick={() => dispatch(logout())}
          className="pointer"
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
            onClick={() => dispatch(resetState())}
            padding="big"
          />
          <Button
            className="pointer"
            to="/auth/login"
            onClick={() => dispatch(resetState())}
            children="Login"
            padding="big"
          />
        </>
      )}

      {inLoginPage && page == 'login' && (
        <Button className="pointer" to="/auth/register" padding="big">
          Registre-se
        </Button>
      )}

      {inLoginPage && page == 'register' && (
        <Button className="pointer" to="/auth/login" padding="big">
          Login
        </Button>
      )}
    </ButtonContainer>
  )
}

export default ButtonTopContainer
