import React from 'react'
import Link from 'next/link'
import Container from '~components/Container'

export const metadata = {
  title: 'Second Page',
  description: 'Second Page Description',
}

const SecondPage = () => (
  <Container>
    <h1 className="mb-2 text-4xl font-medium">Hi from the second page</h1>
    <p className="mb-4">Welcome to page 2</p>
    <Link
      href="/"
      className="text-blue-500 underline transition-colors hover:text-blue-700"
    >
      Go back to the homepage
    </Link>
  </Container>
)

export default SecondPage
