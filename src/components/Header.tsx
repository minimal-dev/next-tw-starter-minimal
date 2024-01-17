import React from 'react'
import clsx from 'clsx'

import Menu from './Menu'
import Container from './Container'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => (
  <Container
    as="header"
    className="grid grid-flow-col items-center justify-between"
  >
    <div className="justify-self-start">{title}</div>
    <Menu />
  </Container>
)

export default Header
