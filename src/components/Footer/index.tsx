import React from 'react'

import Menu from '~components/Menu'
import Container from '~components/Container'
import Copy from './Copy'

interface FooterProps {
  title: string
}

const Footer = ({ title }: FooterProps) => {
  return (
    <Container>
      <footer className="grid grid-flow-col items-center">
        <div className="justify-self-start">{title}</div>
        <Menu />
        <Copy title={title} />
      </footer>
    </Container>
  )
}

export default Footer
