import { useParams } from 'react-router-dom'
import items from '../../Data'
import { ContainerGerenciar } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBoxOpen,
  faGear,
  faShop,
  faArrowTrendUp,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Button from '../Button'
import CardProduto from '../CardProduto'
import useBodyClass from '../../Hooks/useBodyClass'
import PedidosContainer from '../PedidosContainer'
import Loader from '../Loader'
import FormProduto from '../FormProduto'
import FormRestaurante from '../FromRestaurante'

type SectionActive = 'pedido' | 'cardapio' | 'config'

const GerenciarRestauranteComponent = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const { id } = useParams()
  const restaurante = items.find((r) => r.id == Number(id))
  const [isActive, setIsActive] = useState<SectionActive>('pedido')
  useBodyClass('layout-profile')

  const dadosMap: Record<SectionActive, [string, string]> = {
    cardapio: ['Cardápio', 'Gerencie os produtos do seu restaurante'],
    pedido: ['Pedidos recentes', 'Gerencie os pedidos do seu restaurante'],
    config: ['Configurações', 'Atualize as informações do seu restaurante']
  }
  const [titulo, descricao] = dadosMap[isActive]

  if (!restaurante) return <Loader />

  const setEditing = () => {
    setIsEditing(true)
    setIsFormOpen(true)
  }

  const setAdding = () => {
    setIsEditing(false)
    setIsFormOpen(true)
  }

  const cancel = () => {
    setIsFormOpen(false)
    setIsEditing(false)
  }

  const Cardapio = isFormOpen ? (
    <FormProduto isEditing={isEditing} cancel={cancel} />
  ) : (
    <div className="grid">
      {restaurante?.cardapio.map((c) => (
        <CardProduto
          setIsEditing={setEditing}
          key={c.id}
          variant="management"
          produto={c}
        />
      ))}
    </div>
  )

  const componentes = {
    pedido: <PedidosContainer variant="management" restaurante={restaurante} />,
    cardapio: Cardapio,
    config: (
      <FormRestaurante cancel={() => console.log('fechou')} editing={true} />
    )
  }

  return (
    <div className="container">
      <ContainerGerenciar>
        <div className="grid">
          <div
            onClick={() => setIsActive('pedido')}
            className={`grid-item shadow ${
              isActive == 'pedido' ? 'is-active' : ''
            }`}
          >
            <div className="icon-container">
              <FontAwesomeIcon size="2x" icon={faBoxOpen} />
            </div>
            <div>
              <p className="title-card">Pedidos</p>
              <p>Gerencie seus pedidos</p>
              <div className="flex">
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <p>N pedidos ativos</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsActive('cardapio')}
            className={`grid-item shadow ${
              isActive == 'cardapio' ? 'is-active' : ''
            }`}
          >
            <div className="icon-container">
              <FontAwesomeIcon size="2x" icon={faShop} />
            </div>
            <div>
              <p className="title-card">Cardápio</p>
              <p>Produtos e preços</p>
              <div className="flex">
                <FontAwesomeIcon icon={faBoxOpen} />
                <p>{restaurante?.cardapio.length} produtos</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsActive('config')}
            className={`grid-item shadow ${
              isActive == 'config' ? 'is-active' : ''
            }`}
          >
            <div className="icon-container">
              <FontAwesomeIcon size="2x" icon={faGear} />
            </div>
            <div>
              <p className="title-card">Configurações</p>
              <p>Dados do restaurante</p>
              <div className="flex">
                <FontAwesomeIcon icon={faCheck} />
                <p>Perfil completo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-title">
            <div>
              <p>{titulo}</p>
              <p className="desc">{descricao}</p>
            </div>
            {isActive == 'cardapio' && !isFormOpen && (
              <Button onClick={setAdding} className="red" padding="light">
                + Novo produto
              </Button>
            )}
          </div>
          {componentes[isActive]}
        </div>
      </ContainerGerenciar>
    </div>
  )
}

export default GerenciarRestauranteComponent
