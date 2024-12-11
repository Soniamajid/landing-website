
import React from 'react'
import Header from './components/header'
import Hotels from './components/hotels'
import Client from './components/client'
import Rewards from './components/rewards'
import Footer from './components/footer'


function page() {
  return (
    <div>
      <Header/>
      <Hotels/>
      <Client/>
      <Rewards/>
      </div>
  )
}

export default page