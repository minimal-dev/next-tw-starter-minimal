'use client'

import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import MENU from './constants'

gsap.registerPlugin(ScrollToPlugin)

interface MenuProps {
  variant?: string
}

const Menu = ({ variant }: MenuProps) => {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  const handleScroll = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    link: string
  ) => {
    e.preventDefault()

    gsap.to(window, { scrollTo: link, ease: 'power2' })
  }

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-wrap">
        {MENU.map(({ name, link }) => (
          <NavigationMenu.Item key={name}>
            <NavigationMenu.Link
              href={link}
              onClick={(e) => handleScroll(e, link)}
              asChild={!isHomepage}
              className="block px-4 py-2 text-blue-500 transition-colors hover:text-blue-700"
            >
              {isHomepage ? name : <Link href={`/${link}`}>{name}</Link>}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Menu
