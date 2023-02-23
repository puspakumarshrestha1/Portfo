import React from 'react'
import Contact from './Contact'
import KnowMore from './KnowMore'
import Portfolio from './Portfolio'
import Section1 from './Section1'
import Skills from './Skills'
import WhatIdo from './WhatIdo'

function Home() {
  return (
    <>
      <Section1/>
      <KnowMore/>
      <WhatIdo/>
      <Portfolio/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default Home
