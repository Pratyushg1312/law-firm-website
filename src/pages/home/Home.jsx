import React from 'react'
import { Corousel } from '../component/Corousel'
import { Prologue } from '../prologue/Prologue'
import { Offering } from '../offering/Offering'
import { Leadership } from '../leadership/Leadership'
import { About } from '../component/About'

export const Home = () => {
  return (
    <div className="home">
      <Prologue/>
      <Offering/>
      <About/>
      <Leadership/>
    </div>
  )
}
