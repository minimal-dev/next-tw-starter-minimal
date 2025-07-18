'use client'

import React from 'react'

interface CopyProps {
  title: string
}

const Copy = ({ title }: CopyProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="justify-self-end">
      © {currentYear} {title}. All Rights Reserved
    </div>
  )
}

export default Copy
