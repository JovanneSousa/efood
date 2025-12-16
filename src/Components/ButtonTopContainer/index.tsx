import { useDispatch, useSelector } from 'react-redux'
import { ButtonContainer } from './styles'
import { type AppDispatch, type RootReducer } from '../../store'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../../store/reducers/auth'

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

  return (
    <ButtonContainer>
      {!logged && !inLoginPage ? (
        <>
          <Button
            className="pointer"
            to={'/register'}
            children="Registre-se"
            padding="big"
          />
          <Button
            className="pointer"
            to={'/login'}
            children="Login"
            padding="big"
          />
        </>
      ) : (
        logged && (
          <>
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
          </>
        )
      )}
    </ButtonContainer>
  )
}

export default ButtonTopContainer
