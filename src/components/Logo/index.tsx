import React from 'react'

import logo from '@/assets/images/logo.svg'

import styles from './index.module.scss'

interface LogoProps {
  title: string
}

const Logo: React.FC<LogoProps> = ({ title }: LogoProps) => {
  return (
    <div className={styles.logo}>
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
