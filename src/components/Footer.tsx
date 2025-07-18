'use client'

import React from 'react'

import Menu from '~components/Menu'
import Container from '~components/Container'

interface FooterProps {
  title: string
}

// Client component for dynamic year that prevents hydration mismatch
const DynamicYear = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Return current year only after component mounts on client
  return <span>{mounted ? new Date().getFullYear() : ''}</span>
}

const Footer = ({ title }: FooterProps) => {
  return (
    <Container>
      <footer className="grid grid-flow-col items-center">
        <div className="justify-self-start">{title}</div>
        <Menu />
        <div className="justify-self-end">
          © <DynamicYear /> {title}. All Rights Reserved
        </div>
      </footer>
    </Container>
  )
}

export default Footer
