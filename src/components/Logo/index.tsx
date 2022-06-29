import React from 'react'

import logo from '@/assets/images/logo.svg'

import './index.scss'

interface LogoProps {
  title: string
}

const Logo: React.FC<LogoProps> = ({ title }: LogoProps) => {
  return (
    <div className="logo">
      <span
        dangerouslySetInnerHTML={{
          __html: logo,
        }}
      />
      <h1>{title}</h1>
    </div>
  )
}

export default Logo
