import React, { useState } from 'react'

import { MainImage } from './components/MainImage'
import { MainText } from './components/MainText'

function App() {

  return (
    <div className='MainCard'>
      <MainImage />
      <MainText />
    </div>
  )
}

export default App
