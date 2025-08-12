'use client'

import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { tv, type VariantProps } from 'tailwind-variants'
import MENU from './constants'

// Define variants using tailwind-variants
// This creates a type-safe way to handle different component states and styles
const menuVariants = tv({
  // Base styles that apply to all variants
  base: ['flex flex-wrap', 'transition-all duration-200 ease-in-out'],

  // Variants define different visual states or configurations
  variants: {
    // Size variant - controls the overall size of the menu
    size: {
      sm: 'gap-2',
      md: 'gap-4', // default size
      lg: 'gap-6',
    },

    // Layout variant - controls how menu items are arranged
    layout: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
      grid: 'grid grid-cols-2 gap-2',
    },

    // Theme variant - controls the color scheme
    theme: {
      light: 'text-gray-700',
      dark: 'text-gray-200',
      primary: 'text-blue-500',
    },

    // Spacing variant - controls padding and margins
    spacing: {
      compact: 'p-2',
      normal: 'p-4',
      relaxed: 'p-6',
    },
  },

  // Default variants - these are applied when no specific variant is specified
  defaultVariants: {
    size: 'md',
    layout: 'horizontal',
    theme: 'primary',
    spacing: 'normal',
  },

  // Compound variants - apply styles when multiple variants are combined
  compoundVariants: [
    // When both size is 'sm' and layout is 'vertical', apply specific styles
    {
      size: 'sm',
      layout: 'vertical',
      class: 'text-sm',
    },
    // When theme is 'dark' and layout is 'vertical', apply specific styles
    {
      theme: 'dark',
      layout: 'vertical',
      class: 'bg-gray-800 rounded-lg',
    },
  ],
})

// Define link variants separately for better organization
const linkVariants = tv({
  base: 'block px-4 py-2 transition-colors',

  variants: {
    // Active state - when the link is currently active
    active: {
      true: 'text-blue-700',
      false: 'text-blue-500 hover:text-blue-700',
    },
  },

  defaultVariants: {
    active: false,
  },
})

// Extract the type from our variants for TypeScript support
type MenuVariants = VariantProps<typeof menuVariants>

// Enhanced props interface that includes all our variants
interface MenuProps extends MenuVariants {
  // Custom className for additional styling
  className?: string
}

const Menu = ({ className, ...variants }: MenuProps) => {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  // Generate the final className by combining variants with any custom className
  const menuClasses = menuVariants({ ...variants, className })

  return (
    <NavigationMenu.Root>
      {/* Apply the generated classes from tailwind-variants */}
      <NavigationMenu.List className={menuClasses}>
        {MENU.map(({ name, link }) => {
          // Check if this link is currently active
          const isActive =
            pathname === `/${link}` || (isHomepage && link.startsWith('#'))

          // Generate link classes with active state
          const linkClasses = linkVariants({
            active: isActive,
          })

          return (
            <NavigationMenu.Item key={name}>
              <NavigationMenu.Link
                href={link}
                asChild={!isHomepage}
                className={linkClasses}
              >
                {isHomepage ? name : <Link href={`/${link}`}>{name}</Link>}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Menu
