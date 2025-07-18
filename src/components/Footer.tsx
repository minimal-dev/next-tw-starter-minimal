import React from 'react'

import Menu from '~components/Menu'
import Container from '~components/Container'

interface FooterProps {
  title: string
}

const Footer = ({ title }: FooterProps) => {
  return (
    <Container>
      <footer className="grid grid-flow-col items-center">
        <div className="justify-self-start">{title}</div>
        <Menu />
        <div className="justify-self-end">
          © {new Date().getFullYear()} {title}. All Rights Reserved
        </div>
      </footer>
    </Container>
  )
}

export default Footer
