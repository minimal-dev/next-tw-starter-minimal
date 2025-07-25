declare module '*.svg?url' {
  const content: string
  export default content
}

declare module '*.svg' {
  import React from 'react'
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}
