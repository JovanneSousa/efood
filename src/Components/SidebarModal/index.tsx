import React, { type ReactElement } from 'react'
import { Side, SidebarModalSection } from './styles'

interface SidebarModalProps {
  children: ReactElement
  isOpen: boolean
  onClick?: () => void
}

const SidebarModal: React.FC<SidebarModalProps> = ({ children, isOpen, onClick }) => {
  return (
    <SidebarModalSection onClick={onClick} className={isOpen ? 'is-open' : ''}>
      <div className="overlay" />
      <Side>{children}</Side>
    </SidebarModalSection>
  )
}

export default SidebarModal
