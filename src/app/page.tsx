import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import ogImage from '~img/og-image.png'
import NextLogo from '~img/next-logo.svg?url'
import Logo from '~icons/minimal-logo.svg'
import Container from '~components/Container'

const Home = () => {
  return (
    <Container>
      <h1 className="mb-2 text-4xl font-medium">Howdy!</h1>
      <p className="mb-4">Welcome to your new Nextjs site.</p>
      <p className="mb-4">Now go build something great.</p>
      {/* Example of Next Image */}
      <p className="mb-4">
        <Image src={ogImage} width="650" alt="Image" placeholder="blur" />
      </p>
      <p className="mb-4">
        <Image src={NextLogo} alt="Nextjs Logo" />
      </p>
      <p className="mb-4">
        {/* Example of Icons usage  */}
        <Logo width={60} height={60} />
      </p>
      <p>
        <Link
          href="/page-2"
          className="text-blue-500 underline transition-colors hover:text-blue-700"
        >
          Go to page 2
        </Link>{' '}
        <br />
      </p>
    </Container>
  )
}

export default Home
