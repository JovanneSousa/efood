import type { BaseProps } from '.'
import * as S from './styles'

export interface ManagementProps extends BaseProps {
  variant: 'management'
}

const ManagementCard = (props: ManagementProps) => {
  return <S.CardContainer>Card de gerenciamento</S.CardContainer>
}

export default ManagementCard
