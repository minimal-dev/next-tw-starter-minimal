import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: string | React.ElementType
}

const Container = ({ children, as = 'div', className }: ContainerProps) => {
  return React.createElement(
    as,
    { className: clsx('mx-auto max-w-screen-2xl px-5 md:px-10', className) },
    children
  )
}

export default Container
