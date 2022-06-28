import React from 'react'
import logo from '@/assets/images/logo.svg'

import './index.scss'

const App = () => {
  return (
    <div className="app">
      <span
        dangerouslySetInnerHTML={{
          __html: logo,
        }}
      />
      Welcome to React CLI!
    </div>
  )
}

export default App
