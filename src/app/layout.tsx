import React from 'react'
import { Epilogue } from 'next/font/google'

import Header from '~components/Header'
import Footer from '~components/Footer'

import '../styles/app.scss'

// Example of using google font
// For local fonts follow: https://nextjs.org/docs/basic-features/font-optimization#local-fonts

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--bs-body-font-family',
})

export const metadata = {
  title: {
    template: '%s | Minimal Next Starter',
    default: 'Minimal Next Starter',
  },
  description: 'Generated by create next app',
  openGraph: {
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  themeColor: '#000000',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={epilogue.variable} style={{ minWidth: 360 }}>
        <Header title={metadata.title?.default} />
        <main className="main">{children}</main>
        <Footer title={metadata.title?.default} />
      </body>
    </html>
  )
}

export default RootLayout
