import React from 'react'
import { cn } from '../lib/utils'

const ComponentContainer = ({children, className}) => {
  return (
    <div
      className={cn(
        "max-w-[1620px] mx-auto px-4 lg:px-8 2xl:px-0 py-2 lg:py-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export default ComponentContainer